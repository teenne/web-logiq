export type Locale = 'nb' | 'en';
export const defaultLocale: Locale = 'nb';
export const languages: Record<Locale, string> = { nb: 'Norsk', en: 'English' };

const translations: Record<Locale, Record<string, string>> = {
  nb: {
    // Navigation
    'nav.home': 'Hjem',
    'nav.howItWorks': 'Slik fungerer det',
    'nav.forStudents': 'For elever',
    'nav.forParents': 'For foreldre',
    'nav.forTeachers': 'For lærere',
    'nav.blog': 'Blogg',
    'nav.about': 'Om oss',
    'nav.contact': 'Kontakt',
    'nav.articles': 'Artikler',
    'nav.resources': 'Ressurser',
    'nav.mainNav': 'Hovednavigasjon',
    'nav.mobileNav': 'Mobilnavigasjon',
    'nav.openMenu': 'Åpne meny',
    'nav.goHome': 'Logicmath - Gå til forsiden',

    // CTA
    'cta.download': 'Last ned Logicmath',
    'cta.contact': 'Kontakt oss',
    'cta.learnMore': 'Les mer',
    'cta.getStarted': 'Kom i gang',
    'cta.tryFree': 'Prøv gratis',
    'cta.goHome': 'Gå til forsiden',

    // Footer
    'footer.tagline': 'Alle elever kan lykkes i matte når læring tilpasser seg dem, ikke omvendt.',
    'footer.product': 'Produkt',
    'footer.legal': 'Juridisk',
    'footer.privacy': 'Personvern',
    'footer.terms': 'Vilkår',
    'footer.copyright': '© {year} Halisonworks AS. Alle rettigheter reservert.',

    // Cookie banner
    'cookie.message': 'Vi bruker informasjonskapsler for å forbedre opplevelsen din. Ved å fortsette å bruke dette nettstedet samtykker du til vår bruk av informasjonskapsler i henhold til vår',
    'cookie.privacyLink': 'personvernserklæring',
    'cookie.accept': 'Godta',
    'cookie.decline': 'Avslå',

    // Newsletter
    'newsletter.heading': 'Hold deg oppdatert',
    'newsletter.description': 'Få de siste artiklene og oppdateringene.',
    'newsletter.placeholder': 'deg@eksempel.no',
    'newsletter.subscribe': 'Abonner',
    'newsletter.consent': 'Ved å abonnere godtar du vår',
    'newsletter.success': 'Takk for at du abonnerer!',
    'newsletter.error': 'Noe gikk galt. Prøv igjen.',
    'newsletter.networkError': 'Nettverksfeil. Prøv igjen.',

    // Contact form
    'contact.title': 'Send oss en melding',
    'contact.name': 'Navn',
    'contact.email': 'E-post',
    'contact.company': 'Bedrift',
    'contact.service': 'Tjeneste',
    'contact.serviceDefault': 'Velg en tjeneste...',
    'contact.message': 'Melding',
    'contact.submit': 'Send melding',
    'contact.sending': 'Sender...',
    'contact.consent': 'Jeg godtar',
    'contact.consentLink': 'personvernserklæringen',
    'contact.consentSuffix': 'og samtykker til at mine data behandles.',
    'contact.required': '*',
    'contact.errorName': 'Vennligst skriv inn navnet ditt.',
    'contact.errorEmail': 'Vennligst skriv inn en gyldig e-postadresse.',
    'contact.errorMessage': 'Vennligst skriv inn en melding.',
    'contact.errorConsent': 'Du må godta personvernserklæringen.',
    'contact.networkError': 'Nettverksfeil.',
    'contact.retry': 'Prøv igjen',
    'contact.networkErrorFinal': 'Nettverksfeil etter flere forsøk. Sjekk tilkoblingen din og prøv igjen senere.',
    'contact.genericError': 'Noe gikk galt. Prøv igjen.',

    // Contact page
    'contactPage.title': 'Kontakt oss | Logicmath',
    'contactPage.heading': 'Kontakt oss',
    'contactPage.intro': 'Har du spørsmål om Logicmath? Send oss en melding, så svarer vi så raskt vi kan.',
    'contactPage.infoTitle': 'Ta kontakt',
    'contactPage.infoIntro': 'Foretrekker du å ta kontakt direkte? Slik finner du oss.',
    'contactPage.address': 'Adresse',
    'contactPage.phone': 'Telefon',
    'contactPage.email': 'E-post',
    'contactPage.hours': 'Åpningstider',

    // Thank you page
    'thankYou.title': 'Takk! | Logicmath',
    'thankYou.heading': 'Takk!',
    'thankYou.message': 'Vi har mottatt meldingen din og svarer så snart vi kan. Vi svarer vanligvis innen en virkedag.',
    'thankYou.back': 'Tilbake til forsiden',

    // Error pages
    '404.title': 'Siden finnes ikke | Logicmath',
    '404.heading': 'Siden finnes ikke',
    '404.message': 'Beklager, siden du leter etter finnes ikke eller har blitt flyttet.',
    '500.title': 'Serverfeil | Logicmath',
    '500.heading': 'Serverfeil',
    '500.message': 'Noe gikk galt hos oss. Prøv igjen senere, eller kontakt oss hvis problemet vedvarer.',

    // Blog
    'blog.title': 'Blogg | Logicmath',
    'blog.heading': 'Blogg',
    'blog.description': 'Artikler, ressurser og tips om mattelæring for norske elever.',
    'blog.noResults': 'Ingen innlegg funnet for dette filteret.',
    'blog.rssTitle': 'Logicmath Blogg',
    'blog.rssDescription': 'Artikler og ressurser om mattelæring fra Logicmath.',
    'blog.publisher': 'Halisonworks',

    // Articles
    'articles.title': 'Artikler | Logicmath',
    'articles.heading': 'Artikler',
    'articles.description': 'Forskning, innsikt og guider om mattelæring.',
    'articles.featured': 'Fremhevet',
    'articles.all': 'Alle',
    'articles.caseStudies': 'Undersøkelser',
    'articles.whitepapers': 'Rapporter',
    'articles.guides': 'Guider',
    'articles.noResults': 'Ingen artikler funnet for dette filteret.',

    // Shared UI
    'ui.previous': 'Forrige',
    'ui.next': 'Neste',
    'ui.previousPage': 'Forrige side',
    'ui.nextPage': 'Neste side',
    'ui.page': 'Side {n}',
    'ui.home': 'Hjem',
    'ui.onThisPage': 'På denne siden',
    'ui.backToTop': 'Tilbake til toppen',
    'ui.toggleDarkMode': 'Bytt mørk/lys modus',
    'ui.postNav': 'Innleggsnavigasjon',
    'ui.pagination': 'Sidenavigasjon',
    'ui.breadcrumb': 'Brødsti',
    'ui.skipToContent': 'Hopp til hovedinnhold',
    'ui.copyLink': 'Kopier lenke',
    'ui.copied': 'Kopiert!',
    'ui.readingTime': '{min} min lesetid',

    // Share
    'share.twitter': 'Del på X',
    'share.linkedin': 'Del på LinkedIn',
    'share.facebook': 'Del på Facebook',
    'share.copy': 'Kopier lenke',
    'share.copied': 'Kopiert!',

    // Date
    'date.locale': 'nb-NO',

    // Components with defaults
    'testimonials.title': 'Hva andre sier',
    'team.title': 'Møt teamet',
    'pricing.popular': 'Mest populær',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.howItWorks': 'How it works',
    'nav.forStudents': 'For students',
    'nav.forParents': 'For parents',
    'nav.forTeachers': 'For teachers',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.articles': 'Articles',
    'nav.resources': 'Resources',
    'nav.mainNav': 'Main navigation',
    'nav.mobileNav': 'Mobile navigation',
    'nav.openMenu': 'Open menu',
    'nav.goHome': 'Logicmath - Go to home page',

    // CTA
    'cta.download': 'Download Logicmath',
    'cta.contact': 'Contact Us',
    'cta.learnMore': 'Learn More',
    'cta.getStarted': 'Get Started',
    'cta.tryFree': 'Try for free',
    'cta.goHome': 'Go Home',

    // Footer
    'footer.tagline': 'Every student can succeed in math when learning adapts to them, not the other way around.',
    'footer.product': 'Product',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.copyright': '© {year} Halisonworks AS. All rights reserved.',

    // Cookie banner
    'cookie.message': 'We use cookies to improve your experience. By continuing to use this site you consent to our use of cookies in accordance with our',
    'cookie.privacyLink': 'privacy policy',
    'cookie.accept': 'Accept',
    'cookie.decline': 'Decline',

    // Newsletter
    'newsletter.heading': 'Stay in the loop',
    'newsletter.description': 'Get the latest articles and updates.',
    'newsletter.placeholder': 'you@example.com',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.consent': 'By subscribing, you agree to our',
    'newsletter.success': 'Thanks for subscribing!',
    'newsletter.error': 'Something went wrong. Please try again.',
    'newsletter.networkError': 'Network error. Please try again.',

    // Contact form
    'contact.title': 'Send Us a Message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.service': 'Service Interest',
    'contact.serviceDefault': 'Select a service...',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.consent': 'I agree to the',
    'contact.consentLink': 'privacy policy',
    'contact.consentSuffix': 'and consent to having my data processed.',
    'contact.required': '*',
    'contact.errorName': 'Please enter your name.',
    'contact.errorEmail': 'Please enter a valid email address.',
    'contact.errorMessage': 'Please enter a message.',
    'contact.errorConsent': 'You must agree to the privacy policy.',
    'contact.networkError': 'Network error.',
    'contact.retry': 'Retry',
    'contact.networkErrorFinal': 'Network error after multiple attempts. Please check your connection and try again later.',
    'contact.genericError': 'Something went wrong. Please try again.',

    // Contact page
    'contactPage.title': 'Contact Us | Logicmath',
    'contactPage.heading': 'Contact Us',
    'contactPage.intro': 'Have a question about Logicmath? Send us a message and we\'ll respond as soon as possible.',
    'contactPage.infoTitle': 'Get in Touch',
    'contactPage.infoIntro': 'Prefer to reach out directly? Here\'s how you can find us.',
    'contactPage.address': 'Address',
    'contactPage.phone': 'Phone',
    'contactPage.email': 'Email',
    'contactPage.hours': 'Business Hours',

    // Thank you page
    'thankYou.title': 'Thank You | Logicmath',
    'thankYou.heading': 'Thank you!',
    'thankYou.message': 'We\'ve received your message and will be in touch soon. We typically respond within one business day.',
    'thankYou.back': 'Back to Home',

    // Error pages
    '404.title': 'Page Not Found | Logicmath',
    '404.heading': 'Page not found',
    '404.message': 'Sorry, the page you\'re looking for doesn\'t exist or has been moved.',
    '500.title': 'Server Error | Logicmath',
    '500.heading': 'Server Error',
    '500.message': 'Something went wrong on our end. Please try again later or contact us if the problem persists.',

    // Blog
    'blog.title': 'Blog | Logicmath',
    'blog.heading': 'Blog',
    'blog.description': 'Articles, resources and tips about math learning.',
    'blog.noResults': 'No posts found for this tag.',
    'blog.rssTitle': 'Logicmath Blog',
    'blog.rssDescription': 'Articles and resources about math learning from Logicmath.',
    'blog.publisher': 'Halisonworks',

    // Articles
    'articles.title': 'Articles | Logicmath',
    'articles.heading': 'Articles',
    'articles.description': 'Research, insights and guides about math learning.',
    'articles.featured': 'Featured',
    'articles.all': 'All',
    'articles.caseStudies': 'Case Studies',
    'articles.whitepapers': 'Whitepapers',
    'articles.guides': 'Guides',
    'articles.noResults': 'No articles found for this filter.',

    // Shared UI
    'ui.previous': 'Previous',
    'ui.next': 'Next',
    'ui.previousPage': 'Previous page',
    'ui.nextPage': 'Next page',
    'ui.page': 'Page {n}',
    'ui.home': 'Home',
    'ui.onThisPage': 'On this page',
    'ui.backToTop': 'Back to top',
    'ui.toggleDarkMode': 'Toggle dark mode',
    'ui.postNav': 'Post navigation',
    'ui.pagination': 'Pagination',
    'ui.breadcrumb': 'Breadcrumb',
    'ui.skipToContent': 'Skip to main content',
    'ui.copyLink': 'Copy link',
    'ui.copied': 'Copied!',
    'ui.readingTime': '{min} min read',

    // Share
    'share.twitter': 'Share on X',
    'share.linkedin': 'Share on LinkedIn',
    'share.facebook': 'Share on Facebook',
    'share.copy': 'Copy link',
    'share.copied': 'Copied!',

    // Date
    'date.locale': 'en-US',

    // Components with defaults
    'testimonials.title': 'What Our Clients Say',
    'team.title': 'Meet Our Team',
    'pricing.popular': 'Most popular',
  },
};

export type TranslationKey = keyof (typeof translations)['nb'];

export function t(locale: Locale, key: string, vars?: Record<string, string>): string {
  let text = translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, v);
    }
  }
  return text;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (segment === 'en') return 'en';
  return 'nb';
}

export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'nb' ? 'en' : 'nb';
}
