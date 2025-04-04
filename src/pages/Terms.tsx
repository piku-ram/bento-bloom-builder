
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | BentoBloom</title>
        <meta name="description" content="BentoBloom's terms of service." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          {/* Terms of Service content would go here */}
          <div className="prose max-w-none">
            <p>Terms of service content coming soon.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms;
