import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'
import Container from '../../Container/Container';
import { FiChevronRight } from "react-icons/fi";


const NavBar = () => {
	const navItesm = (
		<>
			<NavLink to={'text-page'}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-6 font-bold text-white `}
			>
				<li className='hover:text-yellow-400'>ABOUT</li>
			</NavLink>
			<NavLink to={'text-page'}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-6 font-bold text-white `}
			>
				<li className='nav-item'>BUY NFTS</li>
			</NavLink>
			<NavLink to={'text-page'}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-6 font-bold text-white `}
			>
				<li className='nav-item'>DOCUMENTS</li>
			</NavLink>
			<NavLink to={'text-page'}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-6 font-bold text-white `}
			>
				<li className='nav-item'>GAME</li>
			</NavLink>
			<NavLink to={'text-page'}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-6 font-bold text-white `}
			>
				<li className='nav-item'>FAQ</li>
			</NavLink>
			<NavLink to={'text-page'}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-6 font-bold text-white `}
			>
				<li className='nav-item'>PLAY</li>
			</NavLink>
			<NavLink to={'text-page'}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-6 font-bold text-white `}
			>
				<li className='nav-item'>RANKING</li>
			</NavLink>
			<NavLink to={'text-page'}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-6 font-bold text-white `}
			>
				<li className='nav-item'>NEWS</li>
			</NavLink>

		</>
	);
    return (
		<Container>
			<div className='navbar bg-transparent z-40 justify-between '>
				<div className='mr-auto'>
					<Link>
						<img
							src={logo}
							alt=''
							className='max-h-[100px]'
						/>
					</Link>
				</div>
				{/* lg  */}
				<div className='navbar-center hidden lg:flex'>
					<ul className='flex items-center '>{navItesm}</ul>

					<div className='py-3 px-4 rounded-3xl border border-yellow-500 bg-[#000] text-white cursor-pointer overflow-hidden relative action-btn'>
						<p className='z-50 relative flex items-center gap-1'>MARCKETPLACE <FiChevronRight /></p>
					</div>
				</div>

				{/* drawer  */}
				<div className='drawer md:hidden drawer-end z-40'>
					<input
						id='my-drawer-4'
						type='checkbox'
						className='drawer-toggle'
					/>
					<div className='drawer-content'>
						{/* Page content here */}
						<label
							htmlFor='my-drawer-4'
							className='drawer-button btn btn-primary'
						>
							Open drawer
						</label>
					</div>
					<div className='drawer-side'>
						<label
							htmlFor='my-drawer-4'
							className='drawer-overlay'
						></label>
						<ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
							{/* Sidebar content here */}
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold text-white `}
							>
								<li className='nav-item'>ABOUT</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold text-white `}
							>
								<li className='nav-item'>BUY NFTS</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold text-white `}
							>
								<li className='nav-item'>DOCUMENTS</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold text-white `}
							>
								<li className='nav-item'>GAME</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold text-white `}
							>
								<li className='nav-item'>FAQ</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold text-white `}
							>
								<li className='nav-item'>PLAY</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold text-white `}
							>
								<li className='nav-item'>RANKING</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold text-white `}
							>
								<li className='nav-item'>NEWS</li>
							</NavLink>
						</ul>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default NavBar;