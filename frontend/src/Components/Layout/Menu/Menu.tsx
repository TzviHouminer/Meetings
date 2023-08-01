import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <h2>Menu</h2><hr/>
			<NavLink to="/"><div className="link">Show Meetings</div></NavLink>
            <NavLink to="/addNewMeeting"><div className="link">add new Meeting</div></NavLink>
        </div>
    );
}

export default Menu;
