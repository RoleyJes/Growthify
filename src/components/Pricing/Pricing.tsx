import checkBlack from "../../assets/checkBlack.svg";
import checkWhite from "../../assets/checkWhitye.svg";
import forbesBlack from "../../assets/forbesBlack.svg";
import forbesWhite from "../../assets/forbesWhite.svg";
import binance from "../../assets/binance.svg";
import coinmarket from "../../assets/coinmarket.svg";
import coinmarketBlack from "../../assets/coinmarketBlack.svg";
import coinmarketStarter from "../../assets/coinmarketStarter.svg";
import googlenews from "../../assets/googleNews.svg";
import ap from "../../assets/ap.svg";
import bitcoin from "../../assets/bitcoin.svg";
import yahoo from "../../assets/yahoo.svg";
import insider from "../../assets/businessInsider.svg";
import decrypt from "../../assets/decrypt.svg";
import benzinga from "../../assets/benzinga.svg";
import benzingaStarter from "../../assets/benzingaStarter.svg";
import CardCurve1 from "../../assets/cardCurve1.svg";
import CardCurve2 from "../../assets/cardCurve2.svg";
import CardCurve3 from "../../assets/cardCurve3.svg";
import CardCurve4 from "../../assets/cardCurve4.svg";
import { ReactElement } from "react";

export default function Pricing() {
  return (
    <section className="relative overflow-hidden" id="pricing">
      <section className="px-[0.38rem] md:px-8 lg:px-[1.31rem] bg-blue">
        <div className="max-w-[91.875rem] mx-auto pt-[3.31rem] pb-[4rem] lg:pt-[6.62rem] md:pb-[5rem] lg:pb-[10rem] text-white">
          <div className="max-w-[50rem] mx-auto mb-[16rem] lg:mb-[20rem] text-center">
            <h2
              className="text-[1.75rem] leading-[2.1rem] font-semibold md:text-[2rem] lg:text-[2.5rem] lg:leading-[3rem] mb-[0.56rem]"
              data-aos="fade-up">
              Our packages
            </h2>
            <p
              className="text-base leading-[1.66rem] lg:text-[1.1875rem] lg:leading-[2.196rem]"
              data-aos="fade-up"
              data-aos-delay="50">
              Choose the package that matches your ambition. Get the exposure
              you deserve
            </p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-[16rem] md:gap-x-12 xl:gap-x-[0.94rem] font-['Helvetica'] px-[0.66rem] md:px-0">
            {/* Card 1 */}
            <Cards
              title="Starter"
              oldPrice="$6,599"
              newPrice="$4,999"
              curveBg={CardCurve1}
              features={[
                { id: 1, text: "Forbes mention" },
                { id: 2, text: "Binance blog" },
                { id: 3, text: "Guarantee publicity" },
                { id: 4, text: "Google News" },
                { id: 5, text: "Up to 1 image included" },
                { id: 6, text: "Retweet by Sky Wee" },
                { id: 7, text: "Coinmarketcap feed" },
                { id: 8, text: "Binance square" },
              ]}
              bestValue={false}
              secondCard={false}>
              <figure className="mt-auto flex flex-col items-center">
                <div className="flex items-center justify-evenly mb-[-1rem]">
                  <img
                    src={forbesBlack}
                    className="w-[10.875rem] h-[4.75rem]"
                    alt="Forbes logo"
                  />
                  <img
                    src={benzingaStarter}
                    className="w-[8.75rem] h-[4.9rem]"
                    alt="Forbes logo"
                  />
                </div>
                <img
                  src={coinmarketStarter}
                  className="w-[13.69rem] h-[3.65rem]"
                  alt="Forbes logo"
                />
              </figure>
            </Cards>

            {/* Card 2 */}
            <Cards
              title="Professional"
              oldPrice="$8,299"
              newPrice="$6,499"
              curveBg={CardCurve2}
              features={[
                { id: 1, text: "Forbes mention" },
                { id: 2, text: "Binance blog" },
                { id: 3, text: "Guarantee publicity" },
                { id: 4, text: "Google News" },
                { id: 5, text: "Up to 1 image included" },
                { id: 6, text: "Retweet by Sky Wee" },
                { id: 7, text: "Coinmarketcap feed" },
                { id: 8, text: "Binance square" },
              ]}
              bestValue={false}
              secondCard={true}>
              <figure className="mt-auto px-3 flex flex-col ">
                <div className="flex items-center justify-evenly mb-[-1rem]">
                  <img
                    src={forbesWhite}
                    className="w-[7.29rem] h-[2.83rem]"
                    alt="forbes logo"
                  />
                  <img
                    src={binance}
                    className="w-[9.2rem] h-[3.89rem]"
                    alt="binance logo"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <img
                    src={coinmarket}
                    className="w-[11.5rem] h-[3.06rem]"
                    alt="coinmarket logo"
                  />
                  <img
                    src={googlenews}
                    className="w-[9.5rem] h-[2.23rem]"
                    alt="google news logo"
                  />
                </div>
              </figure>
            </Cards>
            {/* Card 3 */}
            <Cards
              title="Elite"
              oldPrice="$14,999"
              newPrice="$12,999"
              curveBg={CardCurve3}
              features={[
                { id: 1, text: "Forbes mention" },
                { id: 2, text: "Binance blog" },
                { id: 3, text: "Guarantee publicity" },
                { id: 4, text: "Google News" },
                { id: 5, text: "Up to 2 images included" },
                { id: 6, text: "Retweet by Sky Wee" },
                { id: 7, text: "Dedicated tweet by Sky Wee" },
                { id: 8, text: "Binance square" },
                { id: 9, text: "Decrypt News featured" },
                { id: 10, text: "Yahoo finance" },
                { id: 11, text: "Coinmarketcap feed" },
              ]}
              bestValue={false}
              secondCard={false}>
              <figure className="mt-auto px-4  flex flex-col gap-3">
                <div className="flex items-center justify-evenly flex-wrap gap-x-[0.3rem]">
                  <img
                    src={forbesBlack}
                    className="w-[4.46rem] h-[2.32rem]"
                    alt="forbes logo"
                  />
                  <img
                    src={decrypt}
                    className="w-[6.64rem] h-[2.75rem]"
                    alt="decrypt logo"
                  />

                  <img
                    src={benzinga}
                    className="w-[4.753rem] h-[2.53rem]"
                    alt="benzinga logo"
                  />
                </div>
                <div className="flex items-center justify-evenly flex-wrap gap-x-[0.3rem]">
                  <img
                    src={yahoo}
                    className="w-[5.03rem] h-[1.84rem]"
                    alt="yahoo logo"
                  />
                  <img
                    src={insider}
                    className="w-[5.15rem] h-[2.07rem]"
                    alt="business insider logo"
                  />
                  <img
                    src={binance}
                    className="w-[4.79rem] h-[2.09rem]"
                    alt="binance logo"
                  />
                </div>
                <div className="flex items-center justify-between flex-wrap gap-[0.3rem]">
                  <img
                    src={coinmarketBlack}
                    className="w-[7.77rem] h-[2.03rem]"
                    alt="coinmarket logo"
                  />
                  <img
                    src={googlenews}
                    className="w-[8.76rem] h-[2.03rem]"
                    alt="google news logo"
                  />
                  <img
                    src={ap}
                    className="w-[1.93rem] h-[2.27rem]"
                    alt="ap logo"
                  />
                </div>
              </figure>
            </Cards>

            {/* Card 4 */}
            <Cards
              title="Platinum"
              oldPrice="$35,999"
              newPrice="$25,999"
              curveBg={CardCurve4}
              features={[
                { id: 1, text: "Forbes mention" },
                { id: 2, text: "Binance blog" },
                { id: 3, text: "Guarantee publicity" },
                { id: 4, text: "Google News" },
                { id: 5, text: "Up to 2 images included" },
                { id: 6, text: "Retweet by Sky Wee" },
                { id: 7, text: "Dedicated tweet by Sky Wee" },
                { id: 8, text: "Binance square" },
                { id: 9, text: "Decrypt News featured" },
                { id: 10, text: "Cointelegraph featured" },
                { id: 11, text: "Yahoo finance" },
                { id: 12, text: "Coinmarketcap feed" },
              ]}
              bestValue={true}
              secondCard={false}>
              <figure className="mt-auto px-3 flex flex-col lg:gap-[0.3rem]  md:gap-2">
                <div className="flex items-center justify-center md:justify-between flex-wrap gap-x-[0.3rem]">
                  <img
                    src={forbesBlack}
                    className="w-[4.46rem] h-[2.32rem]"
                    alt="forbes logo"
                  />
                  <img
                    src={binance}
                    className="w-[4.79rem] h-[2.09rem]"
                    alt="binance logo"
                  />
                  <img
                    src={benzinga}
                    className="w-[4.753rem] h-[2.53rem]"
                    alt="benzinga logo"
                  />
                  <img
                    src={bitcoin}
                    className="w-[4.9rem] h-[2.39rem]"
                    alt="bitcoin logo"
                  />
                </div>
                <div className="flex items-center  justify-center md:justify-evenly flex-wrap gap-x-[0.3rem]">
                  <img
                    src={yahoo}
                    className="w-[5.03rem] h-[1.84rem]"
                    alt="yahoo logo"
                  />
                  <img
                    src={decrypt}
                    className="w-[6.64rem] h-[2.75rem]"
                    alt="decrypt logo"
                  />
                  <img
                    src={insider}
                    className="w-[5.15rem] h-[2.07rem]"
                    alt="business insider logo"
                  />
                </div>
                <div className="flex items-center justify-center md:justify-between flex-wrap gap-[0.3rem]">
                  <img
                    src={coinmarketBlack}
                    className="w-[7.77rem] h-[2.03rem]"
                    alt="coinmarket logo"
                  />
                  <img
                    src={googlenews}
                    className="w-[8.76rem] h-[2.03rem]"
                    alt="google news logo"
                  />
                  <img
                    src={ap}
                    className="w-[1.93rem] h-[2.27rem]"
                    alt="ap logo"
                  />
                </div>
              </figure>
            </Cards>
          </section>
        </div>
      </section>
      <div className="curvePricing"></div>
    </section>
  );
}

type FeatureObjectTypes = {
  id: number;
  text: string;
};

type CardTypes = {
  title: string;
  oldPrice: string;
  newPrice: string;
  curveBg: string;
  // features: { [x: string]: { id: number; text: string } };
  features: FeatureObjectTypes[];
  bestValue: boolean;
  secondCard: boolean;
  children: ReactElement;
};

type FeatureTypes = {
  id: number;
  text: string;
};

function Cards({
  title,
  oldPrice,
  newPrice,
  curveBg,
  features,
  bestValue,
  secondCard,
  children,
}: CardTypes) {
  return (
    <div
      className={`hover:scale-95 transition-all duration-300 ${
        secondCard ? "bg-[#002a4e] text-white" : "bg-white text-black"
      } rounded-b-[1.25rem] pb-[2.24rem] flex flex-col w-[22.1875rem] self-stretch relative`}>
      <div className="absolute top-[-220px] left-0">
        <img className="block size-full" src={curveBg} alt="Card Curve" />
        {bestValue && (
          <div className="absolute top-[1.8rem] right-[0.8rem] py-[10px] px-[20px] rounded-[8px] shadow-[0px_0px_0px_1px_#000]">
            Best value
          </div>
        )}
        <div className="absolute bottom-[1.7rem] left-1/2 -translate-x-1/2 text-center">
          <h4 className="text-[32px] font-bold leading-[50.47px] tracking-[-0.129rem]">
            {title}
          </h4>
          <p className="text-xl font-normal leading-[30.67px]  line-through decoration-[#fb4124]">
            {oldPrice}
          </p>
          <p className="text-5xl font-bold leading-[41.37px]">{newPrice}</p>
        </div>
      </div>

      <div className="mb-[1.44rem pt-[63.25px] ps-[2.54rem] pe-[1.46rem]">
        <p className="text-[15px] font-light leading-relaxed tracking-[0.0051rem] mb-[0.81rem]">
          Key Features
        </p>
        <div className="flex flex-col gap-[0.25rem]">
          {features?.map((item: FeatureTypes) => (
            <div className="flex gap-[0.5rem] items-center" key={item.id}>
              <img src={secondCard ? checkWhite : checkBlack} alt="check" />
              <p className="text-[0.9375rem] leading-[1.672rem] tracking-[0.005rem]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
