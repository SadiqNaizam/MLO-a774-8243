import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header'; // Relative path for project component

interface MainAppLayoutProps {
  children: React.ReactNode; // For main content area
  footerSlot?: React.ReactNode; // For content to be placed in the footer area
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, footerSlot, className }) => {
  return (
    <div className={cn(
      'grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen bg-background text-foreground',
      className
    )}>
      <Header />

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <footer className="h-20 bg-background border-t border-border">
        <div className="h-full w-full mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 flex items-center">
          {/* This div acts as the content area within the footer, applying consistent padding and alignment.
              The "p-4" requirement from Layout Requirements.footer is met by py-4 and horizontal padding.
              "flex items-center" vertically centers content if it's smaller than the footer's inner height.
              If ScreenerNotesField (or other content in footerSlot) needs specific flex behavior like 'flex-col',
              it should manage that internally or be wrapped accordingly when passed to footerSlot.
          */}
          {footerSlot}
        </div>
      </footer>
    </div>
  );
};

export default MainAppLayout;
