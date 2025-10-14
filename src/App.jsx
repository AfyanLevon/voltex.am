import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Badge from "./components/Badge.jsx";
import Section from "./components/Section.jsx";
import ServiceIcons from "./components/ServiceIcons.jsx";

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid gap-6 md:gap-8 items-end grid-cols-1 md:grid-cols-[1fr_minmax(0,640px)_1fr]">

          {/* LEFT image — smaller + shift left */}
          <div className="hidden md:flex md:col-start-1 md:col-end-2 justify-self-end self-end">
            <div className="w-[260px] sm:w-[300px] lg:w-[360px] aspect-square relative overflow-visible">
              <img
                src="$119"
                alt="Engineer with blueprint"
                width={360} height={360} decoding="async" loading="eager" draggable={false}
                className=" absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain origin-bottom md:scale-\[1\.45] lg:scale-\[1\.55] xl:scale-\[1\.60] md:translate-x-\[4px] lg:translate-x-\[8px] xl:translate-x-\[12px] \$1140px] \$1156px] \$1172px] select-none pointer-events-none  overflow-visible transform-gpu will-change-transform"
              />
            </div>
          </div>

          {/* CENTER */}
          <div className="md:col-span-3 md:order-first text-center md:px-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent animate-pulse">
                {t.hero_title_quality}
              </span>
            </h1>
            <p className="mt-6 max-w-[52ch] mx-auto text-base sm:text-lg lg:text-xl text-white/80">
              {t.stripText}
            </p>
          </div>

          {/* RIGHT image — reference */}
          <div className="hidden md:flex md:col-start-3 md:col-end-4 justify-self-start self-end">
            <div className="w-[260px] sm:w-[300px] lg:w-[360px] aspect-square relative overflow-hidden">
              <img
                src="/img/man-key.png?v=18"
                alt="Owner with keys"
                width={360} height={360} decoding="async" loading="eager" draggable={false}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain select-none pointer-events-none"
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
    <Section id="services" title={t.servicesTitle} kicker={t.servicesSubtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((x, i) => (
          <div key={i} className="card">
            <div className="flex justify-center"><ServiceIcons serviceType={x.icon} className="w-32 h-32" /></div>
            <h3 className="mt-3 font-semibold">{x.title}</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">{x.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Why() {
  const { language } = useLanguage(); const t = translations[language];
  return (
    <Section id="why" title={t.whyVoltexTitle} kicker={t.whyVoltexSubtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card"><h3 className="font-semibold">{t.expertise}</h3><p className="mt-2 text-white/70">{t.expertiseDesc}</p></div>
        <div className="card"><h3 className="font-semibold">{t.quality}</h3><p className="mt-2 text-white/70">{t.qualityDesc}</p></div>
        <div className="card"><h3 className="font-semibold">{t.support}</h3><p className="mt-2 text-white/70">{t.supportDesc}</p></div>
      </div>
    </Section>
  );
}

function Contact() {
  const { language } = useLanguage(); const t = translations[language];
  return (
    <Section id="contact" title={t.contactTitle} kicker={t.contactSubtitle}>
      <div className="card">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-white/80">{t.contactDescription}</p>
            <div className="mt-6 flex gap-3">
              <a href="mailto:info@voltex.am" className="btn-primary">Email us</a>
              <a href="tel:+37495933939" className="btn-outline">Call now</a>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-gray-800/60 p-4">
            <iframe title="Voltex location" className="h-72 w-full rounded-lg border border-white/10" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=44.0,40.1,45.2,41.0&layer=mapnik"></iframe>
            <p className="mt-2 text-xs text-white/50">Approximate location for demo.</p>
          </div>
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







