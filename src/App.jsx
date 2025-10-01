import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Badge from "./components/Badge.jsx";
import Section from "./components/Section.jsx";
import ServiceIcons from "./components/ServiceIcons.jsx";

function SideImage({ src, alt }) {
  return (
    <div
      className="
        relative grid place-items-center select-none pointer-events-none
        w-[220px] h-[220px]
        sm:w-[260px] sm:h-[260px]
        md:w-[320px] md:h-[320px]
        xl:w-[380px] xl:h-[380px]
      "
    >
      <img
        src={src}
        alt={alt}
        width={380}
        height={380}
        decoding="async"
        loading="eager"
        draggable={false}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div
          className="
            grid items-center gap-8 md:gap-10 xl:gap-16
            grid-cols-1 md:grid-cols-[1fr_auto_1fr]
          "
        >
          {/* Left image â€” identical container */}
          <div
            className="
              order-1 md:order-none md:justify-self-end
              md:translate-y-[32px] lg:translate-y-[44px] xl:translate-y-[52px]
            "
          >
            <div className="md:mt-4 lg:mt-6 xl:mt-7">{/* Mobile only (unchanged) */}
<div className="block md:hidden">
  <SideImage src="/img/man-blueprint.png" alt="Engineer with blueprint" />
</div>

{/* Tablet/Desktop only with safe offset */}
<div className="hidden md:block md:mt-5 lg:mt-7 xl:mt-8">
  <SideImage src="/img/man-blueprint.png" alt="Engineer with blueprint" />
</div></div>
          </div>

          {/* Center content */}
          <div className="order-2 text-center md:px-6">
            <h1
              className="
                text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight
              "
            >
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                {t.hero_title_quality}
              </span>
            </h1>
            <p className="mt-6 max-w-[52ch] mx-auto text-base sm:text-lg lg:text-xl text-white/80">
              {t.stripText}
            </p>
          </div>

          {/* Right image â€” identical container */}
          <div className="order-3 md:order-none md:justify-self-start">
            <SideImage src="/img/man-key.png" alt="Owner with keys" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const items = [
    {
      title: t.bess,
      desc: t.bessDesc,
      icon: 'bess',
    },
    {
      title: t.smartHome,
      desc: t.smartHomeDesc,
      icon: 'smartHome',
    },
    {
      title: t.securitySystems,
      desc: t.securitySystemsDesc,
      icon: 'securitySystems',
    },
    {
      title: t.energySolutions,
      desc: t.energySolutionsDesc,
      icon: 'energySolutions',
    },
  ];

  return (
    <Section id="services" title={t.servicesTitle} kicker={t.servicesSubtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((x, i) => (
          <div key={i} className="card">
            <div className="flex justify-center">
              <ServiceIcons serviceType={x.icon} className="w-32 h-32" />
            </div>
            <h3 className="mt-3 font-semibold">{x.title}</h3>
            <p className="mt-2 text-white/70 text-sm leading-relaxed">
              {x.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Why() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const bullets = [
    t.expertiseDesc,
    t.qualityDesc,
    t.supportDesc,
  ];
  return (
    <Section id="why" title={t.whyVoltexTitle} kicker={t.whyVoltexSubtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <h3 className="font-semibold">{t.expertise}</h3>
          <p className="mt-2 text-white/70">
            {t.expertiseDesc}
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold">{t.quality}</h3>
          <p className="mt-2 text-white/70">
            {t.qualityDesc}
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold">{t.support}</h3>
          <p className="mt-2 text-white/70">
            {t.supportDesc}
          </p>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <Section id="contact" title={t.contactTitle} kicker={t.contactSubtitle}>
      <div className="card">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-white/80">
              {t.contactDescription}
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <div>
                <span className="text-white/60">Email:</span>{" "}
                <a className="hover:text-green-500" href="mailto:info@voltex.am">
                  {t.contactEmail}
                </a>
              </div>
              <div>
                <span className="text-white/60">Phone:</span>{" "}
                <a className="hover:text-green-500" href="tel:+37495933939">
                  {t.contactPhone}
                </a>
              </div>
              <div>
                <span className="text-white/60">Address:</span> 44/2 Acharyan
                str, Yerevan, Armenia
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="mailto:info@voltex.am" className="btn-primary">
                Email us
              </a>
              <a href="tel:+37495933939" className="btn-outline">
                Call now
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-gray-800/60 p-4">
            <iframe
              title="Voltex location"
              className="h-72 w-full rounded-lg border border-white/10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=44.0,40.1,45.2,41.0&layer=mapnik"
            ></iframe>
            <p className="mt-2 text-xs text-white/50">
              Approximate location for demo.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function AppContent() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Why />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}



