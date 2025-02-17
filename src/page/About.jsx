import { Link } from "react-router";

const About = () => {
  return (
    <div className="p-3 lg:px-16 flex flex-col gap-7 lg:gap-12">
      {/* About Section */}
      <div>
        <p className="text-sm lg:text-lg text-black mb-1">ABOUT US</p>
        <div
          className="w-52 lg:w-68 p-0.5 bg-gradient-to-r rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
          }}
        ></div>
      </div>

      <div className="w-full xl:flex xl:gap-12 items-center">
        <div className="w-full xl:w-1/2 grid grid-cols-2 gap-6">
          <div className="relative h-[300px] mt-12 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
              alt="Students studying abroad"
              className="rounded-2xl w-full h-full object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--color-lightBlue)] rounded-full opacity-20"></div>
          </div>
          <div className="h-[300px] transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="International campus"
              className="rounded-2xl w-full h-full object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300" 
            />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[var(--color-pink)] rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="w-full xl:w-1/2 mt-8 xl:mt-0">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-blue)] mb-6 relative">
            Your Gateway to Global Education
            <span className="absolute -top-6 -left-6 text-6xl text-[var(--color-lightBlue)] opacity-10">✈️</span>
          </h2>
          
          <p className="text-lg text-black tracking-wide mb-8">
            At SkillLink, we believe in transforming dreams of international education into reality. With over a decade of experience, we've helped thousands of students achieve their goals of studying abroad.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-4xl font-bold text-[var(--color-blue)] animate-pulse">1500+</h3>
              <p className="text-gray-600">Students Placed</p>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-4xl font-bold text-[var(--color-pink)] animate-pulse">50+</h3>
              <p className="text-gray-600">Partner Universities</p>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-4xl font-bold text-[var(--color-violet)] animate-pulse">15+</h3>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
               to ="/contact"
              className="text-white text-lg px-8 py-3 rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg flex-1"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
              }}
            >
              Learn More About Us
            </Link>
            <Link
              to ="/contact"
              className="text-[var(--color-blue)] text-lg px-8 py-3 rounded-xl cursor-pointer border-2 border-[var(--color-blue)] hover:bg-[var(--color-blue)] hover:text-white transition-colors duration-300 flex-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="w-full xl:flex xl:gap-12 items-center mt-16">
        <div className="w-full xl:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
            alt="Our Mission"
            className="rounded-2xl w-full h-[400px] object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
        <div className="w-full xl:w-1/2 mt-8 xl:mt-0">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-[var(--color-blue)] mb-4">Our Mission</h3>
            <p className="text-lg text-black tracking-wide">
              To empower students with comprehensive educational consulting services that transform their international education dreams into reality. We strive to be the bridge that connects ambitious minds to world-class educational opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[var(--color-blue)] mb-4">Our Vision</h3>
            <p className="text-lg text-black tracking-wide">
              To become the global leader in educational consulting, creating a world where quality education knows no boundaries. We envision a future where every student has access to transformative educational experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose SkillLink Section */}
      <div className="w-full xl:flex xl:gap-12 items-center mt-16">
        <div className="w-full xl:w-1/2 order-2 xl:order-1">
          <h3 className="text-3xl font-bold text-[var(--color-blue)] mb-6">Why Choose SkillLink?</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[var(--color-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75V22" />
              </svg>
              <h4 className="text-xl font-semibold text-[var(--color-blue)] mb-2">Expert Guidance</h4>
              <p className="text-gray-600">Personalized counseling from experienced professionals</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[var(--color-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              <h4 className="text-xl font-semibold text-[var(--color-pink)] mb-2">Visa Support</h4>
              <p className="text-gray-600">Complete assistance with visa application process</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[var(--color-violet)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v6" />
                </svg>
              <h4 className="text-xl font-semibold text-[var(--color-violet)] mb-2">University Selection</h4>
              <p className="text-gray-600">Strategic university recommendations based on your profile</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[var(--color-lightBlue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              <h4 className="text-xl font-semibold text-[var(--color-lightBlue)] mb-2">Career Support</h4>
              <p className="text-gray-600">Long-term career planning and guidance</p>
            </div>
          </div>
        </div>
        <br />
        <div className="w-full xl:w-1/2 order-1 xl:order-2 mb-8 xl:mb-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Why Choose Us"
            className="rounded-2xl w-full h-[500px] object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
