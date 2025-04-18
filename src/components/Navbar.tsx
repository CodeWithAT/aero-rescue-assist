
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Tracking", path: "/tracking" },
    { name: "Stations", path: "/stations" },
    { name: "Contact", path: "/contact" },
  ];

  const handleEmergencyCall = () => {
    toast({
      title: "Emergency Call",
      description: "Connecting to emergency services...",
      variant: "default",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">AERO<span className="text-secondary">RESCUE</span></span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-white bg-primary/20"
                    : "text-gray-300 hover:text-white hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-transparent border-primary text-primary hover:text-white hidden md:flex"
              onClick={handleEmergencyCall}
            >
              <Phone className="h-5 w-5" />
            </Button>
            <Link to="/auth">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="default" 
              size="sm" 
              className="hidden md:flex"
              onClick={() => window.location.href = '/request-assistance'}
            >
              Request Assistance
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "text-white bg-primary/20"
                    : "text-gray-300 hover:text-white hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/auth"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Account
            </Link>
            <Link
              to="/request-assistance"
              className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Assistance
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
