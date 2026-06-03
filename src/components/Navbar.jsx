"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const{ data: session, isPending } = useSession();
  console.log("Session data in Navbar:", session, "Is pending:", isPending);
  const user = session?.user;

  const navLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="w-full bg-[#121212] border-b border-zinc-900 sticky top-0 z-50">
      {/* Container max-width handles ultra-wide monitors gracefully */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center min-w-0 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            {/* Visual Icon - Always Visible */}
            <div className="w-9 h-9 bg-gradient-to-br from-[#A855F7] to-[#6366F1] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/10 flex-shrink-0">
              <span className="text-white font-black text-lg tracking-tighter">{"</>"}</span>
            </div>
            {/* Text Brand - Hidden on micro screens (<360px) to prevent layout breakages */}
            <div className="hidden xs:flex flex-col leading-none truncate">
              <span className="font-bold text-base text-white tracking-wide">Programming</span>
              <span className="font-medium text-xs text-zinc-400">Hero</span>
            </div>
          </Link>
        </div>

        {/* Right Side: Desktop Navigation Links (Visible from SM screens upwards) */}
        <nav className="hidden sm:flex items-center sm:gap-4 md:gap-6 justify-end flex-1 min-w-0">
          <div className="flex items-center sm:gap-4 md:gap-6 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-zinc-300 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Vertical Divider Line */}
          <span className="h-4 w-[1px] bg-zinc-700 mx-1 md:mx-2 flex-shrink-0" aria-hidden="true" />

          {/* Action Links & Buttons */}
          <div className="flex items-center sm:gap-4 md:gap-5 flex-shrink-0">
            <Link
              href="/signin"
              className="text-[#5850EC] hover:text-indigo-400 text-sm font-semibold transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              className="bg-white text-black font-semibold text-sm px-4 md:px-5 py-2.5 min-w-[110px] md:min-w-[120px] text-center rounded-xl hover:bg-zinc-200 transition-all duration-200 shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Far Right Side: Mobile Hamburger Menu Toggle Button */}
        <div className="flex sm:hidden items-center flex-shrink-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-zinc-400 hover:text-white focus:outline-none flex flex-col gap-1.5 w-6 h-6 justify-center items-center z-50 relative"
          >
            {/* Animated Hamburger Lines */}
            <span className={`h-0.5 w-5 bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition-all duration-200 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay Container */}
      <div
        className={`sm:hidden absolute top-16 left-0 w-full bg-[#121212]/98 backdrop-blur-md border-b border-zinc-950 transition-all duration-300 ease-in-out transform overflow-hidden ${
          isMenuOpen ? "max-h-[350px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pt-2 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-zinc-300 hover:text-white text-base font-medium block py-3 border-b border-zinc-900/50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/signin"
            className="text-[#5850EC] hover:text-indigo-400 text-base font-semibold block py-3 border-b border-zinc-900/50"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </Link>
          <div className="pt-4">
            <Link
              href="/get-started"
              className="bg-white text-black font-semibold text-base py-3 block text-center rounded-xl hover:bg-zinc-200 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}