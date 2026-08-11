import React from "react";
import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { termsData } from "@/data/legalData";

export const metadata: Metadata = {
  title: "Terms & Conditions | Copterjet International Limited",
  description:
    "Read the official Terms & Conditions governing the use of Copterjet International Limited website and aviation services.",
};

export default function TermsPage() {
  return <LegalLayout document={termsData} />;
}
