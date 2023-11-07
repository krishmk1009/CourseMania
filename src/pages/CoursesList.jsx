import Courses from '../components/Courses/Courses';
import {  useSelector } from 'react-redux';

const CoursesList = () => {


  const data = useSelector((state) => state.courseReducer.courses);

  
  return (
    <div>
      <Courses Coursesdata={data} />
    </div>
  );
};

export default CoursesList;
