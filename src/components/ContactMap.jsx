import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function ContactMap() {
  const { language } = useLanguage();
  const t = translations[language];
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = () => {
      return new Promise((resolve) => {
        // Check if already loaded
        if (window.L && window.L.map) {
          resolve();
          return;
        }

        // Check if CSS is already loaded
        const existingCSS = document.querySelector('link[href*="leaflet.css"]');
        if (!existingCSS) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
          link.crossOrigin = '';
          document.head.appendChild(link);
        }

        // Check if script is already loading/loaded
        const existingScript = document.querySelector('script[src*="leaflet.js"]');
        if (existingScript) {
          if (window.L && window.L.map) {
            resolve();
          } else {
            existingScript.addEventListener('load', resolve);
          }
          return;
        }

        // Load JS
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';
        script.onload = resolve;
        document.head.appendChild(script);
      });
    };

    const initMap = async () => {
      if (!mapRef.current) return;
      
      await loadLeaflet();

      if (!mapRef.current || !window.L || !window.L.map) return;

      // Clean up existing map if any
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Initialize map
      const map = window.L.map(mapRef.current).setView([40.226629, 44.558403], 18);

      // Add tile layer
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add marker
      const marker = window.L.marker([40.226629, 44.558403]).addTo(map);
      
      // Add popup
      marker.bindPopup(t.contactMapPopup).openPopup();

      mapInstanceRef.current = map;
      markerRef.current = marker;
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [t.contactMapPopup]);

  return (
    <div className="rounded-xl border border-white/10 bg-gray-800/60 p-4">
      <div ref={mapRef} className="h-72 w-full rounded-lg border border-white/10" />
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <a
          href="https://www.google.com/maps?q=40.226629,44.558403&z=19"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-colors underline"
          aria-label={t.contactOpenGoogleMaps}
        >
          {t.contactOpenGoogleMaps}
        </a>
        <span className="text-white/30">·</span>
        <a
          href="https://yandex.com/maps/?ll=44.558403%2C40.226629&z=19&pt=44.558403,40.226629,pm2rdl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-colors underline"
          aria-label={t.contactOpenYandexMaps}
        >
          {t.contactOpenYandexMaps}
        </a>
      </div>
    </div>
  );
}

