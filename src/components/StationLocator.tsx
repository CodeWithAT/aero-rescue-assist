
import { useState } from 'react';
import { MapPin, Search, Navigation } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Mock data for drone stations
const mockStations = [
  {
    id: 1,
    name: "Downtown Tech Hub",
    address: "123 Market St, San Francisco, CA",
    distance: "1.2 miles",
    status: "Operational",
    drones: 8
  },
  {
    id: 2,
    name: "Mission District Station",
    address: "456 Valencia St, San Francisco, CA",
    distance: "2.5 miles",
    status: "Operational",
    drones: 5
  },
  {
    id: 3,
    name: "SoMa Repair Center",
    address: "789 Howard St, San Francisco, CA",
    distance: "3.7 miles",
    status: "Operational",
    drones: 12
  },
  {
    id: 4,
    name: "Marina Bay Outpost",
    address: "321 Chestnut St, San Francisco, CA",
    distance: "4.3 miles",
    status: "Limited",
    drones: 3
  },
  {
    id: 5,
    name: "Golden Gate Station",
    address: "987 Lombard St, San Francisco, CA",
    distance: "5.8 miles",
    status: "Operational",
    drones: 10
  }
];

const StationLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStation, setSelectedStation] = useState<number | null>(null);

  const filteredStations = mockStations.filter(station => 
    station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    station.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for stations by name or location..."
          className="w-full bg-muted rounded-lg border border-gray-700 pl-10 pr-4 py-3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 h-full">
        <div className="w-full sm:w-1/3 h-[300px] sm:h-auto overflow-y-auto pr-2">
          {filteredStations.map(station => (
            <div 
              key={station.id}
              className={`mb-3 p-4 rounded-lg cursor-pointer transition-all ${
                selectedStation === station.id 
                  ? 'bg-primary/20 border border-primary' 
                  : 'bg-muted hover:bg-muted/80 border border-transparent'
              }`}
              onClick={() => setSelectedStation(station.id)}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{station.name}</h3>
                <span className={`text-xs rounded-full px-2 py-1 ${
                  station.status === 'Operational' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'
                }`}>
                  {station.status}
                </span>
              </div>
              <div className="flex items-center text-gray-400 text-sm mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                {station.address}
              </div>
              <div className="flex justify-between text-gray-400 text-sm mt-2">
                <span>{station.distance}</span>
                <span>{station.drones} drones available</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full sm:w-2/3 bg-muted rounded-xl relative overflow-hidden">
          {/* Map placeholder - in a real app this would be a map component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <p className="text-gray-300 mb-2">Station Map Visualization</p>
              <p className="text-gray-400 text-sm">
                In a production environment, this would display an interactive map showing all nearby drone stations.
              </p>
            </div>
          </div>
          
          {selectedStation && (
            <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-lg animate-fade-in">
              <h3 className="font-medium mb-2">
                {mockStations.find(s => s.id === selectedStation)?.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {mockStations.find(s => s.id === selectedStation)?.address}
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Station
                </Button>
                <Button size="sm" className="flex-1">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Add the Phone icon that was used but not imported
const Phone = (props: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default StationLocator;
