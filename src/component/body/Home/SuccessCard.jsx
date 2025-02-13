const testimonials = [
  {
    name: "Sneha",
    role: "Student in UK",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "I can't thank Skilllinkhire enough for helping me navigate the complex process of studying abroad. From selecting the right university to visa assistance, they guided me every step of the way. The team was knowledgeable, approachable, and always available to answer my questions. Thanks to them, I'm now studying at one of my dream universities abroad!"
  },
  {
    name: "Ananya",
    role: "Student in Canada",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Choosing Skilllinkhire was the best decision I made during my study abroad journey. They provided personalized guidance, ensuring that my application was tailored to match my aspirations. Their expertise in visa processing and financial planning gave me peace of mind. I'm now living my dream of studying in Canada and couldn't have done it without their support."
  },
  {
    name: "Ammu",
    role: "Student in Australia",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "The team at Skilllinkhire made my study abroad dreams come true. From shortlisting universities based on my goals to helping me with accommodation and settling in, they took care of everything. Their professionalism and quick responses were amazing. Highly recommend them to anyone looking to study abroad!"
  },
  {
    name: "Sara",
    role: "Student in Germany",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "I had no idea where to start when considering studying abroad, but Skilllinkhire made the entire process seamless. Their guidance through university applications, interview prep, and visa processes helped me feel confident. I'm currently in Germany and couldn't be happier with the decision I made with their support!"
  }
];

const SuccessCard = () => {
  const randomTestimonial = testimonials[Math.floor(Math.random() * testimonials.length)];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
        <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
          <div className="w-14 h-14">
            <img 
              src={randomTestimonial.avatar} 
              alt={randomTestimonial.name}
              className="w-full h-full rounded-full object-cover border-2 border-[var(--color-blue)]"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-blue)]">{randomTestimonial.name}</h3>
            <p className="text-gray-600 text-sm">{randomTestimonial.role}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex text-[var(--color-pink)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
            </svg>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            {randomTestimonial.text}
          </p>
          
          <div className="flex justify-end text-[var(--color-pink)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.571 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
        </div>

        <div className="flex justify-center mt-8 pt-6 border-t border-gray-100">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
