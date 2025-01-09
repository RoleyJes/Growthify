import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Percentages() {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  // const [counterVisible, setCounterVisible] = useState<boolean>(false);

  const myRef = useRef<HTMLParagraphElement>(null);

  // Old code at deployment

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setCounterVisible(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  // window.addEventListener("scroll", () => {
  //   setCounterOn(counterVisible);
  // });

  // Updated code after deployment @ 04-12-2024
  useEffect(() => {
    const target = myRef.current;

    if (!target) return;

    const numObserver = new IntersectionObserver(
      ([entry]) => setCounterOn(entry.isIntersecting),
      { root: null, threshold: 0.5 },
    );

    numObserver.observe(target);

    return () => {
      numObserver.unobserve(target);
    };
  }, []);

  return (
    <section className="px-[30px] lg:px-[191px]">
      <div
        className="py-[30px] lg:py-[32px] max-w-[731px] mx-auto"
        data-aos="fade-up">
        <h2 className="font-semibold text-[28px] md:text-[40px] md:leading-[48px] mb-[55px] lg:mb-[40px] text-center">
          Our numbers
        </h2>

        <div className="flex gap-4 lg:items-center justify-center md:gap-5 lg:gap-[67px]">
          <div className="px-[3px] py-[8px] md:py-6 lmd:px-5 flex flex-col md:items-center md:text-center">
            <p
              ref={myRef}
              className="text-blue font-bold text-[48px] lg:text-[80px] flex items-center gap-2 md:gap-3">
              {counterOn ? (
                <CountUp start={0} end={100} duration={1.5} delay={0} />
              ) : (
                1
              )}
              <span>+</span>
            </p>
            <p
              className="w-[57px md:w-auto mt-[4px] md:mt-[14px] font-semibold text-[19px] leading-[22.8px] lg:text-[23px] lg:leading-[27.6px]"
              data-aos="fade-up"
              data-aos-delay="300">
              News site
            </p>
          </div>

          <div className="px-[3px] py-[8px] md:py-6 lmd:px-5 flex flex-col md:items-center md:text-center">
            <p className="text-blue font-bold text-[48px] lg:text-[80px] flex items-center gap-2 md:gap-3">
              {counterOn ? (
                <CountUp start={0} end={200} duration={1} delay={0.1} />
              ) : (
                1
              )}{" "}
              <span>M</span> <span>+</span>
            </p>
            <p
              className="mt-[4px] md:mt-[14px] font-semibold text-[19px] leading-[22.8px] lg:text-[23px] lg:leading-[27.6px]"
              data-aos="fade-up"
              data-aos-delay="300">
              Potential outreach
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
