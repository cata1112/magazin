import { Award, Clock, Heart, Shield } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Qualitätsgarantie',
    description: 'Über 15 Jahre Erfahrung in der professionellen Reinigung',
  },
  {
    icon: Shield,
    title: 'Versichert & Zertifiziert',
    description: 'Vollständig versichert und zertifizierte Reinigungskräfte',
  },
  {
    icon: Clock,
    title: 'Zuverlässig & Pünktlich',
    description: 'Termintreue und flexible Planung nach Ihren Bedürfnissen',
  },
  {
    icon: Heart,
    title: 'Umweltfreundlich',
    description: 'Einsatz ökologischer Reinigungsmittel zum Schutz Ihrer Gesundheit',
  },
];

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBob3VzZSUyMGNsZWFuaW5nfGVufDF8fHx8MTc2ODY4MTkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="About PureClean"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Über uns
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              PureClean ist Ihr vertrauenswürdiger Partner für professionelle Reinigungsdienste 
              in der Region. Seit über 15 Jahren bieten wir erstklassige Reinigungsservices für 
              Privat- und Geschäftskunden.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Unser erfahrenes Team legt größten Wert auf Qualität, Zuverlässigkeit und 
              Kundenzufriedenheit. Wir verwenden moderne Reinigungstechniken und umweltfreundliche 
              Produkte, um Ihr Zuhause gründlich und schonend zu reinigen.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
