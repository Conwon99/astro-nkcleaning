import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: "/slideshow/clean2.jpg",
      alt: "Professional cleaning services - before and after transformation",
      title: "Transform Your Space",
      description: "From chaos to clean with our professional team"
    },
    {
      src: "/slideshow/clean3.jpg", 
      alt: "Commercial cleaning services for offices and businesses",
      title: "Commercial Excellence",
      description: "Keep your business premises spotless and professional"
    },
    {
      src: "/slideshow/clean4.jpg",
      alt: "Domestic cleaning services for homes and properties",
      title: "Home Sweet Home",
      description: "Your home deserves to shine with our expert care"
    },
    {
      src: "/slideshow/bed.jpg",
      alt: "Holiday let and Airbnb turnaround services",
      title: "Holiday Let Ready",
      description: "Fast, reliable changeovers between guests"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-thicccboi font-bold text-4xl lg:text-5xl text-foreground">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the transformation our professional cleaning services deliver. 
            From domestic to commercial, we bring spaces back to life.
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative h-[500px] lg:h-[600px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="font-thicccboi font-bold text-3xl lg:text-4xl mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-lg lg:text-xl opacity-90">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-muted-foreground">
            {currentSlide + 1} of {slides.length}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="font-thicccboi font-bold text-3xl text-foreground">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our satisfied customers who've experienced the difference professional cleaning makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61570451796499', '_blank')}
            >
              View More on Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
