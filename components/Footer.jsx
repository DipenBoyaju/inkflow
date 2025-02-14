import { Facebook, Instagram, Twitter } from "lucide-react"
import { silkscreen } from "../app/layout"

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <h1 className={`${silkscreen.className} font-[400] text-3xl text-white`}>InkFlow</h1>
      <p className="text-sm text-white">All right reserved. Copyright ©InkFlow</p>
      <div className="flex gap-2">
        <Facebook className="text-white" />
        <Twitter className="text-white" />
        <Instagram className="text-white" />
      </div>
    </div>
  )
}
export default Footer