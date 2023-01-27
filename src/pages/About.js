import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-gray-100 h-full flex flex-col px-10 md:px-40 
            py-40 space-y-6"
      >
        <div>
          <h1 className="font-bold text-[24px] text-center">Our Mission</h1>
          <p>
            kasbass mission is to provide high-quality, reliable, and
            cost-effective services to customers in their repair and
            installation needs. Our mission is to be a leader in the industry,
            setting the standard for safety, innovation, customer service, and
            quality, and creating a positive work environment for our employees
            and partners. We strive to be a reliable and responsible partner to
            our customers, helping them meet their needs through cutting-edge
            technology, quality workmanship, and cost-efficiency.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-[24px] text-center">Our Story</h1>
          <p>
            Kasbass was founded in 2016 with the goal of becoming the premier
            provider of plumbing services in the area. The company strives to
            provide honest and professional service while delivering quality
            craftsmanship, reasonable prices, and superior customer service.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
