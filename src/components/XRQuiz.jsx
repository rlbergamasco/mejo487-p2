import Quiz from "react-quiz-component";

const quiz = {
  quizTitle: "XR Quiz",
  quizSynopsis:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
  appLocale: {
    landingHeaderText: "<questionLength> Questions",
    question: "Question",
    startQuizBtn: "Start Quiz",
    resultFilterAll: "All",
    resultFilterCorrect: "Correct",
    resultFilterIncorrect: "Incorrect",
    nextQuestionBtn: "Next",
    resultPageHeaderText:
      "You have completed the quiz. You got <correctIndexLength> out of <questionLength> questions correct.",
  },
  questions: [
    {
      question: "Question 1",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["answer 1", "answer 2", "answer 3"],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "30",
    },
  ],
};

export const XRQuiz = () => {
  return <Quiz quiz={quiz} />;
};
