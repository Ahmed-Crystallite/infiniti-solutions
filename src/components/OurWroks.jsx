"use client"
import Image from "next/image"
import { useState, useRef } from "react"
import JumpTo1 from "media/home/brands/jp1.png"
import ClickFirstSMM from "media/home/brands/cfsmm.png"
import BookWritingExperts from "media/home/brands/bwe.png"
import BestSellingPublisher from "media/home/brands/bsp.png"
import { AnimatedTooltip } from "./AnimatedTooltip"
import Elipses from "media/home/elipses.png"
import Work from "media/home/work.png"
import Play from "media/home/icons/play.svg"
import Pause from "media/home/icons/pause.png"
import BG from "media/home/background_noise.png"
const OurWroks = () => {
  const people = [
    {
      id: 1,
      name: "JumpTo1",
      designation: "SEO",
      link: "https://jumpto1.us/",
      image: JumpTo1,
    },
    {
      id: 2,
      name: "Click First SMM",
      designation: "Social Media",
      link: "https://clickfirstsmm.us/",
      image: ClickFirstSMM,
    },
    {
      id: 3,
      name: "Book Writing Expert",
      designation: "Books",
      link: "https://www.bookwritingexperts.com/",
      image: BookWritingExperts,
    },
    {
      id: 4,
      name: "Best Selling Publisher",
      designation: "Books",
      link: "https://bestsellingpublisher.com/",
      image: BestSellingPublisher,
    },
    {
      id: 5,
      name: "Demo1",
      designation: "SEO",
      link: "https://jumpto1.us/",
      image: JumpTo1,
    },
    {
      id: 6,
      name: "Demo2",
      designation: "Social Media",
      link: "https://clickfirstsmm.us/",
      image: ClickFirstSMM,
    },
    {
      id: 7,
      name: "Demo3",
      designation: "Books",
      link: "https://www.bookwritingexperts.com/",
      image: BookWritingExperts,
    },
    {
      id: 8,
      name: "Demo4",
      designation: "Books",
      link: "https://bestsellingpublisher.com/",
      image: BestSellingPublisher,
    },
  ]

  const [visibleCount, setVisibleCount] = useState(4)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 1)
  }

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const handleVideoPause = () => {
    setTimeout(() => {
      if (videoRef.current && videoRef.current.paused) {
        setIsVideoPlaying(false)
      }
    }, 500)
  }

  const remainingItems = people.length - visibleCount

  return (
    <section>
      <div className="relative z-10 md:py-[80px] py-[50px]">
        <Image
          src={BG}
          alt="noise"
          className="absolute -z-10 w-full h-full inset-0 object-cover object-center"
        />
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-5">
            <h2 className="xl:text-[48px] lg:text-[38px] md:text-[30px] text-[25px] font-semibold leading-tight max-w-[670px] me-auto">
              Provide the best service with out of the box ideas
            </h2>
            <p className="text-secondary md:text-base text-sm leading-normal font-medium max-w-[570px] lg:ms-auto">
              we are a passionate team of digital marketing enthusiasts
              dedicated to helping businesses succeed in the digital world. With
              years of experience and a deep understanding of the ever-evolving
              online landscape, we stay at the forefront of industry trends and
              technologies.
            </p>
          </div>
          <div className="grid grid-cols-12 items-center gap-x-5 gap-y-10 md:mt-[70px] mt-[50px]">
            <div className="2xl:col-span-4 xl:col-span-5 lg:col-span-6 col-span-12">
              <div className="relative z-10 overflow-hidden bg-black flex flex-col gap-y-5 items-start justify-between text-white h-[400px] rounded-[30px] sm:px-10 px-5 py-10">
                <Image
                  src={Elipses}
                  alt="elipses"
                  className="absolute w-full h-full inset-0 -z-10 object-cover object-center opacity-60 rounded-[20px]"
                />
                <div>
                  <h3 className="lg:text-[84px] text-[70px] leading-tight font-bold">
                    100<span className="text-primary">+</span>{" "}
                  </h3>
                  <p className="text-[#5C5D5F] md:text-[19px] text-sm leading-normal font-medium">
                    Project finish with superbly
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <AnimatedTooltip items={people.slice(0, visibleCount)} />
                  {remainingItems > 0 && (
                    <button
                      type="button"
                      className="block ms-4 -mt-4 lg:text-[84px] text-[70px] leading-tight font-bold"
                      onClick={handleShowMore}
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="2xl:col-span-8 xl:col-span-7 lg:col-span-6 col-span-12">
              <div className="relative z-10 h-[400px] flex flex-col items-center justify-center">
                {!isVideoPlaying && (
                  <>
                    <Image
                      src={Work}
                      alt="works"
                      className="absolute w-full h-full inset-0 -z-10 object-cover object-center rounded-[20px]"
                    />
                    <span className="absolute w-full h-full inset-0 -z-10 object-cover object-center bg-[#00000020] rounded-[20px]"></span>
                    <h3 className="xl:text-[48px] sm:text-[30px] text-[25px] sm:tracking-[1.2rem] tracking-[0.6rem] leading-tight font-semibold text-white">
                      HOW WE WORK
                    </h3>
                  </>
                )}
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="absolute -bottom-8 2xl:-right-8 sm:-right-3 -right-2 bg-[#99EA48] border-[12px] border-[#fafafa] sm:w-[163px] w-[120px] sm:h-[163px] h-[120px] rounded-[163px] flex items-center justify-center"
                >
                  {isVideoPlaying ? (
                    <Image src={Pause} alt="pauseIcon" />
                  ) : (
                    <Image src={Play} alt="playIcon" />
                  )}
                </button>
                <video
                  controlsList="nodownload noplaybackrate nofullscreen"
                  autoPlay
                  disablePictureInPicture
                  ref={videoRef}
                  className={`absolute pointer-events-none select-none inset-0 -z-10 w-full h-full rounded-[20px] transition-opacity duration-500 ${
                    isVideoPlaying ? "opacity-100" : "opacity-0"
                  }`}
                  controls={isVideoPlaying}
                  onPause={handleVideoPause}
                  onEnded={() => setIsVideoPlaying(false)}
                >
                  <source src="/home/dummy.mp4" type="video/mp4" />
                  <p>Your browser does not support the video tag.</p>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWroks
