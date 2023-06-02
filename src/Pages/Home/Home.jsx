import HeaderVideo from '../../components/HeaderVideo/HeaderVideo';
import bg from '../../assets/bg/bg_pattern.png'
const Home = () => {
    return (
		<div className='relative'>
			<HeaderVideo />

            <div style={{ backgroundImage: `url(${bg})` }} className='w-full h-[100vh] absolute top-0 left-0'>
                
            </div>
		</div>
	);
};

export default Home;