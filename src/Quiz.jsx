import React, { useState } from "react";
import UseContext from "./context";

const Quiz = ({ showResult }) => {

  
  const { questions, nextQuestion } = UseContext();
  // const [count, setCount] = useState(0);
  const [next, setNext] = useState(questions[0]);

  const {question, options} = next;
  // console.log(questions.state)

  const getAnswer = (e)=> {
    console.log(e.target.value);
  } 

 const Next = ()=>{
  //  console.log(count);
  // setCount(count+1);
  // console.log(count);
  setNext(question[1]);
 }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <hr className="border border-primary border-2 opacity-75" />
            <p className="lead">
             Q. {question}
            </p>
            <hr className="border border-primary border-2 opacity-75" />
            <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            onChange={getAnswer}
          >
            <option>Select Answer</option>
            <option value="0">{options[0]}</option>
            <option value="1">{options[1]}</option>
            <option value="2">{options[2]}</option>
            <option value="3">{options[3]}</option>
          </select>
          <button 
            type="button" 
            className="btn btn-dark"
            onClick={Next}
            >Next Question
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
