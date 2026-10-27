import SiteLayout from "@/components/SiteLayout";
import { InnerHero } from "@/components/site/blocks";
import { LegalBody, LegalH2, LegalList, LegalP, LegalPhone } from "@/components/site/legal";
import lawn1 from "@/assets/lawn-1.webp";

const PrivacyPage = () => (
  <SiteLayout>
    <InnerHero
      image={lawn1}
      alt="Freshly mowed Kansas City lawn with clean edges"
      title="Privacy Policy"
      note="Last updated: 10/27/2026"
    />

    <LegalBody>
      <LegalH2 first>Introduction</LegalH2>
      <LegalP>
        Millerlawn &amp; Landscape LLC ("we," "our," or "us") respects your privacy and is committed to protecting your
        personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you
        visit our website or use our services.
      </LegalP>

      <LegalH2>Information We Collect</LegalH2>
      <LegalP>We may collect the following types of information:</LegalP>
      <LegalList
        items={[
          "Contact information (name, email address, phone number, address)",
          "Service requests and project details",
          "Payment information (processed securely through third-party providers)",
          "Communication preferences",
          "Website usage data (cookies, IP address, browser type)",
        ]}
      />

      <LegalH2>How We Use Your Information</LegalH2>
      <LegalP>We use your information to:</LegalP>
      <LegalList
        items={[
          "Provide and improve our lawn care and landscaping services",
          "Process quotes and service requests",
          "Communicate with you about appointments and service updates",
          "Process payments and maintain financial records",
          "Send marketing communications (with your consent)",
          "Comply with legal obligations",
        ]}
      />

      <LegalH2>Information Sharing</LegalH2>
      <LegalP>We do not sell your personal information. We may share your information with:</LegalP>
      <LegalList
        items={[
          "Service providers who assist in our business operations",
          "Payment processors for transaction handling",
          "Legal authorities when required by law",
        ]}
      />

      <LegalH2>Data Security</LegalH2>
      <LegalP>
        We implement reasonable security measures to protect your personal information from unauthorized access,
        disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
      </LegalP>

      <LegalH2>Your Rights</LegalH2>
      <LegalP>You have the right to:</LegalP>
      <LegalList
        items={[
          "Access the personal information we hold about you",
          "Request correction of inaccurate information",
          "Request deletion of your information",
          "Opt out of marketing communications",
        ]}
      />

      <LegalH2>Cookies</LegalH2>
      <LegalP>
        We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings
        through your browser preferences.
      </LegalP>

      <LegalH2>Contact Us</LegalH2>
      <LegalP>
        If you have questions about this Privacy Policy or how we handle your information, please contact us at:
      </LegalP>
      <LegalP>
        <strong>Millerlawn &amp; Landscape LLC</strong>
        <br />
        Phone: <LegalPhone />
        <br />
        Email: Available upon request
      </LegalP>
    </LegalBody>
  </SiteLayout>
);

export default PrivacyPage;
