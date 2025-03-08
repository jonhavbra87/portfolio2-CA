// src/components/AboutMe.jsx
import React from 'react';
import Portrait from '../../assets/jon_are.webp';
import illustration from '../../assets/laptop.webp';
import { GitFork, Mail } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center text-white md:mt-16 min-h-screen">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo">
        Jon Are
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-200 font-medium font-heading mb-16">
        Front End Developer
      </h2>
      {/* Content Wrapper */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Column - Text */}
        <div className="md:w-2/3 lg:w-1/2 text-base text-left font-body text-white">
          <p className="mb-4">
            My name is <span className="font-bold">Jon Are</span>, a passionate and dedicated front-end development student at Noroff.
            Specializing in the creative use of React, Javascript, and TypeScript, I'm deeply committed to building functional and aesthetically pleasing websites.
          </p>
          <p className="mb-4">
            As an online learner, I've developed a strong self-driven work ethic and a flexible approach to{' '}
            <span className="font-bold">problem-solving.</span> My projects showcase a blend of modern design principles and{' '}
            <span className="font-bold">efficient</span> coding practices.
          </p>
          <p>
            My portfolio is a testament to my journey in front-end development, featuring projects that transform ideas into digital realities.
          </p>
        </div>

        {/* Right Column - Illustration */}
        <div className="md:w-1/3 lg:w-1/2">
          <img src={illustration} alt="Illustration of a laptop" className="w-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>
          <p className="my-8 md:my-16 text-3xl font-ingress font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo italic">
            Let's create something amazing together!
          </p>
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
