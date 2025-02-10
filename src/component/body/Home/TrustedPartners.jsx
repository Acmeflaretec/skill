import { universities, TRUSTED } from "../../../utils/constant";

const TrustedPartners = () => {
  return (
    <div>
      <h1 className="font-normal tracking-wide text-lg md:text-xl lg:text-3xl text-black text-center">
        {TRUSTED}
      </h1>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 items-center animate-scroll whitespace-nowrap mt-8">
          {universities.concat(universities).map((uni, index) => (
            <img
              key={index}
              src={uni?.university}
              alt="university"
              className="w-52 inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
