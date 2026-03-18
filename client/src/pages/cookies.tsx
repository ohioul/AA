import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { useSEO } from "@/hooks/useSEO";

export default function Cookies() {
  const { t } = useTranslation();
  useSEO({
    title: t("cookies.title"),
    description: "AACM Cookie Policy. Information about how we use cookies on our website.",
    keywords: "AACM cookies, cookie policy"
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
            {t("cookies.title")}
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 pl-16">
        <div className="prose prose-slate max-w-none text-sm leading-relaxed">
          <p className="text-muted-foreground mb-6">{t("cookies.last_updated")}</p>

          <h2 className="text-lg font-serif text-black mt-6 mb-3">{t("cookies.what_title")}</h2>
          <p>{t("cookies.what_desc")}</p>

          <h2 className="text-lg font-serif text-black mt-6 mb-3">{t("cookies.use_title")}</h2>
          <p>{t("cookies.use_desc")}</p>
          <ul className="list-disc pl-5 space-y-1 my-3">
            <li>
              <Trans i18nKey="cookies.use_list.essential">
                <strong>Essential Cookies:</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="cookies.use_list.analytical">
                <strong>Analytical/Performance Cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="cookies.use_list.functionality">
                <strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).
              </Trans>
            </li>
          </ul>

          <h2 className="text-lg font-serif text-black mt-6 mb-3">{t("cookies.managing_title")}</h2>
          <p>
            <Trans i18nKey="cookies.managing_desc">
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a>.
            </Trans>
          </p>
          <p className="mt-2">
            {t("cookies.managing_list_intro")}
          </p>
          <ul className="list-disc pl-5 space-y-1 my-3">
            <li><a href="https://support.google.com/accounts/answer/61416" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
            <li><a href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Internet Explorer</a></li>
            <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Opera</a></li>
            <li><a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
