
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

/**
 * A button component that opens the current page in a new tab
 */
const PreviewButton = () => {
  const handlePreviewClick = () => {
    // Get the current URL and open it in a new tab
    const currentUrl = window.location.href;
    window.open(currentUrl, '_blank');
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
