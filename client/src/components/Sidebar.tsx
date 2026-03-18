import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Menu, X, Building2, BarChart3, Search, Award, GraduationCap, FlaskConical, Stethoscope, FileText, Users, ChevronDown, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logoImage from "@assets/1111111111 (1).png";
import _1111111111__1_ from "@assets/1111111111 (1).png";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: { title: string; href: string }[];
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const { t } = useTranslation();

  const navigation: NavItem[] = [
    {
      title: t("nav.industry_analytics"),
      href: "/analytics",
      icon: <BarChart3 className="w-4 h-4" />,
      description: t("departments.analytics.description"),
    },
    {
      title: t("nav.marketing_research"),
      href: "/marketing",
      icon: <Search className="w-4 h-4" />,
      description: t("departments.marketing.description"),
    },
    {
      title: t("nav.expertise_accreditation"),
      href: "/accreditation",
      icon: <Building2 className="w-4 h-4" />,
      description: t("departments.accreditation.description"),
    },
    {
      title: t("nav.rating_monitoring"),
      href: "/ratings",
      icon: <BarChart3 className="w-4 h-4" />,
      description: t("departments.ratings.description"),
    },
    {
      title: t("nav.awards_honors"),
      href: "/awards",
      icon: <Award className="w-4 h-4" />,
      description: t("departments.awards.description"),
    },
    {
      title: t("nav.educational_programs"),
      href: "/education",
      icon: <GraduationCap className="w-4 h-4" />,
      description: t("departments.education.description"),
    },
    {
      title: t("nav.scientific_research"),
      href: "/research",
      icon: <FlaskConical className="w-4 h-4" />,
      description: t("departments.research.description"),
    },
    {
      title: t("nav.diagnostic_methods"),
      href: "/diagnostics",
      icon: <Stethoscope className="w-4 h-4" />,
      description: t("departments.diagnostics.description"),
    },
    {
      title: t("nav.research_publications"),
      href: "/publications",
      icon: <FileText className="w-4 h-4" />,
      description: t("departments.publications.description"),
    },
    {
      title: t("nav.expert_council"),
      href: "/council",
      icon: <Users className="w-4 h-4" />,
      description: t("departments.council.description"),
    },
  ];

  const toggleExpand = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  return (
    <>
      <button
        data-testid="sidebar-toggle"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-white border border-wiki-border rounded shadow-sm hover:shadow-md transition-shadow"
        aria-label="Open navigation menu"
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>
      
      {/* Global Language Switcher - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full border border-wiki-border shadow-sm hover:shadow-md transition-shadow">
        <LanguageSwitcher />
      </div>

      {isOpen && (
        <div
          data-testid="sidebar-overlay"
          className="fixed inset-0 z-50 sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside
        data-testid="sidebar"
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white border-r border-wiki-border shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-wiki-border bg-[#ffffff]">
          <div className="flex items-center gap-3">
            <img src={_1111111111__1_} alt="AACM" className="w-10 h-10 object-cover rounded-full" />
            <div className="flex flex-col gap-1">
              <h2 className="font-serif text-sm font-semibold text-black border-none pb-0 mb-0 leading-tight">
                {t("common.academy_name")}
              </h2>
              <div className="flex justify-start">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
          <button
            data-testid="sidebar-close"
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-muted rounded transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ScrollArea className="h-[calc(100%-80px)]">
          <nav className="p-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              data-testid="nav-home"
              className="flex items-center gap-3 px-3 py-2.5 rounded text-sm mb-1 transition-colors text-primary font-medium bg-[#e8ecef]"
            >
              <Building2 className="w-4 h-4" />
              {t("nav.main_page")}
            </Link>

            <div className="my-3 border-t border-wiki-border" />

            <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              {t("nav.departments")}
            </p>

            {navigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  data-testid={`nav-${item.href.slice(1)}`}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors ${
                    location === item.href
                      ? "bg-blue-50 text-primary font-medium"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  {item.icon}
                  <div className="flex-1 min-w-0">
                    <span className="block truncate">{item.title}</span>
                  </div>
                  {item.children && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleExpand(item.href);
                      }}
                      className="p-1 hover:bg-muted rounded"
                    >
                      {expandedItems.includes(item.href) ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <ChevronRight className="w-3 h-3" />
                      )}
                    </button>
                  )}
                </Link>
                {item.children && expandedItems.includes(item.href) && (
                  <div className="ml-7 pl-3 border-l border-wiki-border">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="my-3 border-t border-wiki-border" />
            
            <a 
              href="https://platform.aacmedinc.org/members/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mx-3 py-2.5 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors mb-2 shadow-sm"
            >
              {t("common.login_signup")}
            </a>

            <div className="my-4 border-t border-wiki-border" />

            <div className="px-3 py-2 text-xs text-muted-foreground">
              <p className="mb-2">
                {t("common.tagline")}
              </p>
              <p className="text-[11px]">{t("common.all_rights_reserved")}</p>
            </div>
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
}
