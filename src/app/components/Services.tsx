import { Home, Sparkles, Trash2, Building2, PaintBucket, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';

const services = [
  {
    icon: Home,
    title: 'Haushaltsreinigung',
    description: 'Umfassende Reinigung Ihrer Wohnräume, Küche, Badezimmer und aller Wohnbereiche.',
  },
  {
    icon: Sparkles,
    title: 'Grundreinigung',
    description: 'Intensive Tiefenreinigung für einen perfekten Start oder nach Renovierungen.',
  },
  {
    icon: Building2,
    title: 'Büroreinigung',
    description: 'Professionelle Reinigung von Büroräumen, Konferenzräumen und Arbeitsbereichen.',
  },
  {
    icon: PaintBucket,
    title: 'Fensterreinigung',
    description: 'Streifenfreie Reinigung von Fenstern, Rahmen und Fensterbänken innen und außen.',
  },
  {
    icon: Trash2,
    title: 'Entrümpelung',
    description: 'Professionelle Entrümpelung und Entsorgung von Keller, Dachboden und Wohnungen.',
  },
  {
    icon: Users,
    title: 'Umzugsreinigung',
    description: 'Abnahmereinigung für Mieter und Vermieter nach höchsten Standards.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir bieten ein breites Spektrum an Reinigungsdienstleistungen für Privat- und 
            Geschäftskunden. Alle Leistungen können individuell angepasst werden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
