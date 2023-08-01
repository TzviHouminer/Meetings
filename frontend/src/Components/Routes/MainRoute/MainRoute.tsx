import { Route, Routes } from "react-router-dom";
import "./MainRoute.css";
import Page404 from "../../Pages/Page404/Page404";
import MeetingsShow from "../../Pages/meetingsShow/meetingsShow";
import AddNewMeeting from "../../Pages/addNewMeeting/addNewMeeting";

function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<MeetingsShow/>}/>
                <Route path="/addNewMeeting" element={<AddNewMeeting/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRoute;
