
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StationLocator from "@/components/StationLocator";

const StationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Station Locator</h1>
            <p className="text-gray-400">
              Find the nearest AeroRescue drone stations and repair centers in your area.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 mb-8">
            <StationLocator />
          </div>
          
          <div className="glass-card rounded-xl p-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">Station Information</h2>
                <p className="text-gray-400 mb-6">
                  Our strategically located drone stations ensure fast response times across the country. Each station is equipped with:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fleet of 5-15 specialized assistance drones</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Charging stations and maintenance facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Parts and repair supplies inventory</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technical support staff and mechanics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced AI control systems</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Coverage Area</h2>
                <p className="text-gray-400 mb-4">
                  Our network currently covers:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Major metropolitan areas</span>
                    <span className="text-green-400">100% coverage</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Interstate highways</span>
                    <span className="text-green-400">95% coverage</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span>State highways</span>
                    <span className="text-yellow-400">78% coverage</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Rural areas</span>
                    <span className="text-yellow-400">62% coverage</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  We're rapidly expanding our network with new stations being added every month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StationsPage;
