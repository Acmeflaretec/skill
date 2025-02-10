import React, { useState } from "react";
import Modal from "../../common/Modal";
const services = [
  {
    id: 1,
    title: "Study Abroad Counselling",
    description:
      "Our experienced counsellors helps students identify a program that perfectly matches both their educational and financial background.",
    image: "https://img.icons8.com/color/96/000000/student-center.png",
  },
  {
    id: 2,
    title: "Course Advice",
    description:
      "Our comprehensive scholarship assistance includes appraising eligibility criteria to guide applicants in the right manner",
    image: "https://img.icons8.com/color/96/000000/training.png",
  },
  {
    id: 3,
    title: "University/College Application",
    description:
      "We offer Guidance throughout the entire admission process to ensure a complete, error-free application",
    image: "https://img.icons8.com/color/96/000000/university.png",
  },
  {
    id: 4,
    title: "Documentation",
    description:
      "Complete assistance with visa and university documentation requirements",
    image: "https://img.icons8.com/color/96/000000/document.png",
  },
  {
    id: 5,
    title: "Interview Preparation",
    description: "Comprehensive training for visa and admission interviews",
    image: "https://img.icons8.com/color/96/000000/interview.png",
  },
  {
    id: 6,
    title: "Language Training",
    description: "Expert IELTS and language proficiency training",
    image: "https://img.icons8.com/color/96/000000/language.png",
  },
  {
    id: 7,
    title: "Visa Processing",
    description: "Complete visa application and processing support",
    image: "https://img.icons8.com/color/96/000000/passport.png",
  },
  {
    id: 8,
    title: "Pre & Post Departure Support",
    description: "Comprehensive support for your entire study abroad journey",
    image: "https://img.icons8.com/color/96/000000/airplane-take-off.png",
  },
];

const ServiceCard = ({ title, description, image }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setShowModal(false);
    setFormData({ name: "", phone: "" });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex flex-col h-full">
        <div className="mb-4 flex justify-center">
          <img src={image} alt={title} className="w-16 h-16 object-contain" />
        </div>
        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-[var(--color-blue)] mb-2 text-center">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow text-center">
            {description}
          </p>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="text-[var(--color-blue)] hover:text-[var(--color-lightBlue)] font-medium inline-flex items-center justify-center transition-colors duration-300"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <Modal isOpen={showModal} toggleModal={(prev) => setShowModal(!prev)}>
        {" "}
        <div className="bg-white p-8 rounded-lg w-96 relative">
         

          <h3 className="text-2xl font-bold text-[var(--color-blue)] mb-6">
            Get a Call Back
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--color-blue)] focus:ring-[var(--color-blue)] sm:text-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--color-blue)] focus:ring-[var(--color-blue)] sm:text-sm"
                required
              />

            </div>

            <button
              type="submit"
              className="w-full text-white py-2 px-4 rounded-md"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm lg:text-lg text-black mb-1">OUR SERVICES</p>
          <div
            className="w-52 lg:w-68 p-0.5 bg-gradient-to-r rounded-xl mx-auto mb-8"
            style={{
              background:
                "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
            }}
          ></div>
          <h2 className="text-3xl font-bold text-[var(--color-blue)] sm:text-4xl mb-4">
            Comprehensive Study Abroad Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From documentation to post-departure assistance, we support your
            entire study abroad journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => (window.location.href = "/services")}
            className="text-white text-lg px-8 py-3 rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
            }}
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
