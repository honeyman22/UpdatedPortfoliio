import useOutsideClick from "@/app/hooks/useOutSideClick";
import { menu } from "./Header";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open?: boolean;
}
const Menu = ({ setOpen, open }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setOpen(false));
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <nav
        ref={ref}
        className={`transition-all duration-300 ease-linear ${
          open ? "translate-x-0" : "translate-x-full"
        } fixed right-0 top-0 z-[1000] 
          flex h-screen w-full flex-col gap-10  bg-primaryblue px-4 py-6   transition-all md:w-1/2  md:px-10`}
      >
        <div className=" flex w-full justify-end">
          <button
            className="cursor-pointer  hover:text-primaryblue"
            onClick={() => setOpen(false)}
          >
            <MdClose size={32} fill="white" />
          </button>
        </div>

        <ul className="  flex flex-col gap-10 text-white">
          {menu.map((item) => (
            <button
              key={item?.id}
              className=" w-fit hover:text-primaryorange"
              onClick={() => setOpen(false)}
            >
              <Link href={item?.url}>{item?.name}</Link>
            </button>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="fixed inset-0 z-[999] overflow-hidden bg-black opacity-25" />
      )}
    </>
  );
};

export default Menu;
