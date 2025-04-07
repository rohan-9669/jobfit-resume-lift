
import { Link } from 'react-router-dom';
import { CheckCircle2, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonLink, 
  popular = false
}: { 
  name: string; 
  price: string; 
  description: string; 
  features: { included: boolean; text: string }[]; 
  buttonText: string; 
  buttonLink: string; 
  popular?: boolean;
}) => {
  return (
    <div className={`bg-white dark:bg-slate-900 rounded-xl shadow-sm border ${popular ? 'border-purple-500 dark:border-purple-500' : 'border-gray-200 dark:border-gray-800'} p-6 md:p-8 flex flex-col h-full relative ${popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
          <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{description}</p>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
          {price !== 'Free' && <span className="text-gray-600 dark:text-gray-400 ml-2">/month</span>}
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            ) : (
              <X className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
            )}
            <span className={`text-sm ${feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'}`}>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <div>
        <Button asChild className={`w-full ${popular ? 'bg-purple-600 hover:bg-purple-700 text-white' : ''}`} variant={popular ? 'default' : 'outline'}>
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Free',
      price: 'Free',
      description: 'Try us out with one free resume',
      features: [
        { included: true, text: '1 resume build per account' },
        { included: true, text: 'AI-powered resume optimization' },
        { included: true, text: 'ATS score analysis' },
        { included: true, text: 'PDF download' },
        { included: false, text: 'Multiple resume versions' },
        { included: false, text: 'Priority support' },
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup',
      popular: false
    },
    {
      name: 'Premium',
      price: '$12',
      description: 'Perfect for active job seekers',
      features: [
        { included: true, text: '20 resume builds per month' },
        { included: true, text: 'AI-powered resume optimization' },
        { included: true, text: 'ATS score analysis' },
        { included: true, text: 'PDF download' },
        { included: true, text: 'Multiple resume versions' },
        { included: true, text: 'Priority support' },
      ],
      buttonText: 'Upgrade Now',
      buttonLink: '/signup',
      popular: true
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Start with a free resume and upgrade when you're ready
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-3xl">
              {pricingTiers.map((tier, index) => (
                <PricingTier key={index} {...tier} />
              ))}
            </div>
            
            <div className="mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">How many resumes can I create with the free tier?</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">You can create one free resume with our service. This gives you a chance to see the quality and effectiveness of our AI optimization.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Can I cancel my Premium subscription anytime?</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your billing period.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">What does "20 resume builds" actually mean?</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">This means you can create 20 different optimized resumes tailored for different jobs each month with the Premium plan.</p>
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

export default Pricing;
