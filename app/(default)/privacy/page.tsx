export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="sm:pb:20 flex flex-col gap-4 pb-16 text-center">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="text-base">Last update: July 31, 2023</p>
      </div>
      <div>
        <p className="mb-4">
          At [Your Company Name], we are committed to safeguarding your privacy. This Privacy Policy
          outlines how we collect, use, and protect your personal information when you use our
          [website/app/service]. Please take a moment to read through this document to understand
          our practices.
        </p>
        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect the following types of personal information when you interact with our
          [website/app/service]:
        </p>
        <ul className="list-inside list-disc space-y-4">
          <li>
            Information you provide: When you sign up, create an account, or use certain features,
            we may ask for your name, email address, contact details, and other relevant
            information.
          </li>
          <li>
            Usage data: We may collect data about how you use our [website/app/service], including
            but not limited to your IP address, browser type, device information, pages visited, and
            interactions with the content.
          </li>
          <li>
            Cookies and similar technologies: We use cookies and similar technologies to enhance
            your experience, understand usage patterns, and improve our [website/app/service].
          </li>
        </ul>
        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We may use your personal information for the following purposes:</p>
        <ul className="list-inside list-disc space-y-4">
          <li>
            To provide and improve our [website/app/service]: Your information helps us offer a
            personalized and user-friendly experience.
          </li>
          <li>
            Communication: We may use your email address or contact details to send you important
            updates, newsletters, and promotional content. You can opt-out of these communications
            at any time.
          </li>
          <li>
            Analytics: We use aggregated and anonymized data to analyze user behavior and improve
            our [website/app/service].
          </li>
        </ul>
        <h2 className="mb-6 mt-12 text-xl font-medium sm:text-2xl">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about our Privacy Policy, please contact us at
          [contact email/phone number/address].
        </p>
      </div>
    </div>
  );
}
