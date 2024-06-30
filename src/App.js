import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './favtodo/List';
import FavoriteStudents from './favtodo/Add';
import { StudentProvider } from './Addlist';

function App(){
  
  return (
    <Router>
      <StudentProvider>
      <div>
        <nav className='bg-red-400 text-2xl px-4 py-4'>
          <ul className='flex gap-7'>
            <li>
              <Link to="/" className='underline'>List of Students</Link>
            </li>
            <li>
              <Link to="/favorites" className='underline'>Favorite Students</Link>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favorites" element={<FavoriteStudents />} />
          </Routes>
      </div>
      </StudentProvider>
    </Router>
  );
};

export default App;







// import './App.css';
// import StudentList from './favtodo/List';
// // import Father from './cont/father';
// // import Son from './cont/son';
// // import { createContext } from 'react';

// // const NameContext = createContext()

// // function App() {
// //   let myname="John"

// //   return (
// //     <div>
// //       <NameContext.Provider value={{"name":myname}}>
// //       <Father/>
// //       <Son/>
// //       </NameContext.Provider>
// //       </div>
// //   );
// // }
// //export {NameContext}
//  function App(){
//   return(
//     <div>
//       <StudentList/>
//     </div>
//   )
//  }
// export default App;

