import HeaderVideo from '../../components/HeaderVideo/HeaderVideo';
import bg from '../../assets/bg/bg_pattern.png'
import Container from '../../components/Container/Container';
import logoText from '../../assets/img/logo_text.png'
import HomeBannarBtn from '../../components/HomeBannarBtn/HomeBannarBtn';
import CardContent from '../../components/CardContent/CardContent';
import HeroSection from '../../components/HeroSection/HeroSection';
import WhatIsKatana from '../../components/WhatIsKatana/WhatIsKatana';
const Home = () => {
    return (
		<div className=''>
			<HeroSection />
			<CardContent />
			<WhatIsKatana />
		</div>
	);
};

export default Home;