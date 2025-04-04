
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
      <div className="container mx-auto">
        <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to build your <span className="text-gradient-primary">perfect</span> website?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of small businesses creating stunning, SEO-optimized websites with BentoBloom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 gap-2">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Free plan available
          </p>
        </div>
      </div>
    </section>
  );
};
