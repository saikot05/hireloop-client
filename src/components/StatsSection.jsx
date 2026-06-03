"use client";

import React from "react";
import { Card } from "@heroui/react";
import { Briefcase, Suitcase, Person, Star } from "@gravity-ui/icons";
import { motion } from "motion/react"

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      value: "50K",
      label: "Active Jobs",
      icon: <Briefcase className="w-5 h-5 text-zinc-400" />,
    },
    {
      id: 2,
      value: "12K",
      label: "Companies",
      icon: <Suitcase className="w-5 h-5 text-zinc-400" />,
    },
    {
      id: 3,
      value: "2M",
      label: "Job Seekers",
      icon: <Person className="w-5 h-5 text-zinc-400" />,
    },
    {
      id: 4,
      value: "97%",
      label: "Satisfaction Rate",
      icon: <Star className="w-5 h-5 text-zinc-400" />,
    },
  ];

  return (
    <section className="w-full bg-[#050505] text-white pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden relative border-b border-zinc-900/60">
      
      {/* 1. LAYER 1: Deep Atmospheric Purple Glow behind the globe */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-indigo-600/25 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* 2. LAYER 2: Large Desktop Globe Framework to match design image perfectly */}
      <div 
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[160vw] max-w-[1600px] aspect-[16/10] pointer-events-none opacity-90 mix-blend-screen hidden md:block z-0"
        style={{
          backgroundImage: "url('/images/globe.png')",
          backgroundSize: "90% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* 3. LAYER 3: Mobile Globe Fallback */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-80 mix-blend-screen block md:hidden z-0"
        style={{
          backgroundImage: "url('/images/globe.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 10%",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* 4. LAYER 4: Dark overlay gradient to cleanly sink the bottom of the globe into the cards section */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none z-0" />

      {/* 5. CONTENT FRAME */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Main Header Text - Sits beautifully centered within the globe horizon curve */}
        <div className="text-center max-w-3xl mx-auto mb-28 md:mb-40">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal text-zinc-200 leading-tight tracking-tight">
            Assisting over{" "}
            <span className="font-semibold text-white tracking-normal">
              15,000 job seekers
            </span>{" "}
            <br />
            find their dream positions.
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 ,rotate:360}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-zinc-400 mt-4"
          >
            Remote Jobs
          </motion.p>
        </div>

        {/* Statistics Cards Grid Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full relative z-20">
          {stats.map((stat) => (
            <Card 
              key={stat.id}
              className="bg-[#09090b]/90 backdrop-blur-md border border-zinc-800/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-2xl"
            >
              <div className="p-6 flex flex-col justify-between min-h-[165px]">
                {/* Top Icon Slot */}
                <div className="w-10 h-10 rounded-xl bg-zinc-900/80 flex items-center justify-center border border-zinc-800/50">
                  {stat.icon}
                </div>

                {/* Bottom Stats Metrics */}
                <div className="flex flex-col gap-0.5 mt-6">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-zinc-500 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}