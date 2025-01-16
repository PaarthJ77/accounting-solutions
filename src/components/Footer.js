import React from 'react';

const Footer = React.memo(() => {
  return (
    <footer className="bg-transparent py-4">
      <div className="container mx-auto flex justify-center">
        <p className="text-darkGreenDarker text-center mx-auto">&copy; 2025 Accounting Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
