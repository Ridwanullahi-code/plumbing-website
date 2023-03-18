const Book = () => {
	return (
		<div className="shadow-lg rounded-md my-10 bg-white flex flex-col md:flex-row justify-center gap-10 md:mx-5 md:pl-10 pl-4">
			<div className="w-full md:w-2/3 flex flex-col gap-5 my-5">
				<div className="text-center md:text-left">
					<h2 className="font-bold text-[25px] text-blue-500">BOOKING FORM</h2>
					<p className="font-bold text-[20px]">Let Us Make Your Home Better</p>
				</div>
				<form className="flex flex-col gap-4">
					<div className="flex flex-col gap-1">
						<label htmlFor="fullName">Full Name</label>
					  <input className="w-full rounded-md border border-gray-300 outline-none" type="text" id="fullName" placeholder="Input Your FullName"/>
					</div>
					<div className="flex flex-col md:flex-row gap-2 w-full">
						<div className="flex flex-col gap-1 w-full md:w-1/2">
						<label htmlFor="email">Email Address</label>
						<input className="w-full rounded-md border border-gray-300 outline-none" type="email" placeholder="Input Your Email" />
						</div>
						<div className="flex flex-col gap-1 w-full md:w-1/2">
						<label htmlFor="date">Date</label>
					  <input className="w-full rounded-md border border-gray-300 outline-none" type="date" placeholder="Input Your Email"/>
					</div>
				</div>
					<div className="flex flex-col">
						<label htmlFor="date">Address</label>
						<textarea className="rounded-md border border-gray-300 outline-none" cols="2" rows="3" placeholder="Input Your Address">
						</textarea>
					</div>
					<button className="p-3 text-white font-bold px-8 border rounded-md bg-paleBlue hover:opacity-90 active:bg-deepBlue  border-paleBlue duration-100">Book Now</button>
			  </form>
			</div>
			<div className="hidden md:flex">
				<img src="https://images.unsplash.com/photo-1552143233-c29bb1292978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
			</div>
		</div>
	)
}

export default Book;