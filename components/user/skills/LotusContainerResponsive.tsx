import React, { useEffect, useLayoutEffect, useRef } from "react";
import LotusComponentResponsive from "./LotusComponentResponsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LotusContainerResponsiveProps {
  containerRef: React.MutableRefObject<null>;
  data: Array<{ title: string; image: string; description: string }>;
}

const LotusContainerResponsive: React.FC<LotusContainerResponsiveProps> = ({
  containerRef,
  data,
}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = () => {
      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia(containerRef);

        mm.add("(max-width:1279px)", () => {
          // const cards: HTMLElement[] = Array.from(
          //   document.querySelectorAll("#lotus-card")
          // );
          const cards: HTMLElement[] = gsap.utils.toArray("#lotus-card");

          if (cards.length < 1) return;

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              pin: true,
              pinSpacing: true,
              start: "top top",
              end: "+=4000",
              scrub: 0.6,
              invalidateOnRefresh: false,
            },
          });

          cards.map((card, index) => {
            tl.from(card, {
              scale: 1,
              yPercent: 100,
              opacity: 0,
              duration: 3,
              stagger: 0.4,
              ease: "power2.inOut",
            });
          });

          return () => {
            tl.kill();
          };
        });

        return () => mm.kill();
      }, containerRef);

      return () => ctx.revert();
    };

    return animation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="w-full flex xl:hidden flex-col h-[110vh] xs-laptop:h-[120vh] xl:h-[110vh] relative items-center justify-center xs-laptop:mt-[14.8rem] xl:my-0"
      id="cards-container"
    >
      {data.map((item, index) => (
        <LotusComponentResponsive
          index={index}
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
};

export default LotusContainerResponsive;
