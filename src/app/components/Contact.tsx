import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    content: '+49 (0) 123 456789',
  },
  {
    icon: Mail,
    title: 'E-Mail',
    content: 'info@pureclean.de',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: 'Musterstraße 123, 12345 Berlin',
  },
  {
    icon: Clock,
    title: 'Öffnungszeiten',
    content: 'Mo-Fr: 8:00-18:00 Uhr',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot erhalten? 
            Kontaktieren Sie uns gerne!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Nachricht senden</CardTitle>
              <CardDescription>
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 123 456789"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Karte wird hier angezeigt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
