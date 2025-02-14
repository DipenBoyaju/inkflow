import Image from "next/image"
import Link from "next/link"
import { CornerDownRight } from "lucide-react"
import { useRouter } from "next/navigation"

const BlogItem = ({ blog }) => {
  const router = useRouter()
  return (
    <div className="max-w-[330px] sm:min-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000] cursor-pointer" onClick={() => router.push(`/blogs/${blog.id}`)}>
      <Image src={blog.image} alt="" className="border-b border-black h-[220px]" />
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">{blog.category}</p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{blog.title}</h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">{blog.description}</p>
        <Link href={`/blogs/${blog.id}`}><button className="flex gap-2 py-2 font-semibold text-center items-center">Read more <CornerDownRight size={16} /></button></Link>
      </div>
    </div>
  )
}
export default BlogItem