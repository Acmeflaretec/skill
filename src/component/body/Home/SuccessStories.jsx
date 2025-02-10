import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../utils/constant";
import SuccessCard from "./SuccessCard";
const SuccessStories = () => {
  return (
    <div className="w-full bg-blue-100 px-5 md:px-16 py-10 rounded-xl md:rounded-4xl flex flex-col gap-5 my-5 md:my-10">
      <h1 className="text-[var(--color-blue)] text-center md:text-left text-2xl md:text-3xl font-bold ">
        Growth And Success Stories
      </h1>
      <p className="text-lg text-zinc-500 font-semibold md:text-left ">
        Know the Skillink impact 
      </p>
      <Carousel responsive={responsive}>
        {Array.from({ length: 5 }).map((index) => (
          <SuccessCard key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default SuccessStories;
