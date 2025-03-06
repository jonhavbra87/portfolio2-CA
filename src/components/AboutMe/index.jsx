// src/components/AboutMe.jsx
import React from 'react';
import Portrait from '../../assets/jon_are.webp';
import { GitBranch, GitFork, Mail } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center h-full p-8 text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo">
        Jon Are
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-200 font-medium font-heading mb-16">
        Front End Developer
      </h2>
      {/* <div className="w-36 h-36 rounded-lg overflow-hidden my-6">
        <img
          src={Portrait}
          alt="Profilbilde"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="mb-8 text-base font-body text-white">
        <p className="mb-4 ">
          My name is <span className="font-bold">Jon Are</span> a passionate and
          dedicated front-end development student at Noroff. Specializing in the
          creative use of React, Javascript and TypeScript, I'm deeply committed
          to building not just functional, but also aesthetically pleasing
          websites. My journey in the digital realm is fueled by a keen desire
          to stay abreast of the latest trends and techniques in front-end
          development.
        </p>
        <p className="mb-4 text-base ">
          As an online learner, I've developed a strong self-driven work ethic
          and a flexible approach to{' '}
          <span className="font-bold">problem-solving.</span> My projects
          showcase a blend of{' '}
          <span className="font-bold">modern design principles</span> and
          <span className="font-bold">efficient</span> coding practices. I
          believe in crafting websites that are not only visually stunning but
          also
          <span className="font-bold">user-friendly</span>, ensuring a seamless
          experience for all users.
        </p>
        <p className="text-base">
          My portfolio is a testament to my journey in front-end development,
          featuring projects that highlight my ability to transform ideas into
          digital realities. Each project is a step forward in my continuous
          quest for knowledge and excellence in the field of web development. I
          am eager to collaborate, learn, and grow as I embark on new challenges
          and opportunities in the dynamic world of front-end development.
        </p>
        <p className="mt-8 text-3xl font-ingress text-transparent bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo">
          <span className="italic">
            Let's create something amazing together!
          </span>
        </p>
      </div>

      <div className="flex justify-center align-middle">
        <div className="flex flex-col align-middle gap-4 font-body text-sm font-extrabold">
          <div className="flex flex-row gap-2 items-center">
            <Mail className="text-gradientTo" />
            <a
              href="mailto:kontakt@brattaasutvikling.no"
              className="underline hover:text-gradientFrom"
            >
              kontakt@brattaasutvikling.no
            </a>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <GitFork className="text-gradientTo" />
            <a
              href="https://github.com/jonhavbra87"
              className="underline hover:text-gradientFrom"
            >
              github.com/jonhavbra87
            </a>
          </div>
        </div>
      </div>
      <p className="text-lg text-gray-200 font-medium mt-8 animate-bounce">
        Scroll down
      </p>
    </div>
  );
};

export default AboutMe;
