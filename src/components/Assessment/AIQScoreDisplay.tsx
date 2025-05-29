import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export type AIQLevel = 'High' | 'Medium' | 'Low';

interface AIQScoreDisplayProps {
  aiqLevel: AIQLevel | null;
  className?: string;
}

const AIQScoreDisplay: React.FC<AIQScoreDisplayProps> = ({
  aiqLevel,
  className,
}) => {
  const levels: AIQLevel[] = ['High', 'Medium', 'Low'];

  return (
    <div className={cn('flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-card rounded-lg', className)}>
      <h3 className="text-base font-semibold text-foreground whitespace-nowrap">
        AIQ Level:
      </h3>
      <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
        {levels.map((level) => (
          <div key={level} className="flex items-center space-x-2">
            <Checkbox
              id={`aiq-${level.toLowerCase()}`}
              checked={aiqLevel === level}
              disabled // Auto-calculated, so display only
              aria-label={`AIQ Level ${level}`}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
              htmlFor={`aiq-${level.toLowerCase()}`}
              className="text-sm font-medium text-foreground/90 cursor-default"
            >
              {level}
            </Label>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-1 sm:mt-0 sm:ml-auto">
        (Auto calculated using above inputs)
      </p>
    </div>
  );
};

export default AIQScoreDisplay;
