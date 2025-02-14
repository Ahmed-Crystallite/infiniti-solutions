// Next
import Image from "next/image"
// Components
import { CTA, ProgressBar } from "./index"
// Media
import TrandingImage from "media/home/tranding.png"
import Elipses from "media/home/elipses.png"
import SignalImage from "media/home/signal.png"
import TrandingIcon from "media/home/icons/trending_up.svg"
import Logo1 from "media/home/logos/afterpay.png"
import Logo2 from "media/home/logos/basecamp.png"
import Logo3 from "media/home/logos/maze.png"
import BG from "media/home/background_noise.png"
const Hero = () => {
  return (
    <section>
      <div className="relative z-10 md:pt-[150px] pt-[130px] pb-[60px]">
        <Image
          src={BG}
          alt="noise"
          priority
          className="absolute bg-white -z-10 w-full h-full inset-0 object-cover object-center"
        />
        <div className="container">
          <div className="grid xl:grid-cols-2 grid-cols-1 items-center xl:gap-x-5 gap-y-10">
            <div>
              <h1 className="2xl:text-[72px] xl:text-[65px] lg:text-[50px] md:text-[40px] text-[30px] xl:leading-[79px] max-w-[650px] leading-tight font-semibold xl:mb-10 mb-5">
                Stay ahead of the curve with our forward-thinking{" "}
              </h1>
              <p className="md:text-base text-sm leading-normal font-medium text-secondary max-w-[550px]">
                At Mini-Investments, we’re pioneers in democratizing access to
                technological advancement. Our mission? To ignite the digital
                age for businesses, offering innovative solutions and services
                that spark growth and prosperity.
              </p>
              <div className="flex items-center gap-x-3 xl:mt-10 mt-5">
                <CTA
                  variant="withIcon"
                  text="Schedule Call"
                  css="md:px-8 px-3.5"
                />
                <CTA
                  variant="link"
                  text="View Case Study"
                  css="md:px-8 !px-0"
                />
              </div>
              <div className="flex flex-wrap gap-y-4 items-center mt-[25px]">
                <span className="block sm:max-w-[200px] text-[15px] font-semibold leading-normal">
                  Trusted by the world's biggest brands:
                </span>
                <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-5">
                  <Image src={Logo1} alt="logos" priority />
                  <Image src={Logo2} alt="logos" priority />
                  <Image src={Logo3} alt="logos" priority />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-x-5">
              <div className="col-span-12 grid sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">
                <div className="relative h-full">
                  <Image
                    src={TrandingImage}
                    alt="tranding_image"
                    priority
                    className="rounded-[1000px_20px_20px_20px] object-cover object-center h-full"
                  />
                  <span className="w-[108px] h-[108px] rounded-[108px] absolute inset-[-30px_0_0_150px] flex items-center justify-center bg-black">
                    <Image
                      src={TrandingIcon}
                      alt="tranding_image"
                      priority
                      className="rounded-[1000px_20px_20px_20px] object-cover object-center"
                    />
                  </span>
                </div>
                <ProgressBar
                  progressBarCss="3xl:-right-[400px] 2xl:-right-[350px] xl:-right-[300px] lg:-right-[490px] md:-right-[380px] sm:-right-[280px] sm:!-top-12 -top-12 !w-[85%] mx-auto"
                  arrows={false}
                  emblaWrapper="flex"
                >
                  {[
                    [
                      "230+",
                      "some big clients that we work with, and trust us very much",
                    ],
                    [
                      "230+",
                      "some big clients that we work with, and trust us very much",
                    ],
                    [
                      "230+",
                      "some big clients that we work with, and trust us very much",
                    ],
                    [
                      "230+",
                      "some big clients that we work with, and trust us very much",
                    ],
                    [
                      "230+",
                      "some big clients that we work with, and trust us very much",
                    ],
                  ].map(([text, desc], i) => (
                    <div key={i} className="grow-0 shrink-0 basis-full">
                      <div className="relative bg-[#F0F0F0] px-[24px] pt-[38px] pb-[50px] rounded-[20px]">
                        <h2 className="lg:text-[84px] text-[70px] leading-normal font-bold text-black">
                          {text}
                        </h2>
                        <p className="text-[#5C5D5F] md:text-base text-sm leading-normal font-medium">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </ProgressBar>
              </div>
              <div className="col-span-12">
                <div className="relative z-10 bg-black text-white px-[32px] md:pt-[50px] md:py-0 py-[40px] grid md:grid-cols-2 grid-cols-1 gap-x-5 rounded-[20px]">
                  <Image
                    src={Elipses}
                    alt="elipses"
                    priority
                    className="absolute inset-0 w-full h-full -z-10 object-cover object-center opacity-60 rounded-[20px]"
                  />
                  <div>
                    <div className="flex items-center 2xl:gap-x-5 gap-x-4 mb-3">
                      <span className="sm:block hidden 2xl:w-[23%] sm:w-[12%] h-[2px] bg-white"></span>
                      <h3 className="text-[15px] font-semibold leading-normal">
                        Drive More Traffic and Sales
                      </h3>
                    </div>
                    <h4 className="2xl:text-[32px] md:text-[28px] text-[24px] leading-tight font-semibold">
                      Drive more traffic and product sales{" "}
                    </h4>
                  </div>
                  <Image
                    src={SignalImage}
                    alt="signal"
                    priority
                    className="ms-auto md:block hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
