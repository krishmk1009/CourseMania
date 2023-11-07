import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
const Intro = ({ course, name, description, instructor }) => {

    const dispatch = useDispatch();


    return (


        <section
            className=" relative bg-[url(https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1659634197/BestColleges.com/BC_What-Is-Student-Teaching_247733fd61/BC_What-Is-Student-Teaching_247733fd61.jpg)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-blue-500 sm:bg-transparent from-white/95 to-white/25 bg-gradient-to-r bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8"
            >
                <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Dashboard

                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        description
                    </p>
                    <p className="text-blue-600 my-4">Your Personal Details </p>

                    Choose from over 210,000 online video courses with new additions published every month


                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <Link to={"/courses"} >
                            <a
                                href="#"

                                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            >
                                Back To Courses
                            </a>
                            </Link>
                            <Link to={"#"} >                        <a
                                href="/"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                            >
                                Back To Home
                            </a>
                            </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro