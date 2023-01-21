import React from 'react'
import PropTypes from 'prop-types';

const Testimonial = ({image, alt, message, name, prof}) => {
  return (
    <div className="flex flex-col items-center max-w-sm 
   bg-gray-200 overflow-hidden shadow-lg p-3 rounded-md ">
    <img className="rounded-full w-16 h-16 border-2 border-white" src={image} alt={alt} />
      <div className="py-4 lg:text-center lg:px-4">
        <blockquote className="text-gray-700">
          <i className="fa-solid fa-quote-left mx-1" />
            <span className="text-xsm line-clamp-6">{message}</span>
          <i className="fa-solid fa-quote-right mx-1" />
        </blockquote>
       
    </div>
    <div className="px-6 pt-2 text-center flex flex-col space-y-1">
        <span className="text-deepBlue font-bold">{name}</span>
        <span className="text-gray-700">{prof}</span>
    </div>
  </div>
  )
}
// props validation should be propTypes
Testimonial.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prof: PropTypes.string.isRequired,
};
export default Testimonial
