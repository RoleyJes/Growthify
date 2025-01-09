import daily from "../../assets/cryptoDaily.svg";
import cointelligence from "../../assets/cointelligence.svg";
import decrypt from "../../assets/decryptTrusted.svg";
import block from "../../assets/block.svg";
import hodl from "../../assets/hodl.svg";
import coinspeak from "../../assets/coinspeaker.svg";
import zycrypto from "../../assets/zycrypto.svg";
import briefing from "../../assets/cryptobriefing.svg";
import nulltx from "../../assets/nulltx.svg";

import wisser from "../../assets/wisser.svg";
import telo from "../../assets/cryptelo.svg";
import dailyHodl from "../../assets/dailyHodl.svg";
import funda from "../../assets/funda.svg";
import bitcoin from "../../assets/bitcoinTrusted.svg";
import dailyCoin from "../../assets/dailyCoin.svg";
import beInCrypto from "../../assets/beInCrypto.svg";
import ambCrypto from "../../assets/ambCrypto.svg";
import cnn from "../../assets/cnn.svg";
import insiderMonkey from "../../assets/insiderMonkey.svg";
import invezz from "../../assets/invezz.svg";
import cryptonomics from "../../assets/cryptonomics.svg";
import atlogo from "../../assets/atlogo.svg";
import clogo from "../../assets/c.svg";
import blockTelegraph from "../../assets/blocktelegraph.svg";
import value from "../../assets/value.svg";
import coinfomania from "../../assets/coinfomania.svg";
import coinpaper from "../../assets/coinpaper.svg";
import coincodex from "../../assets/coincodex.svg";
import coinradar from "../../assets/coinradar.svg";
import coingape from "../../assets/coinGape.svg";

export default function TrustedBy() {
  return (
    <section className="bg-[#f9fbff]">
      <div className="py-[4.91rem] lg:py-[6.81rem]">
        <div className="text-center max-w-[37.81rem] mx-auto mb-[3.12rem]">
          <h2 className="font-bold text-[1.75rem] md:text-[40px] md:leading-[48px]">
            Our News Partner
          </h2>
        </div>

        {/* Row 1 */}
        <div className="overflow-hidden whitespace-nowrap mb-[1.88rem] lg:mb-[3.12rem] ">
          <div className="leftSlide inline-block">
            <Image src={dailyCoin} alt="dailycoin logo" />
            <Image src={coinspeak} alt="coinspeaker logo" />
            <Image src={funda} alt="coinfunda logo" />
            <Image src={nulltx} alt="nulltx logo" />
            <Image src={cointelligence} alt="cointelligence logo" />
            <Image src={decrypt} alt="decrypt logo" />
            <Image src={bitcoin} alt="bitcoin logo" />
            <Image src={beInCrypto} alt="be in crypto logo" />
            <Image src={ambCrypto} alt="ambcrypto logo" />
            <Image src={cnn} alt="cnn logo" />
          </div>
          <div className="leftSlide inline-block">
            <Image src={dailyCoin} alt="dailycoin logo" />
            <Image src={coinspeak} alt="coinspeaker logo" />
            <Image src={funda} alt="coinfunda logo" />
            <Image src={nulltx} alt="nulltx logo" />
            <Image src={cointelligence} alt="cointelligence logo" />
            <Image src={decrypt} alt="decrypt logo" />
            <Image src={bitcoin} alt="bitcoin logo" />
            <Image src={beInCrypto} alt="be in crypto logo" />
            <Image src={ambCrypto} alt="ambcrypto logo" />
            <Image src={cnn} alt="cnn logo" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden whitespace-nowrap mb-[1.88rem] lg:mb-[3.12rem] ">
          <div className="rightSlide inline-block">
            <Image src={zycrypto} alt="zycrypto logo" />
            <Image src={telo} alt="cryptela logo" />
            <Image src={insiderMonkey} alt="insider monkey logo" />
            <Image src={invezz} alt="invezz logo" />
            <Image src={cryptonomics} alt="cryptonomics logo" />
            <Image src={atlogo} alt="logo" />
            <Image src={block} alt="blockonomi logo" />
            <Image src={dailyHodl} alt="daily hodl logo" />
            <Image src={clogo} alt="logo" />
            <Image src={briefing} alt="crypto briefing logo" />
          </div>
          <div className="rightSlide inline-block">
            <Image src={zycrypto} alt="zycrypto logo" />
            <Image src={telo} alt="cryptela logo" />
            <Image src={insiderMonkey} alt="insider monkey logo" />
            <Image src={invezz} alt="invezz logo" />
            <Image src={cryptonomics} alt="cryptonomics logo" />
            <Image src={atlogo} alt="logo" />
            <Image src={block} alt="blockonomi logo" />
            <Image src={dailyHodl} alt="daily hodl logo" />
            <Image src={clogo} alt="logo" />
            <Image src={briefing} alt="crypto briefing logo" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="overflow-hidden whitespace-nowrap ">
          <div className="leftSlide inline-block">
            <Image src={blockTelegraph} alt="block telegraph logo" />
            <Image src={hodl} alt="hodl logo" />
            <Image src={coingape} alt="coin gape logo" />
            <Image src={wisser} alt="crypto wisser logo" />
            <Image src={value} alt="valuewalk logo" />
            <Image src={coinfomania} alt="coinfomania logo" />
            <Image src={coinpaper} alt="coinpaper logo" />
            <Image src={coincodex} alt="coincodex logo" />
            <Image src={coinradar} alt="coinradar logo" />
            <Image src={daily} alt="cryptodaily logo" />
          </div>
          <div className="leftSlide inline-block">
            <Image src={blockTelegraph} alt="block telegraph logo" />
            <Image src={hodl} alt="hodl logo" />
            <Image src={coingape} alt="coin gape logo" />
            <Image src={wisser} alt="crypto wisser logo" />
            <Image src={value} alt="valuewalk logo" />
            <Image src={coinfomania} alt="coinfomania logo" />
            <Image src={coinpaper} alt="coinpaper logo" />
            <Image src={coincodex} alt="coincodex logo" />
            <Image src={coinradar} alt="coinradar logo" />
            <Image src={daily} alt="cryptodaily logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ImgType {
  src: string;
  alt: string;
}

function Image({ src, alt }: ImgType) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="w-[5.5rem] h-[1.7rem] md:w-[10.5rem] md:h-[3rem] lg:w-[17.125rem] lg:h-[5.125rem] inline-block mx-[0.62rem] lg:mx-[3.12rem]"
    />
  );
}
