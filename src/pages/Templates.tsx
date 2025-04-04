
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Templates = () => {
  return (
    <>
      <Helmet>
        <title>Templates | BentoBloom</title>
        <meta name="description" content="Explore our collection of beautiful, responsive website templates." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Website Templates</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Browse our collection of professionally designed templates for your small business.
          </p>
          {/* Template content would go here */}
          <div className="text-center my-24">
            <p className="text-muted-foreground">Template content coming soon.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Templates;
