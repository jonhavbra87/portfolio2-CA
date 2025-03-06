// src/components/ProjectCard.jsx
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
      className={`w-full bg-white rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 border-t-4 ${borderColor}`}
    >
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded">
          <img
            src={imageSrc}
            alt={title}
            className="w-full max-h-64 object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <h3 className="text-2xl font-bold font-heading mb-4 text-background">
        {title}
      </h3>
      <p className="mb-6 font-base font-body text-gray-600">{description}</p>
      <ul className="flex flex-wrap font-base gap-2 mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-semibold font-body "
          >
            {feature}
          </li>
        ))}
      </ul>
      <button className="px-5 py-2 bg-gradientTo text-white text-base font-semibold font-button rounded-md hover:bg-opacity-60 transition-all transform-200 cursor-pointer">
        Read more
      </button>
    </div>
  );
};

export default ProjectCard;
