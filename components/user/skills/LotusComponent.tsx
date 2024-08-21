import Image from "next/image";
import { motion } from "framer-motion";

interface LotusComponentProps {
  index: number;
  image?: string;
  title?: string;
  description?: string;
  className?: string;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
  selected: number | null;
}

const LotusComponent: React.FC<LotusComponentProps> = ({
  index,
  image,
  title,
  setSelected,
  selected,
  description,
}) => {
  const rotate = index * 30 - 195;
  const translateX = 140;
  const translateY = 15;
  const isSelected = selected === index;
  return (
    <motion.div
      initial={{
        transform: "rotate(-195deg) translateX(140px) translateY(15px)",
        transformOrigin: "50% 50%",
        opacity: 0,
      }}
      whileInView={{
        transform: `rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px)`,
        transformOrigin: "50% 50%",
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: "easeIn",
          delay: index / 20,
        },
      }}
      viewport={{
        once: true,
        margin: "20px",
      }}
      className="absolute top-0 cursor-pointer group"
    >
      <motion.div
        className={`relative ${
          selected === null
            ? "opacity-100"
            : isSelected
            ? "opacity-100"
            : "opacity-5"
        }`}
        initial={{
          opacity: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
        }}
        animate={
          selected === null
            ? { opacity: 1 }
            : isSelected
            ? { opacity: 1 }
            : { opacity: 0.05 }
        }
      >
        <svg
          width="206.5"
          height="108"
          viewBox="0 0 206.5 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isSelected ? "scale-[1.3]" : ""
          } origin-left transition-all duration-700`}
          onMouseEnter={(e) => {
            e.stopPropagation();
            setSelected(index);
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            setSelected(null);
          }}
        >
          <path
            d="M143.481 83.2406C169.904 90.1503 195.725 70.2137 195.725 42.9023V42.9023C195.725 15.591 169.904 -4.34557 143.481 2.56408L4.02419 39.0325C0.0401595 40.0743 0.040169 45.7304 4.02419 46.7722L143.481 83.2406Z"
            stroke="#FF7500"
            strokeWidth="0.5"
          />
        </svg>

        <div
          className={` ${
            isSelected
              ? "w-[75px] h-[75px] top-[3px] -right-[30px]"
              : "w-[55px] h-[55px] right-[20px] top-[15px]"
          } transition-all duration-700 rounded-full bg-white absolute  flex items-center justify-center pointer-events-none`}
        >
          <span
            className="relative flex items-center justify-center w-full h-full"
            style={{
              transform: `rotate(${-rotate}deg)`,
            }}
          >
            {/* <Image
              src={image ? image : ""}
              width={21}
              height={21}
              alt="asd"
              className={`object-cover absolute ${
                isSelected ? "w-[46px]" : ""
              } transition-all duration-700`}
            /> */}
            <motion.img
              transition={{
                ease: "easeInOut",
                duration: 0.2,
              }}
              initial={{
                rotate: 0,
                scale: 1,
              }}
              animate={
                isSelected
                  ? {
                      rotate: 20,
                      scale: 2,
                    }
                  : {
                      scale: 1,
                      rotate: 0,
                    }
              }
              src={image ? image : ""}
              width={28}
              height={28}
              alt="asd"
              className={`object-cover absolute transition-all duration-700`}
            ></motion.img>
          </span>
        </div>
        <span
          className={`absolute  ${
            index >= 2 && index <= 4
              ? isSelected
                ? "left-[70%] top-0 "
                : "top-8 left-[95%]"
              : index === 5
              ? isSelected
                ? "top-8 left-[125%]"
                : "top-8 left-[115%]" //`left-[115%] top-8 group-hover:left-[125%]`
              : isSelected
              ? "-top-[30px] left-[135%]"
              : "top-[20px] left-[110%]"
          } transition-all duration-700 flex flex-col items-start ${
            index === 0 || index === 1 || index === 6 || index === 7
              ? isSelected
                ? "w-[350px] laptop:w-[400px]"
                : ""
              : isSelected
              ? "w-[400px]"
              : ""
          } `}
          style={{
            transform: `rotate(${-rotate}deg)`,
          }}
          onMouseEnter={(e) => {
            e.stopPropagation();
            if (isSelected) setSelected(index);
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            setSelected(null);
          }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              delay: (index + 1) * 0.3,
              easings: [0, 0, 0, 0, 1],
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-white whitespace-nowrap tracking-[0.8px]"
          >
            {title}
          </motion.h3>
          {isSelected && (
            <p
              className={`${
                isSelected ? "block" : "hidden"
              }block text-primary tracking-[0.8px]`}
            >
              {description}
            </p>
          )}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default LotusComponent;
