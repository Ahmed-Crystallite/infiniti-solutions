"use client"
// React Hooks
import { useCallback, useEffect, useState } from "react"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "./SliderArrows"
import Fade from "embla-carousel-fade"

export default function ProgreesBarSlider({
  wrapperClasses = "",
  emblaWrapper = "flex [margin-left:calc(1rem_*_-1)]",
  options,
  align = "start",
  children,
  arrows = true,
  arrowsCss,
  progressBarCss=""
}) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const plugins = [
    Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false }),
    Fade(),
  ]
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, align: align, loop: true, ...options },
    plugins
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll)
  }, [emblaApi, onScroll])
  return (
    <>
      <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
        <div className={emblaWrapper}>{children}</div>
      </div>
      {arrows && (
        <div className={`flex gap-10 justify-between mt-10 ${arrowsCss}`}>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            classes="disabled:opacity-40"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            classes="disabled:opacity-40"
          />
        </div>
      )}
      <div
        className={`relative h-[0.4rem] w-full overflow-hidden bg-secondary/20 self-center justify-self-center ${progressBarCss}`}
      >
        <div
          className="absolute top-0 bottom-0 left-[-100%] w-full bg-[#000]"
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div>
    </>
  )
}
