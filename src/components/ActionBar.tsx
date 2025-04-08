
import React from 'react';
import PreviewButton from './PreviewButton';

/**
 * A component that contains action buttons for the application
 */
const ActionBar = () => {
  return (
    <div className="fixed top-20 right-6 z-50">
      <PreviewButton />
    </div>
  );
};

export default ActionBar;
