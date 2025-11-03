import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  School, 
  Heart, 
  Stethoscope, 
  Activity,
  AlertTriangle,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const RegulatedEnvironments = () => {
  const sectors = [
    {
      icon: School,
      title: "Schools & Nurseries",
      description: "Child-safe disinfectants and outbreak response protocols for educational facilities.",
      features: [
        "Deep disinfection of high-touch areas",
        "Classroom rotation cleaning",
        "Urgent outbreak cleaning (norovirus, flu)",
        "Safe handling of bodily fluids",
        "Daily inspection logs & records"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Heart,
      title: "Care Homes & Nursing",
      description: "24/7 response capability with infection control protocols for residential care.",
      features: [
        "Frequent sanitising of communal areas",
        "Isolation suite cleaning protocols",
        "Incontinence waste handling",
        "Odour control & ventilation",
        "24/7 emergency response"
      ],
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Stethoscope,
      title: "Dental Practices",
      description: "Sterile zone protocols and turnover cleaning between patients.",
      features: [
        "Treatment room pre/post session cleaning",
        "Sterile zone protocols",
        "Safe sharps handling & disposal",
        "Between-patient turnover cleaning",
        "Full verification processes"
      ],
      color: "from-teal-500 to-emerald-600"
    },
    {
      icon: Activity,
      title: "GP Surgeries & Clinics",
      description: "Medical-grade cleaning for consulting rooms and waiting areas.",
      features: [
        "Waiting area & consultation room cleaning",
        "Equipment interface disinfection",
        "Safe waste & PPE handling",
        "Sample room protocols",
        "Minor procedure room cleaning"
      ],
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: AlertTriangle,
      title: "Biohazard & Trauma Response",
      description: "Trained emergency response for contamination events and trauma scenes.",
      features: [
        "Bodily fluid & trauma scene cleanup",
        "Full PPE & decontamination",
        "Licensed clinical waste removal",
        "Mould remediation & odour extraction",
        "Post-clean verification"
      ],
      color: "from-red-500 to-orange-600"
    }
  ];

  const complianceFeatures = [
    {
      icon: CheckCircle2,
      title: "Fully Compliant",
      description: "Care Inspectorate, HSE, NHS Infection Control, COSHH standards"
    },
    {
      icon: CheckCircle2,
      title: "Trained Staff",
      description: "Infection control, biohazard cleanup, sharps handling, PPE use"
    },
    {
      icon: CheckCircle2,
      title: "Documented Processes",
      description: "Audit trails, logs, checklists, and digital records for inspections"
    },
    {
      icon: CheckCircle2,
      title: "Licensed Waste Disposal",
      description: "Registered waste carriers with full manifest documentation"
    }
  ];

  return (
    <section id="regulated" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            <AlertTriangle className="w-4 h-4" />
            Regulated Environment Specialists
          </div>
          
          <h2 className="font-thicccboi font-bold text-4xl lg:text-5xl text-foreground">
            Cleaning for <span className="text-primary">Regulated Environments</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When compliance isn't optional, you need a cleaning partner who understands regulations, 
            documentation, and the standards required by the Care Inspectorate, HSE, and NHS guidelines.
          </p>
        </div>

        {/* Compliance Promise */}
        <div className="mb-16 p-8 bg-white rounded-2xl shadow-lg border-2 border-primary/20">
          <h3 className="font-thicccboi font-bold text-2xl text-foreground mb-6 text-center">
            Our Promise to Regulated Facilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sectors.map((sector, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="font-thicccboi text-xl text-foreground">
                  {sector.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {sector.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {sector.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Compliance Matters */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="font-thicccboi font-bold text-3xl text-foreground text-center mb-8">
              Why Compliance Matters
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-foreground">Prevent cross-contamination:</strong> Zoning, colour coding, dedicated tools, proper cleaning sequences</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-foreground">Approved disinfectants:</strong> Following dwell times and verifying efficacy</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-foreground">Clinical waste handling:</strong> Safe disposal via licensed channels</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-foreground">Audit trails:</strong> Logs, checklists, and digital records</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-foreground">Emergency response:</strong> Trauma, spillovers, biohazard incidents</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong className="text-foreground">Risk assessments:</strong> Method statements and site-specific protocols</p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-lg font-semibold text-foreground pt-6 border-t border-primary/20">
              We don't just "do a great clean" — we engineer every step so you can pass inspections confidently and reduce liability.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <h3 className="font-thicccboi font-bold text-3xl text-foreground">
            Ready for an Inspection-Ready Facility?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your free site visit and risk assessment. We'll create a bespoke cleaning plan that meets all regulatory requirements.
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Request Site Visit & Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegulatedEnvironments;

