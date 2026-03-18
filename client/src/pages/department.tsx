import { Link, useRoute } from "wouter";
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
  ArrowLeft,
  ExternalLink,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";
import { useSEO } from "@/hooks/useSEO";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import lazarenkoPhoto from "@assets/IMG_3952_1772393785659.png";
import dispenzaPhoto from "@assets/IMG_0643_1772480546359.webp";

interface PublishedCertificate {
  id: string;
  type: string;
  recipientName: string;
  date: string;
  certificateNumber?: string;
  recipientPhoto?: string;
}

function AwardCard({ awardKey, photo, t }: { awardKey: string; photo: string; t: (key: string) => string }) {
  const [expanded, setExpanded] = useState(false);
  const prefix = `departments.awards.${awardKey}`;
  return (
    <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-300 rounded-lg p-3 md:p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-14 h-18 md:w-20 md:h-26 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-amber-400 shadow-sm">
          <img
            src={photo}
            alt={t(`${prefix}.name`)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-tight" data-testid={`text-${awardKey}-name`}>
            {t(`${prefix}.name`)}
          </h3>
          <p className="text-xs md:text-sm font-medium text-amber-700 mt-0.5" data-testid={`text-${awardKey}-type`}>
            <Award className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
            {t(`${prefix}.award_type`)}
          </p>
          <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
            {t(`${prefix}.description_short`)}
          </p>
          {expanded && (
            <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
              {t(`${prefix}.description_full`)}
            </p>
          )}
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-amber-700 hover:text-amber-900 font-medium underline underline-offset-2"
              data-testid={`btn-toggle-${awardKey}`}
            >
              {expanded ? t("departments.awards.lazarenko_award.read_less") : t("departments.awards.lazarenko_award.read_more")}
            </button>
            <span className="text-xs text-gray-400">{t(`${prefix}.conferred_by`)} · {t(`${prefix}.date`)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const seoKeywords: Record<string, string> = {
  analytics: "industry analytics, market trends, complementary medicine statistics, sector analysis, AACM analytics",
  marketing: "marketing research, market analysis, complementary medicine market, consumer behavior, AACM marketing",
  accreditation: "accreditation, certification, professional qualification, expert evaluation, AACM accreditation",
  ratings: "ratings, practitioner ratings, complementary medicine ratings, specialist ratings, AACM ratings",
  awards: "awards, honors, complementary medicine awards, practitioner recognition, AACM awards, honorary member",
  education: "education, certification programs, professional development, complementary medicine courses, AACM education",
  research: "scientific research, clinical trials, evidence-based medicine, AACM research, complementary medicine studies",
  diagnostics: "diagnostic methods, complementary diagnostics, assessment techniques, AACM diagnostics",
  publications: "research publications, medical publications, AACM publications, complementary medicine journal",
  council: "expert council, advisory board, complementary medicine experts, AACM council"
};

export default function Department() {
  const [, params] = useRoute("/:slug");
  const slug = params?.slug || "";
  const { t } = useTranslation();
  
  const deptTitle = t(`departments.${slug}.title`, slug);
  const deptDesc = t(`departments.${slug}.description`, "");
  useSEO({
    title: deptTitle,
    description: deptDesc || `${deptTitle} — American Academy of Complementary Medicine department.`,
    keywords: seoKeywords[slug] || `${slug}, complementary medicine, AACM`
  });

  const certificateSections = ["awards", "council", "accreditation", "research", "education"];
  
  const { data: publishedCertificates = [] } = useQuery<PublishedCertificate[]>({
    queryKey: ["published-certificates", slug],
    queryFn: async () => {
      const fetchSection = slug === "education" ? "accreditation" : slug;
      const response = await fetch(`/api/published-certificates/${fetchSection}`);
      if (!response.ok) return [];
      return response.json();
    },
    enabled: certificateSections.includes(slug),
  });

  const getCertificateSectionTitle = (section: string) => {
    const titles: Record<string, string> = {
      awards: "Awards and Honors",
      council: "Expert Council Members",
      accreditation: "Best Methodology Recipients",
      research: "Best Specialist Recipients",
      education: "Best Methodology Recipients",
    };
    return titles[section] || "Certificate Recipients";
  };

  const [ratingMethods, setRatingMethods] = useState([
    { key: "deepak_chopra", score: 97 },
    { key: "joe_dispenza", score: 94 },
    { key: "initiology", score: 91 },
    { key: "reiki", score: 87 },
    { key: "bioenergetics", score: 71 },
    { key: "qigong", score: 69 },
    { key: "acupuncture", score: 67 },
    { key: "hatha_yoga", score: 65 },
    { key: "theta_healing", score: 64 },
    { key: "kundalini_yoga", score: 63 },
    { key: "pranayama", score: 60 },
    { key: "silva_method", score: 55 },
  ]);

  useEffect(() => {
    if (slug !== "ratings") return;

    let timeoutId: NodeJS.Timeout;

    const updateRatings = () => {
      // Top 4 always: deepak_chopra, joe_dispenza, reiki, initiology
      // Initiology: always at positions 2-4 (indices 1, 2, 3) — never #1
      // Deepak Chopra: periodically rises to #1, alternates with Dispenza/Reiki at top
      
      const otherMethods = [
        "bioenergetics",
        "qigong",
        "acupuncture",
        "hatha_yoga",
        "theta_healing",
        "kundalini_yoga",
        "pranayama",
        "silva_method"
      ];

      // Shuffle others
      for (let i = otherMethods.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otherMethods[i], otherMethods[j]] = [otherMethods[j], otherMethods[i]];
      }

      // Patterns for top 4: Initiology always at index 1, 2, or 3
      // Chopra gets extra weight for #1 (appears in 5 of 9 patterns)
      const patterns: string[][] = [
        // Chopra at #1 (5 patterns)
        ["deepak_chopra", "initiology", "joe_dispenza", "reiki"],
        ["deepak_chopra", "joe_dispenza", "initiology", "reiki"],
        ["deepak_chopra", "reiki", "joe_dispenza", "initiology"],
        ["deepak_chopra", "joe_dispenza", "reiki", "initiology"],
        ["deepak_chopra", "reiki", "initiology", "joe_dispenza"],
        // Dispenza at #1 (2 patterns)
        ["joe_dispenza", "deepak_chopra", "initiology", "reiki"],
        ["joe_dispenza", "initiology", "deepak_chopra", "reiki"],
        // Reiki at #1 (2 patterns)
        ["reiki", "deepak_chopra", "initiology", "joe_dispenza"],
        ["reiki", "initiology", "deepak_chopra", "joe_dispenza"],
      ];

      const selectedPattern = patterns[Math.floor(Math.random() * patterns.length)];
      const finalOrderKeys = [...selectedPattern, ...otherMethods];

      // Assign scores based on rank
      // Rank 1: 96-99, Rank 2: 91-95, Rank 3: 86-90, Rank 4: 81-85, Rank 5+: descending from 80
      const newRatings = finalOrderKeys.map((key, index) => {
        let score;
        if (index === 0) score = Math.floor(Math.random() * (99 - 96 + 1)) + 96;
        else if (index === 1) score = Math.floor(Math.random() * (95 - 91 + 1)) + 91;
        else if (index === 2) score = Math.floor(Math.random() * (90 - 86 + 1)) + 86;
        else if (index === 3) score = Math.floor(Math.random() * (85 - 81 + 1)) + 81;
        else score = Math.max(50, 80 - (index - 4) * 3 - Math.floor(Math.random() * 2));
        return { key, score };
      });

      setRatingMethods(newRatings);

      // Update every 60 seconds (once per minute)
      timeoutId = setTimeout(updateRatings, 60000);
    };

    updateRatings();

    return () => clearTimeout(timeoutId);
  }, [slug]);

  const departmentData: Record<
    string,
    {
      title: string;
      icon: React.ReactNode;
      description: string;
      sections: { title: string; content: string; id?: string }[];
      relatedLinks: { title: string; href: string }[];
    }
  > = {
    analytics: {
      title: t("departments.analytics.title"),
      icon: <BarChart3 className="w-8 h-8" />,
      description: t("departments.analytics.long_desc"),
      sections: [
        {
          title: t("departments.analytics.sections.mission_title"),
          content: t("departments.analytics.sections.mission_content"),
        },
        {
          title: t("departments.analytics.sections.activities_title"),
          content: t("departments.analytics.sections.activities_content"),
        },
        {
          title: t("departments.analytics.sections.methodology_title"),
          content: t("departments.analytics.sections.methodology_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.marketing.title"), href: "/marketing" },
        { title: t("departments.publications.title"), href: "/publications" },
        { title: t("departments.ratings.title"), href: "/ratings" },
      ],
    },
    marketing: {
      title: t("departments.marketing.title"),
      icon: <Search className="w-8 h-8" />,
      description: t("departments.marketing.long_desc"),
      sections: [
        {
          title: t("departments.marketing.sections.focus_title"),
          content: t("departments.marketing.sections.focus_content"),
        },
        {
          title: t("departments.marketing.sections.segmentation_title"),
          content: t("departments.marketing.sections.segmentation_content"),
        },
        {
          title: t("departments.marketing.sections.analysis_title"),
          content: t("departments.marketing.sections.analysis_content"),
        },
        {
          title: t("departments.marketing.sections.healing_title"),
          content: t("departments.marketing.sections.healing_content"),
          id: "healing"
        },
      ],
      relatedLinks: [
        { title: t("departments.analytics.title"), href: "/analytics" },
        { title: t("departments.ratings.title"), href: "/ratings" },
        { title: t("departments.council.title"), href: "/council" },
      ],
    },
    accreditation: {
      title: t("departments.accreditation.title"),
      icon: <Building2 className="w-8 h-8" />,
      description: t("departments.accreditation.long_desc"),
      sections: [
        {
          title: t("departments.accreditation.sections.standards_title"),
          content: t("departments.accreditation.sections.standards_content"),
        },
        {
          title: t("departments.accreditation.sections.monitoring_title"),
          content: t("departments.accreditation.sections.monitoring_content"),
        },
        {
          title: t("departments.accreditation.sections.verification_title"),
          content: t("departments.accreditation.sections.verification_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.education.title"), href: "/education" },
        { title: t("departments.ratings.title"), href: "/ratings" },
        { title: t("departments.council.title"), href: "/council" },
      ],
    },
    ratings: {
      title: t("departments.ratings.title"),
      icon: <TrendingUp className="w-8 h-8" />,
      description: t("departments.ratings.long_desc"),
      sections: [
        {
          title: t("departments.ratings.sections.methodology_title"),
          content: t("departments.ratings.sections.methodology_content"),
        },
        {
          title: t("departments.ratings.sections.updates_title"),
          content: t("departments.ratings.sections.updates_content"),
        },
        {
          title: t("departments.ratings.sections.transparency_title"),
          content: t("departments.ratings.sections.transparency_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.accreditation.title"), href: "/accreditation" },
        { title: t("departments.publications.title"), href: "/publications" },
        { title: t("departments.awards.title"), href: "/awards" },
      ],
    },
    awards: {
      title: t("departments.awards.title"),
      icon: <Award className="w-8 h-8" />,
      description: t("departments.awards.long_desc"),
      sections: [
        {
          title: t("departments.awards.sections.categories_title"),
          content: t("departments.awards.sections.categories_content"),
        },
        {
          title: t("departments.awards.sections.selection_title"),
          content: t("departments.awards.sections.selection_content"),
        },
        {
          title: t("departments.awards.sections.lifetime_title"),
          content: t("departments.awards.sections.lifetime_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.ratings.title"), href: "/ratings" },
        { title: t("departments.council.title"), href: "/council" },
        { title: t("departments.education.title"), href: "/education" },
      ],
    },
    education: {
      title: t("departments.education.title"),
      icon: <GraduationCap className="w-8 h-8" />,
      description: t("departments.education.long_desc"),
      sections: [
        {
          title: t("departments.education.sections.curriculum_title"),
          content: t("departments.education.sections.curriculum_content"),
        },
        {
          title: t("departments.education.sections.accreditation_title"),
          content: t("departments.education.sections.accreditation_content"),
        },
        {
          title: t("departments.education.sections.continuing_title"),
          content: t("departments.education.sections.continuing_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.accreditation.title"), href: "/accreditation" },
        { title: t("departments.research.title"), href: "/research" },
        { title: t("departments.council.title"), href: "/council" },
      ],
    },
    research: {
      title: t("departments.research.title"),
      icon: <FlaskConical className="w-8 h-8" />,
      description: t("departments.research.long_desc"),
      sections: [
        {
          title: t("departments.research.sections.trials_title"),
          content: t("departments.research.sections.trials_content"),
        },
        {
          title: t("departments.research.sections.reviews_title"),
          content: t("departments.research.sections.reviews_content"),
        },
        {
          title: t("departments.research.sections.grants_title"),
          content: t("departments.research.sections.grants_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.publications.title"), href: "/publications" },
        { title: t("departments.education.title"), href: "/education" },
        { title: t("departments.diagnostics.title"), href: "/diagnostics" },
      ],
    },
    diagnostics: {
      title: t("departments.diagnostics.title"),
      icon: <Stethoscope className="w-8 h-8" />,
      description: t("departments.diagnostics.long_desc"),
      sections: [
        {
          title: t("departments.diagnostics.sections.validation_title"),
          content: t("departments.diagnostics.sections.validation_content"),
        },
        {
          title: t("departments.diagnostics.sections.standardization_title"),
          content: t("departments.diagnostics.sections.standardization_content"),
        },
        {
          title: t("departments.diagnostics.sections.tech_title"),
          content: t("departments.diagnostics.sections.tech_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.research.title"), href: "/research" },
        { title: t("departments.accreditation.title"), href: "/accreditation" },
        { title: t("departments.education.title"), href: "/education" },
      ],
    },
    publications: {
      title: t("departments.publications.title"),
      icon: <FileText className="w-8 h-8" />,
      description: t("departments.publications.long_desc"),
      sections: [
        {
          title: t("departments.publications.sections.types_title"),
          content: t("departments.publications.sections.types_content"),
        },
        {
          title: t("departments.publications.sections.editions_title"),
          content: t("departments.publications.sections.editions_content"),
        },
        {
          title: t("departments.publications.sections.reports_title"),
          content: t("departments.publications.sections.reports_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.analytics.title"), href: "/analytics" },
        { title: t("departments.ratings.title"), href: "/ratings" },
        { title: t("departments.research.title"), href: "/research" },
      ],
    },
    council: {
      title: t("departments.council.title"),
      icon: <Users className="w-8 h-8" />,
      description: t("departments.council.long_desc"),
      sections: [
        {
          title: t("departments.council.sections.composition_title"),
          content: t("departments.council.sections.composition_content"),
        },
        {
          title: t("departments.council.sections.advisory_title"),
          content: t("departments.council.sections.advisory_content"),
        },
        {
          title: t("departments.council.sections.public_title"),
          content: t("departments.council.sections.public_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.accreditation.title"), href: "/accreditation" },
        { title: t("departments.awards.title"), href: "/awards" },
        { title: t("departments.education.title"), href: "/education" },
      ],
    },
  };

  const data = departmentData[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Department Not Found</h1>
          <Link href="/" className="wiki-link">
            {t("common.back_home")}
          </Link>
        </div>
      </div>
    );
  }

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
            <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 text-primary">
              {data.icon}
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif text-foreground border-none pb-0 mb-1">
                {data.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t("common.academy_name")}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 pl-16">
        <div className="md:flex md:gap-8">
          <article className="flex-1">
            <p className="text-base leading-relaxed mb-6">{data.description}</p>

            <div className="wiki-toc mb-6">
              <div className="wiki-toc-title">{t("home.contents")}</div>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                {slug === "awards" && (
                  <li>
                    <a href="#faces-of-year" className="wiki-link">
                      {t("departments.awards.faces_title")}
                    </a>
                  </li>
                )}
                {data.sections.map((section, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx}`}
                      className="wiki-link"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#related" className="wiki-link">
                    {t("departments.related_departments")}
                  </a>
                </li>
              </ol>
            </div>

            {slug === "awards" && (
              <section id="faces-of-year" className="mb-8">
                <h2 className="text-lg font-serif mb-4">{t("departments.awards.faces_title")}</h2>
                <div className="space-y-3">
                  {[
                    { key: "lazarenko_award", photo: lazarenkoPhoto },
                    { key: "dispenza_award", photo: dispenzaPhoto },
                  ].map(({ key, photo }) => (
                    <AwardCard key={key} awardKey={key} photo={photo} t={t} />
                  ))}
                </div>
              </section>
            )}

            {certificateSections.includes(slug) && publishedCertificates.length > 0 && (
              <section id="published-certificates" className="mb-8">
                <h2 className="text-lg font-serif mb-4">
                  {getCertificateSectionTitle(slug)}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {publishedCertificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-16 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0 border border-amber-200">
                          {cert.recipientPhoto ? (
                            <img
                              src={cert.recipientPhoto}
                              alt={cert.recipientName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              <User className="w-8 h-8" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">{cert.recipientName}</h3>
                          <p className="text-sm text-amber-700 capitalize">
                            {cert.type.replace(/_/g, " ")}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                          {cert.certificateNumber && (
                            <p className="text-xs text-gray-400">#{cert.certificateNumber}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {slug === "research" && (
              <section id="lazarenko-award-rationale" className="mb-8">
                <h2 className="text-lg font-serif mb-4">{t("research.award_rationale.title")}</h2>
                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-blue-900 mb-3">{t("research.award_rationale.subtitle")}</h3>
                  <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                    <p>{t("research.award_rationale.intro")}</p>
                    <p>{t("research.award_rationale.diagnoses")}</p>
                    <p>{t("research.award_rationale.results")}</p>
                    <p>{t("research.award_rationale.verification")}</p>
                    <p>{t("research.award_rationale.unique")}</p>
                    <div className="border-t border-blue-200 pt-4 mt-4 space-y-3">
                      <p className="font-semibold text-blue-900">{t("research.award_rationale.conclusion")}</p>
                      <p className="font-semibold text-blue-900">{t("research.award_rationale.methodology_recognition")}</p>
                      <div className="mt-6 pt-4 text-right">
                        <p className="font-semibold text-gray-900 italic">{t("research.award_rationale.signature_name")}</p>
                        <p className="text-gray-600 text-xs">{t("research.award_rationale.signature_title")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {slug === "ratings" && (
              <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-serif">{t("departments.ratings.effectiveness_score")}</h2>
                  <div className="text-sm font-medium text-muted-foreground bg-muted/20 px-3 py-1 rounded-full border border-border/50">
                    {t("departments.ratings.total_votes")}
                  </div>
                </div>
                <div className="space-y-6">
                  {ratingMethods.map((method) => (
                    <div key={method.key} className="bg-muted/10 p-4 rounded-lg border border-border/50">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                        <div className="w-full md:w-1/3 font-medium text-lg">
                          {t(`healing_methods.methods.${method.key}.title`).split(":")[0]}
                        </div>
                        <div className="flex-1 w-full">
                           <div className="flex justify-between mb-1 text-sm text-muted-foreground">
                              <span>{t("departments.ratings.rate_efficiency")}</span>
                              <span className="font-bold text-foreground">{method.score}/100</span>
                           </div>
                           <Progress value={method.score} className="h-2" />
                        </div>
                        <div className="w-full md:w-auto flex-shrink-0 mt-2 md:mt-0">
                           <Button asChild size="sm" className="w-full md:w-auto">
                              <a href="https://platform.aacmedinc.org/stat" target="_blank" rel="noopener noreferrer">
                                {t("departments.ratings.vote_action")} <ExternalLink className="ml-2 w-3 h-3" />
                              </a>
                           </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.sections.map((section, idx) => (
              <section key={idx} className="mb-6" id={`section-${idx}`}>
                <h2 className="text-lg font-serif">{section.title}</h2>
                <p className="text-sm leading-relaxed">{section.content}</p>
                {section.id === "healing" && (
                  <div className="mt-4">
                    <Link href="/healing-methods" className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm font-medium transition-colors">
                      {t("common.read_more")}
                    </Link>
                  </div>
                )}
              </section>
            ))}

            <section id="related" className="mb-6">
              <h2 className="text-lg font-serif">{t("departments.related_departments")}</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {data.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="wiki-link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="wiki-infobox float-none m-0 w-full">
              <table className="w-full">
                <thead>
                  <tr>
                    <th colSpan={2} className="text-sm">
                      {t("departments.department_info")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-xs">{t("common.status")}</td>
                    <td className="text-xs">{t("common.active")}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-xs">{t("common.staff")}</td>
                    <td className="text-xs">{t("common.professionals")}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-xs">{t("common.reports_to")}</td>
                    <td className="text-xs">{t("common.executive_director")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-blue-50/50 border border-wiki-border rounded text-xs">
              <p className="font-medium mb-2">{t("common.quick_links")}</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="wiki-link inline-flex items-center gap-1">
                    {t("departments.contact_dept")} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="wiki-link inline-flex items-center gap-1">
                    {t("departments.submit_inquiry")} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="wiki-link inline-flex items-center gap-1">
                    {t("departments.view_reports")} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <footer className="border-t border-wiki-border pt-6 mt-12 text-xs text-muted-foreground">
          <p className="mb-2">{t("common.last_edited")}</p>
          <p>
            {t("common.copyright")}
          </p>
        </footer>
      </main>
    </div>
  );
}