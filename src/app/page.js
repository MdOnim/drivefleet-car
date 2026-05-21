import Banner from "@/components/Banner";
import WhatOutPage from "@/components/WhatOut";
import WhyChooseSection from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChooseSection/>
      <WhatOutPage/>
    </div>
  );
}
