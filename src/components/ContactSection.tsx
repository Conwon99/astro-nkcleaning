import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend or email service
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    setSelectedService("");
  };

  const services = [
    "Domestic Cleaning",
    "Commercial Cleaning", 
    "Holiday-Let Turnaround",
    "Biohazard & Specialist",
    "Carpet Cleaning",
    "Oven Cleaning",
    "Caravan & Holiday Home",
    "Laundry Services",
    "Other"
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Service Area",
      details: "Kilmarnock & surrounding areas, Ayrshire"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Sunday: 7:00 AM - 8:00 PM"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      details: "Complete coverage for your property"
    },
    {
      icon: CheckCircle,
      title: "Free Quotes",
      details: "No obligation, competitive pricing"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-thicccboi font-bold text-4xl lg:text-5xl text-foreground">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready for a fresh start? Contact us for a free, no-obligation quote on any of our 
            professional cleaning services. We're here to help transform your space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-thicccboi text-2xl text-foreground">
                  Request Your Quote
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours with a 
                  personalized quote for your cleaning needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Your phone number"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Your email address"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Required *
                    </label>
                    <Select
                      value={selectedService}
                      onValueChange={(value) => {
                        setSelectedService(value);
                        handleInputChange("service", value);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your cleaning needs, property size, frequency, or any special requirements..."
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-4 font-semibold rounded-full"
                  >
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="font-thicccboi text-2xl text-foreground">
                  Quick Contact
                </CardTitle>
                <CardDescription>
                  Prefer to speak directly? Reach out to us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => window.open("https://www.facebook.com/profile.php?id=61570451796499", "_blank")}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-3 py-4 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message on Facebook
                </Button>
                <Button
                  onClick={() => window.location.href = "tel:+44"}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-4 font-semibold rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-sm text-muted-foreground">{info.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Badge */}
            <Card className="border-0 bg-gradient-to-r from-primary/10 to-primary/5 text-center p-6">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-thicccboi font-bold text-lg text-foreground">
                    Fully Insured & Certified
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Complete peace of mind for your property and our team
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;