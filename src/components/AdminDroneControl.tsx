
import { useState } from 'react';
import { Check, X, Send, AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock data for drone operations
const initialRequestsData = [
  {
    id: 'req-001',
    customer: 'John Smith',
    location: '37.7749, -122.4194',
    issue: 'Flat Tire',
    status: 'pending',
    time: '3 mins ago'
  },
  {
    id: 'req-002',
    customer: 'Emily Johnson',
    location: '37.7833, -122.4167',
    issue: 'Battery Issues',
    status: 'in-progress',
    time: '10 mins ago'
  },
  {
    id: 'req-003',
    customer: 'Michael Brown',
    location: '37.7694, -122.4862',
    issue: 'Out of Fuel',
    status: 'completed',
    time: '1 hour ago'
  },
  {
    id: 'req-004',
    customer: 'Jessica Davis',
    location: '37.8025, -122.4382',
    issue: 'Mechanical Failure',
    status: 'pending',
    time: '15 mins ago'
  }
];

const droneFleet = [
  { id: 'drone-001', status: 'available', battery: '92%', location: 'Mission District Station' },
  { id: 'drone-002', status: 'on-mission', battery: '67%', location: 'En route to req-002' },
  { id: 'drone-003', status: 'available', battery: '100%', location: 'Downtown Tech Hub' },
  { id: 'drone-004', status: 'charging', battery: '45%', location: 'SoMa Repair Center' },
  { id: 'drone-005', status: 'available', battery: '88%', location: 'Golden Gate Station' }
];

const AdminDroneControl = () => {
  const [requests, setRequests] = useState(initialRequestsData);
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [availableDrones, setAvailableDrones] = useState(droneFleet);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  const handleDispatchDrone = (requestId: string) => {
    const availableDrone = availableDrones.find(drone => drone.status === 'available');
    
    if (!availableDrone) {
      toast({
        variant: "destructive",
        title: "No Drones Available",
        description: "All drones are currently occupied. Please wait for one to become available.",
      });
      return;
    }
    
    // Update drone status
    setAvailableDrones(drones => 
      drones.map(drone => 
        drone.id === availableDrone.id 
          ? { ...drone, status: 'on-mission', location: `En route to ${requestId}` } 
          : drone
      )
    );
    
    // Update request status
    setRequests(requests => 
      requests.map(req => 
        req.id === requestId ? { ...req, status: 'in-progress' } : req
      )
    );
    
    toast({
      title: "Drone Dispatched",
      description: `${availableDrone.id} is now en route to assist with request ${requestId}.`,
    });
  };
  
  const handleCompleteRequest = (requestId: string) => {
    // Find the drone on this mission
    const assignedDrone = availableDrones.find(drone => 
      drone.status === 'on-mission' && drone.location.includes(requestId)
    );
    
    if (assignedDrone) {
      // Update drone status
      setAvailableDrones(drones => 
        drones.map(drone => 
          drone.id === assignedDrone.id 
            ? { ...drone, status: 'available', location: 'Returned to station', battery: '78%' } 
            : drone
        )
      );
    }
    
    // Update request status
    setRequests(requests => 
      requests.map(req => 
        req.id === requestId ? { ...req, status: 'completed' } : req
      )
    );
    
    toast({
      title: "Request Completed",
      description: `Request ${requestId} has been successfully completed.`,
    });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Data Refreshed",
        description: "The drone control panel has been updated with the latest information.",
      });
    }, 1500);
  };

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'pending':
        return 'bg-yellow-900/30 text-yellow-400';
      case 'in-progress':
        return 'bg-blue-900/30 text-blue-400';
      case 'completed':
        return 'bg-green-900/30 text-green-400';
      default:
        return 'bg-gray-900/30 text-gray-400';
    }
  };

  const getDroneStatusClass = (status: string) => {
    switch(status) {
      case 'available':
        return 'bg-green-900/30 text-green-400';
      case 'on-mission':
        return 'bg-blue-900/30 text-blue-400';
      case 'charging':
        return 'bg-yellow-900/30 text-yellow-400';
      default:
        return 'bg-gray-900/30 text-gray-400';
    }
  };

  return (
    <div className="w-full glass-card rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Drone Control Center</h2>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2"
          onClick={handleRefresh}
          disabled={isRefreshing}
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh Data
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assistance Requests */}
        <div>
          <h3 className="text-lg font-medium mb-4">Assistance Requests</h3>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {requests.map(request => (
              <div 
                key={request.id} 
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedRequest === request.id 
                    ? 'bg-primary/20 border border-primary' 
                    : 'bg-muted hover:bg-muted/80 border border-transparent'
                }`}
                onClick={() => setSelectedRequest(request.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{request.customer}</h4>
                    <p className="text-sm text-gray-400">{request.issue}</p>
                  </div>
                  <span className={`text-xs rounded-full px-2 py-1 ${getStatusClass(request.status)}`}>
                    {request.status === 'pending' && 'Pending'}
                    {request.status === 'in-progress' && 'In Progress'}
                    {request.status === 'completed' && 'Completed'}
                  </span>
                </div>
                <div className="flex justify-between text-gray-400 text-xs mt-2">
                  <span>Location: {request.location}</span>
                  <span>{request.time}</span>
                </div>
                {request.status === 'pending' && (
                  <Button 
                    size="sm" 
                    className="w-full mt-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDispatchDrone(request.id);
                    }}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Dispatch Drone
                  </Button>
                )}
                {request.status === 'in-progress' && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full mt-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCompleteRequest(request.id);
                    }}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Mark as Completed
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Drone Fleet */}
        <div>
          <h3 className="text-lg font-medium mb-4">Drone Fleet Status</h3>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {availableDrones.map(drone => (
              <div key={drone.id} className="p-4 rounded-lg bg-muted">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">{drone.id}</h4>
                  <span className={`text-xs rounded-full px-2 py-1 ${getDroneStatusClass(drone.status)}`}>
                    {drone.status}
                  </span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm mt-2">
                  <span>Location: {drone.location}</span>
                  <span>Battery: {drone.battery}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-yellow-900/20 border border-yellow-800">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-400 mb-1">System Alerts</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Drone-004 battery level low, charging at station</li>
                  <li>• Weather alert: High winds in Golden Gate area</li>
                  <li>• Maintenance required for Drone-002 after current mission</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDroneControl;
