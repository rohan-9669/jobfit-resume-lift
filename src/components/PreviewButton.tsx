
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

/**
 * A button component that opens the current page in a new tab
 */
const PreviewButton = () => {
  const handlePreviewClick = () => {
    try {
      // Get the current URL and open it in a new tab
      const currentUrl = window.location.href;
      window.open(currentUrl, '_blank');
      
      // Show success toast
      toast({
        title: "Page opened in new tab",
        description: "The current page has been opened in a new tab."
      });
    } catch (error) {
      // Show error toast if something goes wrong
      toast({
        title: "Error",
        description: "Could not open the page in a new tab. Please check your browser settings.",
        variant: "destructive"
      });
      console.error("Failed to open new tab:", error);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handlePreviewClick}
      className="flex items-center gap-2"
    >
      <ExternalLink className="h-4 w-4" />
      <span>Preview in New Tab</span>
    </Button>
  );
};

export default PreviewButton;
