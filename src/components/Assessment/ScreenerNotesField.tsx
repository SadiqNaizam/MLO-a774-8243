import React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ScreenerNotesFieldProps {
  notes: string;
  onNotesChange: (notes: string) => void;
  placeholder?: string;
  className?: string;
}

const ScreenerNotesField: React.FC<ScreenerNotesFieldProps> = ({
  notes,
  onNotesChange,
  placeholder = 'Enter screener notes or comments here...',
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onNotesChange(event.target.value);
  };

  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor="screener-notes" className="text-base font-semibold text-foreground">
        Screener Notes / Comments:
      </Label>
      <Textarea
        id="screener-notes"
        value={notes}
        onChange={handleChange}
        placeholder={placeholder}
        className="min-h-[80px] bg-input text-foreground border-border focus:ring-ring resize-none"
        rows={3}
      />
    </div>
  );
};

export default ScreenerNotesField;
