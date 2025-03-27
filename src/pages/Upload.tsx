
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BriefcaseIcon, Building, GraduationCap, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResumeUploader from '@/components/ResumeUploader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Upload = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 animate-fade-in">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Upload Your Resume
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Get your resume optimized for ATS systems in minutes
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 shadow-sm rounded-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 animate-slide-up">
              <div className="space-y-8">
                <ResumeUploader />
                
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Job Details
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="job-title">Job Title</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <BriefcaseIcon className="h-4 w-4 text-gray-400" />
                          </div>
                          <Input 
                            id="job-title" 
                            placeholder="e.g. Software Engineer" 
                            className="pl-10"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Building className="h-4 w-4 text-gray-400" />
                          </div>
                          <Input 
                            id="company" 
                            placeholder="e.g. Acme Inc." 
                            className="pl-10"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="job-description">Job Description</Label>
                      <Textarea 
                        id="job-description" 
                        placeholder="Paste the job description here" 
                        rows={5}
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        For best results, include the full job description
                      </p>
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <Button 
                        disabled={!jobTitle || !jobDescription}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 animate-fade-in">
              <p>By uploading your resume, you agree to our <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Upload;
