import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hjem');
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const products = [
    {
      id: 1,
      name: 'Snapt Stara Fripir',
      price: 2419,
      oldPrice: 2999,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['GPS', 'Vanntett', 'Hjertefrekvens', 'Søvnsporing'],
      badge: 'Populær'
    },
    {
      id: 2,
      name: 'Elite Pro X',
      price: 3299,
      oldPrice: null,
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['4G LTE', 'EKG', 'Oksygen', 'Always-on'],
      badge: 'Ny'
    },
    {
      id: 3,
      name: 'Sport Active',
      price: 1899,
      oldPrice: 2299,
      image: 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['50+ treningsmoduser', '14 dagers batteri', 'GPS'],
      badge: null
    },
    {
      id: 4,
      name: 'Elegant Classic',
      price: 2799,
      oldPrice: null,
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['AMOLED skjerm', 'Trådløs lading', 'Stemmestyring'],
      badge: null
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Lars Nordmann',
      rating: 5,
      text: 'Fantastisk smartklokke! Bruker den hver dag til trening og den holder mål. Batteritiden er imponerende.',
      date: '2 uker siden',
      product: 'Snapt Stara Fripir'
    },
    {
      id: 2,
      name: 'Ingrid Hansen',
      rating: 5,
      text: 'Veldig fornøyd med kjøpet. Designet er elegant og funksjonaliteten er topp. Anbefales!',
      date: '1 måned siden',
      product: 'Elite Pro X'
    },
    {
      id: 3,
      name: 'Erik Johansen',
      rating: 4,
      text: 'God klokke for prisen. GPS fungerer perfekt på løpeturene mine. Kunne ønsket litt lengre batteritid.',
      date: '3 uker siden',
      product: 'Sport Active'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground tracking-tight">SMARTKLOKKER</h1>
            <div className="hidden md:flex gap-8">
              {['hjem', 'katalog', 'anmeldelser', 'kontakt'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium capitalize transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="hjem" className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
              Norges beste smartklokker
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Din perfekte
              <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                smartklokke
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Oppdag vår eksklusive kolleksjon av smartklokker med de nyeste funksjonene. 
              GPS, hjertefrekvens, vanntette og mye mer.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" onClick={() => scrollToSection('katalog')} className="hover-scale">
                Se katalog
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('kontakt')}>
                Kontakt oss
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <img
              src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Smartklokke"
              className="relative rounded-2xl shadow-2xl animate-scale-in"
            />
          </div>
        </div>
      </section>

      <section id="katalog" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Vårt utvalg</h2>
          <p className="text-muted-foreground">Premium smartklokker for alle behov</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0 relative">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
                <div className="relative overflow-hidden bg-secondary/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price},-</span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.oldPrice},-
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 gap-2">
                <Button className="flex-1 hover-scale">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Kjøp nå
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Heart" size={18} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="anmeldelser" className="container mx-auto px-4 py-20 bg-secondary/30 rounded-3xl my-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Hva kundene sier</h2>
          <p className="text-muted-foreground">Over 5000 fornøyde kunder</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={review.id} 
              className="animate-fade-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                <Badge variant="outline" className="mt-4">{review.product}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="kontakt" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Kontakt oss</h2>
            <p className="text-muted-foreground">Vi svarer innen 24 timer</p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Navn</label>
                  <Input placeholder="Ditt navn" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">E-post</label>
                  <Input type="email" placeholder="din@epost.no" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Telefon</label>
                <Input type="tel" placeholder="+47 123 45 678" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Melding</label>
                <Textarea 
                  placeholder="Hvordan kan vi hjelpe deg?" 
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button className="w-full hover-scale" size="lg">
                Send melding
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
              <h4 className="font-bold text-foreground mb-2">E-post</h4>
              <p className="text-sm text-muted-foreground">hei@smartklokker.no</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
              <h4 className="font-bold text-foreground mb-2">Telefon</h4>
              <p className="text-sm text-muted-foreground">+47 123 45 678</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-primary" />
              <h4 className="font-bold text-foreground mb-2">Adresse</h4>
              <p className="text-sm text-muted-foreground">Oslo, Norge</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t border-border mt-20">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">SMARTKLOKKER</h3>
            <p className="text-sm text-muted-foreground">
              Norges ledende leverandør av smartklokker og wearables.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Produkter</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Smartklokker</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tilbehør</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tilbud</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Kundeservice</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Frakt</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Retur</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Garanti</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Følg oss</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="hover-scale">
                <Icon name="Facebook" size={18} />
              </Button>
              <Button variant="outline" size="icon" className="hover-scale">
                <Icon name="Instagram" size={18} />
              </Button>
              <Button variant="outline" size="icon" className="hover-scale">
                <Icon name="Youtube" size={18} />
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          © 2024 Smartklokker. Alle rettigheter forbeholdt.
        </div>
      </footer>

      {showCookieBanner && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-slide-in-right">
          <Card className="shadow-2xl border-2 border-border">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="text-4xl">🍪</div>
                <div className="flex-1 space-y-3">
                  <h4 className="font-bold text-foreground">Vi bruker informasjonskapsler</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Moderne tinstalta atmøoleiqa cookie cookie tinaneiuq aterdning ålener birmelatit per 
                    cookier'cemetuatè otg døddeleiera qiamen.
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      onClick={() => setShowCookieBanner(false)}
                      className="flex-1 hover-scale"
                    >
                      Godta
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setShowCookieBanner(false)}
                    >
                      Avslå
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;