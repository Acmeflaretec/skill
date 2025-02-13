import React, { useState } from 'react';

const ContactCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-3">
        <div className="text[var(--color-blue)]">
          {icon}
        </div>
        <div>
          <h4 className="text-xl font-semibold text[var(--color-blue)] mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <button 
        onClick={onClick}
        className="w-full text-white text-lg px-8 py-3 rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
        style={{
          background: "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
        }}
      >
        Contact Us
      </button>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(formData);

       try {
          const formBody = new URLSearchParams();
          Object.entries(formData).forEach(([key, value]) => {
             formBody.append(key, value);
          });

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
             alert('Form submitted successfully!!');
             setFormData({ name: '', email: '', message: '' });
          } else {
             alert('Something went Wrong');
          }
       } catch (error) {
          console.error('Error:', error);
          alert('Something went Wrong');
       }
    
 };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-3 lg:px-16 flex flex-col gap-7 lg:gap-12">
      {/* Contact Section */}
      <div>
        <p className="text-sm lg:text-lg text-black mb-1">CONTACT US</p>
        <div
          className="w-52 lg:w-68 p-0.5 bg-gradient-to-r rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
          }}
        ></div>
      </div>

      <div className="w-full xl:flex xl:gap-12 items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactCard
            icon={
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Help Center"
            description="Got a question? We have got an answer."
            onClick={() => {/* Add your click handler */}}
          />

          <ContactCard
            icon={
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            title="Call Us Now"
            description="Get in touch with our support team"
            onClick={() => {/* Add your click handler */}}
          />

          <ContactCard
            icon={
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            }
            title="Chat with Us"
            description="Start a live chat with our team"
            onClick={() => {/* Add your click handler */}}
          />

          <ContactCard
            icon={
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            title="Email Us Now"
            description="Send us an email anytime"
            onClick={() => {/* Add your click handler */}}
          />
        </div>
      </div>

      <div className="w-full xl:flex xl:gap-12 items-center mt-16">
        <div className="w-full xl:w-1/2 space-y-8">
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.5023271091444!2d76.60846466958131!3d8.878724499448545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fdffd3a05de3%3A0x715b6fc7375fd6c3!2sKurumpelil%20Avenue!5e0!3m2!1sen!2sin!4v1739363781904!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg[var(--color-lightBlue)] rounded-full opacity-20"></div>
          </div>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.493155083728!2d76.60331776958135!3d8.88213739944834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd7630b44a35%3A0xdd5356abbf49a7b3!2sSkilllinkhire%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739364154121!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg[var(--color-lightBlue)] rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="w-full xl:w-1/2 mt-8 xl:mt-0">
          <h2 className="text-3xl md:text-5xl font-bold text[var(--color-blue)] mb-6">Get In Touch</h2>
          <form className="space-y-6">
            <input 
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              name='name'
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
            />
            <input 
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              name='email'
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              name='message'
              rows="4"
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
            ></textarea>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full text-white text-lg px-8 py-3 rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;