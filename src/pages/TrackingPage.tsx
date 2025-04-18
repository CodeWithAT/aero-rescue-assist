
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DroneMap from "@/components/DroneMap";
import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare, AlertTriangle, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TrackingPage = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const { toast } = useToast();

  const handleContactDriverClick = () => {
    toast({
      title: "Contacting Service Tech",
      description: "Connecting you to the service technician...",
    });
  };

  const handleMessageDriverClick = () => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the service technician.",
    });
  };

  const handleEmergencyClick = () => {
    toast({
      variant: "destructive",
      title: "Emergency Alert",
      description: "Emergency services have been notified. Stay calm and wait for assistance.",
    });
  };

  const issueDetails = {
    requestId: "REQ-7829364",
    status: "Drone En Route",
    issue: "Flat Tire - Front Driver Side",
    requestTime: "10:32 AM",
    estimatedArrival: "10:47 AM",
    userLocation: "37.7749, -122.4194",
    serviceTech: "Alex Johnson"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Live Assistance Tracking</h1>
            <p className="text-gray-400">
              Track the status and location of your drone assistance in real-time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 lg:order-2 h-[500px]">
              <DroneMap />
            </div>
            
            <div className="lg:col-span-1 lg:order-1">
              <div className="glass-card rounded-xl p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Request Details</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Request ID:</span>
                    <span className="font-medium">{issueDetails.requestId}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded-full text-sm font-medium">
                      {issueDetails.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Issue:</span>
                    <span className="font-medium">{issueDetails.issue}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Requested:</span>
                    <span>{issueDetails.requestTime}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">ETA:</span>
                    <span className="text-primary font-medium">{issueDetails.estimatedArrival}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Your Location:</span>
                    <span>{issueDetails.userLocation}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400">Service Technician</div>
                        <div className="font-medium">{issueDetails.serviceTech}</div>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={handleContactDriverClick}
                        >
                          <PhoneCall className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={handleMessageDriverClick}
                        >
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button
                  variant="outline"
                  className="flex items-center justify-center border-yellow-600 text-yellow-500 hover:bg-yellow-900/20"
                  onClick={handleEmergencyClick}
                >
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Emergency
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center"
                >
                  <Truck className="h-5 w-5 mr-2" />
                  Need Towing
                </Button>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-3">Repair Progress</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium">Request Received</span>
                        <span className="text-sm text-gray-400">10:32 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium">Drone Dispatched</span>
                        <span className="text-sm text-gray-400">10:34 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 animate-pulse">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium">Drone En Route</span>
                        <span className="text-sm text-gray-400">Now</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center opacity-50">
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium">Drone Arrived</span>
                        <span className="text-sm text-gray-400">Pending</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center opacity-50">
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium">Service Complete</span>
                        <span className="text-sm text-gray-400">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrackingPage;
