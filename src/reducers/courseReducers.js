import { GET_COURSES, ADD_COURSE, COMPLETE_COURSE } from "../constant/index.js";

const initialState = {

    courses: [],
    addedCourses : [],
    completedCourses : []

}


export const courseReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_COURSES:
            return { ...state, courses: action.payload};

        case ADD_COURSE:

        return {
            ...state,
            addedCourses: [...state.addedCourses, action.payload], // Add the new course to addedCourses
          };


        case COMPLETE_COURSE:
            const courseIdToMarkAsCompleted = action.payload;

            // Find the course in addedCourses and mark it as completed
            const courseToMarkAsCompleted = state.addedCourses.find(
              (course) => course.id === courseIdToMarkAsCompleted
            );
      
            return {
              ...state,
              addedCourses: state.addedCourses.filter(
                (course) => course.id !== courseIdToMarkAsCompleted
              ),
              completedCourses: [...state.completedCourses, courseToMarkAsCompleted],
            };
      

        default:
            return state;



    }



}