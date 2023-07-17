"use client"
import Header from "@/components/Header.js";
import Banner from "@/components/Banner.js";
import AboutUs from "@/components/AboutUs.js";
import WhyUs from "@/components/WhyUs.js";
import Partners from "@/components/Partners.js";


function Home() {

  return (
    <div className="home">
      <Header />
      <Banner />
      <AboutUs />
      <WhyUs />
      <Partners />
    </div>
  );
}

export default Home;
