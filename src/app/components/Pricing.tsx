import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

const pricingPlans = [
  {
    name: 'Basis',
    price: '39',
    description: 'Ideal für kleine Wohnungen',
    features: [
      'Bis zu 50 m² Wohnfläche',
      'Standardreinigung',
      'Staubsaugen & Wischen',
      'Bad- und Küchenreinigung',
      'Flexibler Termin',
    ],
  },
  {
    name: 'Standard',
    price: '69',
    description: 'Perfekt für Familien',
    features: [
      'Bis zu 100 m² Wohnfläche',
      'Umfassende Reinigung',
      'Fensterreinigung (innen)',
      'Staubentfernung',
      'Bad- und Küchenreinigung',
      'Regelmäßige Termine möglich',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '129',
    description: 'Luxus-Service für Ihr Zuhause',
    features: [
      'Über 100 m² Wohnfläche',
      'Grundreinigung',
      'Fensterreinigung (innen & außen)',
      'Teppichreinigung',
      'Küchengeräte Reinigung',
      'Balkon/Terrasse',
      'Prioritäts-Service',
    ],
  },
];

interface PricingProps {
  onNavigateToContact: () => void;
}

export function Pricing({ onNavigateToContact }: PricingProps) {
  return (
    <section id="prices" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transparente Preise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wählen Sie das passende Paket für Ihre Bedürfnisse. Alle Preise verstehen sich 
            pro Reinigung. Rabatte bei regelmäßigen Terminen verfügbar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-blue-600 border-2 shadow-xl' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Beliebteste Wahl
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">€{plan.price}</span>
                  <span className="text-gray-600">/Reinigung</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={onNavigateToContact}
                >
                  Jetzt buchen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
