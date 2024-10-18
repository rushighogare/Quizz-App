import { Question } from "./types";

export const questions: Question[] = [
  {
    id: "1",
    text: "Which animal is present in the given picture?",
    image: "https://img.freepik.com/free-photo/view-adorable-persian-domestic-cat_23-2151773881.jpg?semt=ais_hybrid",
    options: ["Dog", "Cat", "Duck", "Camel"],
    correctAnswers: ["Cat"],
    isMultipleCorrect: false,
  },
  {
    id: "2",
    text: "Who is founder of Upraised?",
    options: ["Satyan Mandela", "Mona Gandhi", "Vik Sinha", "Narayan Murthy"],
    correctAnswers: ["Mona Gandhi"],
    isMultipleCorrect: false,
  },
  {
    id: "3",
    text: "Which of the following are database management systems?",
    options: ["MongoDB", "CSS", "MySQL", "None of the above"],
    correctAnswers: ["MongoDB", "MySQL"],
    isMultipleCorrect: true
  },
  {
    id: "4",
    text: "Which of the following is not a built-in react hook?",
    options: ["useSection", "useNavigate", "useEffect", "useState"],
    correctAnswers: ["useSection"],
    isMultipleCorrect: false
  },
  {
    id: "5",
    text: "Which of the following are frameworks of CSS?",
    options: ["Bootstrap", "JavaScript", "React.js", "Tailwind"],
    correctAnswers: ["Bootstrap", "Tailwind"],
    isMultipleCorrect: true
  }
];

export default questions;
