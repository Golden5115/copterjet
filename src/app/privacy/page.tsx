import React from "react";
import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { privacyData } from "@/data/legalData";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy | Copterjet International Limited",
  description:
    "Read the official Privacy & Cookie Policy explaining how Copterjet International Limited collects, uses, and safeguards your personal data.",
};

export default function PrivacyPage() {
  return <LegalLayout document={privacyData} />;
}
