
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { Check, Code, Layers, Search, Smartphone, Zap, FileJson, Image, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const coreFeatures = [
    {
      icon: <Layers className="h-10 w-10 text-blue-500" />,
      title: "Bento Grid Layouts",
      description: "Create modern, visually striking layouts with our flexible bento grid system that makes content organization a breeze."
    },
    {
      icon: <Search className="h-10 w-10 text-green-500" />,
      title: "SEO Optimization",
      description: "Boost your search rankings with built-in SEO tools, automated schema markup, and performance optimization."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-500" />,
      title: "Mobile-First Design",
      description: "Every template and component is designed to look perfect on all devices, from smartphones to large desktops."
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Optimized code and automatic image compression ensure your website loads quickly, improving user experience and SEO rankings."
    },
    {
      icon: <Code className="h-10 w-10 text-red-500" />,
      title: "Schema Markup",
      description: "Automatically generate the right structured data to help search engines understand and properly display your content."
    },
    {
      icon: <Palette className="h-10 w-10 text-pink-500" />,
      title: "Glassmorphism Effects",
      description: "Create stunning modern interfaces with customizable glass-like UI elements that give your site a premium feel."
    }
  ];

  const seoFeatures = [
    "Automated schema markup generation",
    "Meta tags optimization",
    "Image alt text suggestions",
    "Mobile responsiveness testing",
    "Page speed optimization",
    "XML sitemap creation",
    "Structured data validation",
    "Keyword density analysis",
    "SEO best practices checklist",
    "Search engine preview"
  ];

  const designFeatures = [
    "Bento grid layout system",
    "Glassmorphism UI effects",
    "Dark and light mode support",
    "Responsive design for all devices",
    "Customizable color schemes",
    "Modern typography system",
    "Motion and animation library",
    "Accessibility compliance",
    "Visual content hierarchy",
    "Component-based design system"
  ];

  return (
    <>
      <Helmet>
        <title>Features | BentoBloom</title>
        <meta name="description" content="Discover the powerful features that make BentoBloom the best choice for small business websites." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <section className="w-full py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold mb-6">Our Features</h1>
                <p className="text-xl text-muted-foreground">
                  Explore the tools and features that make BentoBloom the perfect solution for your business website.
                  Built for performance, SEO, and stunning design.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {coreFeatures.map((feature, index) => (
                  <Card key={index} className="bento-cell transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="mb-5">
                        {feature.icon}
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          <section className="w-full py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">SEO Features</h2>
                  <p className="text-muted-foreground mb-8">
                    Our built-in SEO tools help ensure your website ranks well in search engines,
                    attracting more visitors to your business.
                  </p>
                  <div className="space-y-4">
                    {seoFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <Check className="h-6 w-6 text-green-500" />
                        </div>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Design Features</h2>
                  <p className="text-muted-foreground mb-8">
                    Create visually stunning websites with our modern design elements and
                    flexible layout options.
                  </p>
                  <div className="space-y-4">
                    {designFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <Check className="h-6 w-6 text-blue-500" />
                        </div>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="w-full py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to build your website?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Start creating your SEO-optimized website today with our easy-to-use builder
                and professional templates.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/templates" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  Browse Templates
                </a>
                <a href="/pricing" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  View Pricing
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Features;
