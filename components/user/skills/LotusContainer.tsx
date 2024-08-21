"use client";
import React, { useState } from "react";
import LotusComponent from "./LotusComponent";
import Image from "next/image";
import { motion } from "framer-motion";

const LotusContainer = ({
  data,
}: {
  data: Array<{ title: string; image: string; description: string }>;
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="relative hidden xl:flex items-center justify-center mt-80 mb-72">
      {data.map((item, index) => (
        <LotusComponent
          index={index}
          key={index}
          title={item.title}
          selected={selected}
          setSelected={setSelected}
          image={item.image}
          description={item.description}
        />
      ))}
      <motion.div
        className="translate-y-[105px] translate-x-[-5px]"
        initial={{ opacity: 0 }}
        transition={{
          delay: 0.6,
          ease: "easeIn",
          duration: 0.6,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          src={"/static/svg/lifecycle-arrow.svg"}
          width={149.5}
          height={30.75}
          alt="lifecycle-arrow"
        />
      </motion.div>
    </div>
  );
};

export default LotusContainer;
