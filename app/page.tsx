import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import PricingTable from "@/components/PricingTable/pricing-table";

export default function Home() {
  return (
    <>
      <Hero />
        <GetApp />
      <Camp />
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 -mt-20 mb-12">
            <PricingTable />
        </div>


        <Guide />
      <Features />

    </>
  )
}
