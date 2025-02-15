// Next
import dynamic from "next/dynamic"

import CTA from "./CTA"
const Header = dynamic(() => import("./Header"))
const Hero = dynamic(() => import("./Hero"))
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./Slider/SliderArrows"
const AutoPlaySlider = dynamic(() => import("./Slider/Autoplay"))
const AutoScrollSlider = dynamic(() => import("./Slider/AutoScroll"))
const ProgressBar = dynamic(() => import("./Slider/ProgressBar"))
const OurWorks = dynamic(() => import("./OurWroks"))
const MarketingObjectives = dynamic(() => import("./MarketingObjectives"))
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs"
const Reviews = dynamic(() => import("./Reviews"))
const FAQs = dynamic(() => import("./FAQs"))
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion"
const BannerCTA = dynamic(() => import("./BannerCTA"))
const Footer = dynamic(() => import("./Footer"))

export {
  CTA,
  Header,
  Hero,
  NextButton,
  PrevButton,
  usePrevNextButtons,
  AutoPlaySlider,
  ProgressBar,
  OurWorks,
  MarketingObjectives,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  AutoScrollSlider,
  Reviews,
  FAQs,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  BannerCTA,
  Footer,
}
