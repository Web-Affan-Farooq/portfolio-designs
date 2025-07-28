"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navStatus, setNavStatus] = useState<boolean>(false);

  const handleNav = () => {
    setNavStatus(!navStatus);
  };

  return (
    <header className="w-full fixed top-0 left-0 py-4 px-0 flex items-center justify-center bg-white/10 backdrop-blur-lg z-20">
      <nav className="w-[90%] mx-auto h-[60px] flex items-center justify-between">
        {/* Logo */}
        <div className="relative top-2">
          <Image src="/images/logo.png" alt="logo" width={150} height={60} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-5 items-center">
          {[
            { name: "Home", link: "/" },
            { name: "Logofolio", link: "/logofolio" },
            { name: "Projects", link: "/projects" },
          ].map((opt, idx) => (
            <Link
              key={idx}
              href={opt.link}
              className="text-white md:text-lg max-md:text-[16px] px-5 py-2 rounded-lg hover:text-sharp-yellow font-semibold"
            >
              {opt.name}
            </Link>
          ))}

          {/* Contact Button */}
          <Link href="/contact">
            <button className="font-bold bg-pink-500 text-white border-none rounded-lg px-5 py-2 hover:bg-pink-600 transition-all">
              Book an appointment
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          id="menu-icon"
          className="text-2xl text-pink-500 md:hidden absolute top-8 right-10 cursor-pointer z-10"
          onClick={handleNav}
        >
          {navStatus ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </nav>

      {/* Mobile Menu (Sliding Effect) */}
      <div
        className={`fixed top-0 right-0 w-full h-[60vh] bg-black/70 backdrop-blur-md flex flex-col justify-center items-center space-y-6 transform transition-transform duration-500 ${navStatus ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
      >
        {[
          { name: "Home", link: "/" },
          { name: "Logofolio", link: "/logofolio" },
          { name: "Projects", link: "/projects" },
          { name: "Contact", link: "/contact" },
        ].map((opt, idx) => (
          <Link
            key={idx}
            href={opt.link}
            className="text-[1rem] text-white px-[20px] py-[10px] rounded-[20px] hover:text-sharp-yellow"
            onClick={() => setNavStatus(false)}
          >
            {opt.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
