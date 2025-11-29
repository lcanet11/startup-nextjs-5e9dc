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
      <p>We operate the website https://dblpark.com/ (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>
      <p>We provide a parking assistant service to help you communicate with other drivers.</p>
      <p>You can contact us by phone at 8455390289, email at info@dartcoop.com, or by mail to 1201 N. Orange Street, Suite 762, Wilmington, DE 19801, United States.</p>

      
      </div>
    </>
  );
}
