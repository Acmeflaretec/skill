import Accordion from "./Accordion";
import { Faqs } from "../../../utils/constant";

const Faq = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-black text-center">FAQs</h1>
      {
        Faqs?.map((item)=>(
            <Accordion key={item?.id} question={item?.question} answer={item?.answer}/>
        ))
      }
  
     
     
    </>
  );
};

export default Faq;
