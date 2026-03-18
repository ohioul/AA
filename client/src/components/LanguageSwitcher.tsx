import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useLocation } from "wouter";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [location] = useLocation();

  const toggleLanguage = (lang: string) => {
    // We are inside a nested router with a base (e.g. /en)
    // location is relative to that base (e.g. /about)
    // We want to switch the entire hash path to /new-lang/about
    const path = location === '/' ? '' : location;
    // Update hash directly to trigger top-level router change
    window.location.hash = `/${lang}${path}`;
  };

  const languages = [
    { code: "en", flag: "🇺🇸", label: "English" },
    { code: "de", flag: "🇩🇪", label: "Deutsch" },
    { code: "ru", flag: "🇷🇺", label: "Русский" },
    { code: "fr", flag: "🇫🇷", label: "Français", dummy: true },
    { code: "es", flag: "🇪🇸", label: "Español", dummy: true },
    { code: "it", flag: "🇮🇹", label: "Italiano", dummy: true },
    { code: "cn", flag: "🇨🇳", label: "中文", dummy: true },
    { code: "jp", flag: "🇯🇵", label: "日本語", dummy: true },
  ];

  const currentLang = languages.find(l => i18n.language === l.code || (l.code === 'en' && i18n.language.startsWith('en'))) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 px-2 rounded-full hover:bg-muted">
          <span className="text-xl leading-none">{currentLang.flag}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => !lang.dummy && toggleLanguage(lang.code)}
            className={`gap-2 ${lang.dummy ? "cursor-default" : "cursor-pointer"}`}
          >
            <span className="text-xl leading-none">{lang.flag}</span>
            <span className="text-sm font-medium">{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
