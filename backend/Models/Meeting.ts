export default class Meeting{
    public meetingId:number;
    public teamId : number;
    public meetingStart : string;
    public meetingEnd : string;
    public meetingContent : string;
    public meetingRoom : string;
    public teamName? : string;

    constructor(meetingId:number, teamId: number, meetingStart:string, meetingEnd:string, meetingContent:string, meetingRoom:string, teamName?:string){
        this.meetingId = meetingId;
        this.teamId = teamId;
        this.meetingStart = meetingStart;
        this.meetingEnd = meetingEnd;
        this.meetingContent = meetingContent;
        this.meetingRoom = meetingRoom;
        this.teamName = teamName
    }
}