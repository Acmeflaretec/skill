import { useState } from 'react';
import carousel from "../../../assets/carousel.png";
import { FaWhatsapp } from "react-icons/fa";
import Modal from "../../common/Modal";

const Carousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('phone', formData.phone);
      formBody.append('source', 'Education Fair Registration');

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwO_9tsRb4OQTu5sXSOJg6gDW8QsV7Xb2RGNiHWSpdQUSoZROmJVFAdiq-JCWw0OoSe0Q/exec",
        {
          method: 'POST',
          body: formBody,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (response.ok) {
        alert('Registration successful! We will contact you shortly.');
        setIsModalOpen(false);
        setFormData({ name: "", phone: "" });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

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
          <div className="mt-6  lg:flex justify-center md:justify-start gap-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[var(--color-blue)] w-full mb-4 lg:mb-0 lg:w-auto text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
            Register Now
          </button>
          <a 
            href="https://wa.me/919074257171" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border w-full lg:w-auto border-green-500 bg-white text-green-400 px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white"
          >
            <span><FaWhatsapp/></span> WhatsApp
          </a>
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

      <Modal isOpen={isModalOpen} toggleModal={() => setIsModalOpen(false)}>
        <div className="bg-white p-8 rounded-lg w-96 relative">
          <h3 className="text-2xl font-bold text-[var(--color-blue)] mb-6">Registration Form</h3>
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
                name='name'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                name='phone'
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--color-blue)] focus:ring-[var(--color-blue)] sm:text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white py-2 px-4 rounded-md"
              style={{
                background: "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
              }}
            >
              Submit Registration
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Carousel;
