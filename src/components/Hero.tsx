
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in">
            <span className="text-primary">AI-Powered</span> Drone Assistance
            <br />When You Need It Most
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Revolutionary roadside assistance with intelligent drones. Fast response, real-time tracking, and expert help for any vehicle emergency.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => navigate('/request-assistance')}
            >
              Request Assistance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => navigate('/services')}
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="glass p-6 rounded-xl">
              <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-400">Drones deployed in under 5 minutes with average arrival time of 15 minutes.</p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Diagnostics</h3>
              <p className="text-gray-400">Advanced AI systems diagnose vehicle issues accurately before human assistance arrives.</p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Nationwide Coverage</h3>
              <p className="text-gray-400">Our network of drone stations provides coverage across all major highways and urban areas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
