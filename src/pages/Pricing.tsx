
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
    <div className={`bg-white dark:bg-slate-900 rounded-xl shadow-sm border ${popular ? 'border-blue-500 dark:border-blue-500' : 'border-gray-200 dark:border-gray-800'} p-6 md:p-8 flex flex-col h-full relative ${popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
          <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
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
        <Button asChild className={`w-full ${popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`} variant={popular ? 'default' : 'outline'}>
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Get started with essential features',
      features: [
        { included: true, text: '3 resume optimizations per month' },
        { included: true, text: 'Basic ATS compatibility analysis' },
        { included: true, text: 'PDF downloads' },
        { included: false, text: 'Advanced keyword optimization' },
        { included: false, text: 'Industry-specific suggestions' },
        { included: false, text: 'Priority support' },
      ],
      buttonText: 'Get Started',
      buttonLink: '/upload',
      popular: false
    },
    {
      name: 'Professional',
      price: '$9.99',
      description: 'For serious job seekers',
      features: [
        { included: true, text: 'Unlimited resume optimizations' },
        { included: true, text: 'Advanced ATS compatibility analysis' },
        { included: true, text: 'PDF & DOCX downloads' },
        { included: true, text: 'Advanced keyword optimization' },
        { included: true, text: 'Industry-specific suggestions' },
        { included: false, text: 'Priority support' },
      ],
      buttonText: 'Upgrade Now',
      buttonLink: '/signup',
      popular: true
    },
    {
      name: 'Premium',
      price: '$19.99',
      description: 'Complete career solution',
      features: [
        { included: true, text: 'Unlimited resume optimizations' },
        { included: true, text: 'Advanced ATS compatibility analysis' },
        { included: true, text: 'All document formats' },
        { included: true, text: 'Advanced keyword optimization' },
        { included: true, text: 'Industry-specific suggestions' },
        { included: true, text: 'Priority support' },
      ],
      buttonText: 'Go Premium',
      buttonLink: '/signup',
      popular: false
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
                Choose the plan that's right for you and start landing more interviews
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Can I cancel my subscription anytime?</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your billing period.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Is there a limit to how many resumes I can optimize?</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">The Basic plan includes 3 resume optimizations per month. Professional and Premium plans have unlimited optimizations.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Can I change plans later?</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Absolutely! You can upgrade or downgrade your plan at any time through your account settings.</p>
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
