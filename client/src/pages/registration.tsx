import { Link } from "wouter";
import { ArrowLeft, FileText, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSEO } from "@/hooks/useSEO";

export default function Registration() {
  const { t } = useTranslation();
  useSEO({
    title: t("registration.title"),
    description: "AACM official corporate registration data. State of Florida registration, EIN, and legal documentation.",
    keywords: "AACM registration, corporate registration, Florida registration, AACM legal"
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
            {t("registration.title")}
          </h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8 pl-16">
        <div className="p-6 bg-slate-50 border border-wiki-border rounded-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-lg font-serif font-semibold">
              {t("registration.electronic_articles")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t("registration.doc_number")}</p>
              <p className="font-mono bg-white border border-slate-200 px-2 py-1 rounded inline-block">
                P25000001859
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t("registration.status")}</p>
              <div className="flex items-center gap-2 text-green-700 font-medium">
                <CheckCircle className="w-4 h-4" />
                {t("registration.active_standing")}
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none border-t border-wiki-border pt-8">
          <h3 className="text-xl font-serif mb-6">{t("registration.official_details")}</h3>
          
          <div className="space-y-8">
            <section>
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">{t("registration.article_1")}</h4>
              <p className="text-lg font-serif">AMERICAN ACADEMY OF COMPLEMENTARY MEDICINE INC</p>
            </section>

            <section>
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">{t("registration.article_2")}</h4>
              <p>7901 4TH ST N, STE 300<br />ST PETERSBURG, FL. 33702<br />United States</p>
            </section>

            <section>
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">{t("registration.article_3")}</h4>
              <p>{t("registration.article_3_desc")}</p>
            </section>

            <section>
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">{t("registration.article_4")}</h4>
              <p>{t("registration.article_4_desc")}</p>
            </section>

            <section>
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">{t("registration.article_5")}</h4>
              <p>REGISTERED AGENTS INC.<br />7901 4TH ST N, STE 300<br />ST PETERSBURG, FL. 33702</p>
              <p className="text-sm text-muted-foreground italic mt-[0px] mb-[0px] font-bold">{t("registration.president")}</p>
            </section>
            
             <section className="pt-4 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">{t("registration.filing_info")}</h4>
              <p className="text-sm">
                <span className="font-semibold">{t("registration.filer")}</span> kcostello<br/>
                <span className="font-semibold">{t("registration.jurisdiction_label")}</span> {t("registration.jurisdiction_val")}
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
