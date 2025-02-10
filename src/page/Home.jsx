import Carousel from "../component/body/Home/Carousel";
import Excellence from "../component/body/Home/Excellence";
import Mission from "../component/body/Home/Mission";
import SuccessStories from "../component/body/Home/SuccessStories";
import TrustedPartners from "../component/body/Home/TrustedPartners";
import Services from "../component/body/Home/Services";
import Blogs from "../component/body/Home/Blogs";

import Faq from "../component/body/Home/Faq";

const Home = () => {
  return (
    <>
      <div className="  p-3 lg:px-16 flex flex-col gap-7 lg:gap-12">
        <div>
          <Carousel />
        </div>

        <Excellence />
        <TrustedPartners />
        <Mission />
      </div>
      <SuccessStories />
      <div className="p-3 lg:px-16 flex flex-col gap-7 lg:gap-12">
        <Services />
        <Blogs />
        <Faq/>
      </div>
    </>
  );
};

export default Home;
