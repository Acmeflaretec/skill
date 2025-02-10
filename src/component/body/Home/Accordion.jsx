// eslint-disable-next-line react/prop-types
const Accordion = ({question,answer}) => {
  return (
    <>
     <div className="collapse collapse-plus bg-base-100 rounded-xl border border-zinc-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-lg md:text-xl font-medium">
    {question}
  </div>
  <div className="collapse-content">
    <p>{answer}</p>
  </div>
</div>



    </>
  );
};

export default Accordion;
