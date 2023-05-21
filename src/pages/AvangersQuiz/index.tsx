import * as React from "react";
import { questions } from "./questions";

import "./style.scss";

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [isHidden, setHidden] = React.useState(true);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setHidden(!isHidden);
  };

  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={isHidden ? "blurred" : ""}>{answer}</span>
      </p>
      <footer>
        <button onClick={handleToggle}>Toggle Answer</button>
      </footer>
    </article>
  );
};

const AvangersQuiz = () => {
  return (
    <main>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  );
};

export default AvangersQuiz;
