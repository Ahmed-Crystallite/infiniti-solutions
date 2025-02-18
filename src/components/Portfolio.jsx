import { CTA } from "./index"
import Brand1 from "media/home/mockups/4.png"
import Brand2 from "media/home/mockups/5.png"
import Brand3 from "media/home/mockups/6.png"
import Brand4 from "media/home/mockups/7.png"
import Brand5 from "media/home/mockups/8.png"
import Brand6 from "media/home/mockups/9.png"
import Brand7 from "media/home/mockups/10.png"
import Image from "next/image"
import Link from "next/link"

const Portfolio = () => {
  const portfolioData = [
    {
      bg: "bg-[#202420]",
      overlay: false,
      contentCss: "text-white",
      title: "Bitswits",
      desc: "Bitswits Dedicated to crafting digital solutions that simplify complexities and enhance efficiency. Born from a global collaboration of tech enthusiasts, our mission is to transform your biggest challenges into your greatest assets using cutting-edge technology. We specialize in developing intuitive mobile and web applications that not only meet  today’s needs but also anticipate tomorrow’s opportunities.",
      isDark: true,
      link: "https://www.bitswits.co/",
      img: Brand1,
    },
    {
      bg: "bg-transparent",
      overlay: true,
      contentCss: "text-black lg:order-2",
      title: "SEO Results Pro",
      desc: "Seo Results Pro, the top-notch digital marketing agency, offers business-impacting results that turn the brand's online presence from drab to fab. No matter the size and shape of the business, the marketing professionals strive to solve the toughest digital mazes with their legendary skills and bring fame to the thriving corporations.",
      link: "https://seoresultspro.com/",
      img: Brand3,
    },

    {
      bg: "bg-[#202420]",
      overlay: false,
      contentCss: "text-white",
      title: "Best Selling Publisher",
      desc: "Best Selling Publisher stands as the pinnacle of excellence in the world of publishing services, renowned for its unparalleled commitment to author success. With a dedicated team of industry experts and innovative resources at their disposal, Best Selling Publisher goes above and beyond. Don't hesitate to reach out and take the first step towards literary success with one of the finest publishers in the industry.",
      isDark: true,
      link: "https://bestsellingpublisher.com/",
      img: Brand4,
    },
    {
      bg: "bg-transparent",
      overlay: true,
      contentCss: "text-black lg:order-2",
      title: "Infinity Animations",
      desc: "Infinity Animations is a visionary kingdom where creativity knows no bounds. With masterful strokes of artistry, they breathe life into ideas, forging appealing animations that dance with imagination. Each frame tells a story, each visual a masterpiece. From 2D wonders to CGI-VFX magic, they conjure dimensions where dreams come to life.",
      link: "https://infinityanimations.com/",
      img: Brand5,
    },
    {
      bg: "bg-[#202420]",
      overlay: false,
      contentCss: "text-white",
      title: "Explainer Video LLC",
      desc: "We're the video experts who help you tell your story in a way that resonates with everyone. We're reliable, creative, and results-driven. Take charge today and experience the potential of video animation and explainer videos for your brand.",
      isDark: true,
      link: "https://explainervideosllc.com/",
      img: Brand6,
    },
    {
      bg: "bg-transparent",
      overlay: true,
      contentCss: "text-black lg:order-2",
      title: "Dream Weave Media",
      desc: "Dream Weave Media is an enterprise software development company helping startups and organizations build and implement digital transformation solutions tailored to their demand and needs.",
      link: "#",
      img: Brand7,
    },
    {
      bg: "bg-[#202420]",
      overlay: false,
      contentCss: "text-white",
      title: "NFT Kreator",
      desc: "NFT Creator is a creative potential that leverages the power of NFTs and proposes multiple lucrative solutions to clients. From designing base characters, minting NFTs, developing Smart Contracts to marketing the NFTs, our team of tech-savvy enthusiasts is here to bring life to your world of imagination!",
      isDark: true,
      link: "https://nftkreator.com/",
      img: Brand2,
    },
  ]
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
            className={`relative z-10 ${item.bg} sm:py-[50px] py-[40px]`}
          >
            {item.overlay && (
              <span className="lg:block hidden bg-[#f5f6f7] absolute lg:w-[50%] lg:h-full object-cover object-center inset-0 -z-10"></span>
            )}
            <div className="container">
              <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-x-16 gap-y-8">
                <div className={`${item.contentCss}`}>
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
                <div>
                  <Link href={item.link} target="_blank">
                    <Image
                      src={item.img}
                      alt={item.title}
                      priority
                      draggable={false}
                      className="mx-auto"
                    />
                  </Link>
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
