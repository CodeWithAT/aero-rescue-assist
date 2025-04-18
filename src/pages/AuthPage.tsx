
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";

const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to AeroRescue</h1>
            <p className="text-gray-400">
              Sign in to access your account or create a new one to get started with our drone assistance services.
            </p>
          </div>
          
          <AuthForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthPage;
