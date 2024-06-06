import { cn } from '@/lib/utils';
import { Button } from './button';

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
	img,
	id,
	imgClassName,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	id?: number;
	img?: string;
	imgClassName?: string;
}) => {
	return (
		<div
			className={cn(
				'flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(circle,white,transparent_140%)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black group relative',
				className
			)}
		>
			<img
				src={img}
				alt=''
				className={cn(
					'object-fill rounded-xl transition duration-300 ease-in-out group-hover:opacity-40',
					imgClassName
				)}
			/>
			<div className='flex justify-center items-center absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full group-hover:left-1/2 group-hover:translate-x-0 group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out pointer-events-none'>
				<Button
					variant={'outline'}
					className='font-semibold text-xl bg-cyan-300 text-gray-900'
				>
					{title}
				</Button>
			</div>
		</div>
	);
};
