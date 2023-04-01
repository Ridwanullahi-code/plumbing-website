import React from 'react';
import { project } from '../functions/data';
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  
  const handleClick = (obj) => {
    navigate(`/project-overview/${obj.title}`, {
      state: {
        project: obj
      }
    }
    );
  }

  return (
      <div className="bg-white md:mx-5 rounded-md py-8">
      <h2 className="text-blue-500 font-bold text-[28px] text-center pt-5 pb-2">RECENT WORKS</h2>
      <p className="text-gray-500 max-w-lg mx-auto text-center py-1" style={{ fontSize: '16px' }}>
        Action speaker louder than word, check our successful completed projects to clear all the doubts.
        We are professional in this work
        </p>
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Projects</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {project.map((data, index) => (
            <button className="group bg-white shadow rounded-md p-3"
              onClick={() => handleClick(data)}
              key={index}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={data.image}
                  id={index + 1}  
                  alt={data.alt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
              <h3 className="mt-4 text-sm text-gray-700 text-center font-bold">{data.title}</h3>
            </button>
          ))}
        </div>
          </div>
          <div className="flex justify-center items-center max-w-xl mx-auto">
            <NavLink to="/projects" className="border border-deepBlue font-bold text-white
            flex-grow p-4 text-center
            rounded-md bg-paleBlue hover:opacity-90 active:bg-deepBlue sm:mx-7 xsm:mx-7">View all</NavLink>
          </div>
    </div>
  );
};

export default Projects;
