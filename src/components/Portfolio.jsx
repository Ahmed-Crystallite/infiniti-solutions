// Next
import Image from "next/image"
import Link from "next/link"
// Components
import { CTA } from "./index"
const Portfolio = () => {
  // Portfolio Data
  const portfolioData = [
    {
      bg: "bg-[#202420]",
      contentCss: "text-white",
      title: "Best Selling Publisher",
      desc: "Best Selling Publisher stands as the pinnacle of excellence in the world of publishing services, renowned for its unparalleled commitment to author success. With a dedicated team of industry experts and innovative resources at their disposal, Best Selling Publisher goes above and beyond. Don't hesitate to reach out and take the first step towards literary success with one of the finest publishers in the industry.",
      isDark: true,
      link: "https://www.bestsellingpublisher.com/",
      img: "/home/mockups/11.jpg",
      alignment: "inset-[0_0_0_auto]",
    },
    {
      bg: "bg-transparent",
      contentCss: "text-black ms-auto",
      title: "Book Writing Experts",
      desc: "As self-searching as this question might sound, we are a book writing, editing, and publishing company. Well, that sounds a bit too over-simplified, but you get the gist. We produce, publish, and market book, a synergy of creativity fueled by a staff of writers, editors, publishers, developers, and designers.",
      link: "https://www.bookwritingexperts.com/",
      img: "/home/mockups/12.jpg",
      alignment: "inset-[0_0_auto_0]",
    },
    {
      bg: "bg-[#202420]",
      contentCss: "text-white",
      title: "Click First SMM",
      desc: "Are your social media efforts falling short of expectations? Now more than ever, social media is a “pay-to-play” environmentrequiring all the resources you have: a cohesive game plan, 100 percent commitment and a well-defined budget. On top of organicoutreach, getting content in front of your target audience can be challenging without shelling out advertising money, whether for anongoing campaign or a once-off sponsored post.",
      isDark: true,
      link: "https://clickfirstsmm.com/",
      img: "/home/mockups/13.jpg",
      alignment: "inset-[0_0_0_auto]",
    },
    {
      bg: "bg-transparent",
      contentCss: "text-black ms-auto",
      title: "Jump To 1",
      desc: "Jumpto1, the top-notch digital marketing agency, offers business-impacting results that turn the brand’s online presence from drab to fab. No matter the size and shape of the business, the marketing professionals strive to solve the toughest digital mazes with their legendary skills and bring fame to the thriving corporations.",
      link: "https://jumpto1.us/",
      img: "/home/mockups/14.jpg",
      alignment: "inset-[0_0_auto_0]",
    },
    {
      bg: "bg-[#202420]",
      contentCss: "text-white",
      title: "NFT Kreator",
      desc: "NFT Creator is a creative potential that leverages the power of NFTs and proposes multiple lucrative solutions to clients. From designing base characters, minting NFTs, developing Smart Contracts to marketing the NFTs, our team of tech-savvy enthusiasts is here to bring life to your world of imagination!",
      isDark: true,
      link: "https://nftkreator.com/",
      img: "/home/mockups/15.jpg",
      alignment: "inset-[0_0_0_auto]",
    },
  ]

  // Portfolio Data
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
