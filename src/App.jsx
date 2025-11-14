import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Badge from "./components/Badge.jsx";
import Section from "./components/Section.jsx";
import ServiceIcons from "./components/ServiceIcons.jsx";
import LicenseModal from "./components/LicenseModal.jsx";
import ContactMap from "./components/ContactMap.jsx";

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Title at the top */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-[2.7rem] sm:text-[3.6rem] lg:text-[4.5rem] font-bold leading-tight tracking-tight">
            <span 
              className="bg-clip-text text-transparent animate-pulse"
              style={{
                backgroundImage: 'linear-gradient(to right, #429321, #6DB433, #A9E74C)'
              }}
            >
              {t.hero_title_quality}
            </span>
          </h1>
        </div>

        {/* Images grid with lightning bolt in center */}
        <div className="grid gap-6 md:gap-8 items-end grid-cols-1 md:grid-cols-[1fr_minmax(0,640px)_1fr]">

          {/* LEFT image — upscaled to match right figure height */}
          <div className="hidden md:flex md:col-start-1 md:col-end-2 justify-self-start self-end">
            <div className="w-[260px] sm:w-[300px] lg:w-[360px] aspect-square relative overflow-hidden">
              <img
                src="/img/man-blueprint.png?v=103"
                alt="Engineer with blueprint"
                width={360}
                height={360}
                decoding="async"
                loading="eager"
                draggable={false}
                className="absolute bottom-0 left-1/2 translate-x-[calc(-50%+25px)] translate-y-[35px] h-full w-auto object-contain select-none pointer-events-none scale-[1.45]"
              />
            </div>
          </div>

          {/* CENTER — Half-key image */}
          <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 relative flex items-center justify-center min-h-[150px] md:min-h-[230px]">
            <img
              src="/Half-key.png"
              alt=""
              className="w-full max-w-[90vw] md:max-w-[276px] lg:max-w-[322px] h-auto opacity-70 select-none pointer-events-none object-contain"
              style={{ display: 'block' }}
            />
          </div>

          {/* RIGHT image — mirrored to face inward; same sizing as LEFT */}
          <div className="hidden md:flex md:col-start-3 md:col-end-4 justify-self-start self-end">
            <div className="w-[260px] sm:w-[300px] lg:w-[360px] aspect-square relative overflow-hidden">
              <img
                src="/img/man-key.png?v=18"
                alt="Owner with keys"
                width={360} height={360} decoding="async" loading="eager" draggable={false}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain select-none pointer-events-none scale-x-[-1]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Services() {
  const { language } = useLanguage(); const t = translations[language];
  const items = [
    { title: t.bess, desc: t.bessDesc, icon: 'bess' },
    { title: t.smartHome, desc: t.smartHomeDesc, icon: 'smartHome' },
    { title: t.securitySystems, desc: t.securitySystemsDesc, icon: 'securitySystems' },
    { title: t.energySolutions, desc: t.energySolutionsDesc, icon: 'energySolutions' },
  ];
  return (
    <Section id="services" title={t.servicesTitle} kicker={t.servicesSubtitle} titleColor="#6DB433">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((x, i) => (
          <div key={i} className="card">
            <div className="flex justify-center"><ServiceIcons serviceType={x.icon} className="w-32 h-32" /></div>
            <h3 
              className="mt-3 font-semibold"
              style={x.icon === 'energySolutions' ? { color: '#E6990C' } : {}}
            >
              {x.title}
            </h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">{x.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Why() {
  const { language } = useLanguage(); const t = translations[language];
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  
  const licenseImageSrc = "/license/voltex-license.png";
  const licenseThumbnailSrc = "/license/voltex-license-thumb.jpg";

  const handleLicenseClick = () => {
    setIsLicenseModalOpen(true);
  };

  const handleLicenseKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLicenseClick();
    }
  };

  return (
    <>
      <Section id="why" title={t.whyVoltexTitle} kicker={t.whyVoltexSubtitle} titleColor="#6DB433">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <h3 className="font-semibold">{t.expertise}</h3>
            <p className="mt-2 text-white/70">{t.expertiseDesc}</p>
            
            {/* License Preview */}
            <div className="mt-4">
              <button
                onClick={handleLicenseClick}
                onKeyDown={handleLicenseKeyDown}
                tabIndex={0}
                role="button"
                aria-label={t.licenseOpenLabel}
                className="w-full rounded-lg border border-white/10 bg-gray-800/40 hover:bg-gray-800/60 hover:border-white/20 hover:ring-2 hover:ring-white/10 hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 overflow-hidden cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={licenseThumbnailSrc || licenseImageSrc}
                    alt={t.licenseAlt}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
                {/* Screen reader only text */}
                <span className="sr-only">{t.licenseCaption}</span>
              </button>
            </div>
          </div>
          <div className="card"><h3 className="font-semibold">{t.quality}</h3><p className="mt-2 text-white/70">{t.qualityDesc}</p></div>
          <div className="card"><h3 className="font-semibold">{t.support}</h3><p className="mt-2 text-white/70">{t.supportDesc}</p></div>
        </div>
      </Section>
      
      <LicenseModal
        isOpen={isLicenseModalOpen}
        onClose={() => setIsLicenseModalOpen(false)}
        imageSrc={licenseImageSrc}
        thumbnailSrc={licenseThumbnailSrc}
      />
    </>
  );
}

function Contact() {
  const { language } = useLanguage(); const t = translations[language];
  
  const emailHref = `mailto:${t.contactEmail}?subject=Project%20inquiry%20from%20website&body=Hello%20Voltex%2C%20please%20contact%20me%20about%20a%20project.`;
  const phoneHref = `tel:${t.contactPhone.replace(/\s/g, '')}`;
  const whatsappHref = `https://wa.me/37443443040?text=%D5%82%D5%A1%D6%80%D6%87%2C%20%D6%81%D5%A1%D5%B6%D5%AF%D5%A1%D6%81%D5%B8%D6%82%D5%B4%20%D5%A5%D5%B4%20%D5%AD%D5%B8%D6%80%D5%90%D6%80%D5%A4%D5%A1%D5%BF%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%A6%20%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%AB%20%D5%B4%D5%A1%D5%BD%D5%AB%D5%B6%E2%80%A4`;
  const telegramHref = "tg://resolve?phone=37443443040";
  const viberHref = "viber://chat?number=%2B37443443040";
  
  return (
    <Section id="contact" title={t.contactTitle} kicker={t.contactSubtitle || undefined} titleColor="#6DB433">
      <div className="card">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-white/80">{t.contactDescription}</p>
            {/* First row: Email and Call */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={emailHref}
                className="btn-primary flex-1 text-center"
                style={{ backgroundColor: '#6DB433' }}
                aria-label={t.contactEmailLabel}
              >
                {t.contactEmailLabel}
              </a>
              <a
                href={phoneHref}
                className="btn-outline flex-1 text-center"
                aria-label={t.contactCallLabel}
              >
                {t.contactCallLabel}
              </a>
            </div>
            {/* Second row: WhatsApp, Telegram, Viber */}
            <div className="mt-3 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 rounded-lg font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                style={{ backgroundColor: '#075E54' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#064e47'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#075E54'}
                aria-label={t.contactWhatsAppLabel}
              >
                {t.contactWhatsAppLabel}
              </a>
              <a
                href={telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 rounded-lg font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                style={{ backgroundColor: '#0088CC' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0077b5'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0088CC'}
                aria-label={t.contactTelegramLabel}
              >
                {t.contactTelegramLabel}
              </a>
              <a
                href={viberHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 rounded-lg font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                style={{ backgroundColor: '#7360f2' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#6250d9'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#7360f2'}
                aria-label={t.contactViberLabel}
              >
                {t.contactViberLabel}
              </a>
            </div>
          </div>
          <ContactMap />
        </div>
      </div>
    </Section>
  );
}

function AppContent() {
  return (<div><Header /><Hero /><Services /><Why /><Contact /><Footer /></div>);
}

export default function App() {
  return (<LanguageProvider><AppContent /></LanguageProvider>);
}









