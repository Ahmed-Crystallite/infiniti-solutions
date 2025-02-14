"use client"

// Embla
import useEmblaCarousel from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "./SliderArrows"
import { CounterButton, useCounterButton } from "./SliderCounter"

export default function AutoPlaySlider({
  wrapperClasses = "",
  emblaWrapper = "flex [margin-left:calc(1rem_*_-1)]",
  options,
  align = "start",
  children,
  arrows = true,
  arrowsCss = "",
  counter = false,
}) {
  const plugins = [
    ClassNames(),
    Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false }),
  ]
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, align: align, loop: false, ...options },
    plugins
  )

  const { selectedIndex, scrollSnaps, onCounterButtonClick } =
    useCounterButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="relative z-10">
      <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
        <div className={emblaWrapper}>{children}</div>
      </div>
      {arrows && (
        <div
          className={`flex gap-10 items-center justify-between mt-10 ${arrowsCss}`}
        >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          {counter && (
            <div>
              <div className="flex mt-5 items-center gap-x-px text-xl font-semibold leading-tight text-[#01020566]">
                <span className="text-[#010205]">0 {selectedIndex + 1}</span>
                <span>/</span>
                <span>0 {scrollSnaps.length}</span>
              </div>
              {scrollSnaps.map((_, index) => (
                <CounterButton
                  key={index}
                  onClick={() => onCounterButtonClick(index)}
                  className={`text-base font-semibold leading-tight text-[#01020566] ${
                    index === selectedIndex ? "text-[#010205]" : ""
                  }`}
                />
              ))}
            </div>
          )}
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      )}
    </div>
  )
}
