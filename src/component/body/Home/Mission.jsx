import {
  MISSION,
  SKILLLINK_MISSION,
  OUR_MISSION,
} from "../../../utils/constant";
import flat from "../../../assets/flat.jpg";
import students from "../../../assets/students.jpg";
import { Link } from "react-router";
const Mission = () => {
  return (
    <>
      <div>
        <p className=" text-sm lg:text-lg text-black mb-1">{MISSION}</p>
        <div
          className="w-52 lg:w-68 p-0.5 bg-gradient-to-r rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
          }}
        ></div>
      </div>
      <div className="w-full  xl:flex xl:gap-3">
        <div className="w-full xl:w-2/3 ">
          <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-blue)] mb-8">
            Skilllink hire : <br /> Global guidence Experts
          </h1>
          <div className="w-full xl:w-2/3 ">
            <p className="text-lg text-black  tracking-wide">
              {SKILLLINK_MISSION}
            </p>
          </div>
          <div className="w-full h-auto xl:flex xl:gap-3 mt-10 ">
            <div className="w-full xl:w-1/2 bg-cover hidden xl:block">
              <img src={students} alt="students" className="rounded-2xl " />
            </div>
            <div className="w-full xl:w-1/2  xl:p-4 xl:flex xl:flex-col xl:gap-8 ">
              <h1 className="text-[var(--color-blue)] text-3xl font-semibold md:font-bold mb-4">
                Our Mission
              </h1>
              <p className="text-black text-lg tracking-wide">{OUR_MISSION}</p>
              <Link
                to="/about"
                className="text-white text-xl p-3 rounded-2xl cursor-pointer w-full mt-5 xl:mt-0 xl:w-1/2 mx-auto block text-center no-underline"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
                }}
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden xl:block w-1/3 bg-cover   h-auto ">
          <img src={flat} alt="flat" className="rounded-2xl h-full" />
        </div>
      </div>
    </>
  );
};

export default Mission;
