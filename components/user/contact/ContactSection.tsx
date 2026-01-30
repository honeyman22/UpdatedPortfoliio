"use client";
import React, { useRef } from "react";
import ContactForm from "../contact/ContactForm";
import {
  MdOutlineLocationOn,
  MdOutlinePhoneInTalk,
  MdOutlineEmail,
} from "react-icons/md";

import { motion, useInView } from "framer-motion";

import Link from "next/link";

interface IContactDetails {
  name: string;
  address: string;
  icon: React.ReactNode;
  link: string;
}

const ContactSection = () => {
  const contactdetails: Array<IContactDetails> = [
    {
      name: "Address",
      address: "SE4 1BH, London, United Kingdom",
      icon: <MdOutlineLocationOn fill="#003366" size={40} />,
      link: "https://www.google.com/maps/place/195+Malpas+Rd,+London+SE4+1BH/@51.467425,-0.036033,19.01z/data=!4m15!1m8!3m7!1s0x48760250a696c275:0x8ec1179c46959d7a!2sMalpas+Rd,+London+SE4+1BH!3b1!8m2!3d51.4668787!4d-0.0354684!16s%2Fg%2F1tgk02v6!3m5!1s0x48760250ab31726d:0x205edd6223286f64!8m2!3d51.467676!4d-0.035371!16s%2Fg%2F11c4ww0kjg?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D",
    },
    {
      name: "Phone Number",
      address: "+44 7979030258",
      icon: <MdOutlinePhoneInTalk fill="#003366" size={32} />,
      link: "tel:+44 7979030258",
    },
    {
      name: "Email",
      address: "nissan5301@gmail.com",
      icon: <MdOutlineEmail fill="#003366" size={32} />,
      link: "mailto:nissan5301@gmail.com",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Update state when component comes into view

  return (
    <section className="contact-section flex flex-col gap-20  overflow-x-hidden bg-secondary px-6 py-20 sm:py-[100px] sm:px-10  ">
      <div className="flex  w-full flex-wrap justify-between gap-10 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          className="lg:w-1/2 "
        >
          <h5 className="text-center  text-lg font-medium text-[#004080] sm:text-left ">
            Let&apos;s Connect
          </h5>
          <h3 className="mt-2 text-center text-[48px] tracking-wide  text-highlight font-semibold sm:text-left">
            Elevate Your Projects
          </h3>
          <p className="mt-2 text-center text-[#222222] sm:w-[460px]  sm:text-left lg:w-full">
            No matter if you&apos;re starting from scratch or aiming to enhance
            your existing projects, I&apos;m excited to bring your ideas to
            life. Contact me to explore how we can work together to achieve your
            goals.
          </p>
          <div className="mt-10 flex w-full  flex-wrap  gap-8 lg:flex-col">
            {contactdetails.map((item: IContactDetails, index) => (
              <div
                key={item?.name}
                className="flex w-[260px]   items-start gap-2"
              >
                <div className=" flex size-10 min-w-10 items-center justify-center rounded-full bg-primaryblue">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl text-gray10 ">{item.name}</h4>
                  <Link
                    href={item?.link}
                    target="_blank"
                    className=" text-black"
                  >
                    {item.address}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>{" "}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          className="flex-1 lg:w-[560px] xl:flex-none"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
