
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Guides = () => {
  return (
    <>
      <Helmet>
        <title>Guides | BentoBloom</title>
        <meta name="description" content="Step-by-step guides for creating and optimizing your website with BentoBloom." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Guides</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Step-by-step tutorials to help you create amazing websites.
          </p>
          {/* Guides content would go here */}
          <div className="text-center my-24">
            <p className="text-muted-foreground">Guides content coming soon.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Guides;
