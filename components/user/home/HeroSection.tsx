"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const lotteRef = useRef<Player | null>(null);
  return (
    <section className="relative hero-section items-center justify-center sm:py-20 px-4 sm:px-10 bg-secondary w-full flex flex-col sm:flex-row h-[90vh]">
      <div className=" flex justify-center items-center w-full">
        <h1 className="text-highlight font-semibold leading-[2.5rem] w-full text-2xl sm:text-5xl ">
          Hi, I&apos;m Nishan <br />A Passionate{" "}
          <span style={{ color: "#D0B8A0", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Frontend Developer",
                "Tech Enthusiast",
                "Problem Solver",
                "Software Engineer",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
      <div className="w-full lg:w-[60%]">
        <Player
          ref={lotteRef}
          autoplay={true}
          loop={true}
          controls={true}
          src={"/lotties/animationweb.json"}
        ></Player>
      </div>
    </section>
  );
};

export default HeroSection;
