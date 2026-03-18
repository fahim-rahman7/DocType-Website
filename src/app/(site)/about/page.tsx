
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
export const metadata: Metadata = {
    title: "About | Venus",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title="About Us"
        description="Transforming Concept Into Creation"
        breadcrumbLinks={breadcrumbLinks}
      />
       <Counter isColorMode={true} />
       <Progresswork isColorMode={true} />
    </>
  );
};

export default page;
