/** @format */

import video from "../../assets/video/video.mp4";
import video1 from "../../assets/video/KATANA-INU TRAILER_3.mp4";

const HeaderVideo = () => {
	return (
		<div className=' text-center h-[80vh] -z-10 '>
			<video
				width=''
				loop
				muted
				autoPlay='autoPlaly'
				className='h-full w-full object-cover'
			>
				<source
					src={video}
					type='video/mp4'
				/>
			</video>
		</div>
	);
};

export default HeaderVideo;
