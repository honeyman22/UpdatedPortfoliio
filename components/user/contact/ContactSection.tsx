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
      address: "Kharibot Road, Mahalaxmi, Lalitpur, Nepal",
      icon: <MdOutlineLocationOn fill="#003366" size={40} />,
      link: "https://www.google.com/maps/place/27%C2%B039'34.1%22N+85%C2%B020'48.1%22E/@27.6594632,85.3454643,19z/data=!3m1!4b1!4m13!1m8!3m7!1s0x39eb175804d46333:0x407a3f6860e99df2!2sImadol,+Mahalaxmi!3b1!8m2!3d27.6564024!4d85.3420486!16s%2Fm%2F04n62h6!3m3!8m2!3d27.659462!4d85.346682?entry=ttu",
    },
    {
      name: "Phone Number",
      address: "+977 9825275948",
      icon: <MdOutlinePhoneInTalk fill="#003366" size={32} />,
      link: "tel:+977 9825275948",
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
