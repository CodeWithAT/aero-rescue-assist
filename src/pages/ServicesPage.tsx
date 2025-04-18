
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      id: 'tire-service',
      title: 'Tire Assistance',
      description: 'Flat tire or blowout? Our drones deliver tire repair kits or replacement tires directly to your location.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeWidth="1.5" d="M14.5 9.5l3-3M9.5 14.5l-3 3M9.5 9.5l-3-3M14.5 14.5l3 3" />
        </svg>
      ),
      details: [
        'Tire pressure check and inflation',
        'Puncture repair for minor damage',
        'Tire replacement coordination',
        'Real-time guidance via video link'
      ]
    },
    {
      id: 'battery-service',
      title: 'Battery Services',
      description: 'Dead battery? Our drones can deliver jump starters and provide guidance for battery replacement.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 6H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10v4M10 10v4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 10h10M7 14h10" />
        </svg>
      ),
      details: [
        'Portable jump starter delivery',
        'Battery testing and diagnostics',
        'Temporary power solutions',
        'Battery replacement guidance'
      ]
    },
    {
      id: 'fuel-service',
      title: 'Fuel Delivery',
      description: 'Run out of gas? Our drones can bring emergency fuel to get you to the nearest gas station.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13h6" />
        </svg>
      ),
      details: [
        'Emergency fuel delivery (up to 2 gallons)',
        'Eco-friendly fuel options',
        'Route planning to nearest station',
        'Fuel system diagnostic support'
      ]
    },
    {
      id: 'diagnose-service',
      title: 'Diagnostics',
      description: 'Our AI-powered drones can perform detailed diagnostics to identify the issue before help arrives.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      details: [
        'Advanced OBD-II error code reading',
        'Visual inspection via drone camera',
        'AI-powered issue identification',
        'Repair cost estimation'
      ]
    },
    {
      id: 'lockout-service',
      title: 'Lockout Assistance',
      description: 'Locked your keys in the car? Our specialized drones carry tools to help you regain access safely.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11V7a5 5 0 0110 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      ),
      details: [
        'Key retrieval tools delivery',
        'Secure locksmith coordination',
        'Remote entry assistance',
        'Smart key programming support'
      ]
    },
    {
      id: 'emergency-service',
      title: 'Emergency Support',
      description: 'In case of accidents or emergencies, our drones can arrive quickly with first aid kits and emergency supplies.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      details: [
        'First aid kit delivery',
        'Scene assessment via drone camera',
        'Emergency services coordination',
        'Traffic management assistance'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Our Services</h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                AeroRescue offers a comprehensive range of drone-assisted roadside services to get you back on the road quickly and safely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="glass-card rounded-xl p-6 hover:translate-y-[-8px] transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-center mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.location.href = '/request-assistance'}
                  >
                    Request Service
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
                    <p className="text-gray-400 mb-6">
                      Don't wait until you're stranded. AeroRescue provides immediate drone assistance for any roadside emergency, 24/7.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/request-assistance">
                        <Button size="lg" className="w-full md:w-auto">
                          Request Help Now
                        </Button>
                      </Link>
                      <Link to="/tracking">
                        <Button size="lg" variant="outline" className="w-full md:w-auto">
                          Track Current Drone
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-muted rounded-xl p-6">
                    <div className="flex items-start mb-4">
                      <AlertCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Emergency Protocol</h3>
                        <p className="text-gray-400 text-sm">
                          For severe emergencies, our system automatically notifies local emergency services while dispatching a drone to provide immediate assistance.
                        </p>
                      </div>
                    </div>
                    <div className="bg-background/40 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Emergency Hotline</h4>
                      <div className="text-2xl font-bold text-primary mb-1">1-800-AERO-911</div>
                      <p className="text-gray-400 text-sm">
                        Available 24/7 for immediate assistance when you can't use the app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <SubscriptionPlans />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
