import growthify from "../../assets/growthifyWorks.svg";

export default function WhyGrowthifyWorks() {
  return (
    <section className="px-[31px] lg:px-[99px]">
      <div className="py-[46px] lg:py-[77.5px] max-w-[1314px] mx-auto">
        <h2
          className="font-semibold text-[28px] md:text-[40px] md:leading-[48px] mb-[50px] text-center"
          data-aos="fade-up">
          Why Growthify works?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] lg:gap-[101px]">
          <figure
            className="lg:order-2 flex items-center justify-center lg:block"
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
              More exposure = More investors = More sales
            </p>
            <ul className="list-disc list px-3">
              <li className="text-base md:text-[19px] md:leading-[35.15px]">
                We know Web3 space.
              </li>
              <li className="text-base md:text-[19px] md:leading-[35.15px]">
                We have direct relationships with the{" "}
                <span className="font-bold">biggest news platform.</span>
              </li>
              <li className="text-base md:text-[19px] md:leading-[35.15px]">
                More than 100+ successful web3 projects have trusted us to
                launch their stories.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
