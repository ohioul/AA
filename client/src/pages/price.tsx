import { Link } from "wouter";
import {
  ArrowLeft,
  CheckCircle,
  ShoppingCart,
  Users,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useSEO } from "@/hooks/useSEO";

export default function Price() {
  const { t } = useTranslation();
  useSEO({
    title: t("price.title"),
    description:
      "AACM educational programs pricing and membership fees. Bacalavr, Magister,  certification levels available.",
    keywords:
      "AACM pricing, complementary medicine certification cost, AACM membership, education programs price",
  });

  const products = [
    {
      title: t("price.products.professional.title"),
      description: t("price.products.professional.desc"),
      price: "$2000",
      link: "https://interpay.iain.su/store#order",
    },
    {
      title: t("price.products.special.title"),
      description: t("price.products.special.desc"),
      price: "$7000",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-6 pl-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("common.back_home")}
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif text-foreground">
            {t("price.title")}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mt-2">
            {t("price.subtitle")}
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 pl-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col h-full border border-wiki-border rounded-lg bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-auto pt-6 border-t border-wiki-border">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through decoration-destructive/50">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>

                  <div className="w-full block">
                    <Button className="w-full gap-2 font-semibold" disabled>
                      <ShoppingCart className="w-4 h-4" />
                      {t("price.buy_now")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Membership Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
            {t("price.membership.title")}
          </h2>

          <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">
              {t("price.membership.who_can_join")}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("price.membership.who_can_join_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* One-time Joining Fee */}
            <div className="relative border-2 border-primary rounded-xl bg-gradient-to-br from-blue-50 to-white overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                {t("price.membership.one_time")}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    {t("price.membership.joining_fee")}
                  </h3>
                </div>

                <div className="text-4xl font-bold text-primary mb-6">
                  $2,000
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {t("price.membership.joining_fee_desc")}
                </p>

                <a
                  href="https://platform.aacmedinc.org/membership-application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  {t("price.membership.apply_now")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Annual Membership Fee */}
            <div className="relative border-2 border-green-500 rounded-xl bg-gradient-to-br from-green-50 to-white overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                {t("price.membership.annual")}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    {t("price.membership.annual_fee")}
                  </h3>
                </div>

                <div className="text-4xl font-bold text-green-600 mb-6">
                  $500
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {t("price.membership.annual_fee_desc")}
                </p>

                <a
                  href="https://platform.aacmedinc.org/membership-renewal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  {t("price.membership.renew_now")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-slate-50 border border-wiki-border rounded-lg text-sm text-muted-foreground">
          <h4 className="font-semibold text-foreground mb-2">
            {t("price.note_title")}
          </h4>
          <p>{t("price.note_desc")}</p>
        </div>
      </main>
    </div>
  );
}
