
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | BentoBloom</title>
        <meta name="description" content="Latest insights on small business websites, SEO, and web design." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Insights and tips for growing your small business online.
          </p>
          {/* Blog content would go here */}
          <div className="text-center my-24">
            <p className="text-muted-foreground">Blog content coming soon.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
