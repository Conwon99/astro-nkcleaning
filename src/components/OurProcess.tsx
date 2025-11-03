import { Card, CardContent } from "@/components/ui/card";
import { 
  ClipboardCheck, 
  FileText, 
  Rocket, 
  BarChart3, 
  RefreshCw,
  CheckCircle2
} from "lucide-react";

const OurProcess = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      number: "01",
      title: "Free Site Visit & Risk Assessment",
      description: "We walk through your premises, identify high-risk zones, review your regulatory obligations (Care Inspectorate, HSE, NHS, etc.), then deliver a bespoke cleaning plan and quote.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: FileText,
      number: "02",
      title: "Proposal & Agreement",
      description: "You receive a detailed plan including frequency, tasks, specifications, compliance documentation, and cost breakdown. Everything transparent, nothing hidden.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Implementation & Onboarding",
      description: "We establish your cleaning schedule, introduce our staff, incorporate your internal protocols, and provide sample reports so you know what to expect.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Ongoing Service & Reporting",
      description: "Each visit comes with a site report, photos, checklist ticks, observations, and suggestions. We also schedule audits or deep cleans as needed.",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: RefreshCw,
      number: "05",
      title: "Review & Adjust",
      description: "We hold review meetings quarterly (or as you prefer) and adapt cleaning frequency or scope in response to inspection feedback, outbreaks, or changes.",
      color: "from-red-500 to-rose-600"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Peace of Mind During Inspections",
      description: "Documentation, protocols, staff training, and a cleaning partner who understands requirements"
    },
    {
      icon: CheckCircle2,
      title: "Reduced Risk",
      description: "Fewer cross-infections, safe handling, and proper waste disposal"
    },
    {
      icon: CheckCircle2,
      title: "Local Reliability",
      description: "Quick response, same team, friendly service from your local area"
    },
    {
      icon: CheckCircle2,
      title: "Cost Efficiency",
      description: "Proper waste disposal avoids fines; optimised cleaning frequency prevents over-servicing"
    },
    {
      icon: CheckCircle2,
      title: "Reputation & Confidence",
      description: "Patients, staff, residents, students see a clean, safe environment"
    },
    {
      icon: CheckCircle2,
      title: "Transparent Pricing",
      description: "No hidden costs—pricing based on size, risk zones, frequency, and disposal needs"
    }
  ];

  return (
    <section id="process" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-thicccboi font-bold text-4xl lg:text-5xl text-foreground">
            How We <span className="text-primary">Work With You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our five-step process ensures you get a cleaning service that's tailored to your facility, 
            compliant with regulations, and easy to manage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[200px_1fr] gap-0">
                  {/* Number & Icon Section */}
                  <div className={`bg-gradient-to-br ${step.color} p-8 flex flex-col items-center justify-center text-white relative`}>
                    <div className="absolute top-4 left-4 text-6xl font-bold opacity-20">
                      {step.number}
                    </div>
                    <step.icon className="w-16 h-16 mb-4 relative z-10" />
                    <div className="text-5xl font-bold relative z-10">{step.number}</div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="font-thicccboi font-bold text-2xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-muted/30 to-background rounded-2xl p-8 lg:p-12">
          <h3 className="font-thicccboi font-bold text-3xl text-foreground text-center mb-12">
            What You Gain by Partnering with Us
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;



