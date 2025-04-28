
import React, { useEffect, useRef, useState } from 'react';

// Mock data for drone and user location
const initialDronePosition = { lat: 37.7837, lng: -122.4090 }; // Slightly away from user
const userPosition = { lat: 37.7749, lng: -122.4194 }; // San Francisco

// Helper type for our position objects
interface Position {
  lat: number;
  lng: number;
}

const DroneMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [droneMarker, setDroneMarker] = useState<google.maps.Marker | null>(null);
  const [dronePosition, setDronePosition] = useState<Position>(initialDronePosition);
  const [isLoaded, setIsLoaded] = useState(false);
  const [eta, setEta] = useState('12 minutes');

  // This would normally be loaded from an API key
  useEffect(() => {
    // This is a mock function - in a real application we'd load the actual Google Maps API
    const mockLoadGoogleMaps = () => {
      console.log("Google Maps would be loaded here with an API key");
      setIsLoaded(true);
    };

    mockLoadGoogleMaps();
  }, []);

  // Initialize map
  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    // This would be the real initialization in a production app
    console.log("Map would be initialized here");

    // Mock the map functionality by creating an empty object that satisfies the type
    const mockMap = {} as google.maps.Map;
    setMap(mockMap);
    
    // Create user marker
    console.log("User marker would be created at:", userPosition);
    
    // Create drone marker - mocked with an empty object that satisfies the type
    console.log("Drone marker would be created at:", initialDronePosition);
    const mockMarker = {} as google.maps.Marker;
    setDroneMarker(mockMarker);

    // For demo, simulate drone movement
    const interval = setInterval(() => {
      setDronePosition(currentPos => {
        // Move drone closer to user
        const newPos = {
          lat: currentPos.lat + (userPosition.lat - currentPos.lat) * 0.05,
          lng: currentPos.lng + (userPosition.lng - currentPos.lng) * 0.05
        };
        
        // Update ETA based on distance
        const distance = Math.sqrt(
          Math.pow(userPosition.lat - newPos.lat, 2) + 
          Math.pow(userPosition.lng - newPos.lng, 2)
        );
        
        // Convert rough distance to minutes (just for demo)
        const minutesLeft = Math.max(1, Math.round(distance * 1000));
        setEta(`${minutesLeft} minutes`);
        
        return newPos;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  // Update drone marker position
  useEffect(() => {
    if (droneMarker) {
      console.log("Drone marker would move to:", dronePosition);
      // In a real implementation, we would call:
      // droneMarker.setPosition(dronePosition);
    }
  }, [droneMarker, dronePosition]);

  return (
    <div className="w-full h-full rounded-xl overflow-hidden flex flex-col">
      <div className="p-4 bg-card">
        <h3 className="text-lg font-medium mb-2">Live Drone Tracking</h3>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Status: <span className="text-green-400">En Route</span></span>
          <span className="text-gray-400">ETA: <span className="text-primary">{eta}</span></span>
        </div>
      </div>
      
      <div className="relative flex-1 bg-muted">
        {/* Map placeholder - in a real app this would be the Google Map */}
        <div ref={mapRef} className="w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse-glow">
              <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zM9 3v.01M12 3v.01M15 3v.01M3 7.5h18M3 12h18M3 16.5h18" />
              </svg>
            </div>
            <p className="text-gray-300 mb-2">Live Map Visualization</p>
            <p className="text-gray-400 text-sm">
              In a production environment, this would display a real Google Maps interface tracking the drone's position in real-time.
            </p>
          </div>
        </div>
        
        {/* Overlay with drone info */}
        <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-lg">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <div>
              <div className="font-medium">Rescue Drone #4281</div>
              <div className="text-sm text-gray-400">
                Carrying: Jump Starter, Tire Kit, Basic Tools
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-muted p-2 rounded">
              <div className="text-gray-400">Distance</div>
              <div className="font-medium text-white">3.2 miles</div>
            </div>
            <div className="bg-muted p-2 rounded">
              <div className="text-gray-400">Speed</div>
              <div className="font-medium text-white">42 mph</div>
            </div>
            <div className="bg-muted p-2 rounded">
              <div className="text-gray-400">Battery</div>
              <div className="font-medium text-green-400">87%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneMap;
