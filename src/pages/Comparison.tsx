
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface KeywordMatch {
  word: string;
  original: boolean;
  optimized: boolean;
}

interface ResumeComparison {
  id: string;
  jobTitle: string;
  company: string;
  originalScore: number;
  optimizedScore: number;
  keywordMatches: KeywordMatch[];
  improvementPoints: string[];
}

const Comparison = () => {
  const [searchParams] = useSearchParams();
  const resumeId = searchParams.get('id') || '1';
  
  // Mock data for demonstration
  const [comparisonData, setComparisonData] = useState<ResumeComparison>({
    id: resumeId,
    jobTitle: 'Software Engineer',
    company: 'Google',
    originalScore: 60,
    optimizedScore: 92,
    keywordMatches: [
      { word: 'JavaScript', original: true, optimized: true },
      { word: 'React', original: true, optimized: true },
      { word: 'TypeScript', original: false, optimized: true },
      { word: 'Node.js', original: true, optimized: true },
      { word: 'API Development', original: false, optimized: true },
      { word: 'Agile methodology', original: false, optimized: true },
      { word: 'Problem-solving', original: true, optimized: true },
      { word: 'CI/CD', original: false, optimized: true },
    ],
    improvementPoints: [
      'Added missing technical keywords like TypeScript and API Development',
      'Improved job title alignment with the target position',
      'Enhanced bullet points to emphasize quantifiable achievements',
      'Restructured experience section to highlight relevant skills',
      'Optimized formatting for better ATS readability'
    ]
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <Button variant="outline" size="sm" className="mb-4" asChild>
                    <Link to="/dashboard">
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      Back to Dashboard
                    </Link>
                  </Button>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Resume Comparison
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {comparisonData.jobTitle} at {comparisonData.company}
                  </p>
                </div>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link to={`/results?id=${resumeId}`}>
                    <Download className="h-4 w-4 mr-2" />
                    Download Optimized Resume
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ATS Score Comparison */}
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 lg:col-span-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  ATS Score Improvement
                </h2>
                
                <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex flex-1 flex-col items-center">
                    <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Original Resume</div>
                    <div className="relative w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-2">
                      <div className="absolute inset-0 rounded-full border-4 border-red-500" style={{ clipPath: `polygon(0 0, 100% 0, 100% ${100 - comparisonData.originalScore}%, 0 ${100 - comparisonData.originalScore}%)` }}></div>
                      <div className="text-2xl font-bold">{comparisonData.originalScore}</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ATS Score</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <ArrowRight className="hidden md:block h-8 w-8 text-gray-400" />
                    <ArrowRight className="block md:hidden rotate-90 h-8 w-8 text-gray-400" />
                  </div>
                  
                  <div className="flex flex-1 flex-col items-center">
                    <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Optimized Resume</div>
                    <div className="relative w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-2">
                      <div className="absolute inset-0 rounded-full border-4 border-green-500" style={{ clipPath: `polygon(0 0, 100% 0, 100% ${100 - comparisonData.optimizedScore}%, 0 ${100 - comparisonData.optimizedScore}%)` }}></div>
                      <div className="text-2xl font-bold">{comparisonData.optimizedScore}</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ATS Score</div>
                  </div>
                </div>
              </div>
              
              {/* Keyword Analysis */}
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Keyword Analysis
                </h2>
                
                <div className="space-y-3">
                  {comparisonData.keywordMatches.map((keyword, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="font-medium">{keyword.word}</span>
                      <div className="flex items-center space-x-8">
                        <div className="w-20 text-center">
                          {keyword.original ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                          <span className="text-xs text-gray-500">Original</span>
                        </div>
                        <div className="w-20 text-center">
                          {keyword.optimized ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                          <span className="text-xs text-gray-500">Optimized</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                  {comparisonData.keywordMatches.filter(k => !k.original && k.optimized).length} new keywords added
                </div>
              </div>
              
              {/* Improvements Made */}
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Improvements Made
                </h2>
                
                <ul className="space-y-3">
                  {comparisonData.improvementPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-800 dark:text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Next Steps
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Your resume has been optimized to achieve a high ATS score. Download it and start applying!
                  </p>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link to={`/results?id=${resumeId}`}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Optimized Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Comparison;
