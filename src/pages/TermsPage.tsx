import SiteLayout from "@/components/SiteLayout";
import { InnerHero } from "@/components/site/blocks";
import { LegalBody, LegalH2, LegalList, LegalP, LegalPhone } from "@/components/site/legal";
import lawn1 from "@/assets/lawn-1.webp";

const TermsPage = () => (
  <SiteLayout>
    <InnerHero
      image={lawn1}
      alt="Freshly mowed Kansas City lawn with clean edges"
      title="Terms of Service"
      note="Last updated: 10/27/2026"
    />

    <LegalBody>
      <LegalH2 first>Agreement to Terms</LegalH2>
      <LegalP>
        By accessing or using the services of Millerlawn &amp; Landscape LLC, you agree to be bound by these Terms of
        Service. If you do not agree to these terms, please do not use our services.
      </LegalP>

      <LegalH2>Services</LegalH2>
      <LegalP>
        Millerlawn &amp; Landscape LLC provides lawn care, landscaping, irrigation, hardscape, gutter services, and
        seasonal services including Christmas light installation. All services are subject to availability and
        applicable laws.
      </LegalP>

      <LegalH2>Quotes and Pricing</LegalH2>
      <LegalList
        items={[
          "All quotes are estimates and subject to site inspection",
          "Prices are valid for 30 days unless otherwise stated",
          "Additional charges may apply for unforeseen circumstances",
          "Payment terms will be outlined in your service agreement",
        ]}
      />

      <LegalH2>Scheduling and Cancellation</LegalH2>
      <LegalList
        items={[
          "Service schedules are subject to weather conditions and availability",
          "Cancellations must be made at least 24 hours in advance",
          "Late cancellations may incur fees",
          "We reserve the right to reschedule services due to weather or equipment issues",
        ]}
      />

      <LegalH2>Property Access</LegalH2>
      <LegalP>
        By engaging our services, you grant us permission to access your property for the purpose of providing
        agreed-upon services. You are responsible for ensuring clear access to work areas and notifying us of any hazards
        or restrictions.
      </LegalP>

      <LegalH2>Liability</LegalH2>
      <LegalList
        items={[
          "We carry liability insurance for property damage and injuries",
          "We are not responsible for pre-existing property conditions",
          "Underground utilities must be marked before excavation work",
          "Claims for damage must be reported within 48 hours of service",
        ]}
      />

      <LegalH2>Payment Terms</LegalH2>
      <LegalList
        items={[
          "Payment is due upon completion of service unless otherwise agreed",
          "We accept cash, check, and major credit cards",
          "Late payments may incur additional fees",
          "Unpaid balances may result in suspension of services",
        ]}
      />

      <LegalH2>Warranty</LegalH2>
      <LegalP>
        We stand behind our work and will address any issues related to workmanship within a reasonable timeframe. Plant
        materials and natural landscaping features are subject to weather and environmental conditions beyond our
        control.
      </LegalP>

      <LegalH2>Termination</LegalH2>
      <LegalP>
        Either party may terminate ongoing service agreements with written notice. Prepaid services will be prorated, and
        any outstanding balances must be settled.
      </LegalP>

      <LegalH2>Changes to Terms</LegalH2>
      <LegalP>
        We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our
        website or notification to existing clients.
      </LegalP>

      <LegalH2>Contact Information</LegalH2>
      <LegalP>For questions about these Terms of Service, please contact us at:</LegalP>
      <LegalP>
        <strong>Millerlawn &amp; Landscape LLC</strong>
        <br />
        Phone: <LegalPhone />
        <br />
        Kansas City Metro Area
      </LegalP>
    </LegalBody>
  </SiteLayout>
);

export default TermsPage;
