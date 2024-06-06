'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './3d-card';
import { Star } from '../svgs';
import { reviewCard } from '../constants';

export function ReviewCard() {
	return (
		<CardContainer className='inter-var'>
			{reviewCard.map((item) => (
				<CardBody
					key={item.id}
					className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[290px] h-[380px] rounded-xl p-6 border mx-8 '
				>
					<CardItem
						as='p'
						translateZ='60'
						className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
					>
						{item.desc}
					</CardItem>
					<CardItem
						translateZ='50'
						className='text-xl font-bold text-neutral-600 dark:text-white mt-8'
					>
						{item.title}
					</CardItem>

					{/* <CardItem
						translateZ='100'
						rotateX={20}
						rotateZ={-10}
						className='w-full mt-4'
					>
						<img
							src={item.src}
							height='1000'
							width='1000'
							className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
							alt='thumbnail'
						/>
					</CardItem> */}

					<div className='flex justify-between items-center mt-20'>
						<CardItem
							translateZ={20}
							translateX={-40}
							as='button'
							className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
						>
							{item.title2}
						</CardItem>
						<CardItem
							translateZ={20}
							translateX={40}
							as='button'
							className='px-4 py-2 rounded-xl dark:bg-white  text-white text-xs font-bold flex'
						>
							<Star className='w-4 h-4' />
							<Star className='w-4 h-4' />
							<Star className='w-4 h-4' />
							<Star className='w-4 h-4' />
							<Star className='w-4 h-4' />
						</CardItem>
					</div>
				</CardBody>
			))}
		</CardContainer>
	);
}
