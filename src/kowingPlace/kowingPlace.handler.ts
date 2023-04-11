import { Request, Response } from "express";
import {
  createCoWorkDetail,
  createRoomInternal,
  createUserExternal,
  createUserInternal,
  getCoWorkUserChoose,
  getCoworks,
  getCoworkByUserId,
  updateCoWorkDetail,
  updateRoomInternal,
  createBookRoom,
  createFacility,
  createTimeOpenClose,
  forgetPasswordUserExternal,
  forgetPasswordUserInternal,
  getFacilities,
  updateStatus,
  getBookRoomByPartnerIdAndStatus,
  deleteRoom,
  getBookRoomOnTheDate,
  getCoWorkByCoWorkId,
  getBookRoomByUserExternal,
  getBookRoomByPartnerId,
} from "./kowingPlace.resolver";
import {
  createTimeOpenCloseCodec,
  updateCoWorkDetailCodec,
} from "./kowingPlace.interface";
import { loginUserExternal, loginUserInternal } from "./kowingPlace.service";

// MANUAL BY POSTMAN
//facilities
export const createFacilityHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await createFacility(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

// HOME
//get initial home
export const getCoworksHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCoworks();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

// COWORK DETAIL
//click from home
export const getCoWorkUserChooseHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getCoWorkUserChoose(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//detail in page cowork detail
export const getFacilitiesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getFacilities();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

// EXTERNAL RESERVE
//initial page // get cowork detail, open close days
export const getCoWorkByCoWorkIdHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await getCoWorkByCoWorkId(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//after select date and room // get time available
export const getBookRoomOnTheDateHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log("args", args);
  try {
    const result = await getBookRoomOnTheDate(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

//vertify code //bookingExternal
export const createBookRoomHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await createBookRoom(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

// EXTERNAL RESERVATION
//get bookroom
export const getBookRoomByUserExternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log("args", args);

  try {
    const result = await getBookRoomByUserExternal(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

// INTERNAL MAIN
export const getBookRoomByPartnerIdHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log(args);

  try {
    const result = await getBookRoomByPartnerId(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

// INTERNAL STATUS
export const getBookRoomByPartnerIdAndStatusHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log("args", args);
  try {
    const result = await getBookRoomByPartnerIdAndStatus(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

//btn update
export const updateStatusHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log(args);

  try {
    const result = await updateStatus(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

//not delete but update active room to false
export const deleteRoomHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  try {
    const result = await deleteRoom(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

// INTERNAL SETTING COWORK
//initial get old detail
export const getCoworkByUserIdHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await getCoworkByUserId(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//create cowork detail
export const createCoWorkDetailHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log("args", args);

  try {
    const result = await createCoWorkDetail(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//update cowork detail
export const updateCoWorkDetailHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;
  console.log("args", args);

  try {
    updateCoWorkDetailCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await updateCoWorkDetail(args))
      : res.status(500).json({
          error: "Invalid parameter codec",
        });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

// INTERNAL SETTING TIME
//create and update === upsert
export const createTimeOpenCloseHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log(args);
  try {
    createTimeOpenCloseCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await createTimeOpenClose(args))
      : res.status(500).json({
          error: "Invalid parameter codec",
        });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

// INTERNAL SETTING ROOM
//create room
export const createRoomInternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await createRoomInternal(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//update room
export const updateRoomInternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  console.log("args", args);

  try {
    const result = await updateRoomInternal(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

// REGISTRATION LOGIN FORGET IN/EXT
//external signup
export const createUserExternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await createUserExternal(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//external login
export const loginUserExternalHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await loginUserExternal(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

//external forget new data
export const forgetPasswordUserExternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await forgetPasswordUserExternal(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

//internal signup
export const createUserInternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await createUserInternal(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//internal login
export const loginUserInternalHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await loginUserInternal(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};

//internal forget new data
export const forgetPasswordUserInternalHandler = async (
  req: Request,
  res: Response
) => {
  const args = req.body;
  try {
    const result = await forgetPasswordUserInternal(args);
    res.status(200).json(result);
  } catch (e: any) {
    if (e.status === 404) return res.status(404).json(e.message);
    res.status(500).json({
      error: String(e),
    });
  }
};