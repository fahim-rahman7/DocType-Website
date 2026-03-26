import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Contactform from "@/components/Home/Contact";
export const metadata: Metadata = {
  title: "Contact | Venus",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Get in Touch with Us"
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />

      <Contactform />
    </>
  );
};

export default page;
