import HeaderVideo from '../../components/HeaderVideo/HeaderVideo';
import bg from '../../assets/bg/bg_pattern.png'
import Container from '../../components/Container/Container';
import logoText from '../../assets/img/logo_text.png'
import HomeBannarBtn from '../../components/HomeBannarBtn/HomeBannarBtn';
import CardContent from '../../components/CardContent/CardContent';
const Home = () => {
    return (
		<div className='relative'>
			<HeaderVideo />

			{/* background partten  */}
			<div
				style={{ backgroundImage: `url(${bg})` }}
				className='w-full h-[100vh] absolute top-0 left-0'
			></div>

			{/* home content  */}
			<Container>
				<div className='absolute z-50 text-white text-center w-full  left-0 top-1/2'>
					<div className='flex justify-center'>
						<img
							src={logoText}
							alt=''
							className='w-[25%] mb-4'
						/>
					</div>

					<div className='mt-6'>
						<HomeBannarBtn />
					</div>
				</div>
			</Container>

			<div >
				<CardContent />
			</div>
		</div>
	);
};

export default Home;