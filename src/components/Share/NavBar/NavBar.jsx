import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'
import Container from '../../Container/Container';
import { FiChevronRight } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import './NavBar.css'
import Button from '../../Button/Button';

const NavBar = () => {
	const navItesm = (
		<>
			<NavLink
				to={"text-page"}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-6 font-bold text-white `}
			>
				<li className='relative group'>
					<span className='hover:text-yellow-400 '>ABOUT</span>
					<ul className='absolute top-[130%] bg-black  rounded-lg overflow-hidden py-0 max-h-[0px] group-hover:py-2 group-hover:max-h-[300px] duration-300'>
						<li className='sub-nav-item'>THE GAME</li>
						<li className='sub-nav-item'>TEME GAME</li>
						<li className='sub-nav-item'>PROBLEM/SOLUTION</li>
						<li className='sub-nav-item'>LORE/BLACKSTORY</li>
						<li className='sub-nav-item'>FACTION SUMMARY</li>
					</ul>
				</li>
			</NavLink>
			<NavLink
				to={"text-page"}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-6 font-bold text-white `}
			>
				<li className='group relative'>
					<span className='nav-item'>BUY NFTS</span>
					<ul className='absolute top-[130%] bg-black  rounded-lg overflow-hidden py-0 max-h-[0px] group-hover:py-2 group-hover:max-h-[300px] duration-300'>
						<li className='sub-nav-item'>THE GAME</li>
						<li className='sub-nav-item'>TEME GAME</li>
						<li className='sub-nav-item'>PROBLEM/SOLUTION</li>
						<li className='sub-nav-item'>LORE/BLACKSTORY</li>
						<li className='sub-nav-item'>FACTION SUMMARY</li>
					</ul>
				</li>
			</NavLink>
			<NavLink
				to={"text-page"}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-4 font-bold text-white `}
			>
				<li className='group relative'>
					<span className='nav-item'>DOCUMENTS</span>
					<ul className='absolute top-[130%] bg-black  rounded-lg overflow-hidden py-0 max-h-[0px] group-hover:py-2 group-hover:max-h-[300px] duration-300'>
						<li className='sub-nav-item'>THE GAME</li>
						<li className='sub-nav-item'>TEME GAME</li>
						<li className='sub-nav-item'>PROBLEM/SOLUTION</li>
						<li className='sub-nav-item'>LORE/BLACKSTORY</li>
						<li className='sub-nav-item'>FACTION SUMMARY</li>
					</ul>
				</li>
			</NavLink>
			<NavLink
				to={"text-page"}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-4 font-bold text-white `}
			>
				<li className='group relative'>
					<span className='nav-item'>GAME</span>
					<ul className='absolute top-[130%] bg-black  rounded-lg overflow-hidden py-0 max-h-[0px] group-hover:py-2 group-hover:max-h-[300px] duration-300'>
						<li className='sub-nav-item'>THE GAME</li>
						<li className='sub-nav-item'>TEME GAME</li>
						<li className='sub-nav-item'>PROBLEM/SOLUTION</li>
						<li className='sub-nav-item'>LORE/BLACKSTORY</li>
						<li className='sub-nav-item'>FACTION SUMMARY</li>
					</ul>
				</li>
			</NavLink>
			<NavLink
				to={"text-page"}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-4 font-bold text-white `}
			>
				<li>
					<span className='nav-item'>FAQ</span>
				</li>
			</NavLink>
			<NavLink
				to={"text-page"}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-4 font-bold text-white `}
			>
				<li className='group relative'>
					<span className='nav-item'>SOCIAL MEDIA</span>
					<ul className='absolute top-[130%] bg-black  rounded-lg overflow-hidden py-0 max-h-[0px] group-hover:py-2 group-hover:max-h-[300px] duration-300'>
						<li className='sub-nav-item'>THE GAME</li>
						<li className='sub-nav-item'>TEME GAME</li>
						<li className='sub-nav-item'>PROBLEM/SOLUTION</li>
						<li className='sub-nav-item'>LORE/BLACKSTORY</li>
						<li className='sub-nav-item'>FACTION SUMMARY</li>
					</ul>
				</li>
			</NavLink>
			<NavLink
				to={"text-page"}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-4 font-bold text-white `}
			>
				<li>
					<span className='nav-item'>PLAY</span>
				</li>
			</NavLink>
			<NavLink
				to={"text-page"}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-4 font-bold text-white `}
			>
				<li>
					<span className='nav-item'>RANKING</span>
				</li>
			</NavLink>
			<NavLink
				to={"text-page"}
				className={`${({ isActive }) => {
					isActive ? "active " : "default";
				}}  py-3 px-4 font-bold text-white `}
			>
				<li>
					<span className='nav-item'>NEWS</span>
				</li>
			</NavLink>
		</>
	);
    return (
		<Container>
			<div className='navbar  bg-transparent z-[100] justify-between '>
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

					<Button title={"MARCKETPLACE"} />
				</div>

				{/* drawer  */}
				<div className='drawer md:hidden drawer-end z-40'>
					<input
						id='my-drawer-4'
						type='checkbox'
						className='drawer-toggle'
					/>
					<div className='drawer-content  ml-auto'>
						{/* Page content here */}
						<label
							htmlFor='my-drawer-4'
							className='drawer-button text-white '
						>
							<FaBars className='text-[26px] d' />
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
								}}  py-3 px-4 font-bold  `}
							>
								<li className='nav-item'>ABOUT</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-4 font-bold  `}
							>
								<li className='nav-item'>BUY NFTS</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-4 font-bold  `}
							>
								<li className='nav-item'>DOCUMENTS</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-4 font-bold  `}
							>
								<li className='nav-item'>GAME</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-4 font-bold  `}
							>
								<li className='nav-item'>FAQ</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold  `}
							>
								<li className='nav-item'>PLAY</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold  `}
							>
								<li className='nav-item'>RANKING</li>
							</NavLink>
							<NavLink
								to={"text-page"}
								className={`${({ isActive }) => {
									isActive ? "active " : "default";
								}}  py-3 px-6 font-bold  `}
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