import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import UseContext from './context';
import Quiz from './Quiz';
import Result from './Result';
import Select from './Select';
function App() {

  const [startPage, setStartPage]  = useState(true);
  const [quizPage, setQuizPage]  = useState(false);
  const [resultPage, setResultPage]  = useState(false);
  const [err, setErr] = useState(false);
 const {selectSubject} = UseContext();
  
   
  const startQuiz = (sub)=>{
    if (sub !== null) {
      setStartPage(false);
      setQuizPage(true);
      setErr(false);
      selectSubject(sub);
      return;
    }
    setErr(true);
  }

  const showResult = ()=>{
    setQuizPage(false);
    setResultPage(true);
  }

  if (startPage) {
         
  return (
    <>
       <div className="container p-5">
        <hr className="border border-dark border-3 opacity-75"></hr>
        <h1 className="text-center text-primary">Test Your Skills</h1>
        <hr className="border border-dark border-3 opacity-75"></hr>
        {err? <p className='text-center text-danger'>warning: select one option</p> : ''}
                <Select startQuiz={startQuiz}/>
       </div>
    </>
  );    
  }
  if (quizPage) {
         
  return (
    <>
       <div className="container p-5">
                <Quiz showResult={showResult}/>
       </div>
    </>
  );    
  }
  if (resultPage) {
         
  return (
    <>
       <div className="container p-5">
                <Result/>
       </div>
    </>
  );    
  }

}

export default App;
