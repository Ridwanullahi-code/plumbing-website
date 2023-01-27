import React from 'react'
import PropTypes from "prop-types";

const Card = ({ image, alt, skill, summary }) => {
  return (
    <div className='"md:max-w-md  rounded-sm overflow-hidden 
        shadow-lg bg-gray-200 md:h-[430px] text-deepBlue"'>
      <img
        className="w-full"  
        src={image}
        alt={alt}
      />
      <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-deepBlue">{skill}</div>
            <p className="text-gray-700 text-base text-[13px]">
              {summary}
            </p>
      </div>
    </div>
  );
};
// props validation should be propTypes
Card.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};
export default Card;
