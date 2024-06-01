'use client';

import { usePathname } from 'next/navigation';
import MaxWidthWrapper from './MaxWidthWrapper';
import { headerLink } from './constants';

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className='sticky h-28 inset-x-0 bg-blue-500 top-0 w-full border-b border-gray-200  backdrop-blur-lg transition-all'>
			<MaxWidthWrapper>
				<nav className='flex  justify-between items-center  '>
					<div className='bg-white h-20 w-20 flex justify-between items-center  mt-4'>
						<img
							src='https://www.rayatourism.ae/images/logo-withoutbg.png'
							alt='logo'
							className='w-20 h-20'
						/>
					</div>
					<div>
						<h1 className='font-bold text-2xl text-orange-300 mt-6 '>
							Raya Tourism
						</h1>
					</div>
					{/* TEXT */}
					<ul className='flex justify-between items-center gap-2 '>
						{headerLink.map((item) => {
							const isActive = pathname.startsWith(item.link);

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
										className={`font-semibold text-lg uppercase text-white p-1 group-hover:text-teal-300 transition-colors duration-300 ${
											isActive ? 'text-teal-300' : ''
										}`}
									>
										<a href={item.link}>{item.title}</a>
									</li>
								</div>
							);
						})}
					</ul>
				</nav>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
