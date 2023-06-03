import Container from "../Container/Container";
import './CardContent.css'
import brandLogo1 from '../../assets/img/download.svg'
import brandLogo2 from '../../assets/img/brand_logo02.png'
import brandLogo3  from '../../assets/img/brand_logo03.png'
import { Link } from "react-router-dom";
import cardImg from "../../assets/img/38431.gif"
import pin from '../../assets/img/pin.png'
import Button from "../Button/Button";
const CardContent = () => {
    return (
		<div className='relative z-10 card-content-div'>
			<Container>
				<div className='flex items-center justify-center gap-3 py-4'>
					<Link className='w-[240px]'>
						<img
							src={brandLogo1}
							alt=''
						/>
					</Link>
					<Link className='w-[240px]'>
						<img
							src={brandLogo2}
							alt=''
						/>
					</Link>
					<Link className='w-[240px]'>
						<img
							src={brandLogo3}
							alt=''
						/>
					</Link>
				</div>

				<div className='px-[100px] '>
					<div className='card h-[360px] card-side bg-[#111115] shadow-xl'>
						<div className='card-body z-0 justify-between'>
							<div className='flex items-center gap-2'>
								<div>
									<img
										src={pin}
										alt=''
									/>
								</div>
								<p className='text-[#f3a511] font-semibold'>
									Champion
								</p>
							</div>

							<div className=' h-full py-[35px] flex flex-col justify-between'>
								<h4 className='card-title text-[24px] text-[#f3a511] uppercase font-semibold'>
									2D NFT FORGING GEN 1
								</h4>
								<h2 className='card-title text-10 text-white font-bold py-4'>
									<Link>LIVE NOW</Link>
								</h2>
								<p className='text-[#787878]'>
									Forge super rare NFTs with this collection
									for more join our Discord
								</p>
							</div>

							<div className='card-actions justify-start'>
								<Button title={"join discord"} />
								<Button title={"mint now"} />
								<Button title={"more info"} />
							</div>
						</div>

						<div className='w-[40%] bg-red-100 rounded-lg overflow-hidden ml-10'>
							<figure>
								<img
									src={cardImg}
									alt='Movie'
									className='h-[360px] object-cover'
								/>
							</figure>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CardContent;