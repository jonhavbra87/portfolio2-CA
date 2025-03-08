
// LandingPage.jsx - Oppdatert versjon med dedikerte lenker
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Portrait from '../../assets/jon_are.webp';
import React, { useState, useEffect } from 'react';
import AboutMe from '../AboutMe';
import ProjectCard from '../ProjectCard';
import ContactForm from '../ContactForm';
import { Mail, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export default function LandingPage() {
// Check if the screen is mobile or desktop
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Project Exam 2',
      description:
        'To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate´s general development capabilities, in addition to visual and technical skills.',
      features: ['React', 'TypeScript', 'Tailwind CSS'],
      borderColor: 'border-purple-500',
      offset: 1.5,
      imageSrc:
        'https://camo.githubusercontent.com/756c66db51d4e5e837abec339b7a57970950b11a5f72cdd93905f08e9947401f/68747470733a2f2f692e706f7374696d672e63632f7978387762544c382f5045322d636f7665722e6a7067',
      liveLink: 'https://pe2-jahb.netlify.app/',
      githubLink: 'https://github.com/jonhavbra87/project_exam_2',
    },
    {
      id: 2,
      title: 'Semester Project 2',
      description:
        'The objective of this project is to apply the front-end development skills acquired over the past three semesters by building an auction website. The website will allow users to bid on items, as well as create and manage their own listings.',
      features: ['HTML', 'BootStrap', 'SCSS', 'JavaScript'],
      borderColor: 'border-gray-500',
      offset: 2.5,
      imageSrc:
        'https://camo.githubusercontent.com/27fe122f866308d1bccdb5afaf7cde00421bf431221d1f240e431430dd483fbc/68747470733a2f2f692e706f7374696d672e63632f634c52596447505a2f61756374696f6e68616f7573652e706e67',
      liveLink: 'https://sp2-jahb.netlify.app/',
      githubLink: 'https://github.com/jonhavbra87/SP2',
    },
    {
      id: 3,
      title: 'JavaScript Frameworks CA',
      description:
        'To apply knowledge of JavaScript techniques to implement the front-end functionality for a social media application.',
      features: ['HTML', 'BootStrap', 'JavaScript'],
      borderColor: 'border-yellow-500',
      offset: 3.2,
      imageSrc:
        'https://github.com/jonhavbra87/css-frameworks-ca/raw/main/content/JS2.webp',
      liveLink: 'https://js2-jahb.netlify.app/',
      githubLink: 'https://github.com/jonhavbra87/css-frameworks-ca',
    },
  ];

  const alignCenter = { display: 'flex', alignItems: 'center'};

  // Mobil-versjon av siden
  const MobileView = () => (
    <div className="w-11/12 bg-background min-h-screen mt-4 mx-auto">
      {/* AboutMe section */}
      <div className="py-4 text-center border-b border-gray-700">
        <AboutMe />
      </div>
      
  {/* Projects section */}
  <div className="px-4 py-8" role="region" aria-labelledby="projects-heading">
  <h2 id="projects-heading" className="text-2xl font-bold text-white text-center mb-4">My Projects</h2>
  <div className="space-y-16">
    {projects.map((project) => {
      let buttonBgColor;
      
      if (project.borderColor.includes('purple')) {
        buttonBgColor = 'bg-purple-500';
      } else if (project.borderColor.includes('gray')) {
        buttonBgColor = 'bg-gray-500';
      } else if (project.borderColor.includes('yellow')) {
        buttonBgColor = 'bg-yellow-500';
      } else {
        buttonBgColor = 'bg-gradientTo';
      }

      const borderColorClass = project.borderColor;
      
      return (
        <div key={project.id} className="relative" role="article" aria-labelledby={`project-title-${project.id}`}>
          <div className={`w-full bg-background rounded-lg shadow-lg overflow-hidden ${borderColorClass} border-l-4`}>
            {project.imageSrc && (
              <div className="overflow-hidden">
                <img
                  src={project.imageSrc}
                  alt={`Screenshot of ${project.title} project`}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-4 sm:p-6 lg:p-8">
              <h3 id={`project-title-${project.id}`} className="text-xl sm:text-2xl font-bold font-heading mb-3 md:mb-4 text-white">
                {project.title}
              </h3>
              <p className="mb-4 md:mb-6 font-base font-body text-gray-200 text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                {project.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-sm font-semibold font-body"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex flex-row gap-4 mt-8">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-1/2 px-4 py-3 ${buttonBgColor} text-white text-base font-bold font-button rounded-md hover:bg-opacity-80 transition-all duration-200 text-center`}
                  aria-label={`View live demo of ${project.title}`}
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-1/2 px-4 py-3 ${buttonBgColor} text-white text-base font-bold font-button rounded-md hover:bg-opacity-80 transition-all duration-200 text-center`}
                  aria-label={`View source code for ${project.title} on GitHub`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
      {/* Contact section */}
      <div className="px-4 py-8 mb-4" role="region" aria-labelledby="contact-heading">
  <div className="bg-background text-white rounded-lg p-6 shadow-xl text-center">
    <h2 id="contact-heading" className="text-2xl font-bold text-gray-500">
      Contact Me
    </h2>
    <ContactForm />
  </div>
</div>
    </div>
  );

  const DesktopView = () => (
    <div>
      <div className="absolute top-0 left-0 w-full h-full bg-background z-0" />
      <Parallax pages={5}>
        {/* AboutMe section */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: 'center'}}
        >
          <div className="w-full max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center justify-center text-center min-h-screen mt-24">
              <AboutMe />
            </div>
          </div>
        </ParallaxLayer>
        {/* Profile sidebar */}
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: 'center' }}
        >
          <div className="w-full max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4 lg:col-span-4 xl:col-span-5">
                <div className="w-full max-w-xs">
                  <div className="bg-background rounded-lg p-5 lg:p-6 shadow-xl overflow-y-auto min-h-screen">
                    <div className="flex flex-col items-center">
                      <img
                        src={Portrait || 'https://placehold.co/400'}
                        alt="Image of Jon Are"
                        className="w-full rounded-md object-cover mb-4 shadow-lg"
                      />
                      <h1 className="text-2xl lg:text-3xl font-extrabold mb-3 text-white">
                        Jon Are
                      </h1>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo font-medium font-ingress text-center text-base lg:text-lg italic mb-4">
                        Let's create something amazing together!
                      </p>
                      {/* Links */}
                      <div className="flex flex-col align-middle gap-3 font-body text-xs font-extrabold text-white mb-6">
                        <div className="flex flex-row gap-2 items-center">
                          <Mail className="text-gradientTo w-4 h-4" />
                          <a
                            href="mailto:kontakt@brattaasutvikling.no"
                            className="font-body underline hover:text-gradientTo text-sm"
                          >
                            kontakt@brattaasutvikling.no
                          </a>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                          <FaGithub className="text-gradientTo w-4 h-4" />
                          <a
                            href="https://github.com/jonhavbra87"
                            className="font-body underline hover:text-gradientFrom text-sm"
                          >
                            github.com/jonhavbra87
                          </a>
                        </div>
                      </div>
                      
                      {/* Projects Links */}
                      <div className="w-full">
  <div className="flex flex-col gap-6 border-t border-gray-700" role="navigation" aria-label="Project links">
    {projects.map((project) => (
      <div key={project.id} className="flex flex-col gap-2">
        <h3 className="text-white text-base font-bold">{project.title}</h3>
        <div className="flex flex-col gap-2 pl-2">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gradientTo text-sm"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="text-gradientTo w-3 h-3" aria-hidden="true" />
            <span className="underline">Live Demo</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gradientFrom text-sm"
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            <FaGithub className="text-gradientTo w-3 h-3" aria-hidden="true" />
            <span className="underline">GitHub Repository</span>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        {/* Project cards */}
        {projects.map((project) => (
          <ParallaxLayer
            key={project.id}
            offset={project.offset}
            speed={1.5}
            style={{
              ...alignCenter,
              justifyContent: 'center',
            }}
          >
            <div className="w-full max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-4 lg:col-span-4 xl:col-span-5"></div>
                <div className="col-span-8 lg:col-span-8 xl:col-span-7">
                  <div className="w-full max-w-lg lg:max-w-xl">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      features={project.features}
                      borderColor={project.borderColor}
                      imageSrc={project.imageSrc}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        ))}
        {/* Contact section */}
        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: 'center' }}
          className="pb-20"
        >
          <div className="w-full max-w-7xl mx-auto px-8">
            <div className="max-w-3xl mx-auto bg-background text-white rounded-lg p-8 shadow-xl text-center">
              <h2 className="text-3xl font-bold font-heading mb-8 text-gray-300">
                Contact Me
              </h2>
              <ContactForm />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );

  return isMobile ? <MobileView /> : <DesktopView />;
}