
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Docs = () => {
  return (
    <>
      <Helmet>
        <title>Documentation | BentoBloom</title>
        <meta name="description" content="User guides and documentation for BentoBloom website builder." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Documentation</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Learn how to get the most out of BentoBloom.
          </p>
          {/* Documentation content would go here */}
          <div className="text-center my-24">
            <p className="text-muted-foreground">Documentation content coming soon.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Docs;
