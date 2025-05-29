import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { CheckSquare, Square } from 'lucide-react';

export interface Question {
  id: string;
  text: string;
  hint?: string;
  isRelevant: boolean;
  isNonRelevant: boolean;
}

interface QuestionCardProps {
  id: string;
  questionNumber: string;
  questionText: string;
  hintText?: string;
  isRelevant: boolean;
  isNonRelevant: boolean;
  onRelevanceChange: (questionId: string, newSelection: 'relevant' | 'non-relevant' | 'none') => void;
}

const CheckboxControl: React.FC<{
  label: string;
  checked: boolean;
  onClick: () => void;
  checkedColorClass: string;
}> = ({ label, checked, onClick, checkedColorClass }) => {
  const Icon = checked ? CheckSquare : Square;
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-sm font-medium text-foreground/80">{label}</span>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={onClick}
        className={cn(
          'p-1 rounded focus:outline-none focus:ring-2 focus:ring-ring',
          checked ? checkedColorClass : 'text-muted-foreground'
        )}
      >
        <Icon size={32} strokeWidth={checked ? 2.5 : 1.5} />
      </button>
    </div>
  );
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  questionNumber,
  questionText,
  hintText,
  isRelevant,
  isNonRelevant,
  onRelevanceChange,
}) => {

  const handleRelevantClick = () => {
    onRelevanceChange(id, isRelevant ? 'none' : 'relevant');
  };

  const handleNonRelevantClick = () => {
    onRelevanceChange(id, isNonRelevant ? 'none' : 'non-relevant');
  };

  return (
    <Card className="bg-card p-4 sm:p-6 shadow-md">
      <CardContent className="p-0 flex items-start gap-4">
        <div className="text-2xl font-semibold text-primary w-8 text-center pt-1">
          {questionNumber}
        </div>
        <div className="flex-grow">
          <p className="text-foreground leading-relaxed">
            {questionText}
          </p>
          {hintText && (
            <p className="text-sm text-muted-foreground mt-1 italic">
              {hintText}
            </p>
          )}
        </div>
        <div className="flex gap-6 ml-auto pl-4">
          <CheckboxControl
            label="Relevant"
            checked={isRelevant}
            onClick={handleRelevantClick}
            checkedColorClass="text-primary"
          />
          <CheckboxControl
            label="Non-Relevant"
            checked={isNonRelevant}
            onClick={handleNonRelevantClick}
            checkedColorClass="text-destructive"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
