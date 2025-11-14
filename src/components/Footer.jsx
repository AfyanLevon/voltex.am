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
                  className="hover:underline transition-all"
                  style={{ color: '#1877F2' }}
                  onMouseEnter={(e) => e.target.style.color = '#1a8cff'}
                  onMouseLeave={(e) => e.target.style.color = '#1877F2'}
                >
                  {t.footerFacebook}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/voltex.am"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline transition-all bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  {t.footerInstagram}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/voltex-llc"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline transition-all"
                  style={{ color: '#0077B5' }}
                  onMouseEnter={(e) => e.target.style.color = '#0088cc'}
                  onMouseLeave={(e) => e.target.style.color = '#0077B5'}
                >
                  {t.footerLinkedIn}
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@VoltexLLC"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline transition-all"
                  style={{ color: '#FF0000' }}
                  onMouseEnter={(e) => e.target.style.color = '#ff1a1a'}
                  onMouseLeave={(e) => e.target.style.color = '#FF0000'}
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
          {/* Image Column */}
          <div>
            <img
              src="/icons/todo.png"
              alt="TODO section placeholder"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Voltex LLC. All rights reserved.</span>
          <a href="https://voltex.tech" className="hover:text-voltex">voltex.tech →</a>
        </div>
      </div>
    </footer>
  );
}
