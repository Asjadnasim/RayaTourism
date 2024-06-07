'use client';

import React, { useEffect, useState } from 'react';
import { visa } from '../constants';
import { Button } from '../ui/button';
import { BookUser } from 'lucide-react';
import MaxWidthWrapper from '../MaxWidthWrapper';

const VisaSection2 = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisible((prev) => !prev);
		}, 2000); // Change the interval duration as needed

		return () => clearInterval(interval);
	}, []);

	return (
		<div className=' h-[1880px] mt-20 w-full'>
			<h2 className='text-center text-4xl  text-cyan-700 font-cursive font-extralight'>
				Visa <span className='text-white'>.</span> Packages
			</h2>
			<div className='flex items-center justify-center flex-col'>
				<h4 className='text-center mt-4 text-xl font-semibold '>
					Featured Packaged Products
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
				<div className='grid grid-cols-4 gap-5  p-5'>
					{visa.map((item) => (
						<div className='p-5 relative group' key={item.id}>
							<img
								src={item.src}
								alt='Dubai'
								className='w-72 h-48 object-fill rounded-xl transition duration-300 ease-in-out group-hover:opacity-40'
							/>
							<h2 className='text-start text-2xl mt-4 font-normal pl-2'>
								{item.title}
							</h2>
							<h2 className='text-start text-xl font-normal pl-2'>
								{item.title2}
							</h2>
							<h3 className='text-start text-xl mt-2 font-semibold uppercase text-cyan-600 pl-2'>
								{item.start}
							</h3>
							<div className='flex justify-center items-center absolute top-1/3 left-0 transform -translate-y-1/2 -translate-x-full group-hover:left-10 group-hover:translate-x-0 group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out cursor-pointer'>
								<Button variant={'outline'} className='font-semibold text-xl '>
									<BookUser className=' pr-4 w-12 h-12' />
									Details
								</Button>
							</div>
						</div>
					))}
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default VisaSection2;
