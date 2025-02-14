import { MoveRight } from "lucide-react"
import { silkscreen } from "../app/layout"
import Link from "next/link"

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <div className="sm:w-auto ">
          <Link href={'/'}><h1 className={`${silkscreen.className} font-[400] text-3xl`}>InkFlow</h1></Link>
        </div>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000] hover:shadow-[7px_-7px_0px_#000] transition-all duration-700 ease-in-out">Get Started <MoveRight /></button>
      </div>
    </div>
  )
}
export default Header