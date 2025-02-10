import carousel from "../../../assets/carousel.png";
import { FaWhatsapp } from "react-icons/fa";
const Carousel = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-r from-purple-200 via-white to-blue-200 rounded-2xl">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-medium text-gray-900">
            Meet with 80+ <br /> Universities at the <br />
            World <span className="font-bold text-black">Education Fair</span>
            <br /> In Your City!
          </h1>
         
          <p className="mt-4 text-gray-600 text-md md:text-lg">
            Meet representatives from top universities from UK, USA, Canada,
            Australia, New Zealand, Singapore, Ireland...
          </p>
          {/* <div className="mt-6 md:flex w-full  md:justify-center md:gap-4">
            <button className="bg-[var(--color-blue)] mb-3 lg:mb-0  w-full text-white md:py-3 lg:px-6 lg:py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
              Register Now
            </button>
            <button className="border border-green-300 w-full  bg-white text-green-400  px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-green-600">
              <span><FaWhatsapp/></span> WhatsApp
            </button>
          </div> */}
          <div className="mt-6  lg:flex justify-center md:justify-start gap-4">
          <button className="bg-[var(--color-blue)] w-full mb-4 lg:mb-0 lg:w-auto text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
            Register Now
          </button>
          <button className="border w-full lg:w-auto border-green-500 bg-white text-green-400 px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white">
            <span><FaWhatsapp/></span> WhatsApp
          </button>
        </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-purple-300 opacity-50 rounded-full"></div>
          <img
            src={carousel}
            alt="Education Fair"
            className="w-full md:w-3/4 lg:w-2/3 object-cover relative"
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
