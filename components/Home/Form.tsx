'use client';

import MaxWidthWrapper from '../MaxWidthWrapper';
import {
	BedIcon,
	CarIcon,
	ClipboardPlus,
	Handshake,
	Hotel,
	HotelIcon,
	NotebookText,
	PlaneIcon,
	Ship,
} from 'lucide-react';
import { SetStateAction, useState } from 'react';
import FlightsForm from './forms/FlightsForm';
import HotelForm from './forms/HotelForm';
import VisaForm from './forms/VisaForm';
import InsuranceForm from './forms/InsuranceForm';
import SafariForm from './forms/SafariForm';
import CruizeForm from './forms/CruizeForm';

const InputForm = () => {
	const [selectedForm, setSelectedForm] = useState('flight');

	const handleIconClick = (formType: SetStateAction<string>) => {
		setSelectedForm(formType);
	};

	return (
		<div className='relative  h-[380px] w-[1180px] rounded-lg bg-cyan-600  -mt-[116px] bg-no-repeat bg-cover mx-auto'>
			<MaxWidthWrapper>
				<div className='flex items-center flex-col'>
					<div className='flex justify-between items-center rounded-t-lg bg-orange-400 w-[1180px] h-[80px] gap-2 px-4'>
						<div
							className='flex justify-between items-center gap-2 group transition-all hover:cursor-pointer'
							onClick={() => handleIconClick('flight')}
						>
							<PlaneIcon className='text-white fill-current group-hover:text-cyan-600' />
							<h2 className='text-white font-semibold text-2xl group-hover:text-cyan-600'>
								Flight
							</h2>
						</div>
						<div
							className='flex justify-between items-center gap-2 group transition-all hover:cursor-pointer'
							onClick={() => handleIconClick('hotel')}
						>
							<BedIcon className='text-white fill-current group-hover:text-cyan-600' />
							<h2 className='text-white font-semibold text-2xl group-hover:text-cyan-600'>
								Hotel
							</h2>
						</div>
						<div
							className='flex justify-between items-center gap-2 group transition-all hover:cursor-pointer'
							onClick={() => handleIconClick('visa')}
						>
							<NotebookText className='text-white group-hover:text-cyan-600' />
							<h2 className='text-white font-semibold text-2xl group-hover:text-cyan-600'>
								Visa
							</h2>
						</div>
						<div
							className='flex justify-between items-center gap-2 group transition-all hover:cursor-pointer'
							onClick={() => handleIconClick('insurance')}
						>
							<Handshake className='text-white font-semibold text-2xl group-hover:text-cyan-600' />
							<h2 className='text-white font-semibold text-2xl group-hover:text-cyan-600'>
								Insurance
							</h2>
						</div>
						<div
							className='flex justify-between items-center gap-2 group transition-all hover:cursor-pointer'
							onClick={() => handleIconClick('safari')}
						>
							<CarIcon className='text-white font-semibold text-2xl group-hover:text-cyan-600' />
							<h2 className='text-white font-semibold text-2xl group-hover:text-cyan-600'>
								Safari
							</h2>
						</div>
						<div
							className='flex justify-between items-center gap-2 group transition-all hover:cursor-pointer'
							onClick={() => handleIconClick('cruize')}
						>
							<Ship className='text-white font-semibold text-2xl group-hover:text-cyan-600' />
							<h2 className='text-white font-semibold text-2xl group-hover:text-cyan-600'>
								Dhow cruize
							</h2>
						</div>
					</div>

					{selectedForm === 'flight' && <FlightsForm />}
					{selectedForm === 'hotel' && <HotelForm />}
					{selectedForm === 'visa' && <VisaForm />}
					{selectedForm === 'insurance' && <InsuranceForm />}
					{selectedForm === 'safari' && <SafariForm />}
					{selectedForm === 'cruize' && <CruizeForm />}
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default InputForm;
