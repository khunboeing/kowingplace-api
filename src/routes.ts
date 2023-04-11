import {
  createCoWorkDetailHandler,
  createRoomInternalHandler,
  createUserExternalHandler,
  createUserInternalHandler,
  getCoWorkUserChooseHandler,
  getCoworkByUserIdHandler,
  updateCoWorkDetailHandler,
  updateRoomInternalHandler,
  createBookRoomHandler,
  createFacilityHandler,
  getCoworksHandler,
  createTimeOpenCloseHandler,
  loginUserExternalHandler,
  forgetPasswordUserExternalHandler,
  forgetPasswordUserInternalHandler,
  getFacilitiesHandler,
  loginUserInternalHandler,
  updateStatusHandler,
  getBookRoomByPartnerIdAndStatusHandler,
  deleteRoomHandler,
  getBookRoomOnTheDateHandler,
  getCoWorkByCoWorkIdHandler,
  getBookRoomByUserExternalHandler,
  getBookRoomByPartnerIdHandler,
} from "./kowingPlace/kowingPlace.handler";
import { checkToken } from "./kowingPlace/kowingPlace.middleWare";

export interface IAppRoutes {
  path: string;
  method: string;
  action: (req: any, res: any) => any;
  middleWare?: (req: any, res: any, next: any) => any;
}
export const AppRoutes: IAppRoutes[] = [
  {
    path: "/server/boeing",
    method: "get",
    action: (req: any, res: any) => res.send("hello 7470"),
  },
  // MANUAL BY POSTMAN
  //facilities
  {
    path: "/kowing/createFacility",
    method: "post",
    action: createFacilityHandler,
  },
  // HOME
  //get initial home
  {
    path: "/kowing/getCoworks",
    method: "post",
    action: getCoworksHandler,
  },
  // COWORK DETAIL
  //click from home
  {
    path: "/kowing/getCoWorkUserChoose",
    method: "post",
    action: getCoWorkUserChooseHandler,
  },
  //detail in page cowork detail
  {
    path: "/kowing/getFacilities",
    method: "post",
    action: getFacilitiesHandler,
  },
  // EXTERNAL RESERVE
  //initial page // get cowork detail, open close days
  {
    path: "/kowing/getCoWorkByCoWorkId",
    method: "post",
    action: getCoWorkByCoWorkIdHandler,
  },
  //after select date and room // get time available
  {
    path: "/kowing/getBookRoomOnTheDate",
    method: "post",
    action: getBookRoomOnTheDateHandler,
  },
  //vertify code //bookingExternal
  {
    path: "/kowing/createBookRoom",
    method: "post",
    action: createBookRoomHandler,
    middleWare: checkToken,
  },
  // EXTERNAL RESERVATION
  //get bookroom
  {
    path: "/kowing/getBookRoomByUserExternal",
    method: "post",
    action: getBookRoomByUserExternalHandler,
  },
  // INTERNAL MAIN
  {
    path: "/kowing/getBookRoomByPartnerId",
    method: "post",
    action: getBookRoomByPartnerIdHandler,
  },
  // INTERNAL STATUS
  {
    path: "/kowing/getReserveByStat",
    method: "post",
    action: getBookRoomByPartnerIdAndStatusHandler,
  },
  //btn update
  {
    path: "/kowing/updateStatus",
    method: "post",
    action: updateStatusHandler,
  },
  //not delete but update active room to false
  {
    path: "/kowing/deleteRoom",
    method: "post",
    action: deleteRoomHandler,
  },
  // INTERNAL SETTING COWORK
  //initial get old detail
  {
    path: "/kowing/getCoworkByUserId",
    method: "post",
    action: getCoworkByUserIdHandler,
  },
  //create cowork detail
  {
    path: "/kowing/createCoWorkDetail",
    method: "post",
    action: createCoWorkDetailHandler,
    middleWare: checkToken,
  },
  //update cowork detail
  {
    path: "/kowing/updateCoWorkDetail",
    method: "post",
    action: updateCoWorkDetailHandler,
    middleWare: checkToken,
  },
  // INTERNAL SETTING TIME
  //create and update === upsert
  {
    path: "/kowing/createTimeOpenClose",
    method: "post",
    action: createTimeOpenCloseHandler,
    middleWare: checkToken,
  },
  // INTERNAL SETTING ROOM
  //create room
  {
    path: "/kowing/createRoomInternal",
    method: "post",
    action: createRoomInternalHandler,
  },
  //update room
  {
    path: "/kowing/updateRoomInternal",
    method: "post",
    action: updateRoomInternalHandler,
    middleWare: checkToken,
  },
  // REGISTRATION LOGIN FORGET IN/EXT
  //external signup
  {
    path: "/kowing/createUserExternal",
    method: "post",
    action: createUserExternalHandler,
  },
  //external login
  {
    path: "/kowing/loginUserExternal",
    method: "post",
    action: loginUserExternalHandler,
  },
  //external forget new data
  {
    path: "/kowing/forgetPasswordUserExternal",
    method: "post",
    action: forgetPasswordUserExternalHandler,
  },
  //internal signup
  {
    path: "/kowing/createUserInternal",
    method: "post",
    action: createUserInternalHandler,
  },
  //internal login
  {
    path: "/kowing/loginUserInternal",
    method: "post",
    action: loginUserInternalHandler,
  },
  //internal forget new data
  {
    path: "/kowing/forgetPasswordUserInternal",
    method: "post",
    action: forgetPasswordUserInternalHandler,
  },
];
