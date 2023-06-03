/** @format */

import { FiChevronRight } from "react-icons/fi";
import "./Button.css";

const Button = ({ title }) => {
	return (
		<div
			className={`py-3 px-4 rounded-3xl border border-[#F5A238] bg-[#000] text-white cursor-pointer overflow-hidden relative action-btn`}
		>
			<p className='z-50 relative flex items-center gap-1 uppercase'>
				{title} <FiChevronRight />
			</p>
		</div>
	);
};

export default Button;
