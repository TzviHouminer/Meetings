import axios from "axios";
import { useState, useEffect } from "react";
import "./meetingsShow.css";
import Meeting from "../../Modal/Meeting";

function MeetingsShow(): JSX.Element {
    const [meetings, setMeetings] = useState<Meeting[]>([])
    const [teams, setTeams] = useState<any[]>([]);
    const [chosenTeam, setChosenTeam] = useState<number>()

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/meetings/getallteams`)
        .then(response=>setTeams(response.data));
        axios.get(`http://localhost:5000/api/v1/meetings/getallmeetings`)
        .then(response => setMeetings(response.data))
    },[])

    return (
        <div className="meetingsShow Box">
            <span>team: </span>
            <select defaultValue={0} onChange={(e)=>setChosenTeam(+e.target.value)}>
                <option value={0} disabled>choose team</option>
                {teams.map(item=><option key={item.teamId} value={item.teamId}>{item.teamName}</option>)}
            </select><br/><br/>
            {chosenTeam && 
            <table>
                <thead>
                    <th>meeting Id</th>
                    <th>meeting time</th>
                    <th>meeting subject</th>
                    <th>meeting room</th>
                </thead>
                <tbody>
                    {meetings.filter(item=>item.teamId === chosenTeam).map(item=>
                        <tr key={item.meetingId}>
                            <td>{item.meetingId}</td>
                            <td>{item.meetingStart}<span className="highlight"> --- </span>{item.meetingEnd}</td>
                            <td>{item.meetingContent}</td>
                            <td>{item.meetingRoom}</td>
                        </tr>)}
                </tbody>
            </table>
            }
        </div>
    );
}

export default MeetingsShow;
