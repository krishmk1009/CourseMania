import React from 'react'
import { useDispatch } from 'react-redux'
import { addCourseFun } from '../../action/course';
const Intro = ({ course,name, description, instructor }) => {

    const dispatch = useDispatch();

    const handleEnrollClick = (e) => {
        e.preventDefault()
        alert("You have successfully enrolled in this course")

        dispatch(addCourseFun(course));
    }
    return (


        <section
            className=" relative bg-[url(https://www.allconnect.com/wp-content/uploads/2020/06/online-teaching-tools-hero-1213470247.jpg)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-blue-500 sm:bg-transparent from-white/95 to-white/25 bg-gradient-to-r bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8"
            >
                <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        {name}


                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        {description}
                    </p>
                    <p className="text-blue-600 my-4">Instructor: {instructor}</p>


                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            onClick={handleEnrollClick}
                            className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                        >
                            Enroll Now
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro