import Meeting from "../Models/Meeting";
import dal_mysql from "../Utils/dal_mysql"
import { OkPacket } from "mysql";

const getAllMeetings = async () => {
    const SQLcmd = `SELECT meetings.*, teams.teamName
    FROM meetings JOIN teams
    ON meetings.teamId = teams.teamId`
    const data = await dal_mysql.execute(SQLcmd);
    return data;
}

const getAllTeams = async() => {
    const SQLcmd = `SELECT * FROM teams;`;
    const data = await dal_mysql.execute(SQLcmd);
    return data;
}

const addMeeting = async (newMeeting:Meeting) => {
    const SQLcmd = `INSERT INTO meetings (teamId, meetingStart, meetingEnd, meetingContent, meetingRoom)
    VALUES (${newMeeting.teamId}, '${newMeeting.meetingStart}', '${newMeeting.meetingEnd}', '${newMeeting.meetingContent}', '${newMeeting.meetingRoom}')
    `;
    const response:OkPacket = await dal_mysql.execute(SQLcmd);
    return response.insertId;
}

export {getAllTeams, getAllMeetings, addMeeting}