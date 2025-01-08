import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";
import SplitType from "split-type";
import choco from "../asset/coklat.mp4";

const Hero = () => {
  useGSAP(() => {
    const chocoText = new SplitType("#choco");
    const betterText = new SplitType("#better");

    // Animation for #choco
    gsap.fromTo(
      ".char",
      {
        y: 115,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.2,
        duration: 2,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      "#choco",
      {
        clipPath: "inset(100% 0 0 0)",
      },
      {
        clipPath: "inset(0 0 0 0)",
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5,
      }
    );

    // Animation for #better
    gsap.fromTo(
      "#better .char",
      {
        y: 115,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 1.5, // Delayed to follow #choco animation
        duration: 1.5,
        ease: "power2.out",
      }
    );

    gsap.to(".move-loop", {
      x: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    gsap.to(".move-loop1", {
      rotationX: 30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      transformOrigin: "center",
    });
    gsap.fromTo(
      ".move-loop1",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        ease: "power2.out",
        opacity: 1,
      }
    );
    gsap.fromTo(
      ".move-loop",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 10,
        duration: 1,
        ease: "power2.out",
        opacity: 1,
      }
    );
    gsap.from("#video", {
      opacity: 0,
    });
    gsap.to("#video", {
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <video
        id="video"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={choco} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <h1 id="choco" className="text-white text-5xl font-bold mb-4">
          Chocolate makes
        </h1>
        <h2 id="better" className="text-white text-3xl">
          Everything better.
        </h2>
      </div>
      <div className="move-loop1 absolute w-[400px] left-[40px] top-[550px] hidden sm:block">
        <img src="/images/choco1.png" />
      </div>
      <div className="move-loop absolute w-[1000px] top-0 right-[-300px] hidden sm:block rotate-90">
        <img src="/images/choco2.png" />
      </div>
    </div>
  );
};

export default Hero;
