
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { TemplateShowcase } from "@/components/home/TemplateShowcase";
import { SEOTools } from "@/components/home/SEOTools";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BentoBloom | SEO-Focused Website Builder for Small Businesses</title>
        <meta name="description" content="Create stunning, SEO-optimized websites with our drag-and-drop builder, bento grid layouts, and automated tools designed specifically for small businesses." />
        <meta name="keywords" content="website builder, SEO, small business, bento grid, templates" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "BentoBloom",
              "applicationCategory": "WebsiteBuilder",
              "operatingSystem": "Web",
              "description": "An SEO-focused website builder for small businesses using bento grid layouts",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <TemplateShowcase />
          <SEOTools />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
