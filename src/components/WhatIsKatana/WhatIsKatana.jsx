import Container from "../Container/Container";
import wikata from '../../assets/img/wikata.png'
import './WhatIsKatana.css'
const WhatIsKatana = () => {
    return (
		<Container>
			<div className='flex flex-col md:flex-row items-center'>
				<div className='md:w-1/2'>
					<img
						src={wikata}
						alt=''
					/>
				</div>

				<div className='md:w-1/2'>
					<h4 className='text-[28px] pb-[30px] text-[#f3a511] font-bold'>
						WHAT IS KATANA INU?
					</h4>
					<div>
						<ul>
							<li className='text-[#e7e7e7] py-2 pl-4 relative list-item'>
								Katana Inu is a crypto based (NFT) PC game with
								high quality graphics and limited NFTs. It is a
								third-person game that focuses on fast-paced
								sword and spell fighting.
							</li>
							<li className='text-[#e7e7e7] py-2 list-item pl-4 relative'>
								The goal is to attract web2 gamers to come over
								to web3 for the mass adoption and compete with
								big, well known games. The focus is Fun2Play and
								Play-To-Earn/Own. Katana Inu is not a Pay2Win
								game. All Skins and Spells are cosmetics. Having
								rankings, collecting rare NFTs, participating in
								tournaments and playing in eSports leagues.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default WhatIsKatana;