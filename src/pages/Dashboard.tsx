
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, BarChart4, Calendar, Lock, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

interface ResumeItem {
  id: string;
  jobTitle: string;
  company: string;
  createdAt: string;
  atsScore: number;
  status: 'completed' | 'processing';
}

const Dashboard = () => {
  // Mock data for resume builds
  const [resumes, setResumes] = useState<ResumeItem[]>([
    {
      id: '1',
      jobTitle: 'Software Engineer',
      company: 'Google',
      createdAt: '2024-04-05',
      atsScore: 92,
      status: 'completed'
    }
  ]);
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: 'Jane Doe',
    email: 'jane@example.com',
    tier: 'free',
    buildsRemaining: 0,
    buildsTotal: 1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Your Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage your resume builds and subscription
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link to="/upload">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Resume
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold">{userData.buildsTotal}</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Resumes</p>
              </div>
              
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    <BarChart4 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold">{userData.buildsRemaining}</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Builds Remaining</p>
              </div>
              
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <Badge className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 capitalize">
                      {userData.tier === 'free' ? 'Free' : 'Premium'}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {userData.tier === 'free' ? 
                    'Free tier (1 resume)' : 
                    'Premium tier (20 resumes/month)'}
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Your Resumes
                </h2>
              </div>
              
              {resumes.length > 0 ? (
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                  {resumes.map((resume) => (
                    <div key={resume.id} className="p-6 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {resume.jobTitle}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {resume.company}
                          </p>
                          <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                            Created on {new Date(resume.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <div className="text-sm font-medium mr-2">ATS Score:</div>
                            <div className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              {resume.atsScore}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/comparison?id=${resume.id}`}>Compare</Link>
                            </Button>
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
                              <Link to={`/results?id=${resume.id}`}>
                                <Download className="h-4 w-4 mr-1" /> Download
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No resumes yet
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Create your first tailored resume to get started
                  </p>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link to="/upload">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Create Resume
                    </Link>
                  </Button>
                </div>
              )}
            </div>
            
            {userData.tier === 'free' && (
              <div className="mt-8 bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800/50 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Need more resumes?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Upgrade to Premium for $12/month and get 20 resume builds!
                  </p>
                </div>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white whitespace-nowrap">
                  <Link to="/pricing">
                    <Lock className="mr-2 h-4 w-4" />
                    Upgrade to Premium
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
