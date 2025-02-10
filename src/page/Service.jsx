const Service = () => {
  return (
    <div className="p-3 lg:px-16 flex flex-col gap-7 lg:gap-12">
      {/* Services Header */}
      <div>
        <p className="text-sm lg:text-lg text-black mb-1">OUR SERVICES</p>
        <div
          className="w-52 lg:w-68 p-0.5 bg-gradient-to-r rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
          }}
        ></div>
      </div>

      {/* Documentation Service */}
      <div className="w-full xl:flex xl:gap-12 items-center">
        <div className="w-full xl:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846" 
            alt="documentation services"
            className="rounded-2xl w-full h-[400px] object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
        <div className="w-full xl:w-1/2 mt-8 xl:mt-0">
          <h2 className="text-3xl font-bold text-[var(--color-blue)] mb-6">Documentation Assistance</h2>
          <p className="text-lg text-black tracking-wide mb-8">
            Professional help with all your documentation needs for studying abroad. We ensure your application process is smooth and error-free.
          </p>
          <ul className="grid gap-4">
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-blue)]">✓</div>
              <span>Application document preparation</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-blue)]">✓</div>
              <span>Document verification services</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interview Preparation */}
      <div className="w-full xl:flex xl:gap-12 items-center">
        <div className="w-full xl:w-1/2 order-2">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
            alt="interview preparation"
            className="rounded-2xl w-full h-[400px] object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
        <div className="w-full xl:w-1/2 mt-8 xl:mt-0 order-1">
          <h2 className="text-3xl font-bold text-[var(--color-pink)] mb-6">Interview Preparation</h2>
          <p className="text-lg text-black tracking-wide mb-8">
            Comprehensive interview training for visa and university admissions to help you present yourself confidently.
          </p>
          <ul className="grid gap-4">
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-pink)]">✓</div>
              <span>Mock interview sessions</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-pink)]">✓</div>
              <span>Interview tips and techniques</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Language Training */}
      <div className="w-full xl:flex xl:gap-12 items-center">
        <div className="w-full xl:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173" 
            alt="language training"
            className="rounded-2xl w-full h-[400px] object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
        <div className="w-full xl:w-1/2 mt-8 xl:mt-0">
          <h2 className="text-3xl font-bold text-[var(--color-violet)] mb-6">Language Training</h2>
          <p className="text-lg text-black tracking-wide mb-8">
            Expert language instruction to help you succeed in your studies abroad with comprehensive training programs.
          </p>
          <ul className="grid gap-4">
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-violet)]">✓</div>
              <span>IELTS preparation</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-violet)]">✓</div>
              <span>Language proficiency courses</span>
            </li>
          </ul>
        </div>
      </div>

      {/* University Selection */}
      <div className="w-full xl:flex xl:gap-12 items-center">
        <div className="w-full xl:w-1/2 order-2">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
            alt="university selection"
            className="rounded-2xl w-full h-[400px] object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
        <div className="w-full xl:w-1/2 mt-8 xl:mt-0 order-1">
          <h2 className="text-3xl font-bold text-[var(--color-lightBlue)] mb-6">University Selection</h2>
          <p className="text-lg text-black tracking-wide mb-8">
            Strategic university recommendations based on your academic profile, career goals, and preferences.
          </p>
          <ul className="grid gap-4">
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-lightBlue)]">✓</div>
              <span>University shortlisting</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-lightBlue)]">✓</div>
              <span>Program selection assistance</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Student Support Services */}
      <div className="w-full xl:flex xl:gap-12 items-center">
        <div className="w-full xl:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
            alt="student support"
            className="rounded-2xl w-full h-[400px] object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
        <div className="w-full xl:w-1/2 mt-8 xl:mt-0">
          <h2 className="text-3xl font-bold text-[var(--color-blue)] mb-6">Student Support Services</h2>
          <p className="text-lg text-black tracking-wide mb-8">
            Comprehensive support throughout your study abroad journey, from application to arrival.
          </p>
          <ul className="grid gap-4">
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-blue)]">✓</div>
              <span>Visa application assistance</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-blue)]">✓</div>
              <span>Scholarships and financial aid</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-blue)]">✓</div>
              <span>Pre & post departure support</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-[var(--color-blue)]">✓</div>
              <span>Accommodation arrangements</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;