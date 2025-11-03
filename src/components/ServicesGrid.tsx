import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Building2, 
  Calendar, 
  Shield, 
  Sparkles, 
  Flame, 
  Car, 
  Shirt,
  ArrowRight 
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Home,
      title: "Domestic Cleaning",
      description: "Regular weekly/fortnightly cleans, one-off deep cleans, and end-of-tenancy services.",
      features: ["Weekly/fortnightly cleans", "One-off deep cleans", "End-of-tenancy cleans", "Non-judgemental approach"],
      cta: "Book a home clean",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Offices, shops, and business premises with out-of-hours options available.",
      features: ["Office cleaning", "Retail spaces", "Out-of-hours service", "Uniformed team"],
      cta: "Request a site visit",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Calendar,
      title: "Holiday-Let Turnaround",
      description: "Fast, reliable changeovers between guests with laundry and linen services.",
      features: ["Quick changeovers", "Laundry & linen", "Restocking support", "24/7 availability"],
      cta: "Set up turnaround plan",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Biohazard & Specialist",
      description: "Trauma response, clinical waste, regulated environment cleaning for care homes, schools, medical facilities.",
      features: ["Trauma & bodily fluid cleanup", "Clinical waste disposal", "Regulated facility cleaning", "24/7 emergency response"],
      cta: "Speak to specialist team",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Sparkles,
      title: "Carpet Cleaning",
      description: "Stain removal, odour neutralisation with quick-dry methods available.",
      features: ["Stain removal", "Odour neutralisation", "Quick-dry methods", "Deep cleaning"],
      cta: "Get carpet quote",
      color: "from-amber-500 to-yellow-600"
    },
    {
      icon: Flame,
      title: "Oven Cleaning",
      description: "Burnt-on grease removal, glass restoration and complete deodorisation.",
      features: ["Grease removal", "Glass restoration", "Deodorisation", "No elbow grease needed"],
      cta: "Book oven clean",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Car,
      title: "Caravan & Holiday Home",
      description: "Touring vans and static caravans with interior refresh and optional exterior cleaning.",
      features: ["Touring vans", "Static caravans", "Interior refresh", "Exterior options"],
      cta: "Caravan refresh quote",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: Shirt,
      title: "Laundry Services",
      description: "Wash, dry, fold for domestic and holiday-let clients with linen management.",
      features: ["Wash, dry, fold", "Linen management", "Holiday-let support", "Professional service"],
      cta: "Add laundry to booking",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-thicccboi font-bold text-4xl lg:text-5xl text-foreground">
            Professional Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From weekly home cleans to specialist biohazard work and regulated environment cleaning, 
            we handle everything with care, discretion, and professional compliance standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="font-thicccboi text-xl text-foreground text-center">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group-hover:bg-primary/80 transition-all duration-300"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="font-thicccboi font-bold text-3xl text-foreground">
            Ready for a Fresh Start?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your free quote today and experience the difference professional cleaning makes.
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full"
          >
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;