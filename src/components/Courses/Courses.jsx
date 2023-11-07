import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';


const Courses = ({ Coursesdata }) => {

    const [searchText, setSearchText] = useState('');

    const filteredData = Coursesdata.filter((course) =>

        course.name.toLowerCase().includes(searchText.toLowerCase())
    )





    return (
        <div>


            <Search searchText={searchText} setSearchText={setSearchText} />
            <div className="flex flex-wrap">




                {filteredData.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}


const CourseCard = ({ course }) => {
    return (
        <div class="w-full max-w-sm mx-5 my-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            {/* <img class="object-cover object-center w-full h-56" src={course.image} alt={course.name} /> */}

            <div class="flex items-center px-6 py-3 bg-blue-500">
                <svg aria-label="headphones icon" class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z" />
                </svg>

                <h1 class="mx-3 text-lg font-semibold text-white">{course.duration}</h1>
            </div>

            <div class="px-6 py-4">
                <h1 class="text-xl font-semibold text-gray-800 dark:text-white">{course.name}</h1>

                <p class="py-2 text-gray-700 dark:text-gray-400"> {course.description} </p>

                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <svg aria-label="suitcase icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 11H10V13H14V11Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                    </svg>

                    <h1 class="px-2 text-sm">{course.location}</h1>
                </div>

                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <svg aria-label="email icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.8785 5L 12 5 C11.70684 5 11.41447 4.92678 11.14645 4.78033 C10.87842 4.63387 10.63968 4.41817 10.45877 4.13793 C10.27786 3.85768 10.16255 3.52092 10.12385 3.16906 C10.08515 2.8172 10.12545 2.46058 10.24147 2.13469 C10.35749 1.8088 10.54441 1.52755 10.78307 1.31807 C11.02172 1.10859 11.30103 0.981072 11.5903 0.953125 C11.8795 0.925177 12.1604 0.997752 12.382 1.15714 L 20 6.16211 L 12 12.9405 C10.8285 14.1121 8.92853 14.1121 7.75698 12.9405 L 5 8.06165 Z M 6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
                    </svg>

                    <h1 class="px-2 text-sm ">{course.instructor}</h1>
                </div>
                <Link to={`/courseslist/${course.id}`}>
                    <button className="my-4 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go to Course
                    </button>
                </Link>
            </div>
        </div>
    );
}


export default Courses 