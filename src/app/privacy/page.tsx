import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Privacy Policy",
  description: "Review our Privacy Policy.",
};

export default function PrivacyPage() {
  const privacyPolicy = `

   
      
  `;


  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Review our Privacy Policy."
      />

      <div className="container py-16" dangerouslySetInnerHTML={{ __html: privacyPolicy}}/>

    </>
  );
}
