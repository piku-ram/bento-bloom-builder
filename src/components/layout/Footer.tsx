
import { Link } from "react-router-dom";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-12 bg-background/50 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="text-xl font-bold text-gradient-primary">BentoBloom</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Helping small businesses build beautiful, SEO-optimized websites with ease.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BentoBloom. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Crafted with ❤️ for small businesses
          </p>
        </div>
      </div>
    </footer>
  );
};
