"use client"
// React
import React, { useCallback, useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

export const PrevButton = (props) => {
  const { children, classes, ...restProps } = props

  return (
    <button
      type="button"
      {...restProps}
      className={`bg-black text-white border border-[#010205] w-[88px] h-[56px] flex items-center justify-center rounded-full [&:disabled]:bg-transparent [&:disabled]:text-black [&:disabled]:opacity-50 [&:disabled]:cursor-not-allowed ${classes}`}
    >
      <ArrowLeft />
    </button>
  )
}

export const NextButton = (props) => {
  const { children, classes, ...restProps } = props

  return (
    <button
      type="button"
      {...restProps}
      className={`bg-black text-white border border-[#010205] w-[88px] h-[56px] flex items-center justify-center rounded-full [&:disabled]:bg-transparent [&:disabled]:text-black [&:disabled]:opacity-50 [&:disabled]:cursor-not-allowed ${classes}`}
    >
      <ArrowRight />
    </button>
  )
}
