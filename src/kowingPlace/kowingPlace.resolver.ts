import { PrismaClient } from "../../prisma/client";
import {
  ICheckUserExternalPasswordEmail,
  ICheckUserInternalPasswordEmail,
  ICreateCoWorkDetail,
  ICreateFacility,
  ICreateRoomInternal,
  ICreateTimeOpenClose,
  ICreateUserExternal,
  ICreateUserInternal,
  IDeleteRoomCodec,
  IForgetPasswordUserExternal,
  IForgetPasswordUserInternal,
  IGetBookRoomByPartnerId,
  IGetBookRoomByPartnerIdAndStatus,
  IGetBookRoomByUserExternal,
  IGetCoWorkByCoWorkId,
  IGetCoWorkUserChoose,
  IGetCoworkByUserId,
  IGetUserConfirmBooking,
  IUpdateCoWorkDetail,
  IUpdateStatus,
} from "./kowingPlace.interface";
import { hashPassword } from "./kowingPlace.service";
export const prisma = new PrismaClient();

// MANUAL BY POSTMAN
//facilities
export const createFacility = (args: ICreateFacility) =>
  prisma.facility.create({
    data: {
      name: args.name,
    },
  });

// HOME
//get initial home
export const getCoworks = async () => {
  const coWork = await prisma.coWork.findMany({});

  const numIndex = [];
  for (let i = 0; i < coWork.length; i++) {
    numIndex.push(i);
  }
  numIndex.sort((a, b) => Math.random() - 0.5);

  const recommendCowork = [];
  for (let i = 0; i < numIndex.length; i++) {
    recommendCowork.push(coWork[numIndex[i]]);
  }

  return recommendCowork;
};

// COWORK DETAIL
//click from home
export const getCoWorkUserChoose = (args: IGetCoWorkUserChoose) =>
  prisma.coWork.findUnique({
    where: {
      id: args.id,
    },
    include: {
      FacilityToCoWork: {
        include: {
          facility: true,
        },
      },
    },
  });

//detail in page cowork detail
export const getFacilities = () => prisma.facility.findMany();

// EXTERNAL RESERVE
//initial page // get cowork detail, open close days
export const getCoWorkByCoWorkId = async (args: IGetCoWorkByCoWorkId) => {
  const getRoom = await prisma.coWork.findUnique({
    where: {
      id: args.coWorkId,
    },
    include: {
      BranchToRoom: {
        where: {
          coWorkId: args.coWorkId,
          active: true,
        },
        include: {
          room: true,
        },
      },
      OpenCloseBoolean: true,
    },
  });
  return getRoom;
};

//after select date and room // get time available
export const getBookRoomOnTheDate = async (args: {
  initTime: string;
  roomId: number;
}) => {
  const bookRoom = await prisma.room.findUnique({
    where: {
      id: args.roomId,
    },
    include: {
      BranchToRoom: {
        include: {
          coWork: {
            include: {
              OpenCloseBoolean: true,
              OpenClose24Hours: true,
              Open: true,
              Close: true,
            },
          },
        },
      },
      BookRoom: {
        where: {
          startTime: {
            gte: new Date(args.initTime),
            lt: new Date(
              new Date(args.initTime).getTime() + 24 * 60 * 60 * 1000
            ),
          },
        },
        include: {
          roomRate: {
            include: {
              duration: true,
            },
          },
        },
      },
      RoomRate: {
        where: {
          active: true,
        },
        include: {
          duration: true,
        },
      },
    },
  });

  return bookRoom;
};

//vertify code //bookingExternal
export const createBookRoom = async (args: IGetUserConfirmBooking) => {
  const verifyCode = `KOWING${args.userExId}${args.roomRateId}${args.roomId}${
    new Date(args.startTime).getTime() / 1000
  }`;

  const getBookData = await prisma.bookRoom.create({
    data: {
      startTime: new Date(args.startTime),
      status: "PENDING",
      roomRate: {
        connect: {
          id: args.roomRateId,
        },
      },
      UserExternal: {
        connect: {
          id: args.userExId,
        },
      },
      vertifyCode: {
        create: {
          bookdate: new Date(args.startTime),
          verifyCode: verifyCode,
        },
      },
      price: args.price,
      room: {
        connect: {
          id: args.roomId,
        },
      },
    },
    select: {
      vertifyCode: {
        select: {
          verifyCode: true,
        },
      },
    },
  });
  return getBookData;
};

// EXTERNAL RESERVATION
//get bookroom
export const getBookRoomByUserExternal = async (
  args: IGetBookRoomByUserExternal
) =>
  prisma.bookRoom.findMany({
    where: {
      userExternalId: args.userId,
    },
    include: {
      roomRate: {
        include: {
          duration: true,
          room: true,
        },
      },
      vertifyCode: true,
      room: {
        include: {
          BranchToRoom: {
            include: {
              coWork: true,
            },
          },
        },
      },
    },
    orderBy: {
      updateAt: "desc",
    },
  });

// INTERNAL MAIN
export const getBookRoomByPartnerId = async (args: IGetBookRoomByPartnerId) => {
  const getBookRoom = await prisma.userInternal.findUnique({
    where: {
      id: args.userId,
    },
    include: {
      coWork: {
        include: {
          BranchToRoom: {
            include: {
              room: {
                include: {
                  BookRoom: {
                    include: {
                      roomRate: {
                        include: {
                          duration: true,
                        },
                      },
                      vertifyCode: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  const newGetBookRoom = { ...getBookRoom };
  delete newGetBookRoom.password;

  return newGetBookRoom;
};

// INTERNAL STATUS
export const getBookRoomByPartnerIdAndStatus = async (
  args: IGetBookRoomByPartnerIdAndStatus
) => {
  const getBookRoom = await prisma.userInternal.findUnique({
    where: {
      id: args.userId,
    },
    include: {
      coWork: {
        include: {
          BranchToRoom: {
            include: {
              room: {
                include: {
                  BookRoom: {
                    where: {
                      status: args.status,
                    },
                    include: {
                      roomRate: {
                        include: {
                          duration: true,
                        },
                      },
                      vertifyCode: true,
                    },
                    orderBy: [{ [args.orderBy]: args.inDeCrease }],
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  return getBookRoom;
};

//btn update
export const updateStatus = async (args: IUpdateStatus) => {
  return prisma.bookRoom.update({
    where: {
      id: args.bookRoomId,
    },
    data: {
      status: args.newStatus,
    },
  });
};

//not delete but update active room to false
export const deleteRoom = (args: IDeleteRoomCodec) =>
  prisma.branchToRoom.update({
    where: {
      roomId: args.roomId,
    },
    data: {
      active: false,
    },
  });

// INTERNAL SETTING COWORK
//initial get old detail
export const getCoworkByUserId = async (args: IGetCoworkByUserId) => {
  const getData = await prisma.userInternal.findUnique({
    where: {
      id: args.userInternalId,
    },
    include: {
      coWork: {
        include: {
          Open: true,
          Close: true,
          OpenCloseBoolean: true,
          OpenClose24Hours: true,
          FacilityToCoWork: true,
          BranchToRoom: {
            where: {
              active: true,
            },
            include: {
              room: {
                include: {
                  RoomRate: {
                    where: {
                      active: true,
                    },
                    include: {
                      duration: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  const newGetData = { ...getData };
  delete newGetData.password;

  return newGetData;
};

//create cowork detail
export const createCoWorkDetail = async (args: ICreateCoWorkDetail) => {
  const coWorkCreate = await prisma.coWork.create({
    data: {
      name: args.name,
      description: args.description,
      location: args.location,
      picture: args.picture,
      tel: args.tel,
      userInternalId: args.userInternalId,
      FacilityToCoWork: {
        createMany: {
          data: args.facilities.map((r) => ({
            facilityId: r,
          })),
        },
      },
    },
  });
  return coWorkCreate;
};

//update cowork detail
export const updateCoWorkDetail = async (args: IUpdateCoWorkDetail) => {
  const coWorkupdate = await prisma.coWork.update({
    where: {
      id: args.coWorkId,
    },
    data: {
      name: args.name,
      description: args.description,
      location: args.location,
      picture: args.picture,
      tel: args.tel,
      FacilityToCoWork: {
        deleteMany: [
          {
            coWorkId: args.coWorkId,
          },
        ],
        createMany: {
          data: args.facilities.map((r) => ({
            facilityId: r,
          })),
        },
      },
    },
  });
  return coWorkupdate;
};

// INTERNAL SETTING TIME
//create and update === upsert
export const createTimeOpenClose = async (args: ICreateTimeOpenClose) => {
  const openCoWork = await prisma.open.upsert({
    where: {
      coWorkId: args.coWorkId,
    },
    create: {
      sunOpen: args.open[0],
      monOpen: args.open[1],
      tueOpen: args.open[2],
      wedOpen: args.open[3],
      thursOpen: args.open[4],
      friOpen: args.open[5],
      satOpen: args.open[6],
      coWorkId: args.coWorkId,
    },
    update: {
      sunOpen: args.open[0],
      monOpen: args.open[1],
      tueOpen: args.open[2],
      wedOpen: args.open[3],
      thursOpen: args.open[4],
      friOpen: args.open[5],
      satOpen: args.open[6],
    },
  });

  const closeCoWork = await prisma.close.upsert({
    where: {
      coWorkId: args.coWorkId,
    },
    create: {
      sunClose: args.close[0],
      monClose: args.close[1],
      tueClose: args.close[2],
      wedClose: args.close[3],
      thursClose: args.close[4],
      friClose: args.close[5],
      satClose: args.close[6],
      coWorkId: args.coWorkId,
    },
    update: {
      sunClose: args.close[0],
      monClose: args.close[1],
      tueClose: args.close[2],
      wedClose: args.close[3],
      thursClose: args.close[4],
      friClose: args.close[5],
      satClose: args.close[6],
    },
  });

  const openClose24Hours = await prisma.openClose24Hours.upsert({
    where: {
      coWorkId: args.coWorkId,
    },
    create: {
      sun24hours: args.openClose24hours[0],
      mon24hours: args.openClose24hours[1],
      tue24hours: args.openClose24hours[2],
      wed24hours: args.openClose24hours[3],
      thurs24hours: args.openClose24hours[4],
      fri24hours: args.openClose24hours[5],
      sat24hours: args.openClose24hours[6],
      coWorkId: args.coWorkId,
    },
    update: {
      sun24hours: args.openClose24hours[0],
      mon24hours: args.openClose24hours[1],
      tue24hours: args.openClose24hours[2],
      wed24hours: args.openClose24hours[3],
      thurs24hours: args.openClose24hours[4],
      fri24hours: args.openClose24hours[5],
      sat24hours: args.openClose24hours[6],
    },
  });

  const openCloseBoolean = await prisma.openCloseBoolean.upsert({
    where: {
      coWorkId: args.coWorkId,
    },
    create: {
      sunOnOff: args.openCloseBoolean[0],
      monOnOff: args.openCloseBoolean[1],
      tueOnOff: args.openCloseBoolean[2],
      wedOnOff: args.openCloseBoolean[3],
      thursOnOff: args.openCloseBoolean[4],
      friOnOff: args.openCloseBoolean[5],
      satOnOff: args.openCloseBoolean[6],
      coWorkId: args.coWorkId,
    },
    update: {
      sunOnOff: args.openCloseBoolean[0],
      monOnOff: args.openCloseBoolean[1],
      tueOnOff: args.openCloseBoolean[2],
      wedOnOff: args.openCloseBoolean[3],
      thursOnOff: args.openCloseBoolean[4],
      friOnOff: args.openCloseBoolean[5],
      satOnOff: args.openCloseBoolean[6],
    },
  });
  return [
    { openCloseBoolean: openCloseBoolean },
    { open: openCoWork },
    { close: closeCoWork },
    { openClose24Hours: openClose24Hours },
  ];
};

// INTERNAL SETTING ROOM
//create room
export const createRoomInternal = async (args: ICreateRoomInternal) => {
  const createRoom = await prisma.branchToRoom.create({
    data: {
      coWork: {
        connect: {
          id: args.coworkId,
        },
      },
      room: {
        create: {
          name: args.name,
          capacity: args.capacity,
          RoomRate: {
            create: args.rates.map((r) => ({
              price: r.price,
              duration: {
                connectOrCreate: {
                  where: {
                    duration: r.duration,
                  },
                  create: {
                    duration: r.duration,
                  },
                },
              },
            })),
          },
        },
      },
    },
  });
  return createRoom;
};

//update room
export const updateRoomInternal = async (args: {
  branchToRoomId: number;
  coWorkId: number;
  name: string;
  capacity: number;
  rates: {
    price: number;
    duration: number;
    roomId: number;
    roomRateId: number;
  }[];
}) => {
  try {
    //set active false
    const setRoomIdActiveFalse = await prisma.roomRate.updateMany({
      where: {
        roomId: args.rates[0].roomId,
      },
      data: {
        active: false,
      },
    });
    //update and reset active true by roomrateid
    const updateRoom = await prisma.branchToRoom.update({
      where: {
        id: args.branchToRoomId,
      },
      data: {
        room: {
          update: {
            name: args.name,
            capacity: args.capacity,
            RoomRate: {
              upsert: args.rates.map((r) => ({
                where: { id: r.roomRateId },
                update: {
                  price: r.price,
                  active: true,
                  duration: {
                    connectOrCreate: {
                      where: {
                        duration: r.duration,
                      },
                      create: {
                        duration: r.duration,
                      },
                    },
                  },
                },
                create: {
                  price: r.price,
                  active: true,
                  duration: {
                    connectOrCreate: {
                      where: {
                        duration: r.duration,
                      },
                      create: {
                        duration: r.duration,
                      },
                    },
                  },
                },
              })),
            },
          },
        },
      },
    });
    return updateRoom;
  } catch (e) {
    console.log("error", e);
  }
};

// REGISTRATION LOGIN FORGET IN/EXT
//external signup
export const createUserExternal = async (args: ICreateUserExternal) => {
  const createUser = await prisma.userExternal.create({
    data: {
      name: args.name,
      email: args.email,
      tel: args.tel,
      password: await hashPassword(args.password),
    },
  });
  return createUser;
};

//external forget check data
export const checkUserExternalPasswordEmail = (
  args: ICheckUserExternalPasswordEmail
) => {
  const loginRes = prisma.userExternal.findUnique({
    where: {
      email: args.email,
    },
    select: {
      email: true,
      password: true,
      name: true,
      tel: true,
      id: true,
    },
  });
  return loginRes;
};

//external forget new data
export const forgetPasswordUserExternal = async (
  args: IForgetPasswordUserExternal
) => {
  const queryDataCheck = await prisma.userExternal.findUnique({
    where: {
      email: args.email,
    },
  });
  const check =
    queryDataCheck?.name === args.name && queryDataCheck?.tel === args.phone;

  if (check) {
    const updateForgetPassword = await prisma.userExternal.update({
      where: {
        email: args.email,
      },
      data: {
        password: await hashPassword(args.password),
      },
    });
    return updateForgetPassword;
  } else {
    return { error: "Name, Email or Phone incorrect!" };
  }
};

//internal signup
export const createUserInternal = async (args: ICreateUserInternal) => {
  const createUser = await prisma.userInternal.create({
    data: {
      name: args.name,
      email: args.email,
      tel: args.tel,
      password: await hashPassword(args.password),
    },
  });
  return createUser;
};

//internal forget check data
export const checkUserInternalPasswordEmail = (
  args: ICheckUserInternalPasswordEmail
) =>
  prisma.userInternal.findUnique({
    where: {
      email: args.email,
    },
    select: {
      id: true,
      email: true,
      password: true,
      name: true,
      tel: true,
    },
  });
  
//internal forget new data
export const forgetPasswordUserInternal = async (
  args: IForgetPasswordUserInternal
) => {
  const queryDataCheck = await prisma.userInternal.findUnique({
    where: {
      email: args.email,
    },
  });
  console.log(queryDataCheck);

  const check =
    queryDataCheck?.name === args.name && queryDataCheck?.tel === args.phone;

  if (check) {
    const updateForgetPassword = await prisma.userInternal.update({
      where: {
        email: args.email,
      },
      data: {
        password: await hashPassword(args.password),
      },
    });
    return updateForgetPassword;
  } else {
    return { error: "Name, Email or Phone incorrect!" };
  }
};