"use client"
import { useState, useEffect } from "react"
import BG from "media/home/background_noise.png"
import Elipses from "media/home/elipses.png"
import Image from "next/image"
import {
  AutoScrollSlider,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./index"
import Mockup1 from "media/home/mockups/1.png"
import Mockup2 from "media/home/mockups/2.png"
import Mockup3 from "media/home/mockups/3.png"
import Link from "next/link"

const MarketingObjectives = () => {
  const [tabsData, setTabsData] = useState({})
  const [activeTab, setActiveTab] = useState(null)

  useEffect(() => {
    const data = {
      "All Work": [Mockup1, Mockup2, Mockup3, Mockup1, Mockup2, Mockup3],
      "UI/UX Design": [Mockup2, Mockup3],
      "Digital Marketing": [Mockup1, Mockup3],
      Branding: [Mockup1, Mockup2],
    }
    setTabsData(data)

    if (Object.keys(data).length > 0) {
      setActiveTab(Object.keys(data)[0])
    }
  }, [])

  const handleTabChange = (value) => {
    setActiveTab(value)
  }

  const renderTabContent = (tabName) => {
    const images = tabsData[tabName] || []

    return (
      <AutoScrollSlider emblaWrapper="flex ml-0" wrapperCss="!overflow-visible">
        {images.map((img, i) => (
          <div key={i} className="grow-0 shrink-0 basis-auto px-5">
            <div className="relative z-10 group overflow-hidden border-[10px] transition-all ease-in-out duration-300 md:w-[460px] w-[350px] md:h-[460px] h-[350px] scale-100 hover:rounded-full hover:scale-105 border-white/30 rounded-[30px]">
              <Image
                src={img}
                alt="mockup"
                className="absolute -z-10 w-full h-full object-cover object-center"
              />
              <span className="absolute bg-black/50 -z-10 w-full h-full object-cover object-center"></span>
              <div className="flex flex-col justify-between h-full items-start group-hover:justify-center group-hover:items-center px-5 py-10">
                <Link
                  href="#"
                  className="absolute scale-0 invisible h-0 group-hover:scale-100 group-hover:visible group-hover:flex group-hover:items-center group-hover:justify-center group-hover:transition-all group-hover:ease-in-out group-hover:duration-300 group-hover:w-[163px] group-hover:h-[163px] group-hover:rounded-[163px] group-hover:text-[18px] group-hover:bg-primary hover:bg-primary/90 group-hover:text-white group-hover:leading-tight group-hover:font-bold"
                >
                  See Details
                </Link>
                <div className="flex group-hover:hidden items-center gap-x-5 w-full">
                  <span className="block bg-white h-[2px] basis-[10%] shrink-0"></span>
                  <h3 className="basis-[75%] shrink-0 md:text-[17px] text-[15px] leading-tight font-semibold">
                    Ai Corporation. 2023
                  </h3>
                </div>
                <h3 className="group-hover:hidden md:text-[24px] text-[18px] leading-tight font-semibold">
                  Ai Wave - Ai Chatbot Mobile App
                </h3>
              </div>
            </div>
          </div>
        ))}
      </AutoScrollSlider>
    )
  }

  if (!activeTab) {
    return (
      <div className="container">
        <div className="text-center text-black">
          <div className="flex items-center gap-x-3 xl:text-[48px] lg:text-[38px] md:text-[30px] text-[25px] font-semibold leading-tight max-w-[1300px] mx-auto">
            <span className="block">Loading...</span>
            <svg
              className="size-10 animate-spin text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  return (
    <section>
      <div className="relative z-10 bg-[#FAFAFA] py-[10px] xl:px-[17px]">
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
            <div className="text-center text-white">
              <h2 className="2xl:text-[48px] lg:text-[38px] md:text-[30px] text-[20px] font-semibold leading-tight max-w-[1300px] mx-auto">
                Real-world examples of how we have helped companies achieve
                their marketing objectives.
              </h2>
            </div>
          </div>
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="!text-white mt-[50px]"
          >
            <TabsList className="lg:justify-center justify-start whitespace-nowrap flex-nowrap overflow-x-auto w-full mb-[70px]">
              {Object.keys(tabsData).map((tabName, i) => (
                <TabsTrigger key={i} value={tabName} className="px-5">
                  {`${tabName} [${tabsData[tabName]?.length || 0}]`}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.keys(tabsData).map((tabName, i) => (
              <TabsContent key={i} value={tabName}>
                {renderTabContent(tabName)}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default MarketingObjectives
