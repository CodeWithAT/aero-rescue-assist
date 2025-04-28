import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type PlanFeature = {
  text: string;
  available: boolean;
};

type Plan = {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  popular?: boolean;
};

const SubscriptionPlans = () => {
  const { toast } = useToast();

  const plans: Plan[] = [
    {
      name: "Basic",
      price: "$9.99",
      description: "Essential drone assistance for occasional travelers",
      features: [
        { text: "Basic drone assistance", available: true },
        { text: "Response time under 45 min", available: true },
        { text: "Limited to 3 calls per year", available: true },
        { text: "Standard diagnostics", available: true },
        { text: "Email support", available: true },
        { text: "Advanced diagnostics", available: false },
        { text: "Priority dispatch", available: false },
      ],
      buttonText: "Get Started",
    },
    {
      name: "Advanced",
      price: "$19.99",
      description: "Enhanced coverage for regular drivers",
      features: [
        { text: "Advanced drone assistance", available: true },
        { text: "Response time under 30 min", available: true },
        { text: "Limited to 6 calls per year", available: true },
        { text: "Advanced diagnostics", available: true },
        { text: "24/7 phone support", available: true },
        { text: "Real-time tracking", available: true },
        { text: "Priority dispatch", available: false },
      ],
      buttonText: "Subscribe Now",
      popular: true,
    },
    {
      name: "Premium",
      price: "$39.99",
      description: "Ultimate protection for frequent travelers",
      features: [
        { text: "Premium drone assistance", available: true },
        { text: "Response time under 15 min", available: true },
        { text: "Unlimited assistance calls", available: true },
        { text: "Comprehensive diagnostics", available: true },
        { text: "Dedicated support line", available: true },
        { text: "Real-time tracking", available: true },
        { text: "Priority dispatch", available: true },
      ],
      buttonText: "Go Premium",
    },
  ];

  const handleWhatsAppPayment = (plan: Plan) => {
    const message = `Hi, I would like to subscribe to the ${plan.name} plan for ${plan.price}/month`;
    const whatsappUrl = `https://wa.me/919997127833?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePaytmPayment = (plan: Plan) => {
    const paytmUrl = `paytmmp://pay?pa=9997127833@ptsbi&pn=Drone%20Assistance&am=${plan.price.replace('$', '')}&cu=INR&tn=${encodeURIComponent(`${plan.name} Plan Subscription`)}`;
    window.location.href = paytmUrl;
    
    // Fallback for desktop
    setTimeout(() => {
      if (document.hasFocus()) {
        toast({
          title: "Paytm App Not Found",
          description: "Please ensure you have Paytm app installed or use WhatsApp payment option.",
        });
      }
    }, 1000);
  };

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select a subscription plan that fits your needs. All plans include access to our drone assistance network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px] ${
                plan.popular ? 'ring-2 ring-primary relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400"> / month</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className={`w-full mb-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    >
                      {plan.buttonText}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Choose Payment Method</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Button
                        onClick={() => handleWhatsAppPayment(plan)}
                        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600"
                      >
                        Pay with WhatsApp
                      </Button>
                      <Button
                        onClick={() => handlePaytmPayment(plan)}
                        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600"
                      >
                        Pay with Paytm UPI
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className={`mr-2 ${feature.available ? 'text-primary' : 'text-gray-600'}`}>
                        <Check size={16} />
                      </span>
                      <span className={feature.available ? 'text-gray-300' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
