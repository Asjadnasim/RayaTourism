'use client';

import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { Correct, Play } from '../svgs';

const AboutSection6 = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisible((prev) => !prev);
		}, 2000); // Change the interval duration as needed

		return () => clearInterval(interval);
	}, []);
	return (
		<div className='h-[768px] w-full mt-16'>
			<MaxWidthWrapper>
				<div className='flex justify-evenly items-center'>
					<div className='mt-48 pr-8 w-[520px] h-[360px]'>
						<img
							src='https://www.rayatourism.ae/images/image4.png'
							alt='Dubai'
							className='transform  transition animate-bounce'
						/>
					</div>
					<div className='-mt-16'>
						<h2 className='text-4xl font-extralight font-cursive text-cyan-600 text-start'>
							About <span className='text-white'>.</span> Raya Tourism
						</h2>
						<div className='flex flex-col justify-start items-start'>
							<h3 className='text-xl font-semibold text-start mt-4'>
								World Best Travel Agency
							</h3>
							<img
								src='https://www.rayatourism.ae/images/icons/title-vector-2.svg'
								alt='Bg-Vector'
								className={` -mt-2 transform  transition duration-300  ease-in ${
									isVisible ? 'scale-100 delay-300' : 'scale-0 delay-300'
								}`}
							/>
						</div>
						<div className='w-[480px] mt-8'>
							<p className='text-md font-thin word-wrap'>
								Since 2014, Raya Tourism has been the catalyst for over 500,000
								individuals, transforming their outdoor escapades into
								extraordinary memories. Regardless of whether it&apos;s a brief
								one-day retreat or an extended two-week vacation, near home or
								in a far-off destination, Raya Tourism is your trusted partner
								in curating the best outdoor experiences of your life. Join us
								in celebrating the joy of exploration as we continue to shape
								unforgettable journeys since 2014.
							</p>
						</div>
						<div className='flex justify-between items-center mt-8'>
							<div className='flex flex-col items-start justify-start '>
								<div className='flex justify-start items-start'>
									<Correct className='w-8 h-8 ' />
									<p className='pl-4'>Exceptional Travel Experiences</p>
								</div>
								<div className='flex justify-start items-start mt-4'>
									<Correct className='w-8 h-8 ' />
									<p className='pl-4'>Efficient Visa Solutions</p>
								</div>
								<div className='flex justify-start items-start mt-4'>
									<Correct className='w-8 h-8 ' />
									<p className='pl-4'>Diverse Hotel Choices</p>
								</div>
							</div>
							<div className='flex items-center justify-start relative cursor-pointer'>
								<img
									src='https://www.rayatourism.ae/images/main-slider/banner-o.jpeg'
									alt='Dubai'
									className='w-40 h-28 rounded-md object-fill '
								/>
							</div>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default AboutSection6;
