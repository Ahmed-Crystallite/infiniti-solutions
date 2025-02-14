import BG from "media/home/background_noise.png"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  CTA,
} from "./index"
const FAQs = () => {
  const data = [
    [
      "Why is digital marketing important for my business?",
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    ],
    [
      "How can digital marketing help improve my website's visibility?",
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    ],
    [
      "How long does it take to see results from digital marketing efforts?",
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    ],
    [
      "How do you measure the success of digital marketing campaigns?",
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    ],
  ]
  return (
    <section>
      <div className="relative z-10 xl:px-[17px]">
        <Image
          src={BG}
          alt="noise"
          priority
          className="absolute bg-white -z-10 w-full h-full inset-0 object-cover object-center"
        />
        <div className="bg-white xl:rounded-[30px] md:py-[80px] py-[50px]">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
              <div className="max-w-[530px]">
                <h2 className="2xl:text-[48px] lg:text-[38px] md:text-[30px] text-[28px] font-semibold leading-tight mb-3">
                  Digital Marketing FAQs
                </h2>
                <p className="text-base leading-normal font-medium text-secondary">
                  As a leading digital marketing agency, we are dedicated to
                  providing comprehensive educational resources and answering
                  frequently asked questions to help our clients.
                </p>
                <div className="flex items-center gap-x-4 xl:mt-10 mt-5">
                  <CTA text="More Questions" css="md:px-8 px-3.5" />
                  <CTA variant="link" text="Contanct Us" css="md:px-8 !px-0" />
                </div>
              </div>
              <Accordion type="single" collapsible defaultValue="item-0">
                {data?.map(([title, desc], i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="2xl:text-[24px] md:text-[20px] sm:text-[18px] text-base leading-normal font-semibold text-black hover:no-underline">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className="md:text-base text-sm font-medium leading-normal text-secondary">
                      {desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs
