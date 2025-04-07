
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled || isMobileMenuOpen 
          ? 'bg-white/80 backdrop-blur-md dark:bg-slate-900/80 shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                JobFitAI
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-10">
            <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/upload" active={location.pathname === "/upload"}>Create Resume</NavLink>
            <NavLink to="/how-it-works" active={location.pathname === "/how-it-works"}>How It Works</NavLink>
            <NavLink to="/pricing" active={location.pathname === "/pricing"}>Pricing</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" active={location.pathname === "/"}>Home</MobileNavLink>
            <MobileNavLink to="/upload" active={location.pathname === "/upload"}>Create Resume</MobileNavLink>
            <MobileNavLink to="/how-it-works" active={location.pathname === "/how-it-works"}>How It Works</MobileNavLink>
            <MobileNavLink to="/pricing" active={location.pathname === "/pricing"}>Pricing</MobileNavLink>
            <MobileNavLink to="/dashboard" active={location.pathname === "/dashboard"}>Dashboard</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-5 space-x-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active: boolean;
}

const NavLink = ({ to, children, active }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
      active ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"
    )}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, active }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      "block px-3 py-2 rounded-md text-base font-medium transition-colors",
      active
        ? "bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
    )}
  >
    {children}
  </Link>
);

export default Navbar;
