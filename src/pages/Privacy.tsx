import Footer from "../components/Footer/Footer";
//import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";

export default function Privacy() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main>
        <div className="mt-[3.125rem] md:mt-[4.75rem] lg:mt-[5.031rem] px-4 md:px-12 py-[4rem] md:py-[6rem] lg:py-[9.66rem] bg-darkBlue text-white">
          <p className="font-extrabold text-center uppercase text-2xl md:text-4xl lg:text-[4.5rem] lg:leading-tight mx-auto tracking-wider">
            Privacy Policy for Growthify Global
          </p>
        </div>
        <div className="max-w-[1317px] mx-auto px-4 md:px-12 2xl:px-[93px] py-8 2xl:py-[69px] font-medium text-base lg:text-lg 2xl:text-xl">
          <div className="flex flex-col gap-8 2xl:gap-[100px] mb-8 2xl:mb-[100px]">
            <p className="font-bold text-lg md:text-2xl 2xl:text-3xl">
              Effective Date: 1st day of January 2024
            </p>
            <p>
              Thank you for choosing Growthify Global. Your privacy is crucial
              to us, and this Privacy Policy explains how we collect, use,
              protect, and share information about you, as well as your rights
              regarding the information you provide to us. This policy applies
              to information collected through our website and any associated
              services.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">
                1. Information We Collect
              </p>
              <p>
                <span className="font-bold">Personal Information </span>When you
                register, subscribe, or use our services, we may collect
                personal information such as:
              </p>
              <ul className="pl-4 list-disc ms-4 md:ms-8">
                <li>Name</li>
                <li className="mt-2">Email address</li>
                <li className="my-2">Telephone number</li>
                <li>
                  Any other contact or personal information you choose to
                  provide us
                </li>
              </ul>
              <p>
                <span className="font-bold">Usage Information </span>We
                automatically collect certain information when you visit our
                website, such as:
              </p>
              <ul className="pl-4 list-disc ms-4 md:ms-8">
                <li>IP address</li>
                <li className="my-2">Browser type and version</li>
                <li>Pages you visit</li>
                <li className="my-2">Time spent on those pages</li>
                <li>Cookies and usage data</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">
                2. How We Use Your Information
              </p>
              <p>We use the information we collect to:</p>
              <ul className="pl-4 list-disc ms-4 md:ms-8">
                <li>Operate, maintain, and improve our services</li>
                <li className="my-2">
                  Communicate with you about services, offers, promotions,
                  rewards, and events offered by Growthify Global and others
                </li>
                <li>
                  Monitor and analyze trends, usage, and activities in
                  connection with our services
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                3. Sharing of Information
              </p>
              <p>We may share your information as follows:</p>
              <ul className="pl-4 list-disc ms-4 md:ms-8">
                <li>
                  With vendors, consultants, and other service providers who
                  need access to such information to carry out work on our
                  behalf
                </li>
                <li className="my-2">
                  In response to a request for information if we believe
                  disclosure is in accordance with, or required by, any
                  applicable law, regulation, or legal process
                </li>
                <li>With your consent or at your direction</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">
                4. Your Rights
              </p>
              <p>You have the right to:</p>
              <ul className="pl-4 list-disc ms-4 md:ms-8">
                <li>
                  Access personal information about you, including obtaining a
                  copy of your personal information
                </li>
                <li className="mt-2">
                  Request the correction or deletion of your personal
                  information
                </li>
                <li className="my-2">
                  Request that we restrict the processing of your personal
                  information
                </li>
                <li>Object to the processing of your personal information</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                5. Data Security
              </p>
              <p>
                We take reasonable measures to help protect information about
                you from loss, theft, misuse, unauthorized access, disclosure,
                alteration, and destruction.
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                6. Changes to This Policy
              </p>
              <p className="">
                We may update this Privacy Policy from time to time. If we make
                changes, we will notify you by revising the date at the top of
                the policy and, in some cases, we may provide you with
                additional notice (such as adding a statement to our homepage or
                sending you a notification).
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                7. Contact Us
              </p>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at: support@growthify.global
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
