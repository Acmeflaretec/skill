import {
  important_Links,
  Test_prep,
  Study_destinations,
  Student_services,
  branches,
} from "../utils/constant";
const Footer = () => {
  return (
 
    <>
  <div className="w-full px-6 md:px-16 py-10 bg-blue-100 flex flex-col gap-5 rounded-t-3xl mt-16">
    {/* Heading & Subscribe Button */}
    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <h1 className="text-lg md:text-4xl font-semibold mb-3 md:mb-0">
        Subscribe For More Info
      </h1>
      <button className="bg-[var(--color-blue)] text-sm px-4 py-3 rounded-xl text-white font-light">
        Subscribe Now
      </button>
    </div>

    {/* Divider */}
    <hr className="border border-zinc-400" />

    {/* Footer Navigation */}
    <footer className="footer p-6 md:p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {/* Important Links */}
      <nav>
        <h6 className="footer-title text-[var(--color-blue)]">
          Important Links
        </h6>
        {important_Links?.map((item) => (
          <a className="link link-hover text-zinc-500 block" key={item?.id}>
            {item?.name}
          </a>
        ))}
      </nav>

      {/* Test Prep */}
      <nav>
        <h6 className="footer-title text-[var(--color-blue)]">Test Prep</h6>
        {Test_prep?.map((item) => (
          <a className="link link-hover text-zinc-500 block" key={item?.id}>
            {item?.prep}
          </a>
        ))}
      </nav>

      {/* Study Destinations */}
      <nav>
        <h6 className="footer-title text-[var(--color-blue)]">
          Study Destinations
        </h6>
        {Study_destinations?.map((item) => (
          <a className="link link-hover text-zinc-500 block" key={item?.id}>
            {item?.destination}
          </a>
        ))}
      </nav>

      {/* Student Services */}
      <nav>
        <h6 className="footer-title text-[var(--color-blue)]">
          Student Services
        </h6>
        {Student_services?.map((item) => (
          <a className="link link-hover text-zinc-500 block" key={item?.id}>
            {item?.services}
          </a>
        ))}
      </nav>

      {/* Branches */}
      <nav>
        <h6 className="footer-title text-[var(--color-blue)]">
          {branches?.title}
        </h6>
        {branches?.locations?.map((location, index) => (
          <div key={index}>
            <a className="link link-hover font-bold text-zinc-600">
              {location?.category}
            </a>
            {location?.branches?.map((branch, idx) => (
              <a className="link link-hover block mb-1 text-zinc-500" key={idx}>
                {branch}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </footer>

   
    <hr className="border border-zinc-400" />

 
    <div className="w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-3 md:space-y-0">
      <p className="text-sm text-zinc-400">Copyright 1991-2025. Skillink Hire</p>

      <div className="flex items-center gap-4 text-sm text-zinc-400">
        <p>Disclaimer</p>
        <p>Privacy Policy</p>
        <p>Sitemap</p>
      </div>
    </div>
  </div>
</>

  );
};

export default Footer;
