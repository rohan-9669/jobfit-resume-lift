
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Zap, BarChart4, Download, CheckCircle2, FileText, Building, Briefcase } from 'lucide-react';
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
                <span className="block">Get Sureshot Shortlisting</span>
                <span className="block text-blue-600 dark:text-blue-400">With AI-Optimized Precision</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Our AI tailors your resume for each job application, ensuring an ATS score of 80+ and dramatically increasing your chances of being shortlisted.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/upload">
                    <Upload className="mr-2 h-5 w-5" />
                    Create Your Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/how-it-works">Learn More</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>1 free resume optimization for every user</span>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animate-slide-up stagger-1">
              <div className="relative mx-auto max-w-md">
                <div className="w-full h-full absolute -left-4 -top-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl"></div>
                <div className="w-full h-full absolute -right-4 -bottom-4 bg-blue-200 dark:bg-blue-800/30 rounded-xl"></div>
                <div className="relative bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                        <Building className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Google</div>
                        <div className="text-sm text-gray-500">Software Engineer</div>
                      </div>
                    </div>
                    <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      ATS Score: 92
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-11/12"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-10/12"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-9/12"></div>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1 text-gray-500" />
                      <span>Experience optimized</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      <span>Keywords added</span>
                    </div>
                  </div>
                  <div className="relative h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-4">
                    <div className="absolute left-0 top-0 h-full w-[92%] bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" /> Compare
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
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
              How JobFitAI Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform creates hyper-tailored resumes designed to pass ATS systems and impress hiring managers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card opacity-0">
              <FeatureCard
                title="Upload or Start Fresh"
                description="Upload your existing resume or start from scratch with our guided template."
                icon={Upload}
                delay={0}
              />
            </div>
            <div className="feature-card opacity-0">
              <FeatureCard
                title="Enter Job Details"
                description="Provide job title, company name, and paste the job description for perfect tailoring."
                icon={Briefcase}
                delay={1}
              />
            </div>
            <div className="feature-card opacity-0">
              <FeatureCard
                title="AI Optimization"
                description="Our AI ensures 80+ ATS score by optimizing keywords and formatting for your target role."
                icon={BarChart4}
                delay={2}
              />
            </div>
            <div className="feature-card opacity-0">
              <FeatureCard
                title="Download & Apply"
                description="Get your perfectly tailored resume in PDF format, ready to help you land that interview."
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
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">80+</div>
              <p className="text-gray-600 dark:text-gray-400">ATS score guaranteed on every optimized resume</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3x</div>
              <p className="text-gray-600 dark:text-gray-400">higher interview rate with hyper-tailored resumes</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1</div>
              <p className="text-gray-600 dark:text-gray-400">free resume build for every user</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to get shortlisted?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Create your first AI-optimized resume for free and dramatically increase your interview chances.
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
