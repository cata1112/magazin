import { Sparkles, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">PureClean</span>
            </div>
            <p className="text-sm">
              Ihr vertrauenswürdiger Partner für professionelle Reinigungsdienste seit 2009.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">
                  Dienstleistungen
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('prices')} className="hover:text-blue-400 transition-colors">
                  Preise
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  Über uns
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Dienstleistungen</h3>
            <ul className="space-y-2 text-sm">
              <li>Haushaltsreinigung</li>
              <li>Grundreinigung</li>
              <li>Büroreinigung</li>
              <li>Fensterreinigung</li>
              <li>Umzugsreinigung</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>Musterstraße 123</li>
              <li>12345 Berlin</li>
              <li>Tel: +49 (0) 123 456789</li>
              <li>info@pureclean.de</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2026 PureClean. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('impressum')} className="hover:text-blue-400 transition-colors">
              Impressum
            </button>
            <button onClick={() => onNavigate('privacy')} className="hover:text-blue-400 transition-colors">
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
