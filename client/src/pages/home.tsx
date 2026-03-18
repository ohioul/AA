import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import {
  BarChart3,
  Search,
  Building2,
  Award,
  GraduationCap,
  FlaskConical,
  Stethoscope,
  FileText,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { useSEO } from "@/hooks/useSEO";
import logoImage from "@assets/1111111111 (1).png";
import groupPhoto from "@assets/1111111111_(1)_1769534573107.png";

import _6767676766766767 from "@assets/6767676766766767.png";

import _1111111111__1_ from "@assets/1111111111 (1).png";

interface PublishedCertificate {
  id: string;
  type: string;
  recipientName: string;
  date: string;
  certificateNumber?: string;
  recipientPhoto?: string;
  createdAt: string;
}

export default function Home() {
  const { t } = useTranslation();
  useSEO({
    title: t("home.hero_title"),
    description: "American Academy of Complementary Medicine (AACM) — research, accreditation, education, and professional standards in complementary medicine. Partnerships across 47 countries.",
    keywords: "AACM, American Academy of Complementary Medicine, complementary medicine, alternative medicine, integrative medicine, accreditation, research, education, practitioner certification, holistic health"
  });
  
  const { data: publishedCertificates = [] } = useQuery<PublishedCertificate[]>({
    queryKey: ["published-certificates"],
    queryFn: async () => {
      const response = await fetch("/api/certificates/published");
      if (!response.ok) return [];
      return response.json();
    },
  });

  const latestRecipients = publishedCertificates
    .filter(cert => cert.type === "honorary_member")
    .slice(0, 4);

  const getCertificateTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      honorary_member: "Honorary Member AACM",
      expert_council: "Expert Council Member",
      best_method: "Best Methodology Award",
      best_specialist: "Best Specialist Award",
    };
    return labels[type] || type;
  };

  const departments = [
    {
      title: t("departments.analytics.title"),
      href: "/analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      description: t("departments.analytics.description"),
    },
    {
      title: t("departments.marketing.title"),
      href: "/marketing",
      icon: <Search className="w-6 h-6" />,
      description: t("departments.marketing.description"),
    },
    {
      title: t("departments.accreditation.title"),
      href: "/accreditation",
      icon: <Building2 className="w-6 h-6" />,
      description: t("departments.accreditation.description"),
    },
    {
      title: t("departments.ratings.title"),
      href: "/ratings",
      icon: <TrendingUp className="w-6 h-6" />,
      description: t("departments.ratings.description"),
    },
    {
      title: t("departments.awards.title"),
      href: "/awards",
      icon: <Award className="w-6 h-6" />,
      description: t("departments.awards.description"),
    },
    {
      title: t("departments.education.title"),
      href: "/education",
      icon: <GraduationCap className="w-6 h-6" />,
      description: t("departments.education.description"),
    },
    {
      title: t("departments.research.title"),
      href: "/research",
      icon: <FlaskConical className="w-6 h-6" />,
      description: t("departments.research.description"),
    },
    {
      title: t("departments.diagnostics.title"),
      href: "/diagnostics",
      icon: <Stethoscope className="w-6 h-6" />,
      description: t("departments.diagnostics.description"),
    },
    {
      title: t("departments.publications.title"),
      href: "/publications",
      icon: <FileText className="w-6 h-6" />,
      description: t("departments.publications.description"),
    },
    {
      title: t("departments.council.title"),
      href: "/council",
      icon: <Users className="w-6 h-6" />,
      description: t("departments.council.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-6 py-6 md:pl-16 bg-[#ffffff]">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
            <img 
              src={logoImage} 
              alt="AACM Logo" 
              className="w-20 h-20 object-cover rounded-full flex-shrink-0"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-serif text-foreground border-none pb-0 mb-1">
                {t("home.hero_title")}
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                {t("home.hero_subtitle")}
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8 pl-16">
        <div className="wiki-infobox hidden md:block ml-[4px] mr-[4px] mt-[4px] mb-[4px] pl-[4px] pr-[4px] pt-[4px] pb-[4px]">
          <div className="mb-4 border-b border-wiki-border pb-4 bg-[#eaf0f6]">
            <img 
              src={_1111111111__1_} 
              alt="Professional Collective of the Academy" 
              className="w-40 h-auto rounded shadow-sm mx-auto"
            />
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th colSpan={2} className="text-base bg-[#eeefe8]">
                  {t("home.academy_overview")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">{t("home.headquarters")}</td>
                <td>{t("home.florida_usa")}</td>
              </tr>
              <tr>
                <td className="font-medium">{t("home.focus")}</td>
                <td>{t("home.complementary_medicine")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base leading-relaxed mb-6">
          <Trans i18nKey="home.intro_p1">
            The <strong>American Academy of Complementary Medicine</strong> (AACM) is a
            leading professional organization dedicated to advancing the field of{" "}
            <span className="wiki-link">complementary medicine</span> through rigorous
            research, comprehensive education, and the establishment of professional
            standards. The Academy serves as the primary accrediting
            body and research institution for complementary medical practices in the
            United States and establishes partnerships with institutions across 47 countries.
          </Trans>
        </p>

        <p className="text-base leading-relaxed mb-4">
          <Trans i18nKey="home.history_founded">
            The American Academy of Complementary Medicine (also known as the Academy of Parapsychology and Medicine) was founded in California in <strong>1970</strong>.
          </Trans>
        </p>
        <p className="text-sm font-semibold text-foreground mb-2">
          {t("home.history_milestones_title")}
        </p>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-1 text-muted-foreground mb-6">
          <li className="text-[#0d0c0c]">{t("home.history_milestone_1")}</li>
          <li className="text-[#0a0a0a]">
            <Trans i18nKey="home.history_milestone_2">
              In <strong>1978</strong>, laid the foundation for the creation of the American Holistic Medical Association (now the American Academy of Complementary Medicine).
            </Trans>
          </li>
          <li className="text-[#0d0c0c]">{t("home.history_milestone_3")}</li>
        </ul>

        <div className="wiki-infobox block md:hidden mb-8">
          <div className="mb-4 border-b border-wiki-border pb-4">
            <img 
              src={groupPhoto} 
              alt="Professional Collective of the Academy" 
              className="w-40 h-auto rounded shadow-sm mx-auto"
            />
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th colSpan={2} className="text-base bg-[#eeefe8]">
                  {t("home.academy_overview")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">{t("home.headquarters")}</td>
                <td>{t("home.florida_usa")}</td>
              </tr>
              <tr>
                <td className="font-medium">{t("home.focus")}</td>
                <td>{t("home.complementary_medicine")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base leading-relaxed mb-6">
          <Trans i18nKey="home.intro_p2">
            The Academy's mission encompasses the evaluation of practitioners, the
            certification of educational programs, and the publication of evidence-based
            research. Through its various departments, AACM provides comprehensive
            services including{" "}
            <span className="wiki-link">practitioner accreditation</span>,{" "}
            <span className="wiki-link">market analysis</span>, and{" "}
            <span className="wiki-link">clinical research</span> coordination.
          </Trans>
        </p>

        <div className="wiki-toc mb-8">
          <div className="wiki-toc-title">{t("home.contents")}</div>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>
              <span className="wiki-link">{t("home.academy_departments")}</span>
            </li>
            <li>
              <span className="wiki-link">{t("home.research_initiatives")}</span>
            </li>
            <li>
              <span className="wiki-link">{t("home.accreditation_process")}</span>
            </li>
            <li>
              <span className="wiki-link">{t("home.international_partnerships")}</span>
            </li>
          </ol>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-serif" id="departments">
            {t("home.academy_departments")}
          </h2>
          <p className="text-base leading-relaxed mb-6">
            {t("home.departments_intro")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departments.map((dept) => (
              <Link
                key={dept.href}
                href={dept.href}
                data-testid={`card-${dept.href.slice(1)}`}
              >
                <div className="department-card p-4 rounded cursor-pointer h-full">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-0.5">{dept.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base font-medium text-primary border-none pb-0 mb-1 hover:underline">
                        {dept.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-serif" id="research">
            {t("home.research_initiatives")}
          </h2>
          <p className="text-base leading-relaxed mb-4">
            {t("home.research_intro")}
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4 mb-4">
            <li>{t("home.research_list.1")}</li>
            <li>{t("home.research_list.2")}</li>
            <li>{t("home.research_list.3")}</li>
            <li>{t("home.research_list.4")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-serif" id="accreditation">
            {t("home.accreditation_process")}
          </h2>
          <p className="text-base leading-relaxed mb-4">
            {t("home.accreditation_intro")}
          </p>
          <div className="bg-blue-50/50 border border-wiki-border rounded p-4 mb-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">{t("home.accreditation_steps.edu_verif")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t("home.accreditation_steps.edu_desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">{t("home.accreditation_steps.clinical_assess")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t("home.accreditation_steps.clinical_desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">{t("home.accreditation_steps.peer_review")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t("home.accreditation_steps.peer_desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">{t("home.accreditation_steps.cont_edu")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t("home.accreditation_steps.cont_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-serif" id="international">
            {t("home.international_partnerships")}
          </h2>
          <p className="text-base leading-relaxed">
            {t("home.partnerships_intro")}
          </p>
        </section>

        {latestRecipients.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-serif" id="award-recipients">
              Awards and Honors
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Recent honorary members of the American Academy of Complementary Medicine.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {latestRecipients.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-lg p-4 text-center shadow-sm"
                  data-testid={`recipient-card-${cert.id}`}
                >
                  {cert.recipientPhoto ? (
                    <img
                      src={cert.recipientPhoto}
                      alt={cert.recipientName}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-amber-300"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-amber-100 mx-auto mb-3 flex items-center justify-center border-2 border-amber-300">
                      <Award className="w-8 h-8 text-amber-600" />
                    </div>
                  )}
                  <h3 className="font-serif font-semibold text-sm text-gray-900 mb-1">
                    {cert.recipientName}
                  </h3>
                  <p className="text-xs text-amber-700 font-medium">
                    {getCertificateTypeLabel(cert.type)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/awards" className="text-primary hover:underline text-sm">
                View all awards →
              </Link>
            </div>
          </section>
        )}

        <footer className="border-t border-wiki-border pt-6 mt-8 text-xs text-muted-foreground">
          <p className="mb-2">
            {t("common.last_edited")}
          </p>
          <p>
            {t("common.copyright")}
          </p>
        </footer>
      </main>
    </div>
  );
}
