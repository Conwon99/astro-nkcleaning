import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuoteClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/profile.php?id=61570451796499", "_blank");
  };

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/NK Logo no back.png" 
              alt="NK Cleaning Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <div className="font-thicccboi font-bold text-xl text-foreground">
                NK Cleaning
              </div>
              <div className="text-xs text-muted-foreground">
                Domestic & Commercial
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* Desktop CTA Buttons */}
          {!isMobile && (
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                onClick={handleFacebookClick}
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5"
              >
                <MessageCircle className="w-4 h-4" />
                Facebook
              </Button>
              <Button
                onClick={handleQuoteClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Get Free Quote
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 space-y-3">
                <Button
                  onClick={handleFacebookClick}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Message on Facebook
                </Button>
                <Button
                  onClick={handleQuoteClick}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;