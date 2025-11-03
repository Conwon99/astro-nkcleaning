import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, Star } from "lucide-react";

const AboutUs = () => {
  const handleQuoteClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="/clean team.png"
              alt="NK Domestic & Commercial Cleaning team - professional, reliable cleaning services in Kilmarnock"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <Shield className="w-6 h-6" />
                <span className="font-semibold text-sm tracking-wide uppercase">
                  About NK Cleaning
                </span>
              </div>

              <h2 className="font-thicccboi font-bold text-4xl lg:text-5xl text-foreground leading-tight">
                No Judgement. <span className="text-primary">Just Results.</span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                We built NK Domestic & Commercial Cleaning LTD on simple values: show up, do it right, 
                and treat people with respect. Our friendly team is trained for everything from day-to-day 
                cleaning to specialist biohazard work and regulated environments.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We work discreetly and professionally, so you can feel comfortable inviting us into your space. 
                Whether it's a regular home clean, an end-of-tenancy, a busy office, a care home, or sensitive 
                specialist work requiring full compliance, our trained team delivers spotless results and peace of mind.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our staff are fully trained in infection control, biohazard & trauma cleanup, sharps handling, 
                PPE use, and safe disposal—meeting the standards required by the Care Inspectorate, HSE, and NHS guidelines.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Trained & Vetted Team</h4>
                  <p className="text-sm text-muted-foreground">All our cleaners are background-checked and professionally trained</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Respectful & Confidential</h4>
                  <p className="text-sm text-muted-foreground">We work discreetly and treat every space with care</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Flexible Scheduling</h4>
                  <p className="text-sm text-muted-foreground">Available when you need us, including out-of-hours options</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Local Business Pride</h4>
                  <p className="text-sm text-muted-foreground">Proudly serving Kilmarnock and surrounding areas</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Fully Insured
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Infection Control Trained
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Licensed Waste Carriers
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                COSHH Compliant
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button
                onClick={handleQuoteClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Meet Our Team & Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;