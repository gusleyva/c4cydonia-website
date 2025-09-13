import { useLocalStorage } from './useLocalStorage';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

// Define translations for common UI elements
const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', es: 'Inicio' },
  'nav.about': { en: 'About', es: 'Quienes Somos' },
  'nav.services': { en: 'Services', es: 'Servicios' },
  'nav.blog': { en: 'Blog', es: 'Blog' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },
  
  // Footer
  'footer.allRightsReserved': { en: 'All rights reserved', es: 'Todos los derechos reservados' },
  'footer.privacyPolicy': { en: 'Privacy Policy', es: 'Política de Privacidad' },
  'footer.termsOfService': { en: 'Terms of Service', es: 'Términos de Servicio' },
  
  // Common
  'common.readMore': { en: 'Read More', es: 'Leer Más' },
  'common.backToTop': { en: 'Back to Top', es: 'Volver Arriba' },
};

export function useLanguage() {
  const [language, setLanguage] = useLocalStorage<Language>('language', 'es');
  
  // Function to translate text based on current language
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key; // Return the key if no translation found
  };
  
  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };
  
  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };
} 