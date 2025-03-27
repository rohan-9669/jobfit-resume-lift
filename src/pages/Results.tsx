
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, Share2, CheckCircle, XCircle, FileText, BarChart4, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AtsScore from '@/components/AtsScore';
import { Card, CardContent } from '@/components/ui/card';

const Results = () => {
  const navigate = useNavigate();
  
  const mockImprovements = [
    {
      type: "keyword",
      status: "added",
      text: "Data analytics experience and use of visualization tools",
      reason: "Matches key requirements in job description"
    },
    {
      type: "format",
      status: "fixed",
      text: "Properly formatted bullet points for better readability",
      reason: "ATS may misinterpret inconsistent formatting"
    },
    {
      type: "enhancement",
      status: "added",
      text: "Quantified achievements with specific metrics",
      reason: "Demonstrates concrete impact of your work"
    },
    {
      type: "removal",
      status: "removed",
      text: "Removed outdated skills and irrelevant experience",
      reason: "Creates cleaner, more focused document"
    }
  ];
  
  const mockKeywords = [
    { keyword: "data analytics", status: "matched", count: 3 },
    { keyword: "project management", status: "matched", count: 2 },
    { keyword: "stakeholder communication", status: "added", count: 1 },
    { keyword: "SQL", status: "matched", count: 2 },
    { keyword: "Python", status: "matched", count: 1 },
    { keyword: "AWS", status: "missing", count: 0 }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-fade-in">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Your Enhanced Resume
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  We've optimized your resume for maximum ATS compatibility
                </p>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-slate-900 shadow-sm rounded-xl border border-gray-200 dark:border-gray-800 p-6 animate-slide-up">
                  <Tabs defaultValue="enhanced">
                    <TabsList className="mb-6">
                      <TabsTrigger value="enhanced">Enhanced Resume</TabsTrigger>
                      <TabsTrigger value="original">Original Resume</TabsTrigger>
                      <TabsTrigger value="comparison">Compare</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="enhanced">
                      <div className="space-y-6">
                        <div className="text-center">
                          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">John Doe</h2>
                          <p className="text-gray-600 dark:text-gray-400">Senior Software Engineer</p>
                          <div className="flex justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <span>john.doe@example.com</span>
                            <span>•</span>
                            <span>(123) 456-7890</span>
                            <span>•</span>
                            <span>San Francisco, CA</span>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2 mb-3">
                            Professional Summary
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            Senior Software Engineer with 8+ years of experience developing scalable web applications and cloud-based solutions. Proficient in data analytics, full-stack development, and leading cross-functional teams to deliver high-quality software products. Strong background in improving system performance and implementing data-driven solutions.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2 mb-3">
                            Experience
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Senior Software Engineer</h4>
                                  <p className="text-blue-600 dark:text-blue-400">TechCorp Inc.</p>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2018 - Present</p>
                              </div>
                              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc ml-5">
                                <li>Led the development of data analytics dashboard that increased client reporting efficiency by 40%</li>
                                <li>Implemented cloud-based architecture using AWS, resulting in 30% improvement in application performance</li>
                                <li>Managed a team of 5 developers, establishing Agile methodologies that reduced delivery time by 25%</li>
                                <li>Collaborated with stakeholders to gather requirements and translate business needs into technical solutions</li>
                              </ul>
                            </div>
                            
                            <div>
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Software Developer</h4>
                                  <p className="text-blue-600 dark:text-blue-400">InnoSoft Solutions</p>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2015 - 2018</p>
                              </div>
                              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc ml-5">
                                <li>Developed and maintained RESTful APIs for e-commerce platform serving 100K+ daily users</li>
                                <li>Created data visualization tools for marketing team that increased campaign effectiveness by 20%</li>
                                <li>Optimized database queries resulting in 50% faster data retrieval times</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2 mb-3">
                            Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {["JavaScript", "Python", "React", "Node.js", "SQL", "AWS", "Docker", "CI/CD", "RESTful APIs", "Git", "Data Analytics", "Agile/Scrum", "Project Management", "Stakeholder Communication"].map((skill) => (
                              <span 
                                key={skill}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2 mb-3">
                            Education
                          </h3>
                          <div>
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium text-gray-800 dark:text-gray-200">MS in Computer Science</h4>
                                <p className="text-blue-600 dark:text-blue-400">Stanford University</p>
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">2013 - 2015</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="original">
                      <div className="space-y-6 opacity-80">
                        <div className="text-center">
                          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">John Doe</h2>
                          <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
                          <div className="flex justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <span>john.doe@example.com</span>
                            <span>•</span>
                            <span>(123) 456-7890</span>
                            <span>•</span>
                            <span>San Francisco, CA</span>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Summary
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            Software Engineer with experience in web development. Skills in full-stack programming and team projects. Looking for new opportunities to grow in the tech industry.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Work History
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Software Engineer</h4>
                                  <p className="text-gray-600 dark:text-gray-400">TechCorp Inc.</p>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2018 - Present</p>
                              </div>
                              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                <li>Developed dashboard for clients</li>
                                <li>Used AWS for cloud hosting</li>
                                <li>Managed developer team</li>
                                <li>Worked with business stakeholders</li>
                              </ul>
                            </div>
                            
                            <div>
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Software Developer</h4>
                                  <p className="text-gray-600 dark:text-gray-400">InnoSoft Solutions</p>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2015 - 2018</p>
                              </div>
                              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                <li>Made APIs for e-commerce site</li>
                                <li>Built tools for marketing</li>
                                <li>Fixed slow database queries</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Skills
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            JavaScript, Python, React, Node.js, SQL, AWS, Docker, Git, REST APIs
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Education
                          </h3>
                          <div>
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium text-gray-800 dark:text-gray-200">MS in Computer Science</h4>
                                <p className="text-gray-600 dark:text-gray-400">Stanford University</p>
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">2013 - 2015</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="comparison">
                      <div className="space-y-6">
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                          <div className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-2 shrink-0" />
                            <p className="text-sm text-yellow-800 dark:text-yellow-200">
                              This view highlights the differences between your original and enhanced resume
                            </p>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 dark:border-gray-800 rounded-lg">
                          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-t-lg flex items-center">
                            <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                            <span className="font-medium text-gray-700 dark:text-gray-300">Changes Summary</span>
                          </div>
                          <div className="p-4">
                            <div className="space-y-3">
                              {mockImprovements.map((improvement, index) => (
                                <div key={index} className="flex items-start">
                                  {improvement.status === "added" && (
                                    <span className="mt-0.5 mr-2 h-4 w-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                      <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                                    </span>
                                  )}
                                  {improvement.status === "fixed" && (
                                    <span className="mt-0.5 mr-2 h-4 w-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                      <CheckCircle className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                    </span>
                                  )}
                                  {improvement.status === "removed" && (
                                    <span className="mt-0.5 mr-2 h-4 w-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                                      <XCircle className="h-3 w-3 text-red-600 dark:text-red-400" />
                                    </span>
                                  )}
                                  <div>
                                    <p className="text-sm text-gray-800 dark:text-gray-200">{improvement.text}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{improvement.reason}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              
              <div className="lg:col-span-1 space-y-6">
                <Card className="animate-slide-up stagger-1">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                      <BarChart4 className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      ATS Score
                    </h3>
                    <div className="flex justify-center">
                      <AtsScore score={85} previousScore={58} />
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Job Description Keyword Matches
                      </h4>
                      <div className="space-y-2">
                        {mockKeywords.map((item) => (
                          <div key={item.keyword} className="flex items-center justify-between">
                            <div className="flex items-center">
                              {item.status === "matched" && (
                                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                              )}
                              {item.status === "added" && (
                                <span className="h-4 w-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                                  <span className="h-2 w-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                                </span>
                              )}
                              {item.status === "missing" && (
                                <XCircle className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
                              )}
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {item.keyword}
                              </span>
                            </div>
                            <span className="text-xs py-0.5 px-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                              {item.count}×
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="animate-slide-up stagger-2">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Next Steps
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">1</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Download your enhanced resume</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Available in PDF and DOCX formats</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">2</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Review missing keywords</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Consider adding relevant missing skills</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">3</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Apply with confidence</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Your resume is now optimized for this job</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 flex justify-center">
                      <Button 
                        onClick={() => navigate('/upload')}
                        variant="outline"
                        className="w-full"
                      >
                        Optimize for Another Job
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Results;
