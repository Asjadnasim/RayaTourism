import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	date: z.date({
		required_error: 'Date is required',
		invalid_type_error: 'Invalid date',
	}),
});

const CruizeForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: '',
			date: new Date(),
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<div>
			<h2 className='text-lg text-center mt-2 font-semibold text-orange-400'>
				Fill this Dhow-Cruize Enquiry Form, We will contact you soon..
			</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='w-[1180px]  flex flex-col justifu-center items-center'
				>
					<div className='grid grid-cols-3  gap-5 '>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem className='rounded-lg pl-4 mt-2'>
									<FormLabel className='text-white font-semibold text-xl uppercase pl-4'>
										Number Of Persons
									</FormLabel>
									<FormControl className=' '>
										<Input
											placeholder='Enter Number Of Persons'
											{...field}
											className='rounded-3xl w-[350px]'
										/>
									</FormControl>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='date'
							render={({ field }) => (
								<FormItem className='rounded-lg  mt-2'>
									<FormLabel className='text-white font-semibold text-xl pl-4 uppercase'>
										Date
									</FormLabel>
									<FormControl className=''>
										<Controller
											control={form.control}
											name='date'
											render={({ field }) => (
												<DatePicker
													selected={field.value}
													onChange={(date: any) => field.onChange(date)}
													className='rounded-3xl w-[350px] p-2'
													dateFormat='MMMM d, yyyy'
												/>
											)}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem className='rounded-lg pr-4 mt-2'>
									<FormLabel className='text-white font-semibold text-xl uppercase pl-4'>
										Type of Cruize
									</FormLabel>
									<FormControl className=' '>
										<Input
											placeholder='Type of Cruize'
											{...field}
											className='rounded-3xl w-[350px]'
										/>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					<Button
						type='submit'
						className='mt-4 rounded-3xl text-xl font-semibold uppercase text-white bg-orange-400 hover:bg-orange-500 hover:text-cyan-600 cursor-pointer transition-all'
					>
						Enquire Now
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default CruizeForm;
