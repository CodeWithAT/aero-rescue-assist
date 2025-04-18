
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IssueReporter from "@/components/IssueReporter";
import AdminDroneControl from "@/components/AdminDroneControl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RequestAssistancePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Request Assistance</h1>
            <p className="text-gray-400">
              Need help on the road? Request immediate drone assistance with just a few clicks.
            </p>
          </div>
          
          <Tabs defaultValue="user" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="user">User Request</TabsTrigger>
              <TabsTrigger value="admin">Admin Control Panel</TabsTrigger>
            </TabsList>
            <TabsContent value="user" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <IssueReporter />
                </div>
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">Request Process</h2>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="mr-4 h-10 w-10 flex-shrink-0 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Select Your Issue</h3>
                        <p className="text-gray-400">Choose the type of problem you're experiencing with your vehicle.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 h-10 w-10 flex-shrink-0 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Provide Details</h3>
                        <p className="text-gray-400">Add any relevant information that will help us assist you more effectively.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 h-10 w-10 flex-shrink-0 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Drone Dispatch</h3>
                        <p className="text-gray-400">We'll dispatch the nearest drone to your location with necessary equipment.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 h-10 w-10 flex-shrink-0 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <span className="font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Track Live Status</h3>
                        <p className="text-gray-400">Monitor the drone's location and ETA in real-time through our tracking interface.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 rounded-lg bg-blue-900/20 border border-blue-800">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-blue-400 mb-1">Location Services</h4>
                        <p className="text-gray-300 text-sm">
                          Make sure your location services are enabled so we can accurately pinpoint your position. Your current location will be automatically detected when you submit your request.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="admin" className="mt-0">
              <AdminDroneControl />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RequestAssistancePage;
