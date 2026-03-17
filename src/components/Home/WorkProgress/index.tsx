"use client";

import React from "react";
import { FaLightbulb, FaCheckCircle, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "Innovation",
    icon: FaLightbulb,
    description: "We build modern and creative solutions for your business.",
  },
  {
    title: "Quality",
    icon: FaCheckCircle,
    description: "We ensure top-notch quality in every project we deliver.",
  },
  {
    title: "Growth",
    icon: FaChartLine,
    description: "Helping your business scale and grow with technology.",
  },
];

const Progresswork = () => {
  return (
    <section className="py-20 bg-white dark:bg-darklight bg-cover">
      <div className="container mx-auto max-w-6xl px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            What We Offer
          </h2>
          <p className="text-gray-500 mt-3">
            Simple, powerful and effective solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-[#081738] text-center
              shadow-md transition-all duration-300 border border-transparent
              hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer
              hover:bg-blue-50 dark:hover:bg-[#0a1f4d] hover:border-blue-200"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <Icon className="text-4xl text-primary transition-colors duration-300 group-hover:text-blue-600" />
              </div>
            
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                {item.title}
              </h3>
            
              {/* Description */}
              <p className="text-gray-500 text-sm">
                {item.description}
              </p>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Progresswork;