import axios from "axios";

const url = "https://custom-data-course-json.vercel.app/getCourses";

export const getAllCourses = () => {
  return axios.get(url);
}
