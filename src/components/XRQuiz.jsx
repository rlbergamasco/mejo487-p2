import Quiz from "react-quiz-component";

const quiz = {
  quizTitle:
    "Test your knowledge on Extended Reality! Extended Reality (XR) is an umbrella term for AR, VR, and MR",
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
      question:
        "________ reality fully immerses you in an experience and blocks out the outside world.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Augmented", "Virtual", "Mixed"],
      correctAnswer: "2",
      messageForCorrectAnswer: "You got it!",
      messageForIncorrectAnswer:
        "That's not it. The correct answer is Virtual!",
      explanation: "",
      point: "1",
    },
    {
      question:
        "All types of extended reality require you to purchase an expensive headset.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Great job!",
      messageForIncorrectAnswer:
        "There are ways to experience AR, VR, and MR with your phone!",
      explanation: "",
      point: "1",
    },
  ],
};

export const XRQuiz = () => {
  const renderCustomResultPage = (obj) => {
    console.log(obj);
    return (
      <>
        <h2>You have completed the quiz!</h2>
        <h2>
          You got {obj.numberOfCorrectAnswers} out of {obj.numberOfQuestions}{" "}
          correct.
        </h2>
      </>
    );
  };

  return (
    <Quiz
      quiz={quiz}
      showInstantFeedback={true}
      shuffle={true}
      showDefaultResult={false}
      customResultPage={renderCustomResultPage}
    />
  );
};
