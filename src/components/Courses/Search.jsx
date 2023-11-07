import React, { useState } from 'react'

const Search = ({ searchText ,setSearchText }) => {

    
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 lg:py-5 lg:pb-10">
            <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
                <div className="text-center">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                
                                
                        A broad selection of courses
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                        Choose from over 210,000 online video courses with new additions published every month


                        </p>
                    </div>

                    <input
                        type='text'
                        placeholder='search a course ...'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />


                    
                </div>
            </div>
        </div>
    )
}

export default Search