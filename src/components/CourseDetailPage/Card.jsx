import React from 'react';
import { useDispatch } from 'react-redux'
import { addCourseFun } from '../../action/course';
const Card = ({ course, duration, schedule, location, enrollmentStatus }) => {

    console.log("this is props ", course)

    const dispatch = useDispatch();
    const handleEnrollClick = () => {
        alert("You have successfully enrolled in this course")

        dispatch(addCourseFun(course));
    }
    return (
        <div className="bg-white lg:w-1/4 lg:absolute top-96 right-56 p-6 rounded-lg shadow-lg mb-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                <span>📚</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Details</h2>
            <div className="mb-4 border-b border-gray-300 pb-4">
                <p><strong>Duration:</strong> {duration}</p>
            </div>
            <div className="mb-4 border-b border-gray-300 pb-4">
                <p><strong>Schedule:</strong> {schedule}</p>
            </div>
            <div className="mb-4 border-b border-gray-300 pb-4">
                <p><strong>Location:</strong> {location}</p>
            </div>
            <div className="mb-4 border-b border-gray-300 pb-4">
                <p><strong>Enrollment Status:</strong> {enrollmentStatus}</p>
            </div>
            <button onClick={handleEnrollClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply to Course</button>
        </div>
    );
};

export default Card;
