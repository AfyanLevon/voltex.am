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
    <div className="relative overflow-hidden border-b border-white/5">
      {/* soft green glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 300px at 20% -10%, rgba(107,209,109,0.18), transparent 60%), radial-gradient(800px 400px at 80% -20%, rgba(107,209,109,0.10), transparent 60%)",
        }}
      />
      {/* watermark logo, controlled size */}
      <img
        src="/fulllogo_transparent.png"
        alt=""
        aria-hidden="true"
        className="hero-mark"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big animated title (keep existing animation classes if you have them) */}
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
            {t.hero_title_quality}
          </h1>

          {/* wide 3-col strip only (no paragraph, no buttons) */}
          <section className="py-10 md:py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                {/* Left Image */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src="/img/man-blueprint.png"
                    alt="Engineer with blueprint"
                    loading="lazy"
                    className="h-auto w-full max-w-[420px] md:max-w-[520px] object-contain"
                  />
                </div>

                {/* Middle Text */}
                <div className="text-center md:text-left space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold leading-snug">
                    {t.stripText}
                  </h2>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                  <img
                    src="/img/man-key.png"
                    alt="Handover keys"
                    loading="lazy"
                    className="h-auto w-full max-w-[420px] md:max-w-[520px] object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
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
