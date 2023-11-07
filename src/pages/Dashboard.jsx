import React from 'react'
import { useSelector } from 'react-redux'
import Intro from '../components/dashboardPage/Intro';
import ProfileCard from '../components/dashboardPage/ProfileCard';
import  EnrolledCourseList  from '../components/dashboardPage/EnrolledCourseList';
import CompletedCourseList from '../components/dashboardPage/CompletedCourseList';

const Dashboard = () => {


  return (
    <div className='my-5'>
      <Intro />
      <ProfileCard />
      <EnrolledCourseList />
      <CompletedCourseList />
    </div>
  )
}

export default Dashboard