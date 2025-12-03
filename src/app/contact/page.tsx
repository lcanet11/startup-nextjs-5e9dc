import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description={`For information about our business consulting services, free consultations, or legal information about our terms of service and privacy policies, please reach out to us directly at info@dartcoop.com.

For information about our parking notification service, contact the dblpark department at info@dblpark.com.`}
      />

      <Contact />
    </>
  );
};

export default ContactPage;


