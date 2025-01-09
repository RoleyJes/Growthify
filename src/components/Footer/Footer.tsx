export default function Footer() {
  return (
    <section className="bg-darkBlue px-[2.75rem] lg:px-[5.25rem] py-[2.62rem] lg:py-[3.19rem]">
      <div className="max-w-[84.0625rem] mx-auto flex flex-col gap-[1.25rem] lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:flex-row items-center gap-[1.69rem]">
          <a
            href="/terms-of-use"
            className="text-neutral100 hover:scale-110 transition-all duration-300">
            Terms of use
          </a>
          <a
            href="/disclaimer"
            className="text-neutral100 hover:scale-110 transition-all duration-300">
            Disclaimer
          </a>
          <a
            href="/privacy-policy"
            className="text-neutral100 hover:scale-110 transition-all duration-300">
            Privacy
          </a>
          <a
            href="/refund-policy"
            className="text-neutral100 hover:scale-110 transition-all duration-300">
            Refund policy
          </a>
        </div>

        <p className="text-white text-center lg:text-start font-semibold">
          All rights reserved @ Growthify Global
        </p>
      </div>
    </section>
  );
}
