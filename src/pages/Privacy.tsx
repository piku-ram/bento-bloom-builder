
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | BentoBloom</title>
        <meta name="description" content="BentoBloom's privacy policy." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          {/* Privacy Policy content would go here */}
          <div className="prose max-w-none">
            <p>Privacy policy content coming soon.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
