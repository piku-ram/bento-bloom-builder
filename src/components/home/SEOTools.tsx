
import { Badge } from "@/components/ui/badge";
import {
  Search,
  BarChart3,
  FileJson,
  Image,
  Gauge,
  MoveUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const SEOTools = () => {
  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">SEO Tools</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for <span className="text-gradient-primary">search engine</span> success
          </h2>
          <p className="text-muted-foreground text-lg">
            Our powerful SEO tools help your website rank higher and attract more visitors.
          </p>
        </div>
        
        <div className="bento-grid">
          <div className="bento-cell bento-cell-lg">
            <div className="flex flex-col h-full">
              <Search className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automated Schema Markup</h3>
              <p className="text-muted-foreground mb-6">
                Generate proper structured data automatically based on your content to help search engines understand your website.
              </p>
              <div className="mt-auto glass rounded-xl overflow-hidden">
                <pre className="text-xs overflow-x-auto p-4 text-left">
{`{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Sample Restaurant",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Anytown"
  },
  "openingHours": "Mo-Su 11:00-23:00"
}`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bento-cell">
            <div className="flex flex-col h-full">
              <BarChart3 className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">SEO Analytics</h3>
              <p className="text-muted-foreground">
                Track your search ranking performance and get insights on how to improve your visibility.
              </p>
              <Button variant="link" className="mt-4 p-0 justify-start gap-2 text-primary">
                Learn more <MoveUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="bento-cell">
            <div className="flex flex-col h-full">
              <FileJson className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sitemap Generation</h3>
              <p className="text-muted-foreground">
                Automatically create and update XML sitemaps to help search engines crawl your site efficiently.
              </p>
              <Button variant="link" className="mt-4 p-0 justify-start gap-2 text-primary">
                Learn more <MoveUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="bento-cell">
            <div className="flex flex-col h-full">
              <Image className="h-10 w-10 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Image Optimization</h3>
              <p className="text-muted-foreground">
                Automatically compress and optimize images with proper alt text for better SEO and faster load times.
              </p>
              <Button variant="link" className="mt-4 p-0 justify-start gap-2 text-primary">
                Learn more <MoveUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="bento-cell bento-cell-lg">
            <div className="flex flex-col h-full">
              <Gauge className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance Monitoring</h3>
              <p className="text-muted-foreground mb-6">
                Track Core Web Vitals and other performance metrics that impact your search ranking.
              </p>
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <div className="glass p-4 rounded-xl flex-1">
                  <div className="text-2xl font-bold text-green-500 mb-1">96</div>
                  <div className="text-xs text-muted-foreground">Performance</div>
                </div>
                <div className="glass p-4 rounded-xl flex-1">
                  <div className="text-2xl font-bold text-blue-500 mb-1">98</div>
                  <div className="text-xs text-muted-foreground">Accessibility</div>
                </div>
                <div className="glass p-4 rounded-xl flex-1">
                  <div className="text-2xl font-bold text-purple-500 mb-1">97</div>
                  <div className="text-xs text-muted-foreground">Best Practices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
