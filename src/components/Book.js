import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router';

const Book = () => {
	const [state, handleSubmit] = useForm('mlekdkoe');
	const navigate = useNavigate();

	if (state.succeeded) {
		navigate('/success');

		setTimeout(() => {
			navigate('/', { replace: true });
		},5000)
	}
	
	return (
		<>
			<div className="shadow-lg rounded-md my-10 bg-white flex flex-col md:flex-row justify-center gap-10 md:mx-5 md:pl-10 pl-4">
			<div className="w-full md:w-2/3 flex flex-col gap-5 my-5">
				<div className="text-center md:text-left">
					<h2 className="font-bold text-[25px] text-blue-500">BOOKING FORM</h2>
					<p className="font-bold text-[20px]">Let Us Make Your Home Better</p>
				</div>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4"
					method="POST"
					action='https://formspree.io/f/mlekdkoe'
					name="hire-me">
					<div className="flex flex-col gap-1">
						<label htmlFor="fullName">Full Name</label>
						<input className="w-full rounded-md border border-gray-300 outline-none" type="text" id="fullName" placeholder="Input Your FullName" name='fullName' />
						<ValidationError field="text" prefix="Text" errors={state.errors} />
					</div>
					<div className="flex flex-col md:flex-row gap-2 w-full">
						<div className="flex flex-col gap-1 w-full md:w-1/2">
						<label htmlFor="text">Email / Phone</label>
							<input className="w-full rounded-md border border-gray-300 outline-none" type="text" placeholder="Email / Phone Number" name='text'/>
							<ValidationError field="email" prefix="Email" errors={state.errors} />
						</div>
						<div className="flex flex-col gap-1 w-full md:w-1/2">
						<label htmlFor="date">Date</label>
							<input className="w-full rounded-md border border-gray-300 outline-none" type="date" name='date'/>
							<ValidationError field="date" prefix="Date" errors={state.errors} />
					</div>
				</div>
					<div className="flex flex-col">
						<label htmlFor="date">Address</label>
							<textarea className="rounded-md border border-gray-300 outline-none"
								cols="2" rows="3" placeholder="Input Your Address" name='address'>
						</textarea>
						</div>
						<div className="flex flex-col">
							<label htmlFor="workType">Work Type</label>
							<select id='workType' name="workType"
								className='rounded-md border border-gray-300 outline-none'>
								<option>Faucet Repair & Installation</option>
								<option>Leak Repairs and Detection</option>
								<option>Water Heater Installations & repairs</option>
								<option>Pipeline Installations and Replacements</option>
								<option>Bathroom Remodeling</option>
								<option>Water Line Repair</option>
						  </select>
						</div>
					<button
						type='submit'
						className="p-3 text-white font-bold px-8 border rounded-md bg-paleBlue hover:opacity-90 active:bg-deepBlue  border-paleBlue duration-100">
						Book Now
					</button>
			  </form>
			</div>
			<div className="hidden md:flex">
				<img src="https://images.unsplash.com/photo-1552143233-c29bb1292978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
			</div>
		</div>
		</>
	)
}

export default Book;