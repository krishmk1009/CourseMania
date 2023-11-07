import React from 'react';
import { useSelector } from 'react-redux';
import { completeCourseFun } from '../../action/course';

const CompletedCourseList = () => {

    const completedCourses = useSelector((state) => state.courseReducer.completedCourses);
  

  
    const itemList = completedCourses.map((item, index) => (
        <li key={item.id} className="border-blue-200 flex flex-row mb-2">
            <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 items-center mr-4">
                  <img src='https://www.open.edu/openlearn/pluginfile.php/3277384/tool_ocwmanage/articletext/0/become_a_student_inline.jpg' />
                </div>
                <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-600 text-sm">{item.instructor}</div>
                    
                </div>
            </div>
        </li>
    ));

    return (
        <div className=" lg:w-1/2  px-4 my-10">
        <h1 className='text-2xl mb-4'>Completed Course:</h1>
            <ul className=" bg-blue-200 p-4">
                {itemList}
            </ul>
        </div>
    );
};

export default CompletedCourseList;
