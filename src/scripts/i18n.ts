import { i18nDict, type Lang } from '../data/i18n';

export function initI18n() {
  const savedLang = (localStorage.getItem('wedding-lang') as Lang) || 'fr';
  setLanguage(savedLang);

  // Setup click listeners on any language toggle triggers
  document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-switch') as Lang;
      if (targetLang) {
        setLanguage(targetLang);
      }
    });
  });
}

export function setLanguage(lang: Lang) {
  localStorage.setItem('wedding-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Toggle active class on lang switcher buttons
  document.querySelectorAll('[data-lang-switch]').forEach((el) => {
    const target = el.getAttribute('data-lang-switch');
    if (target === lang) {
      el.classList.add('bg-gold', 'text-white', 'font-semibold');
      el.classList.remove('text-charcoal/70', 'hover:text-gold');
      el.setAttribute('aria-pressed', 'true');
    } else {
      el.classList.remove('bg-gold', 'text-white', 'font-semibold');
      el.classList.add('text-charcoal/70', 'hover:text-gold');
      el.setAttribute('aria-pressed', 'false');
    }
  });

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n') as keyof typeof i18nDict;
    if (key && i18nDict[key]) {
      const translation = i18nDict[key][lang];
      if (translation) {
        el.textContent = translation;
      }
    }
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder') as keyof typeof i18nDict;
    if (key && i18nDict[key]) {
      const translation = i18nDict[key][lang];
      if (translation && el instanceof HTMLInputElement) {
        el.placeholder = translation;
      }
    }
  });

  // Update WhatsApp link message
  const whatsappBtn = document.getElementById('whatsapp-rsvp-btn') as HTMLAnchorElement | null;
  const guestNameInput = document.getElementById('guest-name') as HTMLInputElement | null;
  if (whatsappBtn) {
    const phone = whatsappBtn.getAttribute('data-phone') || '21698123456';
    const name = guestNameInput?.value.trim() || '';
    let text = i18nDict['rsvp.waMsgDefault'][lang];
    if (name) {
      text = i18nDict['rsvp.waMsgCustom'][lang].replace('{name}', name);
    }
    whatsappBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  // Notify components
  window.dispatchEvent(new CustomEvent('wedding-lang-changed', { detail: { lang } }));
}

// Auto init on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initI18n);
  // Also run immediately if DOM is already ready
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initI18n();
  }
}
