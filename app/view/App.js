import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../store/courses';
import { fetchCourses } from '../store/courses';
import { deleteCourse } from '../store/courses';

const App = () => {
  const [choiceOne, setChoiceOne] = useState('');
  const [choiceTwo, setChoiceTwo] = useState('');
  const [choiceThree, setChoiceThree] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const courses = useSelector(state => state.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);


  const handleSubmit = (e) => {
    e.preventDefault();
    //validation happens here
    if (choiceOne.toLowerCase() !== 'calculus' && choiceTwo.toLowerCase() !== 'calculus' && choiceThree.toLowerCase() !== 'calculus') {
      setError(true);
      setSubmitted(false);
    } else {
      dispatch(createCourse({choiceOne, choiceTwo, choiceThree}));
      setSubmitted(true);
      setError(false);
      setChoiceOne('');
      setChoiceTwo('');
      setChoiceThree('');
    }
  }

  const handleDelete = (id) => {
    dispatch(deleteCourse(id));
  }

  return (
    <div className="container">
      <form className='form-choices' onSubmit={handleSubmit}>
        <h2>Choose Your Courses</h2>
        <div className='form-containers'>
          <label htmlFor='choiceOne'>Course 1: </label>
          <input className='form-input' name='choiceOne' value={choiceOne} onChange={(e) => setChoiceOne(e.target.value)} />
        </div><br />
        <div className='form-containers'>
          <label htmlFor='choiceTwo'>Course 2: </label>
          <input className='form-input' name='choiceTwo' value={choiceTwo} onChange={(e) => setChoiceTwo(e.target.value)} />
        </div><br />
        <div className='form-containers'>
          <label htmlFor='choiceThree'>Course 3: </label>
          <input className='form-input' name='choiceThree' value={choiceThree} onChange={(e) => setChoiceThree(e.target.value)} />
        </div><br/>
        <input id="form-button" className='form-input' type='submit' value='Submit' />
      </form>
      {error && <h3 id="error">One course must be calculus</h3>}
      {submitted && <h3>Your courses have been submitted</h3>}
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Course 1</th>
              <th>Course 2</th>
              <th>Course 3</th>
            </tr>
          </thead>
          {courses && courses.map(element => (
          <tbody key={element.id}>
            <tr>
              <td>{courses.indexOf(element) + 1}</td>
              <td>{element.choiceOne}</td>
              <td>{element.choiceTwo}</td>
              <td>{element.choiceThree}</td>
              <td><button id="delete-button" onClick={() => handleDelete(element.id)}>X</button></td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}

export default App;
