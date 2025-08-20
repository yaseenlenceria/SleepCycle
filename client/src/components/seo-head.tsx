import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = '/logo.jpg' 
}: SEOHeadProps) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language || 'en';
    
    // Set document title
    const pageTitle = title || t('seo.defaultTitle');
    document.title = pageTitle;
    
    // Set or update meta tags
    const setMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Basic meta tags
    setMeta('description', description || t('seo.defaultDescription'));
    setMeta('keywords', keywords || t('seo.keywords'));
    setMeta('language', currentLang);
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Open Graph tags
    setMeta('og:title', pageTitle);
    setMeta('og:description', description || t('seo.defaultDescription'));
    setMeta('og:type', 'website');
    setMeta('og:site_name', 'SleepCycle.io');
    setMeta('og:locale', getOGLocale(currentLang));
    setMeta('og:image', `${window.location.origin}${ogImage}`);
    setMeta('og:url', canonical || window.location.href);
    
    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', pageTitle);
    setMeta('twitter:description', description || t('seo.defaultDescription'));
    setMeta('twitter:image', `${window.location.origin}${ogImage}`);
    
    // Set document language and direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Add hreflang tags
    addHreflangTags();
    
    // Set canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical || window.location.href.split('?')[0];
    
  }, [title, description, keywords, canonical, ogImage, i18n.language, t]);

  const getOGLocale = (lang: string) => {
    const localeMap: { [key: string]: string } = {
      'en': 'en_US',
      'es': 'es_ES',
      'fr': 'fr_FR',
      'de': 'de_DE',
      'zh': 'zh_CN',
      'ja': 'ja_JP',
      'pt': 'pt_BR',
      'it': 'it_IT',
      'ru': 'ru_RU',
      'ar': 'ar_SA'
    };
    return localeMap[lang] || 'en_US';
  };

  const addHreflangTags = () => {
    // Remove existing hreflang tags
    const existingTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingTags.forEach(tag => tag.remove());

    const languages = ['en', 'es', 'fr', 'de', 'zh', 'ja', 'pt', 'it', 'ru', 'ar'];
    const currentPath = window.location.pathname;
    const baseUrl = window.location.origin;

    // Add hreflang for each language
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${baseUrl}${currentPath}?lang=${lang}`;
      document.head.appendChild(link);
    });

    // Add x-default hreflang
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${baseUrl}${currentPath}`;
    document.head.appendChild(defaultLink);
  };

  return null; // This component only manages head tags
}