'use client';

import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { Calendar, Earth, Location, MoneyBag, Team, Travel } from '../svgs';
// import Earth from '../public/earth.svg';

const Section3 = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isEarthHovered, setIsEarthHovered] = useState(false);
	const [isMoneyHovered, setIsMoneyHovered] = useState(false);
	const [isTravellHovered, setIsTravellHovered] = useState(false);
	const [isLocationHovered, setIsLocationHovered] = useState(false);
	const [isCalendarHovered, setIsCalendarHovered] = useState(false);
	const [isTeamHovered, setIsTeamHovered] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisible((prev) => !prev);
		}, 2000); // Change the interval duration as needed

		return () => clearInterval(interval);
	}, []);

	return (
		<div className=' h-[780px] -mt-16 w-full'>
			<h2 className='text-center text-4xl  text-cyan-700 font-cursive font-extralight'>
				We<span className='text-white'>.</span> are
				<span className='text-white'>.</span> Awesome
			</h2>
			<div className='flex items-center justify-center flex-col'>
				<h4 className='text-center mt-4 text-xl font-semibold '>
					Why Choose RayaTourism?
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
				<div className='flex justify-between items-center'>
					{/* left  */}
					<div className='h-auto w-auto flex flex-col items-center justify-center mt-8'>
						<div
							className=' w-auto h-auto mt-4'
							onMouseEnter={() => setIsEarthHovered(true)}
							onMouseLeave={() => setIsEarthHovered(false)}
						>
							<Earth
								className={`w-14 h-14 text-cyan-600 fill-current  transform transition-transform duration-500 ${
									isEarthHovered ? 'rotate-[360deg]' : ''
								}`}
							/>
							<h3 className='font-bold text-xl mt-4  text-cyan-900'>
								Diverse Destinations
							</h3>
							<p className='font-normal text-xl mt-2 '>
								Richly varied landscapes, luxury accommodation Travel.
							</p>
						</div>
						<div
							className=' w-auto h-auto mt-4'
							onMouseEnter={() => setIsMoneyHovered(true)}
							onMouseLeave={() => setIsMoneyHovered(false)}
						>
							<MoneyBag
								className={`w-14 h-14 text-cyan-600 fill-current  transform transition-transform duration-500 ${
									isMoneyHovered ? 'rotate-[360deg]' : ''
								}`}
							/>
							<h3 className='font-bold text-xl mt-4  text-cyan-900'>
								Value For Money
							</h3>
							<p className='font-normal text-xl mt-2 '>
								Richly varied landscapes, luxury accommodation Travel.
							</p>
						</div>
						<div
							className=' w-auto h-auto mt-4'
							onMouseEnter={() => setIsLocationHovered(true)}
							onMouseLeave={() => setIsLocationHovered(false)}
						>
							<Location
								className={`w-14 h-14 text-cyan-600 fill-current  transform transition-transform duration-500 ${
									isLocationHovered ? 'rotate-[360deg]' : ''
								}`}
							/>
							<h3 className='font-bold text-xl mt-4  text-cyan-900'>
								Beatiful Places
							</h3>
							<p className='font-normal text-xl mt-2 '>
								Richly varied landscapes, luxury accommodation Travel.
							</p>
						</div>
					</div>

					{/* center image */}
					<div className='mt-48 pr-8 w-[720px] h-[460px]'>
						<img
							src='https://www.rayatourism.ae/images/image2.png'
							alt='Dubai'
							className='transform  transition animate-bounce'
						/>
					</div>
					{/* right */}
					<div className='h-auto w-auto flex flex-col items-center justify-center mt-8'>
						<div
							className=' w-auto h-auto mt-4'
							onMouseEnter={() => setIsCalendarHovered(true)}
							onMouseLeave={() => setIsCalendarHovered(false)}
						>
							<Calendar
								className={`w-14 h-14 text-cyan-600 fill-current  transform transition-transform duration-500 ${
									isCalendarHovered ? 'rotate-[360deg]' : ''
								}`}
							/>
							<h3 className='font-bold text-xl mt-4  text-cyan-900'>
								Fast Booking
							</h3>
							<p className='font-normal text-xl mt-2 '>
								Richly varied landscapes, luxury accommodation Travel.
							</p>
						</div>
						<div
							className=' w-auto h-auto mt-4'
							onMouseEnter={() => setIsTeamHovered(true)}
							onMouseLeave={() => setIsTeamHovered(false)}
						>
							<Team
								className={`w-14 h-14 text-cyan-600 fill-current  transform transition-transform duration-500 ${
									isTeamHovered ? 'rotate-[360deg]' : ''
								}`}
							/>
							<h3 className='font-bold text-xl mt-4  text-cyan-900'>
								Support Team
							</h3>
							<p className='font-normal text-xl mt-2 '>
								Richly varied landscapes, luxury accommodation Travel.
							</p>
						</div>
						<div
							className=' w-auto h-auto mt-4'
							onMouseEnter={() => setIsTravellHovered(true)}
							onMouseLeave={() => setIsTravellHovered(false)}
						>
							<Travel
								className={`w-14 h-14 text-cyan-600 fill-current  transform transition-transform duration-500 ${
									isTravellHovered ? 'rotate-[360deg]' : ''
								}`}
							/>
							<h3 className='font-bold text-xl mt-4  text-cyan-900'>
								Passionate Travel
							</h3>
							<p className='font-normal text-xl mt-2 '>
								Richly varied landscapes, luxury accommodation Travel.
							</p>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default Section3;
