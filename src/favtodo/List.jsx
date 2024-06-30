import { useContext } from 'react';
import { StudentContext } from '../Addlist'; 


const StudentList = () => {
  const { students, addToFavorites } = useContext(StudentContext);

//   if (!students || students.length === 0) {
//     return <div>No students to display</div>; 
//   }
    return (
        <div className="max-w-md mt-6">
            <ul>
                {students.map((student, index) => (
                    <li key={index} className="flex items-center gap-40 px-5 py-2 ">
                        <span>{index + 1}. {student.name}</span>
                        {!student.isFavorite ? (
                            <button
                                className="bg-black hover:bg-gray-400 text-white font-bold py-1 px-3 rounded-xl"
                                onClick={() => addToFavorites(index)}
                            >
                                Add to Favorite
                            </button>
                        ) : (
                            <button
                                className="bg-gray-600 text-white font-bold py-1 px-3 rounded-xl cursor-not-allowed"
                                disabled
                            >
                                Added to Favorites
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
