export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: (string | { subtitle?: string; list?: string[] })[];
}

export interface LegalDocument {
  id: "terms" | "privacy";
  title: string;
  subtitle: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
  contactInfo: {
    company: string;
    email: string;
    website: string;
  };
  outroNotice: string;
}

export const termsData: LegalDocument = {
  id: "terms",
  title: "Terms & Conditions",
  subtitle: "Copterjet International Limited Legal Terms of Service",
  effectiveDate: "15th August, 2026",
  intro: [
    'Welcome to the website of Copterjet International Limited ("Copterjet", "we", "our", or "us"). These Terms & Conditions ("Terms") govern your access to and use of our website and the products and services we provide.',
    'By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you should discontinue use of this website.'
  ],
  sections: [
    {
      id: "section-1",
      number: "1",
      title: "About Copterjet",
      content: [
        "Copterjet International Limited is an aviation solutions company providing, among other services, aircraft sales and acquisitions, aircraft leasing, charter brokerage, aviation consultancy, aviation supply chain management, aircraft parts procurement, logistics, in-flight catering, maintenance support, aviation infrastructure advisory, and related professional services."
      ]
    },
    {
      id: "section-2",
      number: "2",
      title: "Website Use",
      content: [
        "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or interfere with the operation of the website.",
        {
          subtitle: "You must not:",
          list: [
            "Use the website for fraudulent or unlawful purposes.",
            "Attempt to gain unauthorized access to any part of the website or its systems.",
            "Introduce viruses, malware, or other harmful code.",
            "Copy, reproduce, distribute, or exploit website content without our prior written consent."
          ]
        }
      ]
    },
    {
      id: "section-3",
      number: "3",
      title: "Service Enquiries",
      content: [
        "Submitting an enquiry, charter request, procurement request, or quotation request does not create a contractual relationship between you and Copterjet.",
        "Any engagement shall only become binding upon written acceptance by both parties and, where applicable, execution of the relevant commercial agreement."
      ]
    },
    {
      id: "section-4",
      number: "4",
      title: "Quotations and Pricing",
      content: [
        {
          subtitle: "All quotations are:",
          list: [
            "Subject to availability.",
            "Subject to regulatory approvals where applicable.",
            "Valid only for the period stated.",
            "Subject to revision in the event of changes in market conditions, exchange rates, taxes, freight charges, supplier pricing, insurance costs, or regulatory requirements."
          ]
        }
      ]
    },
    {
      id: "section-5",
      number: "5",
      title: "Aircraft Charter Services",
      content: [
        {
          subtitle: "Aircraft charter services are subject to:",
          list: [
            "Aircraft availability.",
            "Operator approval.",
            "Aviation regulatory approvals.",
            "Weather conditions.",
            "Airport operational restrictions.",
            "Crew duty limitations.",
            "Security considerations."
          ]
        },
        "Flight schedules may be amended or cancelled where safety, regulatory compliance, or operational requirements so dictate."
      ]
    },
    {
      id: "section-6",
      number: "6",
      title: "Aircraft Parts and Supply Chain Services",
      content: [
        "Lead times provided for aircraft parts, engines, APUs, and components are estimates only and may be affected by manufacturers, suppliers, customs authorities, logistics providers, export controls, or regulatory agencies.",
        "Copterjet shall not be liable for delays beyond its reasonable control."
      ]
    },
    {
      id: "section-7",
      number: "7",
      title: "Regulatory Compliance",
      content: [
        "Certain aviation products, technologies, and services may be subject to export control laws, end-user verification, sanctions compliance, customs inspections, and aviation security requirements.",
        "Clients agree to provide all information reasonably required to satisfy applicable regulatory obligations."
      ]
    },
    {
      id: "section-8",
      number: "8",
      title: "Payment Terms",
      content: [
        {
          subtitle: "Unless otherwise agreed in writing:",
          list: [
            "Payments shall be made in accordance with the applicable invoice.",
            "Credit facilities are subject to separate approval and commercial terms.",
            "Late payments may attract applicable interest, administrative charges, or suspension of services."
          ]
        }
      ]
    },
    {
      id: "section-9",
      number: "9",
      title: "Intellectual Property",
      content: [
        "All trademarks, logos, branding, graphics, publications, photographs, website content, and other intellectual property displayed on this website remain the property of Copterjet International Limited or their respective owners and may not be used without prior written permission."
      ]
    },
    {
      id: "section-10",
      number: "10",
      title: "Confidentiality",
      content: [
        "Information exchanged during commercial discussions may be confidential. Both parties agree to maintain the confidentiality of proprietary or commercially sensitive information unless disclosure is required by law or expressly authorised."
      ]
    },
    {
      id: "section-11",
      number: "11",
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, Copterjet shall not be liable for any indirect, incidental, consequential, special, or economic losses arising from the use of this website or our services.",
        "Our liability, where established, shall be limited to the amount paid by the client for the specific service giving rise to the claim, unless otherwise agreed in writing."
      ]
    },
    {
      id: "section-12",
      number: "12",
      title: "Force Majeure",
      content: [
        "Copterjet shall not be responsible for delays or failure to perform arising from circumstances beyond its reasonable control, including but not limited to natural disasters, war, civil unrest, strikes, pandemics, government actions, regulatory restrictions, supplier failures, airport closures, or transportation disruptions."
      ]
    },
    {
      id: "section-13",
      number: "13",
      title: "Third-Party Services",
      content: [
        "Certain services may be provided through independent operators, airlines, manufacturers, maintenance organisations, logistics companies, or other third parties. While Copterjet exercises reasonable care in selecting its partners, it is not responsible for the acts or omissions of independent third parties."
      ]
    },
    {
      id: "section-14",
      number: "14",
      title: "Privacy",
      content: [
        "Your use of this website is also governed by our Privacy & Cookie Policy, which explains how we collect, process, and protect your personal information."
      ]
    },
    {
      id: "section-15",
      number: "15",
      title: "Governing Law",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, unless otherwise agreed in writing between the parties.",
        "Any dispute arising from these Terms shall first be resolved amicably through good-faith negotiations. Where resolution cannot be reached, the dispute shall be submitted to the competent courts of Nigeria or such alternative dispute resolution mechanism as may be mutually agreed."
      ]
    },
    {
      id: "section-16",
      number: "16",
      title: "Amendments",
      content: [
        "Copterjet reserves the right to amend these Terms & Conditions at any time. Updated versions will be published on this website and shall become effective upon publication."
      ]
    },
    {
      id: "section-17",
      number: "17",
      title: "Contact Information",
      content: [
        "For enquiries regarding these Terms & Conditions or any of our services, please contact:"
      ]
    }
  ],
  contactInfo: {
    company: "Copterjet International Limited",
    email: "legal@copterjet.com.ng",
    website: "www.copterjet.com.ng"
  },
  outroNotice: "At Copterjet, integrity, professionalism, safety, and operational excellence are the principles that guide every engagement."
};

export const privacyData: LegalDocument = {
  id: "privacy",
  title: "Privacy & Cookie Policy",
  subtitle: "How Copterjet International Limited protects & handles your data",
  effectiveDate: "15th August, 2026",
  intro: [
    'At Copterjet International Limited ("Copterjet", "we", "our", or "us"), we are committed to protecting your privacy and handling your personal information responsibly. This Privacy & Cookie Policy explains how we collect, use, disclose, and protect your information when you visit our website or use our services.',
    'By using our website, you agree to the practices described in this Policy.'
  ],
  sections: [
    {
      id: "section-1",
      number: "1",
      title: "Information We Collect",
      content: [
        "We may collect the following categories of information:",
        {
          subtitle: "Personal Information:",
          list: [
            "Full name",
            "Company or organisation",
            "Email address",
            "Telephone number",
            "Country and location",
            "Billing and payment information (where applicable)",
            "Information submitted through enquiry forms, charter requests, recruitment applications, or other communications"
          ]
        },
        {
          subtitle: "Technical Information:",
          list: [
            "IP address",
            "Browser type and version",
            "Device information",
            "Operating system",
            "Pages visited",
            "Date and time of access",
            "Website usage statistics"
          ]
        }
      ]
    },
    {
      id: "section-2",
      number: "2",
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "We use your information to:",
          list: [
            "Respond to enquiries and requests",
            "Process aircraft charter and aviation service requests",
            "Provide quotations and proposals",
            "Deliver our aviation products and services",
            "Improve our website and customer experience",
            "Communicate important service updates",
            "Send marketing communications (where consent has been provided)",
            "Meet legal and regulatory obligations",
            "Protect against fraud and unlawful activity"
          ]
        }
      ]
    },
    {
      id: "section-3",
      number: "3",
      title: "Information Sharing",
      content: [
        "We do not sell your personal information.",
        {
          subtitle: "Your information may be shared with trusted third parties where necessary, including:",
          list: [
            "Airline operators",
            "Aircraft owners",
            "Aviation service providers",
            "Payment providers",
            "Technology vendors",
            "Government and regulatory authorities where legally required"
          ]
        },
        "All third parties are expected to maintain appropriate confidentiality and security standards."
      ]
    },
    {
      id: "section-4",
      number: "4",
      title: "Data Security",
      content: [
        "We implement appropriate technical, administrative, and organisational measures designed to safeguard your personal information against unauthorised access, disclosure, alteration, or destruction.",
        "While we take reasonable precautions, no electronic transmission or storage system can be guaranteed to be completely secure."
      ]
    },
    {
      id: "section-5",
      number: "5",
      title: "Data Retention",
      content: [
        "We retain personal information only for as long as necessary to fulfil the purposes for which it was collected or to comply with applicable legal, regulatory, tax, and contractual obligations."
      ]
    },
    {
      id: "section-6",
      number: "6",
      title: "Your Rights",
      content: [
        {
          subtitle: "Subject to applicable law, you may have the right to:",
          list: [
            "Request access to your personal information",
            "Correct inaccurate information",
            "Request deletion of your information",
            "Restrict or object to certain processing activities",
            "Withdraw consent where processing is based on consent",
            "Request a copy of your personal data where applicable"
          ]
        },
        "Requests may be submitted using the contact details provided below."
      ]
    },
    {
      id: "section-7",
      number: "7",
      title: "Cookies",
      content: [
        "Our website uses cookies and similar technologies to improve functionality, analyse website performance, remember user preferences, and enhance your browsing experience.",
        {
          subtitle: "Cookies may include:",
          list: [
            "Essential Cookies",
            "Performance and Analytics Cookies",
            "Functional Cookies",
            "Security Cookies"
          ]
        },
        "Some cookies may be placed by trusted third-party service providers supporting our website.",
        "You may manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality."
      ]
    },
    {
      id: "section-8",
      number: "8",
      title: "Third-Party Websites",
      content: [
        "Our website may contain links to external websites operated by third parties. Copterjet is not responsible for the privacy practices or content of those websites."
      ]
    },
    {
      id: "section-9",
      number: "9",
      title: "International Data Transfers",
      content: [
        "Where necessary, your information may be processed or transferred outside your country of residence. We take reasonable steps to ensure that such transfers are conducted in accordance with applicable data protection laws."
      ]
    },
    {
      id: "section-10",
      number: "10",
      title: "Children's Privacy",
      content: [
        "Our website and services are intended for individuals aged 18 years and above. We do not knowingly collect personal information from children without appropriate legal authorisation."
      ]
    },
    {
      id: "section-11",
      number: "11",
      title: "Changes to this Policy",
      content: [
        "We may update this Privacy & Cookie Policy periodically to reflect changes in legal requirements, technology, or our business practices. The latest version will always be available on this website."
      ]
    },
    {
      id: "section-12",
      number: "12",
      title: "Contact Us",
      content: [
        "If you have any questions regarding this Privacy & Cookie Policy or how your information is handled, please contact:"
      ]
    }
  ],
  contactInfo: {
    company: "Copterjet International Limited",
    email: "privacy@copterjet.com.ng",
    website: "www.copterjet.com.ng"
  },
  outroNotice: "Your privacy, trust, and confidence remain fundamental to everything we do."
};
