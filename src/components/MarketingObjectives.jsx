import BG from "media/home/background_noise.png"
import Elipses from "media/home/elipses.png"
import Icon1 from "media/home/serviceIcon/1.png"
import Icon2 from "media/home/serviceIcon/2.png"
import Icon3 from "media/home/serviceIcon/3.png"
import Icon4 from "media/home/serviceIcon/4.png"
import Icon5 from "media/home/serviceIcon/5.png"
import Icon6 from "media/home/serviceIcon/6.png"
import Icon7 from "media/home/serviceIcon/7.png"
import Image from "next/image"
import { AutoScrollSlider, CardBody, CardContainer, CardItem } from "./index"
import Link from "next/link"

const MarketingObjectives = () => {
  return (
    <section>
      <div className="relative z-10 bg-[#FAFAFA] xl:py-[10px] xl:px-[17px]">
        <Image
          src={BG}
          alt="noise"
          className="absolute bg-[#FAFAFA] opacity-0 -z-10 w-full h-full inset-0 object-cover object-center"
        />
        <div className="relative z-10 overflow-hidden bg-[#020609] xl:rounded-[30px] lg:py-[100px] md:py-[80px] py-[50px]">
          <Image
            src={Elipses}
            alt="elipses"
            className="absolute w-full h-full top-[-15%] bottom-0 right-[-40%] -z-10 object-cover object-right opacity-90 rounded-[20px]"
          />
          <div className="container">
            <div className="text-center text-white mb-[80px]">
              <h2 className="2xl:text-[48px] lg:text-[38px] md:text-[30px] text-[20px] font-semibold leading-tight max-w-[1300px] mx-auto mb-4">
                <span className="text-primary">Complete IT Support</span> For
                Small And Medium Businesses Across The United States
              </h2>
              <p className="text-base font-normal leading-normal max-w-[1300px] mx-auto">
                At infinti-solutions, we’re pioneers in democratizing access to
                technological advancement. Our mission? To ignite the digital
                age for businesses, offering innovative solutions and services
                that spark growth and prosperity. With a laser focus on customer
                empowerment and strategic alliances, we’re not just redefining
                investment; we’re revolutionizing it. Our commitment to
                excellence, integrity, and relentless innovation ensures that we
                don’t just meet expectations; we exceed them, propelling global
                progress forward. Join us on the journey where infinti-solutions
                open doors to boundless opportunities for individuals and
                communities worldwide.
              </p>
            </div>
            <AutoScrollSlider
              emblaWrapper="flex ml-0"
              wrapperCss="!overflow-visible"
            >
              {[
                [
                  Icon1,
                  "Managed Services",
                  "Elevate your business with our Managed Services, offering seamless IT solutions and round-the-clock support. From proactive monitoring to strategic optimization, we ensure maximum uptime and efficiency. Partner with us for peace of mind and focus on what truly matters—your success",
                ],
                [
                  Icon1,
                  "Cloud",
                  "Embrace limitless scalability and flexibility with our Cloud solutions. From data storage to application hosting, we provide tailored cloud services to suit your needs. Experience seamless integration and enhanced efficiency as you propel your business into the digital age.",
                ],
                [
                  Icon2,
                  "Security",
                  "Safeguard your digital assets with our comprehensive Security solutions. From threat detection to data encryption, we prioritize your peace of mind. Partner with us to fortify your defenses and stay ahead in an ever-evolving threat landscape.",
                ],
                [
                  Icon3,
                  "IT Service Desk",
                  "Experience unparalleled support with our IT Service Desk solutions. Our expert team ensures swift resolution to technical issues, keeping your operations running smoothly. Trust us to provide proactive assistance and personalized solutions tailored to your needs.",
                ],
                [
                  Icon4,
                  "Web 3.0 Development",
                  "Embark on the next frontier of the web with our Web 3.0 Development services. Harness the power of blockchain, AI, and decentralized technologies to create immersive and secure digital experiences. Join us in shaping the future of the internet with innovative solutions tailored to your vision.",
                ],
                [
                  Icon5,
                  "Digital Marketing",
                  "Elevate your online presence with our Digital Marketing expertise. From SEO strategies to social media campaigns, we drive targeted traffic and amplify your brand’s reach. Partner with us to unlock growth opportunities and stand out in the digital landscape.",
                ],
                [
                  Icon6,
                  "Hosting Service",
                  "Experience reliable and scalable hosting solutions with our Hosting Service. From websites to applications, we ensure seamless performance and uptime. Trust us to provide secure and tailored hosting options to meet your needs.",
                ],
                [
                  Icon7,
                  "Content Services",
                  "Elevate your content game with our comprehensive Content Services. From engaging copy to captivating visuals, we craft compelling content tailored to your audience. Partner with us to tell your story and leave a lasting impression in the digital realm.",
                ],
              ].map(([img, title, desc], i) => (
                <div key={i} className="grow-0 shrink-0 basis-auto px-5 h-full">
                  <CardContainer>
                    <CardBody className="md:rounded-[0_20px_0_20px] rounded-[20px] p-[50px_20px] text-center text-white relative group/card h-auto border-[4px] hover:border-primary/50 border-primary">
                      <CardItem translateZ="100" className="mx-auto mt-4">
                        <Image
                          src={img}
                          className="object-cover rounded-xl group-hover/card:shadow-lg group-hover/card:shadow-primary "
                          alt="thumbnail"
                        />
                      </CardItem>
                      <CardItem
                        as="h3"
                        translateZ="50"
                        className="md:text-[24px] text-[18px] leading-tight font-semibold my-3 w-full"
                      >
                        {title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-base leading-normal font-normal min-h-[200px]"
                      >
                        {desc}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              ))}
            </AutoScrollSlider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketingObjectives
