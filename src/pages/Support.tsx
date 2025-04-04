
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Support | BentoBloom</title>
        <meta name="description" content="Get help and support for your BentoBloom website." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Support</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Get the help you need to succeed with BentoBloom.
          </p>
          {/* Support content would go here */}
          <div className="text-center my-24">
            <p className="text-muted-foreground">Support content coming soon.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Support;
