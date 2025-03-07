import React from 'react';

const ProjectCard = ({
  title,
  description,
  features,
  borderColor = 'border-purple-500',
  imageSrc,
}) => {
  return (
    <div
      className={`w-full bg-white rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 border-t-4 ${borderColor} overflow-hidden`}
    >
      {imageSrc && (
        <div className="mb-4 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 md:h-56 lg:h-64 object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 md:mb-4 text-background">
          {title}
        </h3>
        <p className="mb-4 md:mb-6 font-base font-body text-gray-600 text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
          {features.map((feature, index) => (
            <span
              key={index}
              className="bg-gray-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm font-semibold font-body"
            >
              {feature}
            </span>
          ))}
        </div>
        <button className="w-1/2 sm:w-auto px-4 py-3 bg-gradientTo text-white text-base font-bold font-button rounded-md hover:bg-opacity-60 transition-all duration-200 cursor-pointer">
          Read more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;