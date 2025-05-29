import React, { useState, useEffect } from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import QuestionList from '../components/Assessment/QuestionList';
import { type Question } from '../components/Assessment/QuestionCard';
import AIQScoreDisplay, { type AIQLevel } from '../components/Assessment/AIQScoreDisplay';
import ScreenerNotesField from '../components/Assessment/ScreenerNotesField';

// Dummy Data for Questions, reflecting the initial state seen in the UI mock/image
const DUMMY_QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'Tell me about a time when you adopted a new technology or tool on your own. What motivated you, and what was the result?',
    hint: '(Looks for curiosity and initiative)',
    isRelevant: true,
    isNonRelevant: false,
  },
  {
    id: 'q2',
    text: 'How do you stay up to date with new trends or tools in your field? Have you come across anything AI-related?',
    hint: '(Assesses awareness and interest)',
    isRelevant: false,
    isNonRelevant: true,
  },
  {
    id: 'q3',
    text: 'Have you experimented with any AI tools, even casually? (e.g., ChatGPT, image generators, automation bots)',
    hint: '(Gauges willingness to experiment)',
    isRelevant: true,
    isNonRelevant: false,
  },
  {
    id: 'q4',
    text: 'Can you think of a repetitive or time-consuming task in your role that could benefit from automation or AI?',
    hint: '(Tests ability to identify practical AI opportunities)',
    isRelevant: false,
    isNonRelevant: true,
  },
  {
    id: 'q5',
    text: 'Tell me about a time you had to change your way of working because of a new process or tool. How did you respond?',
    hint: '(Evaluates adaptability)',
    isRelevant: true,
    isNonRelevant: false,
  },
  {
    id: 'q6',
    text: 'Can you open an AI tool of your choice and show me how you would use it to solve something or get a result? Pls walk me through the process, step by step',
    hint: '', // No hint visible in image for Q6
    isRelevant: false,
    isNonRelevant: true,
  },
];

// Function to calculate AIQ Level based on the number of relevant answers
// This logic is derived from the example image where 3 relevant answers = Low AIQ.
const calculateAIQLevel = (questionsData: Question[]): AIQLevel => {
  const relevantCount = questionsData.filter(q => q.isRelevant).length;
  if (relevantCount <= 3) return 'Low';
  if (relevantCount <= 5) return 'Medium'; // Covers 4 and 5 relevant answers
  return 'High'; // Covers 6 relevant answers
};

const IndexPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>(DUMMY_QUESTIONS);
  const [aiqLevel, setAiqLevel] = useState<AIQLevel | null>(() => calculateAIQLevel(DUMMY_QUESTIONS));
  const [screenerNotes, setScreenerNotes] = useState<string>('');

  useEffect(() => {
    setAiqLevel(calculateAIQLevel(questions));
  }, [questions]);

  const handleRelevanceChange = (questionId: string, newSelection: 'relevant' | 'non-relevant' | 'none') => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q => {
        if (q.id === questionId) {
          return {
            ...q,
            isRelevant: newSelection === 'relevant',
            isNonRelevant: newSelection === 'non-relevant',
          };
        }
        return q;
      })
    );
  };

  const handleNotesChange = (notes: string) => {
    setScreenerNotes(notes);
  };

  return (
    <MainAppLayout
      footerSlot={
        <ScreenerNotesField
          notes={screenerNotes}
          onNotesChange={handleNotesChange}
          className="w-full" // Ensure it takes full width within the footer's padded container
        />
      }
    >
      {/* Main content wrapper. Layout requirements specify flex-col and gap-6. */}
      {/* MainAppLayout provides overall padding and max-width for this content area. */}
      <div className="flex flex-col gap-6">
        <QuestionList
          questions={questions}
          onRelevanceChange={handleRelevanceChange}
        />
        <AIQScoreDisplay aiqLevel={aiqLevel} />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
