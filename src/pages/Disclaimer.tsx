import Footer from "../components/Footer/Footer";
//import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";

export default function Disclaimer() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main>
        <div className="mt-[3.125rem] md:mt-[4.75rem] lg:mt-[5.031rem] px-4 md:px-12 py-[4rem] md:py-[6rem] lg:py-[9.66rem] bg-darkBlue text-white">
          <p className="font-extrabold text-center uppercase text-2xl md:text-4xl lg:text-[4.5rem] lg:leading-tight mx-auto tracking-wider">
            Website Disclaimer for Growthify Global
          </p>
        </div>
        <div className="max-w-[1317px] mx-auto px-4 md:px-12 2xl:px-[93px] py-8 2xl:py-[69px] font-medium text-base lg:text-lg 2xl:text-xl">
          <div className="flex flex-col gap-8 2xl:gap-[100px] mb-8 2xl:mb-[100px]">
            <p className="font-bold text-lg md:text-2xl 2xl:text-3xl">
              Effective Date: 1st day of January 2024
            </p>
            <p>
              Thank you for visiting Growthify Global. Please read this
              disclaimer carefully before using our website, as it contains
              important information regarding your legal rights and obligations.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">
                1. General Information
              </p>
              <p>
                All content and information on this website are provided on an
                "as is" basis without warranty of any kind, either express or
                implied, including, but not limited to, the implied warranties
                of merchantability, fitness for a particular purpose, or
                non-infringement. The information on our website is for general
                informational purposes only and is not intended as professional
                advice.
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">
                2. No Professional Advice
              </p>
              <p>
                The information provided by Growthify Global on our website is
                for general guidance on matters of interest only. Even if we
                take every precaution to ensure that the content of the website
                is both current and accurate, errors can occur. Plus, given the
                changing nature of laws, rules, and regulations, there may be
                delays, omissions, or inaccuracies in the information contained
                on our website.
              </p>
              <p>
                Growthify Global is not responsible for any errors or omissions,
                or for the results obtained from the use of this information.
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                3. No Endorsements of Links
              </p>
              <p>
                This website may contain links to other websites maintained by
                third parties, which may not be regulated by this disclaimer.
                Growthify Global does not endorse, approve, or certify the
                information present on these sites, nor does it guarantee the
                accuracy, completeness, efficacy, or timeliness of such
                information. Use of such information is voluntary, and reliance
                on it should only be undertaken after an independent review.
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">
                4. No Guarantees of Results
              </p>
              <p>
                Growthify Global makes no guarantees of results or outcomes of
                the services it provides. Testimonials and examples on this site
                of specific outcomes or results of using our services are not
                guarantees that you will achieve the same or similar results.
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                5. Limitation of Liability
              </p>
              <p>
                Growthify Global, its agents, affiliates, and employees are not
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits,
                data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="pl-4 list-disc ms-4 md:ms-8">
                <li>
                  Your access to or use of or inability to access or use the
                  services;
                </li>
                <li className="mt-2">
                  Any conduct or content of any third party on the services;
                </li>
                <li className="my-2">
                  Any content obtained from the services;
                </li>
                <li>
                  Unauthorized access, use, or alteration of your transmissions
                  or content, whether based on warranty, contract, tort
                  (including negligence), or any other legal theory, whether or
                  not we have been informed of the possibility of such damage.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                6. Changes to Disclaimer
              </p>
              <p>
                Growthify Global reserves the right to amend this disclaimer at
                any time. Changes will be effective immediately upon posting on
                the website. We encourage you to frequently check this page for
                any changes to stay informed.
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                7. Contact Us
              </p>
              <p>
                If you have any questions about this disclaimer, please contact
                us at support@growthify.global.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
