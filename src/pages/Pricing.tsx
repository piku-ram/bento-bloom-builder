
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | BentoBloom</title>
        <meta name="description" content="Simple, transparent pricing for BentoBloom website builder." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Choose the plan that fits your business needs.
          </p>
          {/* Pricing content would go here */}
          <div className="text-center my-24">
            <p className="text-muted-foreground">Pricing content coming soon.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
