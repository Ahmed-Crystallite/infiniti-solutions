import {
  BannerCTA,
  FAQs,
  Hero,
  MarketingObjectives,
  OurWorks,
  Portfolio,
  Reviews,
} from "@/components"
import Services from "@/components/Services"

export default function Home() {
  return (
    <>
      <Hero />
      <OurWorks />
      <Portfolio />
      <Reviews />
      <MarketingObjectives />
      <FAQs />
      <Services />
      <BannerCTA />
    </>
  )
}
