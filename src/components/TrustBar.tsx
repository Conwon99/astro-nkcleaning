import { Shield, CheckCircle, Star, Clock } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: Shield,
      text: "Fully Insured",
      description: "Complete coverage for your property"
    },
    {
      icon: CheckCircle,
      text: "Compliance Trained",
      description: "Infection control & regulated environment certified"
    },
    {
      icon: Star,
      text: "100% Satisfaction",
      description: "Guaranteed quality service"
    },
    {
      icon: Clock,
      text: "24/7 Emergency",
      description: "Available when you need us most"
    }
  ];

  return (
    <section className="py-8 px-4 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{item.text}</div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;