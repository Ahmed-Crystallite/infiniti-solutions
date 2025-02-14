import BG from "media/home/background_noise.png"
import Elipses from "media/home/elipses.png"
import Image from "next/image"
import { CTA } from "./index"

const BannerCTA = () => {
  return (
    <section>
      <div className="relative z-10 py-[10px] xl:px-[17px]">
        <Image
          src={BG}
          alt="noise"
          className="absolute bg-[#FAFAFA] opacity-100 -z-10 w-full h-full inset-0 object-cover object-center"
        />
        <div className="relative z-10 overflow-hidden bg-[#020609] xl:rounded-[30px] md:py-[60px] py-[40px]">
          <Image
            src={Elipses}
            alt="elipses"
            className="absolute w-full h-full inset-0 -z-10 object-cover object-right opacity-50 rounded-[20px]"
          />
          <div className="container">
            <div className="flex items-center flex-wrap justify-between gap-x-5 gap-y-5 text-white">
              <h2 className="2xl:text-[80px] xl:text-[70px] lg:text-[60px] md:text-[45px] text-[30px] leading-tight font-semibold">
                Ready to work with us ?
              </h2>
              <CTA
                variant="withIcon"
                css="bg-white !text-black hover:bg-transparent hover:border-white hover:!text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerCTA
