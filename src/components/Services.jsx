import BG from "media/home/background_noise.png"
import Image from "next/image"
import { CTA } from "./index"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
const Services = () => {
  return (
    <section>
      <div className="relative z-10 lg:py-[100px] md:py-[80px] py-[50px]">
        <Image
          src={BG}
          alt="noise"
          priority
          className="absolute bg-white -z-10 w-full h-full inset-0 object-cover object-center"
        />
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <h2 className="2xl:text-[48px] xl:text-[40px] lg:text-[38px] md:text-[30px] text-[25px] font-semibold leading-tight max-w-[670px] me-auto">
              Digital Marketing & SEO ServicesThat Grow Traffic & Increase
              Revenue
            </h2>
            <div className="max-w-[570px] lg:ms-auto">
              <p className="text-secondary md:text-base text-sm leading-normal font-medium">
                We are the top digital marketing agency for branding corp. We
                offer a full range of services to help clients improve their
                search engine rankings and drive more traffic to their websites.
              </p>
              <CTA css="mt-10" />
            </div>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-x-8 gap-y-5 gap-x-4 mt-[60px]">
            {[
              [
                "bg-[#45A7DE]",
                "How a Digital Marketing Agency Can Boost Your Business",
                "We are the top digital marketing agency for branding corp. We offer a full rang engine",
                "#",
              ],
              [
                "bg-[#EA5F38]",
                "The Latest Trends and Strategies with a Digital Marketing Agency",
                "Working with this digital marketing agency has been a true partnership. They have take",
                "#",
              ],
              [
                "bg-[#6A26F1]",
                "Maximizing ROI with the Expertise of a Digital Marketing Agency",
                "What sets this digital marketing agency apart is their commitment to transparency a",
                "#",
              ],
            ].map(([bg, title, desc, link], i) => (
              <div key={i} className="bg-white p-[32px] rounded-[20px]">
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <span
                      className={`block absolute inset-0 w-[14px] h-[14px] rounded-full ${bg} animate-ping`}
                    ></span>
                    <span
                      className={`block w-[14px] h-[14px] rounded-full ${bg}`}
                    ></span>
                  </div>
                  <span className="block text-sm leading-tight text-secondary font-medium">
                    5 min read
                  </span>
                </div>
                <h4 className="lg:text-[26px] text-[20px] leading-normal font-semibold text-black mt-5">
                  {title}
                </h4>
                <div className="flex flex-wrap gap-y-5 items-center justify-between md:mt-10 mt-5">
                  <p className="max-w-[230px] text-sm leading-normal font-medium text-secondary">
                    {desc}
                  </p>
                  <Link
                    href={link}
                    className="bg-transparent text-black border border-[#010205] w-[88px] h-[56px] flex items-center justify-center rounded-full transition-all ease-in-out duration-500 hover:bg-black hover:text-white"
                  >
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
