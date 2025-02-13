import Edinburgh from "../assets/Edinburgh.png";
import Johns_Hopkins from "../assets/Johns_Hopkins.png";
import Melbourne from "../assets/Melbourne.png";
import Nus from "../assets/Nus.png";
import Queensland from "../assets/Queensland.png";
import Ucla from "../assets/Ucla.png";
import Unsw from "../assets/Unsw.png";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
// import SampleNextArrow from '../component/body/Home/SampleNextArrow'

export const universities = [
  {
    id: 1,
    university: Edinburgh,
  },
  {
    id: 2,
    university: Johns_Hopkins,
  },
  {
    id: 3,
    university: Melbourne,
  },
  {
    id: 4,
    university: Nus,
  },
  {
    id: 5,
    university: Queensland,
  },
  {
    id: 6,
    university: Ucla,
  },
  {
    id: 7,
    university: Unsw,
  },
];

export const TRUSTED = "Trusted By 100+ Academics & Employment Partners";
export const MISSION = "RIGHT GUIDENCE AT RIGHT TIME";
export const SKILLLINK_MISSION =
  "Skilllink Hire Pvt Ltd is a trusted recruitment and education consulting firm dedicated to connecting job seekers and students with the best opportunities. We specialize in domestic recruitment for various industries and education consulting for individuals looking to pursue higher studies.";
export const OUR_MISSION =
  "At Skilllink Hire, we aim to bridge the gap between talent and opportunity by providing top-notch recruitment solutions and guiding students toward the right educational paths.";
export const SKILLLINK_SERVICES =
  "Skilllink Hire Pvt Ltd is a trusted recruitment and education consulting firm dedicated to connecting job seekers and students with the best opportunities.";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const serviceSlider = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Blog = [
  {
    id: 1,
    img: b1,
    heading: "Top 9 Universities In The US Without GRE",
  },

];

export const Faqs = [
  {
    id: 1,
    question: "What does Skilllinks do as a study abroad consultant?",
    answer: "Skilllinks provides end-to-end guidance for studying abroad, including university selection, application assistance, visa processing, scholarship guidance, and pre-departure support. We help students navigate the entire process from start to finish.",
  },
  {
    id: 2,
    question: "Are the services of Skilllinks available for free?",
    answer: "We offer both free initial consultations and premium services. Our basic guidance and information sessions are free, while personalized services like application processing and visa assistance come with nominal fees.",
  },
  {
    id: 3,
    question: "How do I get started on my study abroad journey with Skilllinks?",
    answer: "Begin by scheduling a free consultation with our experts. We'll assess your profile, discuss your goals, and create a customized roadmap for your study abroad journey.",
  },
  {
    id: 4,
    question: "Does Skilllinks provide coaching for IELTS?",
    answer: "Yes, we offer comprehensive IELTS coaching with experienced trainers, mock tests, and personalized feedback to help you achieve your desired band score.",
  },
  {
    id: 5,
    question: "How much does it cost to study abroad for Indian students?",
    answer: "Costs vary by country and program. On average, tuition ranges from ₹10-40 lakhs annually, with living expenses of ₹5-15 lakhs. We help you find scholarships and financial aid options.",
  },
  {
    id: 6,
    question: "What are the best countries to study abroad for Indian students?",
    answer: "Popular destinations include USA, UK, Canada, Australia, Germany, and Ireland. We help you choose based on your budget, career goals, and preferred lifestyle.",
  },
  {
    id: 7,
    question: "How early should I start preparing to study abroad?",
    answer: "We recommend starting 12-18 months before your intended intake. This allows time for test preparation, university applications, and visa processing.",
  },
  {
    id: 8,
    question: "Can I work while studying abroad?",
    answer: "Most countries allow international students to work part-time (typically 20 hours/week) during studies and full-time during breaks. We'll guide you on work regulations in your chosen country.",
  },
  {
    id: 9,
    question: "What documents are required for university applications?",
    answer: "Typically you'll need academic transcripts, test scores (IELTS/TOEFL, GRE/GMAT), SOP, LORs, CV, and financial documents. We provide a complete checklist and help prepare your application package.",
  },
  {
    id: 10,
    question: "How can I get a scholarship to study abroad?",
    answer: "We help identify merit-based and need-based scholarships, guide you in preparing strong applications, and assist with essay writing and documentation.",
  },
];

export const important_Links = [
  {
    id: 1,
    name: "What we do",
  },
  {
    id: 2,
    name: "About Us",
  },
  {
    id: 3,
    name: "Work with us",
  },
  {
    id: 4,
    name: "University Visits",
  },
  {
    id: 5,
    name: "Media & Press",
  },
  {
    id: 6,
    name: "Events",
  },
  {
    id: 7,
    name: "E-Brochure Download",
  },
  {
    id: 8,
    name: "Refer a Friend",
  },
  {
    id: 9,
    name: "Pay Online",
  },
];

export const Test_prep = [
  {
    id: 1,
    prep: "TOEFL",
  },
  {
    id: 2,
    prep: "PTE",
  },
  {
    id: 3,
    prep: "IELTS",
  },
  {
    id: 4,
    prep: "GMAT",
  },
  {
    id: 5,
    prep: "GRE",
  },
  {
    id: 6,
    prep: "SAT",
  },
  {
    id: 7,
    prep: "CAFL",
  },
  {
    id: 8,
    prep: "CELPIP",
  },
  {
    id: 9,
    prep: "Duolingo",
  },
  {
    id: 10,
    prep: "ACT",
  },
];

export const Study_destinations = [
  {
    id: 1,
    destination: "Study in UK",
  },
  {
    id: 2,
    destination: "Study in USA",
  },
  {
    id: 3,
    destination: "Study in Canada",
  },
  {
    id: 4,
    destination: "Study in Australia",
  },
  {
    id: 5,
    destination: "Study in New-Zealand",
  },
  {
    id: 6,
    destination: "Study in Singapore",
  },
  {
    id: 7,
    destination: "Study in Ireland",
  },
  {
    id: 8,
    destination: "Study in France",
  },
  {
    id: 9,
    destination: "Study in Germany",
  },
  {
    id: 10,
    destination: "Study in Switzerland",
  },
  {
    id: 11,
    destination: "Study in Dubai",
  },
  {
    id: 12,
    destination: "Study in Spain",
  },
  {
    id: 13,
    destination: "Study in Malaysia",
  },
  {
    id: 14,
    destination: "Study in Mauritius",
  },
  {
    id: 15,
    destination: "Study in Italy",
  },
  {
    id: 16,
    destination: "Study in India",
  },
  {
    id: 17,
    destination: "Study in Netherlands",
  },
];

export const Student_services = [
  {
    id: 1,
    services: "Visa Guidance",
  },
  {
    id: 2,
    services: "Addmission Guidance",
  },
  {
    id: 3,
    services: "Carreer Counseling",
  },
  {
    id: 4,
    services: "Finance Assistance",
  },
  {
    id: 5,
    services: "Travel Assistance",
  },
  {
    id: 6,
    services: "Forex Assistance",
  },
  {
    id: 7,
    services: "Scholarship",
  },
  {
    id: 8,
    services: "Study Abroad",
  },
];

export const branches = {
  title: "Contact Us",
  locations: [
    {
      category: "Main Office",
      branches: ["United Kingdom"]
    },
    {
      category: "India Branches",
      branches: ["Kollam"],
    },
  ],
};
