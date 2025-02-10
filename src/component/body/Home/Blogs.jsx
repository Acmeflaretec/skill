import BlogCard from "./BlogCard"
import { useState, useEffect } from "react"
const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Replace with your Contentful space ID and access token
        const response = await fetch(
          `https://cdn.contentful.com/spaces/y00hxuho5l43/entries?content_type=blogPage&access_token=SJxVKuq9Ad_qo0JD9nAnbOulZBg7Av_EPW5RLjVjo4I&include=1`
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
          img: assetMap[item.fields.image?.sys?.id] || '', // Resolve image from asset map
          description: item.fields.description,
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
    return <div className="text-center py-10">Loading...</div>
  }
  return (
    <>
      <div className="w-full bg-blue-100  rounded-2xl py-10 px-5">
           <h1 className="text-black text-3xl text-center">Trending <span className="font-semibold">Insights & Blogs </span> </h1>
           <div
          
           className="w-52 lg:w-76 p-1 bg-gradient-to-r rounded-xl mx-auto mt-2"
           style={{
             background:
               "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
           }}
         ></div>
         <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-10 px-2 py-5 lg:px-10 lg:py-10">
            {
                blogs.map((item)=>(
                    <BlogCard key={item?.id} data={item}/>
                ))
            }
         
          
          
         </div>
          
      </div>
    </>
  )
}

export default Blogs
