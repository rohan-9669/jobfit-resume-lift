
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, Upload, Zap, BarChart4, Download } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How JobFit Works
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our AI-powered platform optimizes your resume to get past ATS systems and land more interviews
              </p>
            </div>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Upload className="w-12 h-12" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-3">1. Upload Your Resume</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Start by uploading your current resume in PDF or DOCX format. Our system will securely store your document and prepare it for analysis.
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Supports multiple file formats (PDF, DOCX, RTF)
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your data is encrypted and secure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex justify-center md:order-last">
                  <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Zap className="w-12 h-12" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-3">2. AI Analysis</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our advanced AI analyzes your resume against the job description to identify gaps, missing keywords, and opportunities for improvement.
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Powered by the latest natural language processing technology
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Identifies key skills and experience gaps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <BarChart4 className="w-12 h-12" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-3">3. Optimization Suggestions</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Receive detailed recommendations to improve your ATS score while maintaining your authentic experience and qualifications.
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Get specific recommendations for each section
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        See your ATS compatibility score improve in real-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex justify-center md:order-last">
                  <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Download className="w-12 h-12" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-3">4. Download & Apply</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Download your enhanced resume in multiple formats and start applying to jobs with confidence.
                  </p>
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Export in PDF, DOCX, or plain text formats
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Track your application success rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-6">Ready to Optimize Your Resume?</h3>
              <a href="/upload" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
