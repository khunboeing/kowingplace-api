import * as t from "io-ts";

export const createUserExternalCodec = t.type({
  name: t.string,
  email: t.string,
  tel: t.string,
  password: t.string,
});
export interface ICreateUserExternal
  extends t.TypeOf<typeof createUserExternalCodec> {}
//-------------------------------------------------

export const getCoWorkUserChooseCodec = t.type({
  id: t.number,
});
export interface IGetCoWorkUserChoose
  extends t.TypeOf<typeof getCoWorkUserChooseCodec> {}

//-------------------------------------------------

export const getVerifyCodeByUserConfirmBookingCodec = t.type({
  startTime: t.string,
  roomId: t.number,
  roomRateId: t.number,
  userExId: t.number,
  price: t.number,
});
export interface IGetUserConfirmBooking
  extends t.TypeOf<typeof getVerifyCodeByUserConfirmBookingCodec> {}

//-------------------------------------------------

export const createUserInternalCodec = t.type({
  name: t.string,
  email: t.string,
  tel: t.string,
  password: t.string,
});
export interface ICreateUserInternal
  extends t.TypeOf<typeof createUserInternalCodec> {}

//-------------------------------------------------

export const showBookDetailInternalByCoWorkCodec = t.type({
  coWorkId: t.number,
});
export interface IShowBookDetailInternalByCoWork
  extends t.TypeOf<typeof showBookDetailInternalByCoWorkCodec> {}

//-------------------------------------------------

export const createRoomInternalCodec = t.type({
  name: t.string,
  capacity: t.number,
  coworkId: t.number,
  rates: t.array(
    t.type({
      price: t.number,
      duration: t.number,
      roomRateId: t.number,
      roomId: t.number,
    })
  ),
});
export interface ICreateRoomInternal
  extends t.TypeOf<typeof createRoomInternalCodec> {}

//-------------------------------------------------

export const updateRoomInternalCodec = t.type({
  branchToRoomId: t.number,
  coWorkId: t.number,
  name: t.string,
  capacity: t.number,
  rates: t.array(
    t.type({
      price: t.number,
      duration: t.number,
      roomRateId: t.number,
      roomId: t.number,
    })
  ),
});
export interface IUpdateRoomInternal
  extends t.TypeOf<typeof updateRoomInternalCodec> {}

//-------------------------------------------------

export const createFacilityInCodec = t.type({
  name: t.string,
});
export interface ICreateFacilityIn
  extends t.TypeOf<typeof createFacilityInCodec> {}

//-------------------------------------------------

export const createCoWorkDetailCodec = t.type({
  name: t.string,
  description: t.string,
  location: t.string,
  tel: t.string,
  picture: t.string,
  userInternalId: t.number,
  facilities: t.array(t.number),
});
export interface ICreateCoWorkDetail
  extends t.TypeOf<typeof createCoWorkDetailCodec> {}

//-------------------------------------------------

export const updateCoWorkDetailCodec = t.type({
  name: t.string,
  description: t.string,
  location: t.string,
  tel: t.string,
  picture: t.string,
  userInternalId: t.number,
  coWorkId: t.number,
  facilities: t.array(t.number),
});
export interface IUpdateCoWorkDetail
  extends t.TypeOf<typeof updateCoWorkDetailCodec> {}

//-------------------------------------------------

export const getStatusUserBookInternalCodec = t.type({
  bookRoomId: t.number,
});
export interface IGetStatusUserBookInternal
  extends t.TypeOf<typeof getStatusUserBookInternalCodec> {}

//-------------------------------------------------

export const createFacilityCodec = t.type({
  name: t.string,
});
export interface ICreateFacility extends t.TypeOf<typeof createFacilityCodec> {}

//-------------------------------------------------

export const getCoWorkByCoWorkIdCodec = t.type({
  coWorkId: t.number,
});
export interface IGetCoWorkByCoWorkId
  extends t.TypeOf<typeof getCoWorkByCoWorkIdCodec> {}

//-------------------------------------------------

export const getCoworkByUserIdCodec = t.type({
  userInternalId: t.number,
});
export interface IGetCoworkByUserId
  extends t.TypeOf<typeof getCoworkByUserIdCodec> {}

//-------------------------------------------------

export const createTimeOpenCloseCodec = t.type({
  open: t.array(t.number),
  close: t.array(t.number),
  openClose24hours: t.array(t.boolean),
  openCloseBoolean: t.array(t.boolean),
  coWorkId: t.number,
});
export interface ICreateTimeOpenClose
  extends t.TypeOf<typeof createTimeOpenCloseCodec> {}

//-------------------------------------------------

export const getCalendarBookingByCoWorkIdCodec = t.type({
  coWorkId: t.number,
});
export interface IGetCalendarBookingByCoWorkId
  extends t.TypeOf<typeof getCalendarBookingByCoWorkIdCodec> {}

//-------------------------------------------------
export const checkUserExternalPasswordEmailCodec = t.type({
  email: t.string,
});
export interface ICheckUserExternalPasswordEmail
  extends t.TypeOf<typeof checkUserExternalPasswordEmailCodec> {}

//-------------------------------------------------
export const checkUserInternalPasswordEmailCodec = t.type({
  email: t.string,
});
export interface ICheckUserInternalPasswordEmail
  extends t.TypeOf<typeof checkUserInternalPasswordEmailCodec> {}

//-------------------------------------------------
export const upsertExternalTokenCodec = t.type({
  token: t.string,
  email: t.string,
});

export interface IUpsertExternalToken
  extends t.TypeOf<typeof upsertExternalTokenCodec> {}

//-------------------------------------------------
export const upsertInternalTokenCodec = t.type({
  token: t.string,
  email: t.string,
});

export interface IUpsertInternalToken
  extends t.TypeOf<typeof upsertInternalTokenCodec> {}

//-------------------------------------------------
export const loginUserExternalCodec = t.type({
  email: t.string,
  password: t.string,
});
export interface ILoginUserExternal
  extends t.TypeOf<typeof loginUserExternalCodec> {}

//-------------------------------------------------
export const loginUserInternalCodec = t.type({
  email: t.string,
  password: t.string,
});

export interface ILoginUserInternal
  extends t.TypeOf<typeof loginUserInternalCodec> {}

//-------------------------------------------------
export const updateCalendarBookingByCoWorkIdCodec = t.type({
  open: t.array(t.number),
  close: t.array(t.number),
  openClose24hours: t.array(t.boolean),
  coWorkId: t.number,
});
export interface IUpdateCalendarBookingByCoWorkId
  extends t.TypeOf<typeof updateCalendarBookingByCoWorkIdCodec> {}
//-------------------------------------------------

export const forgetPasswordUserInternalCodec = t.type({
  name: t.string,
  email: t.string,
  phone: t.string,
  password: t.string,
});
export interface IForgetPasswordUserInternal
  extends t.TypeOf<typeof forgetPasswordUserInternalCodec> {}

//-------------------------------------------------

export const forgetPasswordUserExternalCodec = t.type({
  name: t.string,
  email: t.string,
  phone: t.string,
  password: t.string,
});
export interface IForgetPasswordUserExternal
  extends t.TypeOf<typeof forgetPasswordUserExternalCodec> {}

//-------------------------------------------------

export const deleteCoWorkCodec = t.type({
  coWorkId: t.number,
});
export interface IDeleteCoWork extends t.TypeOf<typeof deleteCoWorkCodec> {}

//-------------------------------------------------
export const bookDurationRoomCodec = t.type({
  day: t.number,
  startTime: t.string,
  coWorkId: t.number,
  roomId: t.number,
});

export interface IBookDurationRoom
  extends t.TypeOf<typeof bookDurationRoomCodec> {}

//-------------------------------------------------

export const getBookRoomByUserExternalCodec = t.type({
  userId: t.number,
});
export interface IGetBookRoomByUserExternal
  extends t.TypeOf<typeof getBookRoomByUserExternalCodec> {}

//-------------------------------------------------

export const deleteRoomCodec = t.type({
  roomId: t.number,
});

export interface IDeleteRoomCodec extends t.TypeOf<typeof deleteRoomCodec> {}

//-------------------------------------------------

export const updateStatusCodec = t.type({
  bookRoomId: t.number,
  newStatus: t.string,
});

export interface IUpdateStatus extends t.TypeOf<typeof updateStatusCodec> {}

//-------------------------------------------------
export const getBookRoomByPartnerIdAndStatusCodec = t.type({
  userId: t.number,
  status: t.string,
  orderBy: t.string,
  inDeCrease: t.string,
});

export interface IGetBookRoomByPartnerIdAndStatus
  extends t.TypeOf<typeof getBookRoomByPartnerIdAndStatusCodec> {}

//-------------------------------------------------
export const getBookRoomByPartnerIdCodec = t.type({
  userId: t.number,
});

export interface IGetBookRoomByPartnerId
  extends t.TypeOf<typeof getBookRoomByPartnerIdCodec> {}

//-------------------------------------------------
export const getOpenDayCodec = t.type({
  coWorkId: t.number,
});

export interface IGetOpenDay extends t.TypeOf<typeof getOpenDayCodec> {}

//-------------------------------------------------
