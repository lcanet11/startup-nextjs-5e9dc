import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Terms of Service",
  description: "Review the Terms of Service for our platform.",
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="Please read these Terms of Service carefully before using our website or services."
      />

      <div className="container py-16">
        <div className="prose dark:prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms of Service.
          </p>

          <h2>2. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these terms.
          </p>

          <h2>3. Accounts and Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            We are not liable for any indirect or consequential damages arising from the use of our services.
          </p>

          <h2>5. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the site constitutes acceptance.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us.
          </p>
        </div>
      </div>
    </>
  );
}
