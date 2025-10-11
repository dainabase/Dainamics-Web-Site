
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dainamics-background flex flex-col">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center px-4 py-32">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-bold mb-4 text-gradient-primary glow">404</h1>
          <p className="text-xl md:text-2xl text-dainamics-light mb-8">
            Oops! The page you're looking for doesn't exist
          </p>
          <Button
            asChild
            className="bg-dainamics-primary hover:bg-dainamics-primary/90 text-white btn-glow"
          >
            <a href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
