'use client';

import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {
	Autoplay,
	EffectCoverflow,
	Navigation,
	Pagination,
} from 'swiper/modules';
import { ReviewCard } from '../ui/review-card';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Separator } from '../ui/separator';
// import EffectCoverflow from 'swiper';
// import Pagination from 'swiper';
// import Navigation from 'swiper';

const CarouselSection8 = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisible((prev) => !prev);
		}, 2000); // Change the interval duration as needed

		return () => clearInterval(interval);
	}, []);

	return (
		<div className=' h-[720px] mt-8 w-full' id='uae-visa-change'>
			<h2 className='text-center text-4xl  text-cyan-700 font-cursive font-extralight'>
				Most <span className='text-white'>.</span> Popular Packages
			</h2>
			<div className='flex items-center justify-center flex-col'>
				<h4 className='text-center mt-4 text-xl font-semibold '>
					Visa To Places
				</h4>
				<img
					src='https://www.rayatourism.ae/images/icons/title-vector-2.svg'
					alt='Bg-Vector'
					className={` -mt-2 transform  transition duration-300  ease-in ${
						isVisible ? 'scale-100 delay-300' : 'scale-0 delay-300'
					}`}
				/>
			</div>
			<MaxWidthWrapper>
				<div>
					<Swiper
						// rewind={true}
						effect={'coverflow'}
						grabCursor={true}
						centeredSlides={true}
						loop={true}
						slidesPerView={2}
						spaceBetween={30}
						coverflowEffect={{
							// rotate: 0,
							// stretch: 0,
							depth: 100,
							modifier: 2.5,
						}}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							dynamicBullets: true,
						}}
						// navigation={true}
						modules={[Pagination, EffectCoverflow, Autoplay]}
						className='mySwiper'
					>
						<SwiperSlide>
							<div className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[380px] h-[540px] rounded-xl p-6 border mx-8 flex flex-col justify-start items-start'>
								<div>
									<img
										src='https://images.unsplash.com/photo-1599313731897-257f8334eaf1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt=''
										className='object-fill w-[340px] h-[240px] rounded-md'
									/>
								</div>
								<h2 className='text-start text-xl mt-4 font-bold capitalize'>
									Visa To Canada
								</h2>
								<p className='text-start text-xl mt-4 font-thin'>
									Richly varied landscapes, awesome nature, luxurious
									accomodation
								</p>
								<Separator className='my-4  w-1/2 bg-cyan-300' />
								<div className='flex justify-between items-center cursor-pointer'>
									<p>View Details</p>
									<img
										src='https://www.rayatourism.ae/images/icons/logo-icon.svg'
										alt='mountain'
										className={`w-8 h-8`}
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[380px] h-[540px] rounded-xl p-6 border mx-8 flex flex-col justify-start items-start'>
								<div>
									<img
										src='https://images.unsplash.com/photo-1626836014893-37663794dca7?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt=''
										className='object-fill w-[340px] h-[240px] rounded-md'
									/>
								</div>
								<h2 className='text-start text-xl mt-4 font-bold capitalize'>
									Visa To United States
								</h2>
								<p className='text-start text-xl mt-4 font-thin'>
									Richly varied landscapes, awesome nature, luxurious
									accomodation and a wide range of wild experinces await you
								</p>
								<Separator className='my-4  bg-cyan-300' />
								<div className='flex justify-between items-center '>
									<p>View Details</p>
									<img
										src='https://www.rayatourism.ae/images/icons/logo-icon.svg'
										alt='mountain'
										className={`w-8 h-8`}
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[380px] h-[540px] rounded-xl p-6 border mx-8 flex flex-col justify-start items-start'>
								<div>
									<img
										src='https://images.unsplash.com/photo-1557767537-2eb93757757e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt=''
										className='object-fill w-[340px] h-[240px] rounded-md'
									/>
								</div>
								<h2 className='text-start text-xl mt-4 font-bold capitalize'>
									Visa To Russia
								</h2>
								<p className='text-start text-xl mt-4 font-thin'>
									Richly varied landscapes, awesome nature, luxurious
									accomodation and a wide range of awesome experinces await you
								</p>
								<Separator className='my-4  bg-cyan-300' />
								<div className='flex justify-between items-center '>
									<p>View Details</p>
									<img
										src='https://www.rayatourism.ae/images/icons/logo-icon.svg'
										alt='mountain'
										className={`w-8 h-8`}
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[380px] h-[540px] rounded-xl p-6 border mx-8 flex flex-col justify-start items-start'>
								<div>
									<img
										src='https://images.unsplash.com/photo-1634744230605-5f60794100e3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt=''
										className='object-fill w-[340px] h-[240px] rounded-md'
									/>
								</div>
								<h2 className='text-start text-xl mt-4 font-bold capitalize'>
									Visa To Turkey
								</h2>
								<p className='text-start text-xl mt-4 font-thin'>
									Richly varied landscapes, awesome nature, luxurious
									accomodation
								</p>
								<Separator className='my-4  bg-cyan-300' />
								<div className='flex justify-between items-center '>
									<p>View Details</p>
									<img
										src='https://www.rayatourism.ae/images/icons/logo-icon.svg'
										alt='mountain'
										className={`w-8 h-8`}
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[380px] h-[540px] rounded-xl p-6 border mx-8 flex flex-col justify-start items-start'>
								<div>
									<img
										src='https://plus.unsplash.com/premium_photo-1670689707529-860a6c36292b?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										alt=''
										className='object-fill w-[340px] h-[240px] rounded-md'
									/>
								</div>
								<h2 className='text-start text-xl mt-4 font-bold capitalize'>
									Visa To Egypt
								</h2>
								<p className='text-start text-xl mt-4 font-thin'>
									Richly varied landscapes, awesome nature, luxurious
									accomodation and a wide range of awesome experinces
								</p>
								<Separator className='my-4  bg-cyan-300' />
								<div className='flex justify-between items-center '>
									<p>View Details</p>
									<img
										src='https://www.rayatourism.ae/images/icons/logo-icon.svg'
										alt='mountain'
										className={`w-8 h-8`}
									/>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default CarouselSection8;
