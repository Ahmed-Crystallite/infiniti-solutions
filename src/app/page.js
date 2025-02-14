import {
  BannerCTA,
  FAQs,
  Hero,
  MarketingObjectives,
  OurWorks,
  Reviews,
} from "@/components"
import Services from "@/components/Services"

export default function Home() {
  return (
    <>
      <Hero />
      <OurWorks />
      <MarketingObjectives />
      <Reviews />
      <FAQs />
      <Services />
      <BannerCTA />
    </>
  )
}
