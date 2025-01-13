import HeroImg from "../../assets/HeroImg.png";
import Btn from "../Btn";

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="px-4 lg:px-8 xl:px-[98px]">
      <div className="flex flex-col gap-4 lg:flex-row justify-between items-center min-h-[46rem] md:min-h-screen max-w-[1317px] mx-auto pt-[6.46rem] pb-[5.2725rem] lg:pt-[9.66rem] lg:pb-[4.96rem]">
        <div className="xl:w-[65%] text-center lg:text-start">
          <h1
            className="max-w-[674px] mx-auto lg:mx-0 font-[800] text-[31.8px] leading-[34.02px] md:text-[92px] md:leading-[98.44px] font-hero"
            data-aos="fade-right">
            <span className="text-blue">Amplifying</span> web3 voices driving
            global impact
          </h1>
          <p
            className=" text-neutral500 text-base md:text-[19px] md:leading-[35.15px] my-5"
            data-aos="fade-right"
            data-aos-delay="300">
            Amplifying the voices of those building a better tomorrow through
            the power of blockchain technology.
          </p>

          <div data-aos="fade-right" data-aos-delay="500">
            <Btn
              onclick={() => handleScroll("getStarted")}
              text="Get started"
            />
          </div>
        </div>

        <figure className="lg:hidden">
          <img src={HeroImg} alt="HeroImage" />
        </figure>
        <figure
          className="hidden lg:block"
          data-aos="zoom-in"
          data-aos-duration="500">
          <img src={HeroImg} alt="HeroImage" />
        </figure>
      </div>
    </section>
  );
}
