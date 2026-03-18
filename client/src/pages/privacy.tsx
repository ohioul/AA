import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { useSEO } from "@/hooks/useSEO";

export default function Privacy() {
  const { t } = useTranslation();
  useSEO({
    title: t("privacy.title"),
    description: "AACM Privacy Policy. How we collect, use, and protect your personal information.",
    keywords: "AACM privacy policy, data protection, personal information"
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
            {t("privacy.title")}
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 pl-16">
        <div className="prose prose-slate max-w-none text-sm leading-relaxed">
          <p className="text-muted-foreground mb-6">{t("privacy.last_updated")}</p>

          <h2 className="text-lg font-serif text-black mt-6 mb-3">{t("privacy.intro_title")}</h2>
          <p>{t("privacy.intro_desc")}</p>

          <h2 className="text-lg font-serif text-black mt-6 mb-3">{t("privacy.collect_title")}</h2>
          <p>{t("privacy.collect_desc")}</p>
          <ul className="list-disc pl-5 space-y-1 my-3">
            <li>
              <Trans i18nKey="privacy.collect_list.identity">
                <strong>Identity Data</strong> includes first name, last name, username or similar identifier, title, date of birth and gender.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="privacy.collect_list.contact">
                <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="privacy.collect_list.technical">
                <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.
              </Trans>
            </li>
          </ul>

          <h2 className="text-lg font-serif text-black mt-6 mb-3">{t("privacy.use_title")}</h2>
          <p>{t("privacy.use_desc")}</p>
          <ul className="list-disc pl-5 space-y-1 my-3">
            <li>{t("privacy.use_list.contract")}</li>
            <li>{t("privacy.use_list.legitimate")}</li>
            <li>{t("privacy.use_list.legal")}</li>
          </ul>

          <h2 className="text-lg font-serif text-black mt-6 mb-3">{t("privacy.security_title")}</h2>
          <p>{t("privacy.security_desc")}</p>

          <h2 className="text-lg font-serif text-black mt-6 mb-3">{t("privacy.rights_title")}</h2>
          <p>{t("privacy.rights_desc")}</p>

          <h2 className="text-lg font-serif text-black mt-6 mb-3">{t("privacy.contact_title")}</h2>
          <p>
            <Trans i18nKey="privacy.contact_desc">
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@aacm.org" className="text-primary hover:underline">privacy@aacm.org</a>.
            </Trans>
          </p>
        </div>
      </main>
    </div>
  );
}
