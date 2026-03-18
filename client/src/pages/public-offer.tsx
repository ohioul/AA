import { Link } from "wouter";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSEO } from "@/hooks/useSEO";

export default function PublicOffer() {
  const { t } = useTranslation();
  useSEO({
    title: t("public_offer.title"),
    description: "AACM Public Offer Agreement. Terms and conditions for membership, educational programs, and expert contractor agreements.",
    keywords: "AACM public offer, terms and conditions, membership agreement, expert contract"
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-6 pl-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-3"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("common.back_home")}
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif text-foreground" data-testid="title-public-offer">
            {t("public_offer.title")}
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 pl-16">
        <div className="prose prose-slate max-w-none text-sm leading-relaxed">
          <p className="text-muted-foreground mb-6" data-testid="text-public-offer-updated">
            {t("public_offer.last_updated")}
          </p>

          <h2 className="text-lg font-serif text-black mt-6 mb-3" data-testid="heading-public-offer-1">
            {t("public_offer.section1_title")}
          </h2>
          <p data-testid="text-public-offer-1">{t("public_offer.section1_body")}</p>

          <h2 className="text-lg font-serif text-black mt-6 mb-3" data-testid="heading-public-offer-2">
            {t("public_offer.section2_title")}
          </h2>
          <ul className="list-disc pl-5 space-y-1 my-3" data-testid="list-public-offer-2">
            <li data-testid="li-public-offer-2-1">{t("public_offer.section2_list.1")}</li>
            <li data-testid="li-public-offer-2-2">{t("public_offer.section2_list.2")}</li>
            <li data-testid="li-public-offer-2-3">{t("public_offer.section2_list.3")}</li>
          </ul>

          <h2 className="text-lg font-serif text-black mt-6 mb-3" data-testid="heading-public-offer-3">
            {t("public_offer.section3_title")}
          </h2>
          <ul className="list-disc pl-5 space-y-1 my-3" data-testid="list-public-offer-3">
            <li data-testid="li-public-offer-3-1">{t("public_offer.section3_list.1")}</li>
            <li data-testid="li-public-offer-3-2">{t("public_offer.section3_list.2")}</li>
            <li data-testid="li-public-offer-3-3">{t("public_offer.section3_list.3")}</li>
          </ul>

          <h2 className="text-lg font-serif text-black mt-6 mb-3" data-testid="heading-public-offer-4">
            {t("public_offer.section4_title")}
          </h2>
          <p data-testid="text-public-offer-4">{t("public_offer.section4_body")}</p>

          <h2 className="text-lg font-serif text-black mt-6 mb-3" data-testid="heading-public-offer-5">
            {t("public_offer.section5_title")}
          </h2>
          <ul className="list-disc pl-5 space-y-1 my-3" data-testid="list-public-offer-5">
            <li data-testid="li-public-offer-5-1">{t("public_offer.section5_list.1")}</li>
            <li data-testid="li-public-offer-5-2">{t("public_offer.section5_list.2")}</li>
            <li data-testid="li-public-offer-5-3">{t("public_offer.section5_list.3")}</li>
          </ul>

          <h2 className="text-lg font-serif text-black mt-6 mb-3" data-testid="heading-public-offer-6">
            {t("public_offer.section6_title")}
          </h2>
          <p data-testid="text-public-offer-6">{t("public_offer.section6_body")}</p>

          <h2 className="text-lg font-serif text-black mt-6 mb-3" data-testid="heading-public-offer-7">
            {t("public_offer.section7_title")}
          </h2>
          <p data-testid="text-public-offer-7">{t("public_offer.section7_body")}</p>

          <div className="mt-10 p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-serif font-semibold text-blue-900 mb-2">
                  {t("public_offer.sample_contract.title")}
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {t("public_offer.sample_contract.description")}
                </p>
                <div className="bg-white border border-blue-100 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{t("public_offer.sample_contract.details_title")}</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><span className="font-medium">{t("public_offer.sample_contract.contractor")}:</span> {t("public_offer.sample_contract.contractor_name")}</li>
                    <li><span className="font-medium">{t("public_offer.sample_contract.term")}:</span> {t("public_offer.sample_contract.term_value")}</li>
                    <li><span className="font-medium">{t("public_offer.sample_contract.subject")}:</span> {t("public_offer.sample_contract.subject_value")}</li>
                    <li><span className="font-medium">{t("public_offer.sample_contract.rate")}:</span> {t("public_offer.sample_contract.rate_value")}</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-500 italic mb-4">
                  {t("public_offer.sample_contract.redacted_note")}
                </p>
                <a
                  href="/contracts/sample-expert-contract.pdf.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  {t("public_offer.sample_contract.download_btn")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
