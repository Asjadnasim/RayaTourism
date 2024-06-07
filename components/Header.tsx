'use client';

import { usePathname } from 'next/navigation';
import MaxWidthWrapper from './MaxWidthWrapper';
import { headerLink } from './constants';
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
	const { scrollYProgress } = useScroll();
	const [visible, setVisible] = useState(true); // Initialize as visible

	useMotionValueEvent(scrollYProgress, 'change', (current) => {
		if (typeof current === 'number') {
			let direction = current - scrollYProgress.getPrevious();

			if (scrollYProgress.get() < 0.05) {
				setVisible(true); // Keep visible at the top
			} else {
				setVisible(direction < 0); // Show when scrolling up
			}
		}
	});

	const pathname = usePathname();

	return (
		<AnimatePresence mode='wait'>
			{visible && (
				<motion.div
					initial={{
						opacity: 1,
						y: 0, // Start at the top
					}}
					animate={{
						y: visible ? 0 : -100,
						opacity: visible ? 1 : 0,
					}}
					transition={{
						duration: 0.2,
					}}
					className='fixed inset-x-0 top-0 z-50'
				>
					<nav className='h-28 bg-cyan-500 border-b border-gray-200 backdrop-blur-lg transition-all'>
						<MaxWidthWrapper>
							<div className='flex justify-between items-center'>
								<div className='bg-white h-20 w-20 flex items-center mt-4'>
									<img
										src='https://www.rayatourism.ae/images/logo-withoutbg.png'
										alt='logo'
										className='w-20 h-20'
									/>
								</div>
								<div>
									<h1 className='font-bold text-2xl text-orange-300 mt-6'>
										Raya Tourism
									</h1>
								</div>
								<ul className='flex justify-between items-center gap-2'>
									{headerLink.map((item) => {
										const isActive =
											pathname === item.link ||
											(pathname === '/' && item.id === '1');

										return (
											<div
												key={item.id}
												className='flex flex-col items-center group transition-all'
											>
												<img
													src='https://www.rayatourism.ae/images/icons/logo-icon.svg'
													alt='mountain'
													className={`w-8 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
														isActive ? 'opacity-100' : ''
													}`}
												/>
												<li
													className={`font-semibold text-lg uppercase p-1 group-hover:text-teal-300 transition-colors duration-300 ${
														isActive ? 'text-teal-300' : 'text-white'
													}`}
												>
													<a href={item.link}>{item.title}</a>
												</li>
											</div>
										);
									})}
								</ul>
							</div>
						</MaxWidthWrapper>
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Navbar;
