
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Layout, 
  Globe, 
  Zap, 
  Smartphone, 
  Code, 
  BarChart,
  Palette,
  FileCheck
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "SEO Optimization",
      description: "Built-in tools to help your site rank higher in search results with automated schema markup.",
      icon: <Search className="h-6 w-6 text-blue-500" />,
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Bento Grid Layouts",
      description: "Create visually appealing and modern layouts with our customizable bento grid components.",
      icon: <Layout className="h-6 w-6 text-green-500" />,
      color: "from-green-500/20 to-green-600/20"
    },
    {
      title: "Local Business Templates",
      description: "Industry-specific templates optimized for restaurants, service businesses, and portfolios.",
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Performance Optimized",
      description: "Blazing fast websites with optimized code and automatic image compression.",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      title: "Mobile-First Design",
      description: "Every template and component is designed to look perfect on all devices.",
      icon: <Smartphone className="h-6 w-6 text-red-500" />,
      color: "from-red-500/20 to-red-600/20"
    },
    {
      title: "Schema Markup",
      description: "Automatically generate the right structured data to help search engines understand your content.",
      icon: <Code className="h-6 w-6 text-indigo-500" />,
      color: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      title: "Analytics Integration",
      description: "Connect with Google Analytics and other tools to track your website's performance.",
      icon: <BarChart className="h-6 w-6 text-cyan-500" />,
      color: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      title: "Glassmorphism Effects",
      description: "Beautiful glass-like UI elements to create modern, eye-catching designs.",
      icon: <Palette className="h-6 w-6 text-pink-500" />,
      color: "from-pink-500/20 to-pink-600/20"
    },
    {
      title: "Accessibility Compliant",
      description: "WCAG compliant templates ensuring your website is accessible to everyone.",
      icon: <FileCheck className="h-6 w-6 text-emerald-500" />,
      color: "from-emerald-500/20 to-emerald-600/20"
    }
  ];

  return (
    <section id="features" className="w-full py-20 bg-gradient-radial from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need to create a <span className="text-gradient-primary">successful</span> website
          </h2>
          <p className="text-muted-foreground text-lg">
            Our builder combines beautiful design with powerful SEO tools to help your business stand out online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bento-cell group">
              <div className={`rounded-full p-3 w-14 h-14 flex items-center justify-center bg-gradient-to-br ${feature.color} mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient-primary transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
