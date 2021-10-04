import {Typography, Link, Box} from "@material-ui/core";
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
        "That's not it. The correct answer is virtual!",
      explanation: "",
      point: "1",
    },
    {
      question:
        "Augmented reality and ________ reality both allow the user to see all or part of the word around them.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Virtual", "Mixed", "Extended"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Great job!",
      messageForIncorrectAnswer: "Not quite. It's actually mixed reality!",
      explanation: "",
      point: "1",
    },
    {
      question:
        "Mixed reality combines elements of AR and VR to allow real-world and digital objects to interact.",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "1",
      messageForCorrectAnswer: "You got it!",
      messageForIncorrectAnswer: "This ones true!",
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
      messageForCorrectAnswer:
        "Great job! There are ways to experience AR, VR, and MR with your phone!",
      messageForIncorrectAnswer:
        "Not quite! There are ways to experience AR, VR, and MR with your phone!",
      explanation: "",
      point: "1",
    },
    {
      question: "Do you want to learn more about AR, VR, and MR?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Absolutely!", "Not today"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Click next to find resources to explore!",
      messageForIncorrectAnswer:
        "If you change your mind, click next to find resources!",
      explanation: "",
      point: "1",
    },
  ],
};

export const XRQuiz = () => {
  const renderCustomResultPage = (obj) => {
    return (
      <>
        <h2>You have completed the quiz!</h2>
        <h2>
          You got {obj.numberOfCorrectAnswers} out of {obj.numberOfQuestions}{" "}
          correct.
        </h2>
        <Box sx={{mt: 4}}>
          <Typography variant="h2" align="center">
            Learn More!
          </Typography>
          <Typography variant="h6" align="center">
            <Link
              color="textSecondary"
              href="https://www.fi.edu/difference-between-ar-vr-and-mr"
            >
              AR vs VR vs MR
            </Link>
            <br />
            <Link
              color="textSecondary"
              href="https://www.fi.edu/what-is-augmented-reality"
            >
              Augmented Reality
            </Link>
            <br />
            <Link
              color="textSecondary"
              href="https://www.fi.edu/tech/what-is-mixed-reality"
            >
              Mixed Reality
            </Link>
            <br />
            <Link
              color="textSecondary"
              href="https://www.theverge.com/a/best-vr-headset-oculus-rift-samsung-gear-htc-vive-virtual-reality"
            >
              Virtual Reality Headsets
            </Link>
          </Typography>
        </Box>
        <Box sx={{mt: 4}}>
          <Typography align="center">
            Photos by{" "}
            <Link color="textSecondary" href="https://unsplash.com/@wildhoney">
              John Fowler
            </Link>
            ,{" "}
            <Link color="textSecondary" href="https://unsplash.com/@sidekix">
              Sidekix Media
            </Link>
            ,{" "}
            <Link color="textSecondary" href="https://unsplash.com/@agromov">
              Anatoliy Gromov
            </Link>
            , and{" "}
            <Link color="textSecondary" href="https://unsplash.com/@ivalex">
              Ivan Aleksic
            </Link>{" "}
            on{" "}
            <Link color="textSecondary" href="https://unsplash.com">
              Unsplash
            </Link>
            .
          </Typography>
        </Box>
      </>
    );
  };

  return (
    <Quiz
      quiz={quiz}
      showInstantFeedback={true}
      showDefaultResult={false}
      customResultPage={renderCustomResultPage}
    />
  );
};
