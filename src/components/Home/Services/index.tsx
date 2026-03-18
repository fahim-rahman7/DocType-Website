import React from "react";
import Link from "next/link";
import { Servicebox } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-section dark:bg-darklight" id="services">
      <div className="container mx-auto max-w-6xl px-4">
        <div
          className="flex gap-2 items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <span className="w-3 h-3 rounded-full bg-success"></span>
          <span className="font-medium text-midnight_text text-sm dark:text-white/50">
            our services
          </span>
        </div>
        <h2
          className="sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:text-white"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Services specifically designed to meet your business needs
        </h2>
        <div className="grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7">
          {Servicebox.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 rounded-md gap-8 dark:bg-darkmode group  dark:hover:bg-[#0a1f4d] hover:border-blue-200"
              >
                <IconComponent className="text-4xl text-primary transition-colors duration-300 group-hover:text-blue-700" />

                <h3 className="max-w-44 mx-auto text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="dark:text-white/50 text-base font-normal">
                  {item.description}
                </p>

                <Link
                  href="#"
                  className="text-lg font-medium text-primary flex items-center"
                >
                  Get Started
                  <span>
                    <Icon icon="ei:chevron-right" width="30" height="30" />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
