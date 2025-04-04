
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Features = () => {
  return (
    <>
      <Helmet>
        <title>Features | BentoBloom</title>
        <meta name="description" content="Discover the powerful features that make BentoBloom the best choice for small business websites." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Our Features</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore the tools and features that make BentoBloom the perfect solution for your business.
          </p>
          {/* Features content would go here */}
          <div className="text-center my-24">
            <p className="text-muted-foreground">Features content coming soon.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Features;
