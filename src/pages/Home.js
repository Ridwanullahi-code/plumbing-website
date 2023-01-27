import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { service } from '../functions/pictures'
import { feedback } from '../functions/customerFeedback'
import Card from '../components/Card';
import Projects from '../components/Projects';
import Choose from '../components/Choose';


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto">
        <Banner />
      </div>
      <div className="bg-white shadow md:mx-5 rounded-md py-8 my-5" id="service">
        <h2 className="text-blue-500 font-bold text-4xl text-center">Plumbing Repairing Service</h2>
        <p className="text-gray-500 max-w-lg mx-auto text-center py-2" style={{ fontSize: '14px' }}>
          If you need any help with your plumbing, give us a call at abass Plumbing. We offer variety of
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
      <div className="my-8 justify-center items-center bg-white shadow pt-10 pb-5 md:mx-5 rounded-md">
        <Projects />
      </div>
      <div>
        <Choose />
        </div>
      <div className="py-5 bg-white shadow rounded-md my-5 md:mx-5 px-3 md:px-0">
        <div className='text-center flex flex-col space-y-2 my-6'>
          <h2 className="text-zinc-600 font-bold">TESTIMONIALS</h2>
          <p className="font-bold text-3xl md:text-4xl text-blue-500">What clients say</p>
          <p className=" max-w-sm md:max-w-lg mx-auto font-tin text-sm text-zinc-600 py-2">We place huge value on strong relationships and have seen the benefit they
            bring to our business. Customer feedback is vital in helping us to get it right
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols:3 xl:grid-cols-3 gap-x-5
            my-8 gap-y-5 justify-center bg-white p-10 md:mx-0 rounded-md">
          {feedback.map((feed, index) => (
            <Testimonial
            key={index}
            image={feed.image}
            alt={feed.alt}
            message={feed.message}
            name={feed.name}
            prof={feed.prof}
          />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
