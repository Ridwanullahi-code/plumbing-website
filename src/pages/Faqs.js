import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Faq from "react-faq-component";
import { data } from "../functions/data";

const Faqs = () => {
    const styles = {
        bgColor: '#1E3A8A',
        titleTextColor: 'white',
        rowTitleColor: 'white',
        rowContentColor: 'gray',
        arrowColor: 'white'
    };

    return (
        <div>
            <Navbar color="bg-gray-900" />
            <div className="bg-blue-900 py-10 px-5 md:px-10 text-white
                flex flex-col space-y-4">
                <h1 className="text-center font-bold text-[20px] md:text-[25px]">Frequently Asked Questions</h1>
                <Faq
                    data={data}
                    styles={styles}
                />
            </div>
            <Footer />
        </div>
    )
}

export default Faqs;