// Next
import Image from "next/image"
import Link from "next/link"
// Components
import { CTA } from "./index"
// Portfolio Data 
import portfolioData from "media/home/data/portfolio.json"
const Portfolio = () => {
  return (
    <section>
      {portfolioData.map((item, i) => {
        if (!item.title || !item.desc || !item.img) {
          console.error(`Missing data ${i}`)
          return null
        }
        return (
          <div
            key={i}
            className={`relative overflow-hidden z-10 ${item.bg} xl:py-[200px]`}
          >
            <Link href={item.link} target="_blank" className="group">
              <Image
                src={item.img}
                alt={item.title}
                width={1500}
                height={1500}
                priority
                draggable={false}
                className={`xl:absolute xl:w-[50%] xl:h-full object-fill object-center z-10 xl:m-0 mx-auto ${item.alignment}`}
              />
              <span
                className={`bg-black/25 -translate-y-full transition-all ease-in-out duration-300 group-hover:translate-y-0 absolute xl:w-[50%] xl:h-full object-fill object-center inset-0 z-10 ${item.alignment}`}
              ></span>
            </Link>
            <div className="container">
              <div>
                <div
                  className={`${item.contentCss} xl:max-w-[540px] xl:py-0 sm:py-[60px] py-[40px]`}
                >
                  <h4 className="xl:text-[46px] md:text-[40px] text-[30px] leading-tight font-semibold mb-4">
                    {item.title}
                  </h4>
                  <p className="md:text-base text-sm leading-normal font-medium">
                    {item.desc}
                  </p>
                  <CTA
                    text="Visit Website"
                    link={item.link}
                    variant="withIcon"
                    css={
                      item.isDark
                        ? "md:mt-8 mt-5 bg-primary border-primary hover:border-white hover:text-white"
                        : "md:mt-8 mt-5 bg-transparent !text-black border-black hover:border-primary hover:!text-primary"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Portfolio
