import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Shield, CheckCircle, Sparkles } from "lucide-react";

const Footer = () => {
  const handleQuoteClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/profile.php?id=61570451796499", "_blank");
  };

  const services = [
    "Domestic Cleaning",
    "Commercial Cleaning",
    "Holiday-Let Turnaround",
    "Biohazard & Specialist",
    "Carpet Cleaning",
    "Oven Cleaning",
    "Caravan & Holiday Home",
    "Laundry Services"
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer Content */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/NK Logo no back.png" 
                  alt="NK Cleaning Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="font-thicccboi font-bold text-2xl">
                    NK Domestic & Commercial Cleaning LTD
                  </h3>
                  <p className="text-sm text-primary-foreground/80">
                    From chaos to clean—professionals you can trust
                  </p>
                </div>
              </div>
              
              <p className="text-primary-foreground/90 leading-relaxed max-w-lg">
                Local, reliable cleaning across Kilmarnock & surrounds—domestic, commercial, 
                holiday-let and biohazard. Discreet and professional service you can count on.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  Fully Insured
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Trained Specialists
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Professional Service
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  onClick={handleQuoteClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full"
                >
                  Get Free Quote
                </Button>
                <Button 
                  onClick={handleFacebookClick}
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="font-thicccboi font-bold text-lg">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services" 
                      className="text-primary-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-thicccboi font-bold text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-primary-foreground/20 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary-foreground/20 bg-primary-foreground/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Service Area</h5>
                    <p className="text-xs text-primary-foreground/80">Kilmarnock & Ayrshire</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary-foreground/20 bg-primary-foreground/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Business Hours</h5>
                    <p className="text-xs text-primary-foreground/80">7:00 AM - 8:00 PM Daily</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary-foreground/20 bg-primary-foreground/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Contact</h5>
                    <p className="text-xs text-primary-foreground/80">Phone & Facebook</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © 2024 NK Domestic & Commercial Cleaning LTD. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span>Company Number: [ADD]</span>
              <span>Registered in Scotland</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;