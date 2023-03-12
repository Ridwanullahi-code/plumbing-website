import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { service } from '../functions/pictures';

const Result = () => {
    return (
        <section className="bg-gray-100">
            <Navbar />
            <div className="bg-white shadow md:mx-5 rounded-md py-8 my-5" id="service">
            <h2 className="text-blue-500 font-bold text-4xl text-center">Plumbing Repairing Service</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-center py-2" style={{ fontSize: '14px' }}>
                If you need any help with your plumbing, give us a call at kasbass Plumbing. We offer variety of
                plumbing services in kasbass enterprises
            </p>
            <div className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {service.map((data, index) => (
                <Card
                key={index}
                image={data.image}
                alt={data.alt}
                skill={data.skill}
                summary={data.summary}
                />
            ))}
            </div>
            </div>
        </div>
        <Footer />
    </section>
        
    )
}

export default Result;