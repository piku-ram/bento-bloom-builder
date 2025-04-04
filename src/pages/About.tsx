
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | BentoBloom</title>
        <meta name="description" content="Learn about BentoBloom and our mission to empower small businesses with beautiful websites." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">About BentoBloom</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Our mission is to make beautiful, SEO-optimized websites accessible to small businesses.
          </p>
          {/* About content would go here */}
          <div className="text-center my-24">
            <p className="text-muted-foreground">About content coming soon.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
