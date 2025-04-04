
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | BentoBloom</title>
        <meta name="description" content="The page you are looking for doesn't exist or has been moved." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="container mx-auto">
            <div className="glass-card max-w-2xl mx-auto p-12 text-center">
              <h1 className="text-5xl font-bold mb-6">404</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Oops! The page you're looking for doesn't exist or has been moved.
              </p>
              <Button asChild size="lg">
                <Link to="/" className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
