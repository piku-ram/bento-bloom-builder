
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const TemplateShowcase = () => {
  const [activeTab, setActiveTab] = useState("restaurant");
  
  const templates = {
    restaurant: [
      {
        id: 1,
        name: "Fine Dining",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
        new: true
      },
      {
        id: 2,
        name: "Casual Cafe",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800",
        new: false
      },
      {
        id: 3,
        name: "Food Truck",
        image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&q=80&w=800",
        new: false
      }
    ],
    portfolio: [
      {
        id: 1,
        name: "Creative Studio",
        image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=800",
        new: true
      },
      {
        id: 2,
        name: "Personal Brand",
        image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=800",
        new: false
      },
      {
        id: 3,
        name: "Freelancer",
        image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=800",
        new: false
      }
    ],
    services: [
      {
        id: 1,
        name: "Home Services",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
        new: true
      },
      {
        id: 2,
        name: "Legal Practice",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
        new: false
      },
      {
        id: 3,
        name: "Medical Clinic",
        image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800",
        new: true
      }
    ]
  };
  
  return (
    <section className="w-full py-20">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Templates</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Industry-specific <span className="text-gradient-primary">templates</span> for small businesses
          </h2>
          <p className="text-muted-foreground text-lg">
            Launch your website faster with our professionally designed templates optimized for SEO and conversions.
          </p>
        </div>
        
        <Tabs defaultValue="restaurant" className="w-full" onValueChange={(value) => setActiveTab(value)}>
          <div className="flex justify-center mb-12">
            <TabsList className="glass px-2 py-1">
              <TabsTrigger value="restaurant" className="text-sm px-4 py-2 data-[state=active]:bg-primary/10">
                Restaurant
              </TabsTrigger>
              <TabsTrigger value="portfolio" className="text-sm px-4 py-2 data-[state=active]:bg-primary/10">
                Portfolio
              </TabsTrigger>
              <TabsTrigger value="services" className="text-sm px-4 py-2 data-[state=active]:bg-primary/10">
                Local Services
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="restaurant" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {templates.restaurant.map((template) => (
                <div key={template.id} className="bento-cell overflow-hidden group">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    {template.new && (
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-blue-500">New</Badge>
                      </div>
                    )}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={template.image} 
                        alt={template.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{template.name}</h3>
                  <Button variant="outline" size="sm" className="mt-2">
                    Preview
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="portfolio" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {templates.portfolio.map((template) => (
                <div key={template.id} className="bento-cell overflow-hidden group">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    {template.new && (
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-blue-500">New</Badge>
                      </div>
                    )}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={template.image} 
                        alt={template.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{template.name}</h3>
                  <Button variant="outline" size="sm" className="mt-2">
                    Preview
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="services" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {templates.services.map((template) => (
                <div key={template.id} className="bento-cell overflow-hidden group">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    {template.new && (
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-blue-500">New</Badge>
                      </div>
                    )}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={template.image} 
                        alt={template.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{template.name}</h3>
                  <Button variant="outline" size="sm" className="mt-2">
                    Preview
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-12">
          <Button variant="default" size="lg" className="gap-2">
            View All Templates <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
