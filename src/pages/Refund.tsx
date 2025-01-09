import Footer from "../components/Footer/Footer";
//import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";

export default function Refund() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main>
        <div className="mt-[3.125rem] md:mt-[4.75rem] lg:mt-[5.031rem] px-4 md:px-12 py-[4rem] md:py-[6rem] lg:py-[9.66rem] bg-darkBlue text-white">
          <p className="font-extrabold text-center uppercase text-2xl md:text-4xl lg:text-[4.5rem] lg:leading-tight mx-auto tracking-wider">
            Refund Policy for Growthify Global
          </p>
        </div>
        <div className="max-w-[1317px] mx-auto px-4 md:px-12 2xl:px-[93px] py-8 2xl:py-[69px] font-medium text-base lg:text-lg 2xl:text-xl">
          <div className="flex flex-col gap-8 2xl:gap-[100px] mb-8 2xl:mb-[100px]">
            <p className="font-bold text-lg md:text-2xl 2xl:text-3xl">
              Effective Date: 1st day of January 2024
            </p>
            <p>
              Thank you for choosing Growthify Global for your Web3 PR needs. We
              value your business and strive to meet your expectations with our
              specialized services. This policy outlines the conditions under
              which refunds may be issued.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">
                1. General Conditions{" "}
              </p>
              <p>
                Growthify Global offers highly specialized PR services tailored
                to the dynamic needs of Web3 projects. Given the nature of our
                services, which include strategic planning, content creation,
                and distribution across various platforms, all sales are final
                except as outlined below.
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">
                2. Refund Eligibility
              </p>
              <p>
                Refunds are only provided under the following specific
                circumstances:
              </p>
              <ul className="pl-4 list-disc ms-4 md:ms-8">
                <li>
                  <span className="font-bold">Non-Delivery of Publicity:</span>{" "}
                  If we fail to carry out the publicity actions explicitly
                  mentioned in our offerings and commitments to you and this
                  failure is solely due to our actions or inactions, you may be
                  eligible for a refund
                </li>
                <li className="mt-2">
                  <span className="font-bold">
                    Delayed Service Commencement:
                  </span>{" "}
                  If we have not commenced the services within 14 days from the
                  agreed start date and this delay is not due to any actions or
                  requirements on your part, you may request a refund.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                3. Requesting a Refund
              </p>
              <p>To request a refund, please follow these steps:</p>
              <ul className="pl-4 list-disc ms-4 md:ms-8">
                <li>
                  Email us at support@growthify.global with your service details
                  and proof of purchase.
                </li>
                <li className="my-2">
                  Clearly state the reason for the refund request, providing any
                  relevant documentation or evidence of non-delivery or delayed
                  service commencement.
                </li>
                <li>
                  Submit your refund request within 30 days from the date of the
                  purchase.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">
                4. Review Process
              </p>
              <p>Upon receiving your refund request, we will:</p>
              <ul className="pl-4 list-disc ms-4 md:ms-8">
                <li>
                  Thoroughly investigate the claim including reviewing
                  communications and service logs.
                </li>
                <li className="my-2">
                  Engage with you to discuss the findings and next steps.
                </li>
                <li>
                  Determine eligibility for a refund based on the criteria set
                  out in this policy.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                5. Refund Method
              </p>
              <p>
                Approved refunds will be processed using the original payment
                method used at the time of purchase unless it is no longer
                feasible, in which case an alternative refund method will be
                arranged.
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                6. Limitations
              </p>
              <p>
                Please note, refunds are not granted for client dissatisfaction
                where the service has been executed as described but did not
                meet subjective expectations or results. Our commitment is to
                deliver the services as promised and communicate transparently
                throughout our engagement.
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                7. Changes to Our Refund Policy
              </p>
              <p>
                This refund policy may be updated periodically to reflect
                changes in our operational practices or for other operational,
                legal, or regulatory reasons. Any changes will be effective
                immediately upon posting on this site.
              </p>
            </div>

            <div className="flex flex-col gap-3 xl:gap-4 mb-6 2xl:mb-12">
              <p className="font-semibold text-lg lg:text-2xl  2xl:text-3xl">
                8. Contact Us
              </p>
              <p>
                For questions about this refund policy or to discuss a specific
                request, please contact us at support@growthify.global.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
