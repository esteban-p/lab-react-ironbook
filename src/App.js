import './App.css';
import { useState } from 'react';
import users from './users';
import SearchField from './SearchField';
import UsersList from './UsersList';

function App() {

  const [usersState, setUsersState] = useState(users);
  const [query, setQuery] = useState('');
  const [isStudent, setIsStudent] = useState(true);
  const [isTeacher, setIsTeacher] = useState(true);
  const [campus, setCampus] = useState('All');

  const handleIsStudentChange = event => {
    setIsStudent(!isStudent);
  }

  const handleIsTeacherChange = event => {
    setIsTeacher(!isTeacher);
  }

  const handleCampusChange = event => {
    setCampus(event.target.value);
  }

  // --- Console distinct campuses in the users array ---
  // ----------------------------------------------------
  //     const distinctCampus = arr => {
  //       let result = [];
  //       arr.forEach(el => {
  //         if (!result.includes(el.campus)) result.push(el.campus);
  //       })
  //       return result;
  //     }
  //     console.log(distinctCampus(users));
  // ----------------------------------------------------

  const sortByFirstName = () => {
    const sorted = [...users];
    sorted.sort((a,b) => a.firstName.localeCompare(b.firstName));
    setUsersState(sorted);
  }

  const sortByLasttName = () => {
    const sorted = [...users];
    sorted.sort((a,b) => a.lastName.localeCompare(b.lastName));
    setUsersState(sorted);
  }


  return (
    <div className="App">

      <h1>IronBook</h1>

      <SearchField setQueryProp={setQuery} />

      <label htmlFor="student">Student: </label>
      <input type="checkbox" name="student" id="student" onChange={handleIsStudentChange} checked={isStudent} />
      <br />

      <label htmlFor="teacher">Teacher: </label>
      <input type="checkbox" name="teacher" id="teacher" onChange={handleIsTeacherChange} checked={isTeacher} />
      <br />

      <label htmlFor="campus">Campus: </label>
      <select name="campus" id="campus-select" onChange={handleCampusChange} >
        <option value="All">All</option>
        <option value="Berlin">Berlin</option>
        <option value="Lisbon">Lisbon</option>
        <option value="Paris">Paris</option>
      </select>
      <br />
      <br />

      <button onClick={sortByFirstName}>Sort by first name</button>
      <button onClick={sortByLasttName}>Sort by last name</button>
      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          <UsersList queryProp={query} users={usersState} isStudent={isStudent} isTeacher={isTeacher} campus={campus} />
        </tbody>
      </table>

    </div>
  );
}

export default App;
