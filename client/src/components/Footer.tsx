import { Link } from "wouter";
import { Phone, Send, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-50 border-t border-wiki-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 md:pl-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-serif text-sm font-semibold text-black mb-4">
              {t("common.academy_name")}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{t("common.tagline")}</p>
            
            <div className="flex gap-4 mt-6">
              <a 
                href="tel:+17867899632" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                title="Phone: +1 (786) 789-9632"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/aacmedinc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                title="Telegram: @aacmedinc"
              >
                <Send className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/17867899632" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                title="WhatsApp: +1 (786) 789-9632"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t("nav.about")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.academy_info")}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("common.contact_us")}
                </Link>
              </li>
              <li>
                <Link href="/price" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.price")}
                </Link>
              </li>
              <li>
                <Link href="/associations" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.associations")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t("nav.legal")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">
                  {t("nav.privacy_policy")}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-cookies">
                  {t("nav.cookie_policy")}
                </Link>
              </li>
              <li>
                <Link href="/public-offer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-public-offer">
                  {t("nav.public_offer")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t("nav.registration_data")}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="font-normal">{t("common.jurisdiction")}</li>
              <li>
                <Link href="/registration" className="text-primary hover:underline">
                  {t("common.view_official_registration")}
                </Link>
              </li>
              <li className="pt-4">
                <a 
                  href="https://platform.aacmedinc.org/members/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap"
                >
                  {t("common.login_signup")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Awards Department
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/awards-admin" className="text-amber-600 hover:text-amber-700 font-medium transition-colors" data-testid="link-footer-awards">
                  🏆 Admin Access
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wiki-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{t("common.all_rights_reserved").replace("2026", new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}
