import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Message = () => {
    return (
        <>
            <Navbar />
            <section className='bg-gray-100 flex flex-col items-center py-10 space-y-6'>
            <h3 className="text-2xl font-bold">Feel free to ask anything</h3>
            <form  method="POST" className="flex flex-col space-y-6 max-w-xl">
                    <input type="text" name="username" placeholder="Name" required="required"
                        className="relative block w-full appearance-none rounded-md
                         border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                          focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
                          "
                    />
                    <span>
                        <input type="email" name="useremail" placeholder="example@gmail.com"
                        required="required" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                        className="relative peer block w-full appearance-none rounded-md
                         border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                          focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        valid:focus:border-green-600 valid:focus:ring-green-600 valid:border-2
                        focus:invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                        <p className="peer mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                        Please provide a valid email address.
                        </p>
                    </span>
                
                <textarea name="message" rows="7" cols="40" className="relative block w-full appearance-none rounded-md
                         border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10
                          focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Message here" maxLength="500" /> 
                    <input className="border p-2 rounded-md text-white bg-paleBlue hover:opacity-90
                 active:bg-deepBlue" type="submit" value="Submit"/>
            </form>
            </section>
            <Footer />
        </>
        
    )
}

export default Message;