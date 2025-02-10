import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import RichText from '../component/RichText';

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/y00hxuho5l43/entries?content_type=blogPage&access_token=SJxVKuq9Ad_qo0JD9nAnbOulZBg7Av_EPW5RLjVjo4I&include=1`
        );
        const data = await response.json();

        // Create asset map for both images and embedded assets
        const assetMap = {};
        data.includes?.Asset?.forEach((asset) => {
          assetMap[asset.sys.id] = asset;
        });

        const blogPost = data.items.find((item) => item.fields.slug === slug);

        if (blogPost) {
          setBlog({
            id: blogPost.sys.id,
            title: blogPost.fields.title,
            image: assetMap[blogPost.fields.image?.sys?.id]?.fields?.file?.url || "",
            body: {
              ...blogPost.fields.body,
              // Add assets to the rich text content
              nodeType: blogPost.fields.body.nodeType,
              content: blogPost.fields.body.content,
              data: { ...blogPost.fields.body.data },
              assets: assetMap
            },
            slug: blogPost.fields.slug,
          });
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold text-gray-600">Blog not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-white">
      <article className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>
            <div className="h-1 w-20 bg-blue-500"></div>
          </header>

          {blog.image && (
            <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
              <img
                src={`https:${blog.image}`}
                alt={blog.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          <div className="mx-auto prose">
            {blog.body && <RichText content={blog.body} />}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
