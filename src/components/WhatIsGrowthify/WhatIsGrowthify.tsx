import growthify from "../../assets/whatIsGrowthify.svg";
export default function WhatIsGrowthify() {
  return (
    <section className="px-[31px] lg:px-[99px]" id="about">
      <div className="py-[46px] lg:py-[77.5px] max-w-[1314px] mx-auto">
        <h2
          className="font-semibold text-[28px] md:text-[40px] md:leading-[48px] mb-[50px] text-center"
          data-aos="fade-up">
          What is Growthify?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-[40px] lg:gap-[101px]">
          <figure
            className="flex items-center justify-center lg:block"
            data-aos="fade-up"
            data-aos-delay="100">
            <img
              loading="lazy"
              src={growthify}
              alt="showing growthify as center of web3 projects"
            />
          </figure>

          <div data-aos="fade-up" data-aos-delay="100">
            <p className="font-bold text-[28px] leading-[33.6px] md:text-[40px] md:leading-[48px] mb-[14px]">
              Growthify is the number one PR newswire for web3 project
            </p>
            <ul className="list-disc list px-3">
              <li className="text-base md:text-[19px] md:leading-[35.15px]">
                We help Web3 companies get noticed.
              </li>
              <li className="text-base md:text-[19px] md:leading-[35.15px]">
                Get featured on 120+ top-tier news sites.
              </li>
              <li className="text-base md:text-[19px] md:leading-[35.15px]">
                200 million+ outreach potential.
              </li>
              <li className="text-base md:text-[19px] md:leading-[35.15px]">
                Trusted by web3 innovators for global exposure.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
