import Quiz from "react-quiz-component";

const quiz = {
  quizTitle:
    "Test your knowledge on Extended Reality (AR, VR, and MR) by taking a quiz!",
  quizSynopsis: "",
  appLocale: {
    landingHeaderText: "",
    question: "Question",
    startQuizBtn: "Start Quiz",
    resultFilterAll: "All",
    resultFilterCorrect: "Correct",
    resultFilterIncorrect: "Incorrect",
    nextQuestionBtn: "Next",
    resultPageHeaderText: "You have completed the quiz!",
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
      point: "1",
    },
  ],
};

export const XRQuiz = () => {
  return <Quiz quiz={quiz} showInstantFeedback={true} shuffle={true} />;
};
