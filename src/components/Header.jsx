"use client"
// React
import { useEffect, useState } from "react"
// Next
import Image from "next/image"
import Link from "next/link"
// Media
import Logo from "media/home/header/logo.svg"
import BellIcon from "media/home/icons/bell.svg"
// Components
import { CTA } from "./index"
const Header = () => {
  const [openIndex, setOpenIndex] = useState(false)

  useEffect(() => {
    if (openIndex) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [openIndex])
  return (
    <header>
      <div
        className={`absolute z-40 w-full py-5 ${
          !openIndex ? "overflow-hidden" : ""
        } `}
      >
        <div className="container">
          <div className="grid grid-cols-12 items-center place-content-between">
            <div className="2xl:col-span-6 xl:col-span-7 lg:col-span-8 col-span-6">
              <div className="grid grid-cols-12 items-center">
                <div className="lg:col-span-3 col-span-12">
                  <Link href="/" rel="preload" as="/">
                    <Image src={Logo} alt="logo" priority />
                  </Link>
                </div>
                <nav className="col-span-9">
                  <ul
                    className={`lg:static absolute z-50 lg:bg-transparent transition-all ease-in-out duration-300 lg:w-full md:w-[35%] w-[60%] lg:h-auto h-screen top-0 bottom-0 right-0 lg:translate-x-0 translate-x-full lg:p-0 px-10 py-10 bg-primary flex lg:flex-row flex-col lg:items-center lg:justify-center lg:gap-x-10 gap-y-10 ${
                      !openIndex ? "translate-x-full" : "!translate-x-0"
                    }`}
                  >
                    <li className={!openIndex ? "hidden" : "block"}>
                      <button
                        onClick={() => setOpenIndex((prev) => !prev)}
                        className="w-[12%] flex flex-col gap-3 justify-end items-end ms-auto"
                      >
                        <span
                          className={`block bg-black w-full h-[3px] transition-all ease-in-out duration-500 rounded-lg ${
                            !openIndex ? "rotate-0" : "-rotate-45 -mb-3.5 h-1"
                          }`}
                        ></span>
                        <span
                          className={`block bg-black w-full h-[3px] transition-all ease-in-out duration-500 rounded-lg ${
                            !openIndex ? "block" : "hidden"
                          }`}
                        ></span>
                        <span
                          className={`block bg-black w-full h-[3px] transition-all ease-in-out duration-500 rounded-lg ${
                            !openIndex ? "rotate-0" : "rotate-45 h-1"
                          }`}
                        ></span>
                      </button>
                    </li>
                    {[
                      ["About us"],
                      ["Services"],
                      ["Projects"],
                      ["Contact"],
                    ].map(([text], i) => (
                      <li
                        key={i}
                        className="w-max relative overflow-hidden group"
                      >
                        <Link
                          onClick={() => setOpenIndex(false)}
                          href="#"
                          className="lg:text-black text-white block font-semibold text-base leading-tight"
                        >
                          {text}
                        </Link>
                        <span className="lg:bg-primary bg-white w-full h-[2px] absolute bottom-0 transition-all ease-in-out duration-500 -translate-x-full group-hover:translate-x-0 rounded-lg"></span>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="2xl:col-span-6 xl:col-span-5 lg:col-span-4 col-span-6">
              <div className="flex justify-end items-center gap-x-3">
                <CTA css="md:inline-flex hidden" />
                <a
                  href="#"
                  className="bg-black w-[50px] h-[50px] rounded-[50px] flex items-center justify-center"
                >
                  <Image
                    src={BellIcon}
                    alt="icon"
                    priority
                    className="mx-auto"
                  />
                </a>
                <button
                  onClick={() => setOpenIndex((prev) => !prev)}
                  className="md:w-[12%] w-[20%] lg:hidden flex flex-col gap-3"
                >
                  <span
                    className={`block bg-black w-full h-[3px] transition-all ease-in-out duration-500 rounded-lg ${
                      !openIndex ? "rotate-0" : "-rotate-45 -mb-3.5 h-1"
                    }`}
                  ></span>
                  <span
                    className={`block bg-black w-full h-[3px] transition-all ease-in-out duration-500 rounded-lg ${
                      !openIndex ? "block" : "hidden"
                    }`}
                  ></span>
                  <span
                    className={`block bg-black w-full h-[3px] transition-all ease-in-out duration-500 rounded-lg ${
                      !openIndex ? "rotate-0" : "rotate-45 h-1"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
