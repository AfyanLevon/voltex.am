import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <footer className="border-t border-white/5">
      <div className="container-xl py-10 text-sm text-white/70">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Social Links Column */}
          <div>
            <div className="font-semibold text-white">{t.footerSocialTitle}</div>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="https://www.facebook.com/Voltexllc"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-voltex"
                >
                  {t.footerFacebook}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/voltex.am"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-voltex"
                >
                  {t.footerInstagram}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/voltex-llc"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-voltex"
                >
                  {t.footerLinkedIn}
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@VoltexLLC"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-voltex"
                >
                  {t.footerYouTube}
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Column */}
          <div>
            <div className="font-semibold text-white">{t.footerContactTitle}</div>
            <ul className="mt-2 space-y-1">
              <li>
                <a href={`mailto:${t.contactEmail}`} className="hover:text-voltex">
                  {t.contactEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${t.contactPhone.replace(/\s/g, '')}`} className="hover:text-voltex">
                  {t.contactPhone}
                </a>
              </li>
              <li>{t.footerAddress}</li>
            </ul>
          </div>
          {/* Company Column */}
          <div>
            <div className="font-semibold text-white">{t.footerCompanyTitle}</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#services" className="hover:text-voltex">Services</a></li>
              <li><a href="#why" className="hover:text-voltex">Why Voltex</a></li>
              <li><a href="#contact" className="hover:text-voltex">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Voltex LLC. All rights reserved.</span>
          <a href="https://voltex.am" className="hover:text-voltex">voltex.am →</a>
        </div>
      </div>
    </footer>
  );
}
