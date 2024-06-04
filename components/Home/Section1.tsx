'use client';

import React, { useRef } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { image } from '../constants';

const Section1 = () => {
	const plugin = useRef(Autoplay({ delay: 3000 }));

	return (
		<div className='relative h-[480px] w-full top-0 bg-no-repeat bg-cover'>
			<Carousel
				opts={{
					align: 'start',
					loop: true,
				}}
				className='w-full'
				plugins={[plugin.current]}
			>
				<CarouselContent className='w-full h-[480px]'>
					{image.map((item) => (
						<CarouselItem key={item.id} className='w-full h-[480px]'>
							<img
								src={item.src}
								alt={item.alt}
								className='w-full h-full object-cover'
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='absolute top-1/2 left-0 transform -translate-y-1/2' />
				<CarouselNext className='absolute top-1/2 right-0 transform -translate-y-1/2' />
			</Carousel>
		</div>
	);
};

export default Section1;
