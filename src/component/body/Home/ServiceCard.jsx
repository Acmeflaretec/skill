import service1 from "../../../assets/service1.jpg";
import { GoArrowUpRight } from "react-icons/go";
const ServiceCard = () => {
  return (
    <>
      <div className="md:max-w-52 lg:max-w-62 xl:max-w-76 flex flex-col gap-3">
        <img src={service1} alt="" className="rounded-xl" />
        <h1 className="text-black text-md lg:text-lg font-mono lg:font-semibold text-center">
          Domestic job Recruitment
        </h1>
        <p className="text-zinc-400 text-sm lg:text-md text-center">
          Helping job seekers find the right employment opportunities in various
          industries
        </p>
        <button
          className="border border-zinc-400 flex items-center justify-center gap-3 py-2 px-4 lg:py-3 lg:px-6 rounded-xl cursor-pointer 
    bg-transparent transition-all duration-300 
    hover:bg-gradient-to-r hover:from-[var(--color-blue)] hover:via-[var(--color-lightBlue)] 
    hover:to-[var(--color-violet)] hover:text-white"
        >
          Explore Now <GoArrowUpRight />
        </button>
      </div>
    </>
  );
};

export default ServiceCard;
