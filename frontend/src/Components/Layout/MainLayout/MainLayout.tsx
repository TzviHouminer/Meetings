import MainRoute from "../../Routes/MainRoute/MainRoute";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header><Header/></header>
            <aside><Menu/></aside>
            <main><MainRoute/></main>
        </div>
    );
}

export default MainLayout;
