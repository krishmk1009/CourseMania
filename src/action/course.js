import *  as api from "../api/course";
import { ADD_COURSE,COMPLETE_COURSE } from "../constant";
export const getCoursesFun = () => async (dispatch) => {

    try {

        const res = await api.getAllCourses();
       console.log("this is dispatch data" , res.data);
        const courseData = res.data

        dispatch({ type: "GET_COURSES", payload: courseData });
    }
    catch (error) {
        console.log("error");
    }

}

export const addCourseFun  = (course)=>{

    try {
       return {type :ADD_COURSE , payload: course }
    } catch (error) {
        console.log(error)
    }
}
export const completeCourseFun  = (courseId)=>{

    try {
       return {type :COMPLETE_COURSE , payload: courseId }
    } catch (error) {
        console.log(error)
    }
}