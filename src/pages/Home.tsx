import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Guarantee from "../components/Guarantee/Guarantee";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Percentages from "../components/Percentages/Percentages";
import Pricing from "../components/Pricing/Pricing";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import WhatIsGrowthify from "../components/WhatIsGrowthify/WhatIsGrowthify";
import WhyGrowthifyWorks from "../components/WhyGrowthify/WhyGrowthifyWorks";

export default function Home() {
  return (
    <section className="relative ">
      <Navbar />
      <Hero />
      <Percentages />
      <WhatIsGrowthify />
      <WhyGrowthifyWorks />
      <Pricing />
      <Guarantee />
      <TrustedBy />
      <GetStarted />
      <Footer />
    </section>
  );
}
