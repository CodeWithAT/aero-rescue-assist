
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Car, Battery, Fuel, Wrench, AlertTriangle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type IssueType = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
};

const IssueReporter = () => {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const { toast } = useToast();

  const issues: IssueType[] = [
    {
      id: 'flat-tire',
      title: 'Flat Tire',
      icon: <Car className="h-6 w-6" />,
      description: 'Tire is punctured or deflated and needs replacement or repair.'
    },
    {
      id: 'battery',
      title: 'Battery Issues',
      icon: <Battery className="h-6 w-6" />,
      description: 'Vehicle won\'t start due to battery depletion or malfunction.'
    },
    {
      id: 'fuel',
      title: 'Out of Fuel',
      icon: <Fuel className="h-6 w-6" />,
      description: 'Vehicle has run out of fuel or has fuel system problems.'
    },
    {
      id: 'mechanical',
      title: 'Mechanical Failure',
      icon: <Wrench className="h-6 w-6" />,
      description: 'Engine or transmission problem preventing vehicle operation.'
    },
    {
      id: 'accident',
      title: 'Accident',
      icon: <AlertTriangle className="h-6 w-6" />,
      description: 'Vehicle involved in a collision or accident requiring assistance.'
    },
    {
      id: 'other',
      title: 'Other Issue',
      icon: <Info className="h-6 w-6" />,
      description: 'Any other issue not listed above.'
    },
  ];

  const handleSubmit = () => {
    if (!selectedIssue) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select an issue before submitting.",
      });
      return;
    }

    toast({
      title: "Request Submitted",
      description: "Your assistance request has been received. A drone is being dispatched.",
    });

    // In a real app, this would send the data to an API
    console.log('Issue submitted:', {
      issueType: selectedIssue,
      additionalInfo: additionalInfo,
    });
  };

  return (
    <div className="glass-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Report Vehicle Issue</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Select Issue Type</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {issues.map((issue) => (
            <button
              key={issue.id}
              className={`p-4 rounded-lg flex flex-col items-center text-center transition-all ${
                selectedIssue === issue.id 
                  ? 'bg-primary/20 border border-primary' 
                  : 'bg-muted border border-transparent hover:border-gray-700'
              }`}
              onClick={() => setSelectedIssue(issue.id)}
            >
              <div className={`mb-2 ${selectedIssue === issue.id ? 'text-primary' : 'text-gray-400'}`}>
                {issue.icon}
              </div>
              <div className="font-medium">{issue.title}</div>
            </button>
          ))}
        </div>
      </div>
      
      {selectedIssue && (
        <div className="mb-6 animate-fade-in">
          <h3 className="text-lg font-medium mb-3">Additional Details</h3>
          <textarea
            className="w-full bg-muted rounded-lg border border-gray-700 p-3 text-white"
            rows={4}
            placeholder="Please provide any additional details about your issue..."
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          ></textarea>
        </div>
      )}
      
      <Button 
        className="w-full"
        size="lg"
        onClick={handleSubmit}
      >
        Submit & Request Assistance
      </Button>
    </div>
  );
};

export default IssueReporter;
