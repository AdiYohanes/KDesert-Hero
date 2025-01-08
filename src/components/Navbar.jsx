import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import "./global.css";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const linkRefs = useRef([]);

  useGSAP(() => {
    // animate navbar appear
    gsap.from("#logo-gsap", {
      y: -100,
      x: 100,
      opacity: 0,
    });
    gsap.to("#logo-gsap", {
      y: 0,
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    });

    if (overlayRef.current && menuRef.current) {
      gsap.set(overlayRef.current, {
        display: "none",
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      });
      gsap.set(menuRef.current, { opacity: 0, y: -50 });
    }
  }, []);

  // Hover effect for desktop menu items
  const handleHoverEnter = (index) => {
    const link = linkRefs.current[index];
    gsap.to(link.querySelector(".underline"), {
      scaleX: 1,
      opacity: 1,
      left: "50%",
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(link.querySelector(".linktext"), {
      color: "#FFE082",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleHoverLeave = (index) => {
    const link = linkRefs.current[index];
    gsap.to(link.querySelector(".underline"), {
      scaleX: 0,
      opacity: 0,
      left: "0%",
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(link.querySelector(".linktext"), {
      color: "white",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      gsap.set(overlayRef.current, { display: "block" });
      gsap.to(overlayRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.8,
        ease: "power2.inOut",
      });
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out",
      });
      gsap.to(hamburgerRef.current, {
        rotate: 90,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        },
      });
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(hamburgerRef.current, {
        rotate: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-transparent p-4">
      {/* Logo */}
      <div
        id="logo-gsap"
        className="flex text-white font-bold text-xl justify-center items-center gap-4"
      >
        <div className="w-8 rotate-[45deg]">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <div className="uppercase tracking-widest">KDessert</div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 px-14">
        {["Home", "Shop", "Contact"].map((text, index) => (
          <a
            key={text}
            href="#"
            className="text-white relative group text-3xl font-semibold uppercase transition-all duration-300"
            ref={(el) => (linkRefs.current[index] = el)}
            onMouseEnter={() => handleHoverEnter(index)}
            onMouseLeave={() => handleHoverLeave(index)}
          >
            <span className="linktext">{text}</span>
            <span className="underline absolute left-0 right-0 bottom-0 h-[2px] bg-[#FFE082] scale-x-0 opacity-0 transition-all duration-300"></span>
          </a>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden pr-10">
        <button onClick={toggleMenu} className="text-white" ref={hamburgerRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-[#873e23] bg-cover bg-center bg-no-repeat"
        style={{ display: "none" }}
      >
        <div
          ref={menuRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-[80px] font-semibold"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-8 text-white hover:text-amber-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {["Home", "Shop", "Contact"].map((text) => (
            <a
              key={text}
              href="#"
              className="mb-4 text-white hover:text-amber-200 transition-colors"
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
