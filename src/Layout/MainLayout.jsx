import { Outlet } from "react-router-dom";
import NavBar from "../components/Share/NavBar/NavBar";

const MainLayout = () => {
    return (
		<div>
			<div className="fixed z-50 w-full">
				<NavBar />
			</div>

			<Outlet />
		</div>
	);
};

export default MainLayout;