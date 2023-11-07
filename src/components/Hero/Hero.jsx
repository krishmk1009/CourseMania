import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 mx-auto">
            <div className='text-center  lg:text-left'>
              <p className="text-center inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-blue-500 lg:text-left">
                New Courses
              </p>
            </div>
            <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center  lg:text-left">
              Explore, Learn, Thrive: Your <br className="hidden md:block" />
              <span className="inline-block text-blue-500">E-Course Adventure</span>
            </h1>
            <p className="text-base text-gray-700 md:text-lg text-center lg:text-left">
              Unlock Your Potential with Expert-Led Web and App Development Courses. Start Building Your Future Today
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to='/courses'>
              <a
                href="/"
                className="inline-flex bg-blue-500 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Start Learning</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="24"
                  width="24"
                >
                  <path d="M9 3v15h3V3H9m3 2l4 13 3-1-4-13-3 1M5 5v13h3V5H5M3 19v2h18v-2H3z" />
                </svg>
              </a>
            </Link>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Get 15% discount
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/BNGANR.jpg"
            alt=""
          />
          <a
            href="/"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
          >
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
              <svg
                className="w-10 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
