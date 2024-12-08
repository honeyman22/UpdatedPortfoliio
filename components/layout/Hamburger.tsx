"use client";
import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Menu open={open} setOpen={setOpen} />
      {/* <button onClick={() => setOpen(!open)} className="cursor-pointer">
        <GiHamburgerMenu size={28} />
      </button> */}
    </>
  );
};

export default Hamburger;
