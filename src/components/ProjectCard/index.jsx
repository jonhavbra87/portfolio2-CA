// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({
  title,
  description,
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
            className="w-full h-48 object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4 text-indigo-900">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <button className="px-5 py-2 bg-indigo-900 text-white font-semibold rounded hover:bg-indigo-800 transition-colors">
        View
      </button>
    </div>
  );
};

export default ProjectCard;
