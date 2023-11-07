import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { useDispatch } from 'react-redux'
import { getCoursesFun } from "./action/course"
import Dashboard from "./pages/Dashboard"
import CoursesList from "./pages/CoursesList"
import CourseDetail from "./pages/CourseDetail"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()


  useEffect(() => {


      dispatch(getCoursesFun())

  }
      , [])

  return (
    <Router>
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/dashboard" exact Component={Dashboard} />
          <Route path="/courses" exact Component={CoursesList} />
          <Route path="/courseslist/:id" exact Component={CourseDetail} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
