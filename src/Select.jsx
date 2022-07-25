
const Select = ({startQuiz}) => {
  
  let val = null;
 
  return (
    <div className="container main-container">
      <div className="row">
        <div className="col-10 mx-auto pt-3 text-center ">
         
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            onChange={(e)=> val = e.target.value }
          >
            <option>Select Subject</option>
            <option value="cs">Computer</option>
            <option value="chem">Chemistry</option>
            <option value="math">Mathematics</option>
          </select>
          <p className="p-md-5 lead"><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in voluptatibus autem est natus? Incidunt, quaerat molestiae praesentium aliquam delectus rem nobis repudiandae totam ipsum, sunt eveniet aperiam nulla. Vitae eveniet ullam sunt illum quam molestias blanditiis quod, velit aut aliquid illo consequuntur, explicabo incidunt beatae eos officia. At, dolore.</em></p>
          <button 
            type="button" 
            className="btn btn-dark"
            onClick={()=>startQuiz(val)}  
            >Start Quiz
          </button>

        </div>
      </div>
    </div>
  );
};

export default Select;
