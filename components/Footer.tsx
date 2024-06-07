import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Twitter } from './svgs';
import { Separator } from './ui/separator';
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
	return (
		<div
			className='bg-cyan-400 w-full h-auto mt-12 relative bg-no-repeat bg-cover'
			id='contact'
		>
			<div className='flex justify-evenly items-center'>
				{/* icon */}
				<div className='mt-8 flex flex-col items-center justify-center'>
					<img
						src='https://www.rayatourism.ae/images/logo-withoutbg.png'
						alt='logo'
						className='w-20 h-20'
					/>
					<div className='w-[260px] mt-4'>
						<p className='items-center text-center text-md font-semibold text-white'>
							Raya Tourism: Efficient visa, flights, hotels. Exceptional travel
							experiences, professional service.
						</p>
						<div className='flex justify-between items-center mt-8'>
							<Instagram className='w-8 h-8 ' />
							<Facebook className='w-8 h-8 ' />
							<Linkedin className='w-8 h-8 ' />
							<Twitter className='w-8 h-8 ' />
						</div>
					</div>
				</div>

				{/* about us */}
				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-white text-center text-xl font-semibold pb-8'>
						About Us
					</h2>
					<div className=''>
						<h2 className='text-white text-center text-lg font-thin m-2'>
							Contact Us
						</h2>
						<h2 className='text-white text-center text-lg font-thin m-2'>
							Privacy Policy
						</h2>
						<h2 className='text-white text-center text-lg font-thin m-2'>
							Terms & Conditions
						</h2>
						<h2 className='text-white text-center text-lg font-thin m-2'>
							Help
						</h2>
					</div>
				</div>

				{/* contact us */}
				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-white text-center text-xl font-semibold'>
						Contact Us
					</h2>
					<div className='flex items-center mt-4 '>
						<Phone className='w-6 h-6 ' />
						<h2 className='text-white text-center text-lg font-thin m-2'>
							+931 2344065373
						</h2>
					</div>
					<div className='flex items-center '>
						<Phone className='w-6 h-6 ' />
						<h2 className='text-white text-center text-lg font-thin m-2'>
							+121 5423465373
						</h2>
					</div>
					<div className='flex items-center '>
						<Phone className='w-6 h-6 ' />
						<h2 className='text-white text-center text-lg font-thin m-2'>
							+271 3424065373
						</h2>
					</div>
					<div className='flex items-center '>
						<Phone className='w-6 h-6 ' />
						<h2 className='text-white text-center text-lg font-thin m-2'>
							+451 5434565373
						</h2>
					</div>
				</div>
			</div>
			<MaxWidthWrapper>
				<div className='flex items-center justify-center mt-8'>
					<Separator className='my-4 text-white w-1/2 items-center justify-center' />
				</div>
			</MaxWidthWrapper>
			<div className='flex justify-evenly items-center py-8'>
				<p className='items-center text-center text-md font-semibold text-white'>
					© Company 2024. All rights reserved.
				</p>
				<p className='items-center text-center text-md font-semibold text-white'>
					Created By: Asjad Nasim
				</p>
			</div>
		</div>
	);
};

export default Footer;
