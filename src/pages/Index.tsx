
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Zap, BarChart4, Download, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const featuresElements = document.querySelectorAll('.feature-card');
    featuresElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      featuresElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pr-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                <span className="block">Optimize Your Resume</span>
                <span className="block text-blue-600 dark:text-blue-400">Land Your Dream Job</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Our AI-powered tool enhances your resume for better ATS scores, helping you get past application tracking systems and into the interview.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/upload">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/how-it-works">Learn More</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>100% free for basic features</span>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animate-slide-up stagger-1">
              <div className="relative mx-auto max-w-md">
                <div className="w-full h-full absolute -left-4 -top-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl"></div>
                <div className="w-full h-full absolute -right-4 -bottom-4 bg-blue-200 dark:bg-blue-800/30 rounded-xl"></div>
                <div className="relative bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="h-2.5 w-16 bg-gray-300 dark:bg-gray-600 rounded-full mb-2.5"></div>
                      <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-11/12"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-10/12"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-9/12"></div>
                  </div>
                  <div className="w-full h-20 rounded-lg bg-gray-100 dark:bg-gray-800 mb-4 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-3.5 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <div className="h-8 w-24 bg-blue-500 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section ref={featuresRef} className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How JobFit Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform analyzes and enhances your resume in seconds, making it optimized for Applicant Tracking Systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card opacity-0">
              <FeatureCard
                title="Upload Resume"
                description="Upload your existing resume in PDF or DOCX format in seconds."
                icon={Upload}
                delay={0}
              />
            </div>
            <div className="feature-card opacity-0">
              <FeatureCard
                title="AI Analysis"
                description="Our AI analyzes your resume against the job description to identify gaps."
                icon={Zap}
                delay={1}
              />
            </div>
            <div className="feature-card opacity-0">
              <FeatureCard
                title="Optimization"
                description="Get specific recommendations to improve your ATS score and stand out."
                icon={BarChart4}
                delay={2}
              />
            </div>
            <div className="feature-card opacity-0">
              <FeatureCard
                title="Download & Apply"
                description="Download your enhanced resume and start applying with confidence."
                icon={Download}
                delay={3}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">70%</div>
              <p className="text-gray-600 dark:text-gray-400">of resumes are rejected by ATS before a human sees them</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3x</div>
              <p className="text-gray-600 dark:text-gray-400">higher callback rate with our optimized resumes</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">94%</div>
              <p className="text-gray-600 dark:text-gray-400">of users report improved interview success</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to land your dream job?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Start optimizing your resume today and increase your chances of getting interviews.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/signup">
                Get Started for Free
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
