'use client';

import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';

const MapSection10 = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisible((prev) => !prev);
		}, 2000); // Change the interval duration as needed

		return () => clearInterval(interval);
	}, []);

	return (
		<div className=' h-[520px] mt-8 w-full'>
			<h2 className='text-center text-4xl  text-cyan-700 font-cursive font-extralight'>
				Our <span className='text-white'>.</span> Location
			</h2>
			<div className='flex items-center justify-center flex-col'>
				<h4 className='text-center mt-4 text-xl font-semibold '>
					Feel Free To Visit Here
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
				<div className='aspect-video w-full mt-8 rounded-md'>
					<iframe
						width='100%'
						height='350'
						frameBorder='0'
						scrolling='no'
						src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=25%C2%B021'46.8%22N%2055%C2%B023'49.8%22E+(Satu%20Mare)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						className='rounded-md'
					></iframe>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default MapSection10;
