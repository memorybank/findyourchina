import HeroSection from "@/components/hero-section";
import Testimonial01  from "@/components/testmonial";
import Features01Page from "@/components/features";
import { Locals } from "@/components/locals";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Features01Page />
      <Locals />
      <Testimonial01 />
    </>  
  )
}
