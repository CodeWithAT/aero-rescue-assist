
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent",
      description: "Your message has been received. We'll respond shortly.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: [
        "+1 (800) 123-4567",
        "+1 (415) 987-6543"
      ]
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: [
        "support@aerorescue.com",
        "info@aerorescue.com"
      ]
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      details: [
        "123 Tech Park, Suite 500",
        "San Francisco, CA 94107"
      ]
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Hours",
      details: [
        "24/7 Emergency Support",
        "Office: 9am - 6pm (Mon-Fri)"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How soon can I expect a drone to arrive?",
      answer: "Our drones typically arrive within 15-30 minutes of your request, depending on your location and current demand. Urban areas usually experience faster response times."
    },
    {
      question: "What areas do you currently service?",
      answer: "We currently service all major metropolitan areas and interstate highways in the United States. We're rapidly expanding to cover more rural areas and secondary roads."
    },
    {
      question: "Can the drones handle all types of vehicle repairs?",
      answer: "Our drones are equipped to handle common roadside issues like flat tires, dead batteries, lockouts, and minor mechanical problems. For more complex repairs, they can provide diagnostics and coordinate additional help."
    },
    {
      question: "How do I sign up for a subscription plan?",
      answer: "You can sign up for a subscription plan through our app or website. Simply create an account, select your preferred plan, and enter your payment information. Your subscription will be active immediately."
    },
    {
      question: "What happens if the drone can't fix my problem?",
      answer: "If the drone determines it cannot resolve your issue, it will immediately coordinate additional assistance, such as a tow truck or specialized technician, based on your subscription plan."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions about our drone assistance services? Our team is ready to help you with any inquiries or support needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="bg-muted border-gray-700"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="bg-muted border-gray-700"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                        Phone Number (Optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="bg-muted border-gray-700"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-muted border border-gray-700 rounded-md p-2 text-white"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="subscription">Subscription Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please describe your inquiry in detail"
                      className="w-full bg-muted border border-gray-700 rounded-md p-3 text-white"
                      required
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full md:w-auto"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            <div>
              <div className="glass-card rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 h-10 w-10 flex-shrink-0 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-400">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Live Chat</h2>
                </div>
                <p className="text-gray-400 mb-6">
                  Need immediate assistance? Connect with our support team through live chat for real-time help.
                </p>
                <Button className="w-full">Start Live Chat</Button>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold mb-3 text-lg">{item.question}</h3>
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Emergency Support</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              For urgent roadside assistance, please use our emergency hotline or the emergency button in our app.
            </p>
            <div className="inline-flex items-center bg-primary/10 border border-primary rounded-lg px-6 py-3">
              <Phone className="h-5 w-5 text-primary mr-3" />
              <span className="text-xl font-bold">1-800-AERO-911</span>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
