import React, { useContext } from 'react';
import { StudentContext } from '../Addlist';

const FavoriteStudents = () => {
  const { favoriteStudents, removeFromFavorites } = useContext(StudentContext);

  // if (!favoriteStudents || favoriteStudents.length === 0) {
  //   return <div>No favorite students</div>; 
  // }

  return (
    <div className="max-w-md mt-6">
      <ul>
        {favoriteStudents.map((student, index) => (
          <li key={index} className="flex items-center gap-32  px-5 py-2">
            <span>{index + 1}. {student.name}</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-lg"
              onClick={() => removeFromFavorites(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteStudents;
