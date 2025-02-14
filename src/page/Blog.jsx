import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../component/body/Home/BlogCard'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/mn8lingomwy6/entries?content_type=blogPage&access_token=nSdwxG_tHu9xQjgqT0LgWFq7nvF6QGg1qNA3oIPLuDI&include=1`
        )
        const data = await response.json()

        // Create a map of asset ID to image URL
        const assetMap = {}
        data.includes?.Asset?.forEach(asset => {
          assetMap[asset.sys.id] = asset.fields.file.url
        })

        const formattedBlogs = data.items.map(item => ({
          id: item.sys.id,
          heading: item.fields.title,
          img: assetMap[item.fields.image?.sys?.id] || '',
          description: documentToReactComponents(item.fields.body),
          slug: item.fields.slug
        }))

        setBlogs(formattedBlogs)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching blogs:', error)
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[var(--color-blue)]"></div>
      </div>
    )
  }

  return (
    <div className="p-3 lg:px-16 flex flex-col gap-7 lg:gap-12">
      {/* Blog Section */}
      <div>
        <p className="text-sm lg:text-lg text-black mb-1">OUR BLOG</p>
        <div
          className="w-52 lg:w-68 p-0.5 bg-gradient-to-r rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
          }}
        ></div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link 
            key={blog.id}
            to={`/blog/${blog.slug}`}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <BlogCard data={blog} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
