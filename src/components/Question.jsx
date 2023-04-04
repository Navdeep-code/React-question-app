import { useState, useEffect } from "react";

export default function Question() {
  const [category, setcategory] = useState("");
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");
  const [revealed, setrevealed] = useState("");

  useEffect(() => {
    const getQuestion = async () => {
      let response = await fetch(
        "https://opentdb.com/api.php?amount=1&type=boolean"
      );
      let data = await response.json();
      console.log(data);
      setcategory(data.results[0].category);
      setquestion(data.results[0].question);
      setanswer(data.results[0].correct_answer);
      setrevealed(0);
    }
    getQuestion(); //run the async function we just defined
  }, []); //empty square brackets are an empty dependency array

  //Answer Reveal Function
  function reveal(e) {
    setrevealed(1);
  }
  //conditional rendering
  let answerDiv = "";
  if (revealed) {
    answerDiv = <div><p><strong>{answer}</strong></p></div>;
  }
  return (
    <div class="question">
      <h2>True or False</h2>
      <div><p><em>{category}</em></p></div>
      <h3>{question}</h3>
      {answerDiv}
      <div><button type="button" onClick={reveal}>Reveal answer</button></div>
    </div>
  );
}