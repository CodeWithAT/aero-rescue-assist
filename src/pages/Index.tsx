
import Hero from "@/components/Hero";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Hero />
        
        <section className="py-20 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our innovative drone-based roadside assistance system gets you back on the road faster than ever before.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Request Assistance</h3>
                <p className="text-gray-400">
                  Use our app to request help with just a few taps. Our system automatically detects your location.
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Drone Dispatch</h3>
                <p className="text-gray-400">
                  The nearest drone is immediately dispatched to your location carrying necessary equipment.
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Assistance</h3>
                <p className="text-gray-400">
                  The drone arrives with tools and parts, allowing for immediate diagnostics and repairs.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/services">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn More About Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <SubscriptionPlans />
        </section>
        
        <section className="py-20 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose AeroRescue</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our revolutionary approach to roadside assistance sets new standards in the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <div className="mb-8">
                  <div className="flex items-start mb-4">
                    <div className="mr-4 bg-primary/20 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
                      <p className="text-gray-400">
                        Our drones can reach you up to 5x faster than traditional roadside assistance services, with an average response time of just 15 minutes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="mr-4 bg-primary/20 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
                      <p className="text-gray-400">
                        Our AI-powered drones use cutting-edge diagnostics to identify issues accurately and bring exactly what you need for repairs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
                      <p className="text-gray-400">
                        With drone stations across the country, we provide reliable assistance almost anywhere you go.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link to="/request-assistance">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request Assistance Now
                  </Button>
                </Link>
              </div>
              
              <div className="glass-card rounded-xl overflow-hidden">
                <div 
                  className="h-full bg-cover bg-center" 
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80")`,
                    minHeight: '400px'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
