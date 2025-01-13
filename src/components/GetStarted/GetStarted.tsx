import bars from "../../assets/getStartedBars.svg";

export default function GetStarted() {
  return (
    <section className="px-6 lg:px-[4.06rem] bg-[#f9fbff]">
      <div
        className="pt-[3rem] pb-[2.12rem] max-w-[1409px] mx-auto"
        id="getStarted">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
          {/* Card 1 */}
          <div className="px-[2.38rem] py-[2.97rem] lg:pt-[8.06rem] flex flex-col gap-[1.06rem] bg-blue rounded-[1.875rem] shadow-[0_4px_48.4px_0_rgba(0,98,255,0.06)] text-white">
            <p
              className="text-[1.4375rem] font-bold lg:text-[2.5rem] lg:font-semibold"
              data-aos="fade-right">
              Get started today
            </p>
            <p
              className="text-[1.1875rem] leading-[2.19rem] lg:text-[1.4375rem] lg:leading-[1.725rem]"
              data-aos="fade-right"
              data-aos-delay="50">
              Let’s build the future of web3 together
            </p>
            <div
              className="hover:motion-safe:animate-bounce"
              data-aos="fade-right"
              data-aos-delay="70">
              <a
                className="text-[1.1875rem] leading-[1.425rem] lg:text-[1.4375rem] lg:leading-[1.725rem] italic underline"
                href="mailto:hello@growthify.global">
                hello@growthify.globall
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:col-span-2 px-[2.38rem] lg:px-[4rem] py-[5.97rem] md:py-[2.97rem] lg:pt-[8.06rem] flex flex-col text-center lg:text-start bg-darkBlue rounded-[1.875rem] text-white relative overflow-hidden">
            <p
              className="text-[1.4375rem] lg:text-[2.5rem] lg:leading-[3rem] font-bold lg:font-semibold max-w-[37rem]"
              data-aos="fade-left">
              Ready to take your web3 project to the next level?
            </p>
            <p
              className="text-[1.1875rem] lg:text-[1.4375rem] leading-[2.19rem] lg:leading-[1.725rem] text-neutral100 mt-[1.06rem] mb-[4rem] max-w-[41rem]"
              data-aos="fade-left"
              data-aos-delay="50">
              Join the 100 of projects already growing with Growthify, let us
              help you raise awareness, boost credibility and attract investors
            </p>
            <a
              href="mailto:hello@growthify.globall"
              className="bg-blue w-fit rounded-[0.375rem] flex justify-center items-center p-[0.5rem] lg:py-[0.625rem] lg:px-[1.875rem] text-[rgba(255,255,255,0.9)] text-base lg:text-[1.1875rem] hover:bg-[#001940] hover:outline hover:outline-white active:bg-[#001940] active:outline active:outline-white transition-all duration-300 mx-auto lg:mx-0 z-[2]"
              data-aos="fade-left"
              data-aos-delay="70">
              Get started today!
            </a>

            <img
              src={bars}
              className="absolute z-[1] bottom-0 lg:bottom-[-3rem] right-[-2rem] lg:right-[-0.0367rem]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
