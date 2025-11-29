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
        description="Last updated October 14, 2025."
      />

      <div className="container py-16">
      <p>We are Dart Consulting Corp ("Company," "we," "us," "our"), a company registered in Delaware, United States at 1201 N. Orange Street, Suite 762, Wilmington, DE 19801.</p>     
     
      </div>
    </>
  );
}
