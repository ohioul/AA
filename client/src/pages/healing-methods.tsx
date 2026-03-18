import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

export default function HealingMethods() {
  const { t } = useTranslation();
  useSEO({
    title: t("healing_methods.title", "Healing Methods"),
    description: "Comprehensive overview of complementary and alternative healing methods recognized by AACM. Evidence-based analysis of therapeutic approaches.",
    keywords: "healing methods, complementary therapy, alternative medicine methods, AACM healing, therapeutic approaches, holistic healing"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const methods = [
    "reiki",
    "bioenergetics",
    "qigong",
    "acupuncture",
    "hatha_yoga",
    "kundalini_yoga",
    "pranayama",
    "theta_healing",
    "silva_method",
    "joe_dispenza",
    "initiology"
  ].map(id => ({
    id: id.replace(/_/g, '-'),
    title: t(`healing_methods.methods.${id}.title`),
    content: t(`healing_methods.methods.${id}.content`),
    organizations: t(`healing_methods.methods.${id}.organizations`, { returnObjects: true }) as string[]
  }));

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-gradient-to-b from-blue-50/50 to-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 pl-16">
          <Link
            href="/marketing"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("healing_methods.back_to_marketing")}
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif text-foreground">
            {t("healing_methods.page_title")}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {t("healing_methods.page_subtitle")}
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 pl-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <ScrollArea className="h-[calc(100vh-200px)] sticky top-32">
              <nav className="flex flex-col space-y-1">
                {methods.map((method) => (
                  <a
                    key={method.id}
                    href={`#${method.id}`}
                    onClick={(e) => scrollToSection(e, method.id)}
                    className="text-sm px-3 py-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {method.title.split(":")[0]}
                  </a>
                ))}
              </nav>
            </ScrollArea>
          </div>

          <div className="md:col-span-2 space-y-8">
            {methods.map((method) => (
              <section key={method.id} id={method.id} className="scroll-mt-32">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-primary">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {method.content}
                    </p>
                    
                    {Array.isArray(method.organizations) && method.organizations.length > 0 && (
                      <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          {t("healing_methods.top_organizations") || "Top Organizations & Associations"}
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {method.organizations.map((org, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              {org}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
