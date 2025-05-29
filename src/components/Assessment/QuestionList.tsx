import React from 'react';
import { QuestionCard, type Question } from './QuestionCard';

interface QuestionListProps {
  questions: Question[];
  onRelevanceChange: (questionId: string, newSelection: 'relevant' | 'non-relevant' | 'none') => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, onRelevanceChange }) => {
  return (
    <div className="flex flex-col gap-6">
      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          id={question.id}
          questionNumber={(index + 1).toString().padStart(2, '0')}
          questionText={question.text}
          hintText={question.hint}
          isRelevant={question.isRelevant}
          isNonRelevant={question.isNonRelevant}
          onRelevanceChange={onRelevanceChange}
        />
      ))}
    </div>
  );
};

export default QuestionList;
