import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'h-16 bg-background text-foreground',
        'flex flex-col items-center justify-center',
        'border-b border-border',
        className
      )}
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-wide">
        AI QUOTIENT (AIQ) ASSESSMENT
      </h1>
      <p className="text-sm text-muted-foreground">
        SCREENING AI-FRIENDLY TALENT
      </p>
    </header>
  );
};

export default Header;
