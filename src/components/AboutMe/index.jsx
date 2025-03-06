// src/components/AboutMe.jsx
import React from 'react';
import Portrait from '../../assets/jon_are.webp';

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center h-full p-8 text-white">
      <h1 className="text-4xl font-bold mb-6 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-16 after:h-1 after:bg-pink-400">
        Front End Developer
      </h1>

      <div className="w-36 h-36 rounded-lg overflow-hidden my-6">
        <img
          src={Portrait}
          alt="Profilbilde"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mb-8">
        <p className="mb-4">
          My name is <span className="bold">Jon Are</span> a passionate and
          dedicated front-end development student at Noroff. Specializing in the
          creative use of HTML, CSS, and vanilla JavaScript, I'm deeply
          committed to building not just functional, but also aesthetically
          pleasing websites. My journey in the digital realm is fueled by a keen
          desire to stay abreast of the latest trends and techniques in
          front-end development.
        </p>
        <p className="mb-4">
          As an online learner, I've developed a strong self-driven work ethic
          and a flexible approach to
          <span className="bold">problem-solving.</span> My projects showcase a
          blend of <span className="bold">modern design principles</span> and
          <span className="bold">efficient</span> coding practices. I believe in
          crafting websites that are not only visually stunning but also
          <span className="bold">user-friendly</span>, ensuring a seamless
          experience for all users.
        </p>
        <p>
          My portfolio is a testament to my journey in front-end development,
          featuring projects that highlight my ability to transform ideas into
          digital realities. Each project is a step forward in my continuous
          quest for knowledge and excellence in the field of web development. I
          am eager to collaborate, learn, and grow as I embark on new challenges
          and opportunities in the dynamic world of front-end development.
        </p>
        <p className="mt-8 text-3xl">
          <span className="italic">Let's create something amazing together!</span>
        </p>
      </div>

      <div>
      <p className="mb-2">Email: kontakt@brattaasutvikling.no</p>
      <p className="mb-2">GitHub: github.com/jonhavbra87</p>
      </div>
    </div>
  );
};

export default AboutMe;
