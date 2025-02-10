import { Link } from 'react-router-dom';

const BlogCard = ({data}) => {
  


  return (
    <div className="bg-white rounded-2xl pb-6 shadow-3xl">
      <img src={`https:${data.img}`} alt={data.heading} className="rounded-2xl" />
      <div className="flex flex-col gap-10 py-4 px-2">
        <h1 className="text-lg text-center md:text-left md:text-lg font-semibold">
            {data.heading}
        </h1>

        <Link 
            to={`/blog/${data.slug}`}
          className="py-3 px-4 w-full md:w-1/2 mx-auto border rounded-xl cursor-pointer text-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
