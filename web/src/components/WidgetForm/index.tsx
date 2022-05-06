import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import questionImage from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  bug: {
    title: 'Bugs',
    image: {
      source: bugImage, 
      alt: 'Image on one inset'
    },
  },
  feature: {
    title: 'Melhorias',
    image: {
      source: ideaImage, 
      alt: 'Image to New Feature'
    },
  },
  other: {
    title: 'Outros',
    image: {
      source: questionImage, 
      alt: 'Outros'
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const handleRestartFeedback = () => {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {!feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
        ) : (
          <FeedbackContentStep 
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
          />
        )}
      <footer className="text-xs text-neutral-400">
      Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a> 
      </footer>
    </div>
  )
}