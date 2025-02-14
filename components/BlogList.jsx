"use client"

import { useState } from "react"
import { blog_data } from "../assets/assets"
import BlogItem from "./BlogItem"

const BlogList = () => {
  const [menu, setMenu] = useState("All")
  return (
    <div>
      <div className="flex items-center justify-center flex-wrap gap-6 my-10 w-3/4 mx-auto">
        <button
          onClick={() => setMenu("All")}
          className={menu === "All" ? "bg-black text-white py-1 px-4 rounded-md" : "py-1 px-4 rounded-md"}
        >
          All
        </button>

        {
          Array.from(new Set(blog_data.map((item) => item.category))).map((category, index) => (
            <button
              key={index}
              onClick={() => setMenu(category)}
              className={menu === category ? "bg-black text-white py-1 px-4 rounded-md" : ""}
            >
              {category}
            </button>
          ))
        }
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {
          blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
          ))
        }
      </div>
    </div >
  )
}
export default BlogList