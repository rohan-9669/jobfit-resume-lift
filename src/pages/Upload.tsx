
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BriefcaseIcon, Building, GraduationCap, AlertCircle, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResumeUploader from '@/components/ResumeUploader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';

const Upload = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [certifications, setCertifications] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [hasResume, setHasResume] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleStartFresh = () => {
    setHasResume(false);
  };
  
  const handleUploadResume = () => {
    setHasResume(true);
  };

  const handleSubmit = () => {
    if (!jobTitle || !company || !jobDescription) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, here we would submit the data to an API
    // For now, we'll just navigate to the analysis page
    navigate('/analysis');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 animate-fade-in">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Create Your Tailored Resume
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Get your resume optimized with 80+ ATS score in minutes
              </p>
            </div>
            
            {hasResume === null ? (
              <div className="bg-white dark:bg-slate-900 shadow-sm rounded-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 animate-slide-up">
                <h2 className="text-xl font-medium text-center mb-6">How would you like to start?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    onClick={handleUploadResume}
                    className="border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 rounded-xl p-6 text-center cursor-pointer transition-colors"
                  >
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Upload Existing Resume</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Upload your current resume and we'll optimize it
                    </p>
                  </div>
                  
                  <div 
                    onClick={handleStartFresh}
                    className="border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 rounded-xl p-6 text-center cursor-pointer transition-colors"
                  >
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BriefcaseIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Start From Scratch</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Create a new resume with our guided process
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-900 shadow-sm rounded-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 animate-slide-up">
                <Tabs defaultValue={hasResume ? "upload" : "details"}>
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="upload" disabled={!hasResume}>Resume Upload</TabsTrigger>
                    <TabsTrigger value="details">Job Details</TabsTrigger>
                  </TabsList>
                  
                  {hasResume && (
                    <TabsContent value="upload" className="space-y-6">
                      <ResumeUploader />
                      
                      <div className="flex justify-end pt-4">
                        <Button onClick={() => {
                          const detailsTab = document.querySelector('[data-value="details"]') as HTMLElement;
                          if (detailsTab) detailsTab.click();
                        }}>
                          Continue to Job Details
                        </Button>
                      </div>
                    </TabsContent>
                  )}
                  
                  <TabsContent value="details" className="space-y-6">
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        Job Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="job-title">Job Title <span className="text-red-500">*</span></Label>
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
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">Company <span className="text-red-500">*</span></Label>
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
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="job-description">Job Description <span className="text-red-500">*</span></Label>
                        <Textarea 
                          id="job-description" 
                          placeholder="Paste the full job description here" 
                          rows={6}
                          value={jobDescription}
                          onChange={(e) => setJobDescription(e.target.value)}
                          required
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          For best results, include the complete job description
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-6 space-y-6 border-t border-gray-200 dark:border-gray-800">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        Your Details
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="relevant-experience">Relevant Experience</Label>
                        <Textarea 
                          id="relevant-experience" 
                          placeholder="List your relevant work experience, skills, and achievements" 
                          rows={4}
                          value={relevantExperience}
                          onChange={(e) => setRelevantExperience(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="certifications">Certifications</Label>
                        <Input 
                          id="certifications" 
                          placeholder="e.g. AWS Certified, PMP, Scrum Master" 
                          value={certifications}
                          onChange={(e) => setCertifications(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="additional-notes">Additional Notes (Optional)</Label>
                        <Textarea 
                          id="additional-notes" 
                          placeholder="Any other information you want to include" 
                          rows={3}
                          value={additionalNotes}
                          onChange={(e) => setAdditionalNotes(e.target.value)}
                        />
                      </div>
                      
                      <div className="pt-4 flex justify-end">
                        <Button 
                          onClick={handleSubmit}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          disabled={!jobTitle || !company || !jobDescription}
                        >
                          Create Tailored Resume
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
            
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
