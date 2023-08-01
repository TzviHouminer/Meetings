import express,{Request,Response,NextFunction} from "express";
import { getAllMeetings, getAllTeams } from "../Logic/meetingsLogic";
import { addMeeting } from "../Logic/meetingsLogic";

const meetingRouter = express.Router();

meetingRouter.get("/getallmeetings", async(request:Request, response:Response, next:NextFunction)=>{
    const data = await getAllMeetings();
    return response.status(200).json(data);
})

meetingRouter.get("/getallteams", async(request:Request, response:Response, next:NextFunction)=>{
    const data = await getAllTeams();
    return response.status(200).json(data);
})

meetingRouter.post("/addmeeting", async(request:Request, response:Response, next:NextFunction)=>{
    const newMeeting = request.body;
    const id = await addMeeting(newMeeting);
    return response.status(201).json({'id':id})
})

export default meetingRouter;