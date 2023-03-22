import {
  createCoWorkDetailHandler,
  createRoomInternalHandler,
  createUserExternalHandler,
  createUserInternalHandler,
  getCoWork24HrsHandler,
  getCoWorkUserChooseHandler,
  getCoworkByUserIdHandler,
  getRoomByCoWorkIdHandler,
  updateCoWorkDetailHandler,
  updateRoomInternalHandler,
  getVerifyCodeByUserConfirmBookingHandler,
  showBookDetailInternalByCoWorkHandler,
  getStatusUserBookInternalHandler,
  createFacilityHandler,
  getCoworksHandler,
  createOpenCloseHandler,
} from "./kowingPlace/kowingPlace.handler";
import { createCoWorkDetail } from "./kowingPlace/kowingPlace.resolver";

export const AppRoutes = [
  {
    path: "/server/boeing",
    method: "get",
    action: (req: any, res: any) => res.send("hello 7470"),
  },
  {
    path: "/kowing/createUserExternal",
    method: "post",
    action: createUserExternalHandler, //OK
  },
  {
    path: "/kowing/getCoWork24Hrs",
    method: "post",
    action: getCoWork24HrsHandler, //OK
  },

  {
    path: "/kowing/getCoWorkUserChoose",
    method: "post",
    action: getCoWorkUserChooseHandler, //Ok
  },
  {
    path: "/kowing/getVerifyCodeByUserConfirmBooking",
    method: "post",
    action: getVerifyCodeByUserConfirmBookingHandler,
  },
  {
    path: "/kowing/createUserInternal",
    method: "post",
    action: createUserInternalHandler, //OK
  },
  {
    path: "/kowing/createRoomInternal",
    method: "post",
    action: createRoomInternalHandler, //Ok
  },
  {
    path: "/kowing/createCoWorkDetail",
    method: "post",
    action: createCoWorkDetailHandler, //Ok
  },
  {
    path: "/kowing/updateCoWorkDetail",
    method: "post",
    action: updateCoWorkDetailHandler, //Ok
  },
  {
    path: "/kowing/updateRoomInternal",
    method: "post",
    action: updateRoomInternalHandler, //OK
  },
  {
    path: "/kowing/getRoomByCoWorkId",
    method: "post",
    action: getRoomByCoWorkIdHandler, //Ok
  },
  {
    path: "/kowing/getCoworkByUserId",
    method: "post",
    action: getCoworkByUserIdHandler, //OK
  },
  {
    path: "/kowing/showBookDetailInternalByCoWork",
    method: "post",
    action: showBookDetailInternalByCoWorkHandler, //OK
  },
  {
    path: "/kowing/createFacility",
    method: "post",
    action: createFacilityHandler, //OK
  },
  {
    path: "/kowing/getStatusUserBookInternal",
    method: "post",
    action: getStatusUserBookInternalHandler, //Ok
  },
  {
    path: "/kowing/getCoworks",
    method: "post",
    action: getCoworksHandler, //OK  //with random
  },
  {
    path: "/kowing/createOpenClose",
    method: "post",
    action: createOpenCloseHandler,
  },
];
