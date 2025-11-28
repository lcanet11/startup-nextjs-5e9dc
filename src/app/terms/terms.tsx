import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const TermsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Our company is dedicated to helping small businesses grow, operate smarter, 
        and build the foundation for long-term success. We understand the challenges entrepreneurs 
        face because we’ve been there ourselves—limited resources, tough competition, and the pressure 
        to get every decision right. That’s why we deliver practical, tailored strategies that produce 
        measurable results, not generic advice. From streamlining operations and improving customer experience 
        to guiding technology adoption and financial planning, we partner with you every step of the way. 
        Our mission is simple: 
        empower business owners with the tools, clarity, and confidence they need to thrive in today’s fast-moving market."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default TermsPage;
