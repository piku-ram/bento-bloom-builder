
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="glass px-4 py-2 rounded-full">
            <p className="text-sm font-medium">
              <span className="text-blue-600">New</span> SEO-optimized templates for local businesses
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build beautiful websites that <span className="text-gradient-primary">rank higher</span> with BentoBloom
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Create stunning, SEO-focused websites with our drag-and-drop builder, pre-built templates, 
            and automated tools designed specifically for small businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="text-base px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              View Templates
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            No credit card required • Free plan available
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-16 glass-card overflow-hidden rounded-3xl">
        <div className="relative aspect-video border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-purple-500/30 mix-blend-overlay" />
          <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80" 
            alt="BentoBloom website builder interface" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
