import Banner from "@/components/Banner";
import HomePageCar from "@/components/HomePageCar";
import WhatOutPage from "@/components/WhatOut";
import WhyChooseSection from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChooseSection/>
      <HomePageCar/>
      <WhatOutPage/>
    </div>
  );
}
