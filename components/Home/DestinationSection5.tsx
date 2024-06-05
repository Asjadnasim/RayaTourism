'use client';

import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { grid } from '../constants';

const DestinationSection5 = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisible((prev) => !prev);
		}, 2000); // Change the interval duration as needed

		return () => clearInterval(interval);
	}, []);

	return (
		<div className=' h-[1820px] mt-8 w-full'>
			<h2 className='text-center text-4xl  text-cyan-700 font-cursive font-extralight'>
				Top <span className='text-white'>.</span> Destinations
			</h2>
			<div className='flex items-center justify-center flex-col'>
				<h4 className='text-center mt-4 text-xl font-semibold '>
					Trending Destinations
				</h4>
				<img
					src='https://www.rayatourism.ae/images/icons/title-vector-2.svg'
					alt='Bg-Vector'
					className={`-mt-2 transform  transition duration-300  ease-in ${
						isVisible ? 'scale-100 delay-300' : 'scale-0 delay-300'
					}`}
				/>
			</div>
			<MaxWidthWrapper>
				<BentoGrid className='mx-auto md:auto-rows-[20rem] mt-2'>
					{grid.map((item) => (
						<BentoGridItem
							className={item.className}
							id={item.id}
							title={item.title}
							description=''
							header=''
							key={item.id}
							imgClassName={item.imgClassName}
							img={item.src}
						/>
					))}
				</BentoGrid>
			</MaxWidthWrapper>
		</div>
	);
};

export default DestinationSection5;
