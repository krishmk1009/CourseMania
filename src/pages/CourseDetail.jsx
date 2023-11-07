import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Intro from '../components/CourseDetailPage/Intro';
import Card from '../components/CourseDetailPage/Card';
import ImageCards from '../components/CourseDetailPage/StudentImages';

const CourseDetailPage = () => {
  const { id } = useParams(); 
  const course = useSelector((state) => {
    const courses = state.courseReducer.courses;
    return courses.find((c) => c.id === parseInt(id));
  });

  const [accordion, setAccordion] = useState({}); 

  const toggleAccordion = (week) => {
    setAccordion((prevAccordion) => ({
      ...prevAccordion,
      [week]: !prevAccordion[week],
    }));
  };

  if (!course) {
    return <div>Loading ...</div>;
  }


 

  return (
    <div className='my-5'>
      <Intro course={course} name={course.name} description={course.description} instructor={course.instructor} />

      <Card
      course={course}
        duration={course.duration}
        schedule={course.schedule}
        location={course.location}
        enrollmentStatus={course.enrollmentStatus}
      />

      <div className="mt-8 w-1/2">
        <h2 className="text-xl font-semibold">Prerequisites</h2>
        <ul className="list-disc  my-4">
          {course.prerequisites.map((prerequisite, index) => (
            <li className='inline mx-1 bg-blue-200  p-2 rounded' key={index}>{prerequisite}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 w-1/2">
        <h2 className="text-xl font-semibold">Syllabus</h2>
        <ul className="list-decimal pl-6">
          {course.syllabus.map((item) => (
            <li key={item.week} className="border-b border-blue-500 py-4 shadow-black bg-white my-2">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => toggleAccordion(item.week)}
              >
                <strong>Week {item.week}:</strong> {item.topic}
                <span className="mr-2">{accordion[item.week] ? '-' : '  +'}</span>
              </div>
              {accordion[item.week] && (
                <p>{item.content}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <ImageCards />
      </div>
    </div>
  );
};

export default CourseDetailPage;
