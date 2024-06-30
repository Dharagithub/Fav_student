import React, { createContext, useState } from 'react';


export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const initialStudents = [
    { id: 1, name: 'John', isFavorite: false },
    { id: 2, name: 'Mike', isFavorite: false },
    { id: 3, name: 'Anna', isFavorite: false },
    { id: 4, name: 'Deva', isFavorite: false },
    { id: 5, name: 'Even', isFavorite: false },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [favoriteStudents, setFavoriteStudents] = useState([]);

  const addToFavorites = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].isFavorite = true;
    setStudents(updatedStudents);

    const studentToAdd = updatedStudents[index];
    setFavoriteStudents([...favoriteStudents, studentToAdd]);
  };

  
  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favoriteStudents];
    if (index >= 0 && index < updatedFavorites.length) {
      const removedStudent = updatedFavorites.splice(index, 1)[0];
      const updatedStudents = students.map(student =>
        student.id === removedStudent.id ? { ...student, isFavorite: false } : student
      );
      setFavoriteStudents(updatedFavorites);
      setStudents(updatedStudents);
    }
  };

  return (
    <StudentContext.Provider value={{ students, favoriteStudents, addToFavorites, removeFromFavorites }}>
      {children}
    </StudentContext.Provider>
  );
};
