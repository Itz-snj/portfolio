"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar.tsx";
import { useState } from "react";
import logo from "../assets/projects/SNJlogo.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function PortfolioNavbar() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Technologies",
      link: "#technologies", 
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Experience",
      link: "#experience",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center">
            <PortfolioLogo />
          </div>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex justify-center items-center text-xl gap-3">
              <a 
                href="https://www.facebook.com" 
                className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow cursor-pointer relative z-10" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.github.com" 
                className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow cursor-pointer relative z-10" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.instagram.com" 
                className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow cursor-pointer relative z-10" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com" 
                className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow cursor-pointer relative z-10" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
            <NavbarButton 
              variant="primary" 
              as="button"
              onClick={scrollToContact}
            >
              Contact Me
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center">
              <PortfolioLogo />
            </div>
            <div className="flex items-center gap-4">
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 hover:text-white transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            
            <div className="flex justify-center items-center text-xl gap-4 my-4">
              <a 
                href="https://www.facebook.com" 
                className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow cursor-pointer relative z-10" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.github.com" 
                className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow cursor-pointer relative z-10" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.instagram.com" 
                className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com" 
                className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
            
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToContact();
                }}
                variant="primary"
                className="w-full"
              >
                Contact Me
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

const PortfolioLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src={logo}
        alt="SNJ Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
    </a>
  );
};
