import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { useSEO } from "@/hooks/useSEO";

export default function About() {
  const { t } = useTranslation();
  useSEO({
    title: t("about.title"),
    description: "Official information about the American Academy of Complementary Medicine (AACM). History, mission, organizational structure, and leadership.",
    keywords: "AACM about, complementary medicine academy, about AACM, academy history, mission statement"
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-6 pl-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("common.back_home")}
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif text-foreground">
            {t("about.title")}
          </h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8 pl-16">
        <div className="wiki-infobox float-right ml-6 mb-6 w-72">
          <table className="w-full">
            <thead>
              <tr>
                <th colSpan={2} className="text-base p-2 bg-slate-100 font-serif">
                  {t("common.academy_name")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-slate-200 font-semibold text-xs">{t("about.type")}</td>
                <td className="p-2 border-b border-slate-200 text-xs">{t("about.type_val")}</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-200 font-semibold text-xs">{t("about.headquarters")}</td>
                <td className="p-2 border-b border-slate-200 text-xs">{t("about.florida_usa")}</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-200 font-semibold text-xs">{t("about.fields")}</td>
                <td className="p-2 border-b border-slate-200 text-xs">{t("about.fields_val")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <Trans i18nKey="about.intro_p1">
              The <strong>American Academy of Complementary Medicine (AACM)</strong> is a distinguished institution dedicated to the advancement, standardization, and scientific validation of complementary and integrative medical practices. Established to bridge traditional healing wisdom with modern scientific rigor, the Academy serves as a global hub for practitioners, researchers, and educators.
            </Trans>
          </p>

          <h2 className="text-xl font-serif mt-8 mb-4">{t("about.mission_title")}</h2>
          <p className="mb-4">
            {t("about.mission_desc")}
          </p>

          <h2 className="text-xl font-serif mt-8 mb-4">{t("about.functions_title")}</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <Trans i18nKey="about.functions.accreditation">
                <strong>Accreditation:</strong> establishing gold-standard criteria for practitioners and educational institutions.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="about.functions.research">
                <strong>Research:</strong> Coordinating multi-center clinical trials and systematic reviews to build the evidence base.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="about.functions.education">
                <strong>Education:</strong> Developing advanced curricula and continuing education programs for healthcare professionals.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="about.functions.policy">
                <strong>Policy:</strong> Advocating for regulatory frameworks that ensure patient safety and practice rights.
              </Trans>
            </li>
          </ul>

          <h2 className="text-xl font-serif mt-8 mb-4">{t("about.reach_title")}</h2>
          <p className="mb-4">{t("about.reach_desc")}</p>
          
          <p className="text-sm text-muted-foreground mt-8 italic">
            {t("about.note")}
          </p>
        </div>
      </main>
    </div>
  );
}
