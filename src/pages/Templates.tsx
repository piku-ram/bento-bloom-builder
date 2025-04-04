
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Templates = () => {
  const templateCategories = [
    { id: "restaurants", name: "Restaurants", count: 8 },
    { id: "services", name: "Services", count: 12 },
    { id: "portfolio", name: "Portfolio", count: 7 },
    { id: "retail", name: "Retail", count: 9 },
    { id: "health", name: "Health & Wellness", count: 6 },
    { id: "education", name: "Education", count: 5 },
  ];
  
  const featuredTemplates = [
    {
      id: 1,
      title: "Culinary Delight",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      description: "Perfect for restaurants and cafes with a modern, inviting design.",
      popular: true,
    },
    {
      id: 2,
      title: "Service Pro",
      category: "Local Services",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      description: "Ideal for plumbers, electricians, and other service businesses.",
      popular: false,
    },
    {
      id: 3,
      title: "Portfolio Plus",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
      description: "Showcase your creative work with this elegant portfolio template.",
      popular: true,
    },
    {
      id: 4,
      title: "Retail Revolution",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      description: "Drive online sales with this conversion-focused design.",
      popular: false,
    },
    {
      id: 5,
      title: "Wellness Center",
      category: "Health",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
      description: "A calming design for wellness services and health professionals.",
      popular: false,
    },
    {
      id: 6,
      title: "Learning Hub",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      description: "Engage students and parents with this education-focused template.",
      popular: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Templates | BentoBloom</title>
        <meta name="description" content="Explore our collection of beautiful, responsive website templates." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Website Templates</h1>
            <p className="text-xl text-muted-foreground">
              Browse our collection of professionally designed templates for your small business.
              Each template is SEO-optimized and fully responsive.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {templateCategories.map((category) => (
              <Button key={category.id} variant="outline" className="rounded-full">
                {category.name} <Badge variant="secondary" className="ml-2">{category.count}</Badge>
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{template.category}</Badge>
                    {template.popular && (
                      <Badge variant="secondary">Popular</Badge>
                    )}
                  </div>
                  <CardTitle className="mt-2">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button variant="default" className="w-full">Preview</Button>
                  <Button variant="outline" className="w-full">Use Template</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" variant="outline">
              Load More Templates
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Templates;
