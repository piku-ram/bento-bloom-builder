
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 glass sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="text-2xl font-bold text-gradient-primary">BentoBloom</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link to="/templates" className="text-foreground/90 hover:text-foreground transition-colors">
              Templates
            </Link>
            <Link to="/features" className="text-foreground/90 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-foreground/90 hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-foreground/90 hover:text-foreground transition-colors">
              About
            </Link>
          </div>

          <div className="flex gap-3">
            <Button variant="outline">Log In</Button>
            <Button>Get Started</Button>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass p-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link 
              to="/templates" 
              className="text-foreground/90 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              to="/features" 
              className="text-foreground/90 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-foreground/90 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-foreground/90 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="w-full">Log In</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
