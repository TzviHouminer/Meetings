import { useNavigate } from "react-router-dom";
import "./addNewMeeting.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Meeting from "../../Modal/Meeting";

function AddNewMeeting(): JSX.Element {
    const {register,handleSubmit, formState:{errors}} = useForm<Meeting>();
    const navigate = useNavigate();
    const [teams, setTeams] = useState<any[]>([]);

    const send = (data:Meeting) =>{
        console.log(data);
        axios.post("http://localhost:5000/api/v1/meetings/addmeeting",data)
        .then(()=>navigate("/"))
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/meetings/getallteams`)
        .then(response => response.data)
        .then(data=>{
            setTeams(data);
        })
    },[])

    return (
        <div className="addNewMeeting">
			<form className="Box" onSubmit={handleSubmit(send)}>
                <h3>Add New Meeting</h3><hr/>
                choose team:<select required defaultValue={1} {...register("teamId")}>
                {teams.map(item=><option key={item.teamId} value={item.teamId}>{item.teamName}</option>)}
                </select><br/><br/>
                <input type="text" className="dateInputBox" placeholder="start at: [dd-mm-yyyy hh-mm]"
                {...register("meetingStart", { required: true, pattern: /^.{17}$/ })}/>
                {errors.meetingStart && errors.meetingStart.type === "pattern" && (<span>time must be 'dd-mm-yyyy hh-mm'.</span>)}<br/>

                <input required type="text" className="dateInputBox" placeholder="end at: [dd-mm-yyyy hh-mm]"
                {...register("meetingEnd", { required: true, pattern: /^.{17}$/ })}/>
                {errors.meetingEnd && errors.meetingEnd.type === "pattern" && (<span>time must be 'dd-mm-yyyy hh-mm'.</span>)}<br/><br/>

                <textarea required cols={30} rows={3} placeholder="" {...register("meetingContent")}/><br/><br/>
                <input required type="text" placeholder="meeting room" {...register("meetingRoom")}/><br/><br/>
                <button>Add meeting</button>
            </form>
        </div>
    );
}

export default AddNewMeeting;
