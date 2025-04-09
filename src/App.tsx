
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import Upload from '@/pages/Upload';
import Analysis from '@/pages/Analysis';
import Results from '@/pages/Results';
import Comparison from '@/pages/Comparison';
import HowItWorks from '@/pages/HowItWorks';
import Pricing from '@/pages/Pricing';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import NotFound from '@/pages/NotFound';
import ActionBar from '@/components/ActionBar';
import { Toaster } from "@/components/ui/toaster";
import './App.css';

function App() {
  return (
    <>
      <Toaster />
      <ActionBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/results" element={<Results />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
