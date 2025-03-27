
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Analysis = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  
  const steps = [
    "Extracting resume content...",
    "Analyzing format and structure...",
    "Identifying key skills and experience...",
    "Comparing with job description...",
    "Generating optimization recommendations...",
    "Calculating ATS score..."
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/results');
          }, 1000);
          return 100;
        }
        
        const newProgress = prevProgress + (100 / (steps.length * 10));
        
        // Update the current step based on progress
        if (newProgress > (currentStep + 1) * (100 / steps.length)) {
          setCurrentStep((prevStep) => 
            prevStep < steps.length - 1 ? prevStep + 1 : prevStep
          );
        }
        
        return newProgress;
      });
    }, 300);
    
    return () => clearInterval(interval);
  }, [currentStep, navigate, steps.length]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Analyzing Your Resume
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI is working to optimize your resume and improve your ATS score
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 shadow-sm rounded-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 animate-slide-up">
              <div className="flex flex-col items-center">
                {progress < 100 ? (
                  <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                    <Loader2 className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-spin" />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </div>
                )}
                
                <Progress value={progress} className="w-full h-2 mb-8" />
                
                <div className="w-full space-y-4">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      {index < currentStep ? (
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0" />
                      ) : index === currentStep ? (
                        <div className="h-5 w-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin shrink-0" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border border-gray-300 dark:border-gray-700 shrink-0" />
                      )}
                      <span 
                        className={
                          index < currentStep 
                            ? "text-gray-600 dark:text-gray-300" 
                            : index === currentStep 
                            ? "text-blue-600 dark:text-blue-400" 
                            : "text-gray-400 dark:text-gray-600"
                        }
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="w-full pt-8 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    This process typically takes about 60 seconds
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="border-gray-300 dark:border-gray-700"
                    onClick={() => navigate('/')}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Analysis;
