import { Button } from '@/app/components/ui/button';

interface HeroProps {
  onNavigateToContact: () => void;
}

export function Hero({ onNavigateToContact }: HeroProps) {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professionelle Reinigung für Ihr Zuhause
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Vertrauen Sie auf unsere langjährige Erfahrung und genießen Sie ein sauberes, 
              frisches Zuhause. Wir bieten maßgeschneiderte Reinigungsdienstleistungen für 
              jeden Bedarf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={onNavigateToContact}
              >
                Jetzt Angebot anfordern
              </Button>
              <Button size="lg" variant="outline">
                Mehr erfahren
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1758523670634-df4e12ed7a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzY4NjUzNTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional home cleaning"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
