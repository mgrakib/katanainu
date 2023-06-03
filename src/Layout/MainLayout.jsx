import { Outlet } from "react-router-dom";
import NavBar from "../components/Share/NavBar/NavBar";
import bgImg from '../assets/bg/background.jpg'
import './MainLayout.css'

const MainLayout = () => {
    return (
		<div style={{ backgroundImage: `url(${bgImg})`}} className="main-layout-div">
			<div className='fixed z-50 w-full'>
				<NavBar />
			</div>
			
			<Outlet />
		</div>
	);
};

export default MainLayout;