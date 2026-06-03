import React from "react";
import Link from "next/link";

export default function Footer() {
  // Navigation data structured for clean mapping
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Job discovery", href: "/jobs" },
        { label: "Worker AI", href: "/worker-ai" },
        { label: "Companies", href: "/companies" },
        { label: "Salary data", href: "/salary" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { label: "Help center", href: "/help" },
        { label: "Career library", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Brand Guideline", href: "/brand" },
        { label: "Newsroom", href: "/news" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#050505] text-zinc-400 pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          
          {/* Left Column: Brand Info & Tagline */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              {/* Brand Logo Icon */}
              <div className="w-9 h-9 bg-gradient-to-br from-[#A855F7] to-[#6366F1] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/10">
                <span className="text-white font-black text-lg tracking-tighter">{"</>"}</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-base text-white tracking-wide">Hire</span>
                <span className="font-medium text-xs text-zinc-400">Loop</span>
              </div>
            </Link>
            
            <p className="text-zinc-500 text-sm max-w-sm font-normal leading-relaxed mt-2">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Right Columns: Dynamic Navigation Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="text-[#5850EC] font-semibold text-sm sm:text-base tracking-wide">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-zinc-400 hover:text-white text-sm font-normal transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] w-full bg-zinc-900" aria-hidden="true" />

        {/* Bottom Bar: Socials & Copyright Info */}
        <div className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          
          {/* Social Links Panel (Styled exactly to look like the image layout) */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-[#121212] hover:bg-zinc-800 rounded-lg flex items-center justify-center text-white transition-colors duration-200 border border-zinc-800/40"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h2.72l.42-3H12V6.5a1 1 0 011-1h2.5V2H13A4.5 4.5 0 008.5 6.5V8z"/>
              </svg>
            </a>

            {/* Pinterest / Custom Icon */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-[#5850EC] hover:bg-indigo-600 rounded-lg flex items-center justify-center text-white transition-colors duration-200 shadow-md shadow-indigo-500/10"
              aria-label="Pinterest"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 00-3.64 19.31c-.1-.85-.19-2.15.04-3.07.2-.84 1.34-5.69 1.34-5.69s-.34-.69-.34-1.71c0-1.6 1-2.8 2.1-2.8.98 0 1.46.74 1.46 1.63 0 .99-.63 2.47-.96 3.84-.27 1.15.58 2.09 1.71 2.09 2.06 0 3.64-2.17 3.64-5.3 0-2.77-2-4.71-4.83-4.71-3.3 0-5.23 2.47-5.23 5.02 0 1 .38 2.07.86 2.65a.3.3 0 01.07.26c-.1.39-.31 1.25-.35 1.42-.05.23-.18.28-.41.17-1.54-.72-2.5-2.98-2.5-4.8 0-3.9 2.84-7.5 8.19-7.5 4.3 0 7.64 3.06 7.64 7.16 0 4.27-2.69 7.71-6.42 7.71-1.25 0-2.43-.65-2.84-1.43l-.77 2.94c-.28 1.07-1.04 2.41-1.55 3.24A10 10 0 1012 2z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-[#121212] hover:bg-zinc-800 rounded-lg flex items-center justify-center text-white transition-colors duration-200 border border-zinc-800/40"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-zinc-600 text-center sm:text-left">
            <span>Copyright 2024 —Programming Hero</span>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="hover:text-zinc-400 transition-colors duration-200">
                Terms & Policy
              </Link>
              <span className="text-zinc-800" aria-hidden="true">—</span>
              <Link href="/privacy" className="hover:text-zinc-400 transition-colors duration-200">
                Privacy Guideline
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}