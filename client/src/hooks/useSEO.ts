import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SITE_URL = "https://aacmedinc.org";

function setMetaTag(name: string, content: string, attr: string = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({ title, description, keywords }: SEOProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const base = "AACM — American Academy of Complementary Medicine";
    document.title = title ? `${title} | ${base}` : base;
    document.documentElement.lang = i18n.language || "en";
  }, [title, i18n.language]);

  useEffect(() => {
    if (description) {
      setMetaTag("description", description);
      setMetaTag("og:description", description, "property");
      setMetaTag("twitter:description", description, "name");
    }
  }, [description]);

  useEffect(() => {
    if (keywords) {
      setMetaTag("keywords", keywords);
    }
  }, [keywords]);

  useEffect(() => {
    if (title) {
      setMetaTag("og:title", title + " | AACM", "property");
      setMetaTag("twitter:title", title + " | AACM", "name");
    }
  }, [title]);

  useEffect(() => {
    const hash = window.location.hash || "#/en";
    const currentUrl = `${SITE_URL}/${hash}`;
    setMetaTag("og:url", currentUrl, "property");
    setLinkTag("canonical", currentUrl);

    const lang = i18n.language || "en";
    const langs = ["en", "de", "ru"];
    const path = hash.replace(/^#\/[a-z]{2}/, "");

    langs.forEach((lng) => {
      const href = `${SITE_URL}/#/${lng}${path}`;
      const selector = `link[rel="alternate"][hreflang="${lng}"]`;
      let el = document.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", lng);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    });
  }, [i18n.language, title]);
}
