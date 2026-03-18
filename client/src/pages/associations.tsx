import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslation } from "react-i18next";
import { useSEO } from "@/hooks/useSEO";

interface Association {
  name: string;
  country: string;
  city: string;
  field: string;
  website: string;
  description: string;
}

export default function Associations() {
  const { t } = useTranslation();
  useSEO({
    title: t("associations.title"),
    description: "Professional associations in complementary medicine, parapsychology, yoga, and holistic health. International partner organizations of AACM.",
    keywords: "professional associations, complementary medicine organizations, parapsychology associations, yoga organizations, AACM partners, international associations"
  });

  const associations: Association[] = [
    {
      name: "Parapsychological Association (PA)",
      country: "USA",
      city: "Durham, NC",
      field: "Parapsychology",
      website: "parapsych.org",
      description: t("associations.items.pa")
    },
    {
      name: "Society for Psychical Research (SPR)",
      country: "UK",
      city: "London",
      field: "Parapsychology",
      website: "spr.ac.uk",
      description: t("associations.items.spr")
    },
    {
      name: "Australian Institute of Parapsychological Research",
      country: "Australia",
      city: "—",
      field: "Parapsychology",
      website: "aiprinc.org",
      description: t("associations.items.aipr")
    },
    {
      name: "Yoga Alliance",
      country: "USA",
      city: "—",
      field: "Yoga",
      website: "yogaalliance.org",
      description: t("associations.items.ya")
    },
    {
      name: "International Yoga Federation (IYF)",
      country: "International",
      city: "—",
      field: "Yoga",
      website: "—",
      description: t("associations.items.iyf")
    },
    {
      name: "World Yoga Association",
      country: "International",
      city: "—",
      field: "Yoga",
      website: "world-yoga.org",
      description: t("associations.items.wya")
    },
    {
      name: "Yoga Alliance International",
      country: "International",
      city: "—",
      field: "Yoga",
      website: "yogaallianceinternational.org",
      description: t("associations.items.yai")
    },
    {
      name: "Association of Specialists in Alternative Medicine and Wellness Practices (ASNMOP)",
      country: "Russia",
      city: "Moscow",
      field: "Alternative Medicine",
      website: "asnmop.ru",
      description: t("associations.items.asnmop")
    },
    {
      name: "International Academy of Initiology",
      country: "International",
      city: "—",
      field: "Initiology",
      website: "iain.su",
      description: t("associations.items.iain")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-5xl mx-auto px-6 py-4 pl-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-3"
            data-testid="back-link"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("common.back_home")}
          </Link>
          <div className="flex items-start gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-serif text-foreground border-none pb-0 mb-1">
                {t("associations.title")}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t("common.academy_name")}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 pl-16">
        <article>
          <p className="text-base leading-relaxed mb-8">
            {t("associations.description")}
          </p>

          <div className="rounded-md border border-wiki-border overflow-hidden">
            <Table>
              <TableHeader className="bg-[#eeefe8]">
                <TableRow>
                  <TableHead className="font-semibold text-foreground w-[250px]">{t("associations.table.organization")}</TableHead>
                  <TableHead className="font-semibold text-foreground w-[120px]">{t("associations.table.location")}</TableHead>
                  <TableHead className="font-semibold text-foreground w-[120px]">{t("associations.table.field")}</TableHead>
                  <TableHead className="font-semibold text-foreground w-[150px]">{t("associations.table.website")}</TableHead>
                  <TableHead className="font-semibold text-foreground">{t("associations.table.description")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {associations.map((assoc, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium align-top">{assoc.name}</TableCell>
                    <TableCell className="align-top">
                      <div className="flex flex-col text-sm">
                        <span className="font-medium">{assoc.country}</span>
                        {assoc.city !== "—" && <span className="text-muted-foreground text-xs">{assoc.city}</span>}
                      </div>
                    </TableCell>
                    <TableCell className="align-top">{assoc.field}</TableCell>
                    <TableCell className="align-top">
                      {assoc.website !== "—" ? (
                        <a 
                          href={`https://${assoc.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:underline text-sm"
                        >
                          {assoc.website} <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell className="align-top text-sm leading-relaxed">{assoc.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </article>

        <footer className="border-t border-wiki-border pt-6 mt-12 text-xs text-muted-foreground">
          <p className="mb-2">{t("common.last_edited")}</p>
          <p>
            {t("associations.disclaimer")}
          </p>
        </footer>
      </main>
    </div>
  );
}
