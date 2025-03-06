import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Portrait from '../../assets/jon_are.webp';
import * as React from 'react';
import AboutMe from '../AboutMe';
import ProjectCard from '../ProjectCard';
import ContactForm from '../ContactForm';
import { GitFork, Mail } from 'lucide-react';

export default function LandingPage() {
  const projects = [
    {
      id: 1,
      title: 'Project Exam 2',
      description:
        'To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate’s general development capabilities, in addition to visual and technical skills.',
      features: ['React', 'TypeScript', 'Tailwind CSS'],
      borderColor: 'border-purple-500',
      offset: 1.5,
      imageSrc:
        'https://camo.githubusercontent.com/756c66db51d4e5e837abec339b7a57970950b11a5f72cdd93905f08e9947401f/68747470733a2f2f692e706f7374696d672e63632f7978387762544c382f5045322d636f7665722e6a7067',
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
    },
  ];

  const alignCenter = { display: 'flex', alignItems: 'center' };

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-gray-200 -z-10" />
      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: 'center' }}
        >
          <div className="flex flex-col items-center justify-center text-center h-screen w-11/12 lg:w-10/12 max-w-7xl">
            <AboutMe />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: 'flex-start' }}
        >
          <div className="hidden md:block w-2/5 max-w-md mr-8 flex-shrink-0">
            <div className="bg-background rounded-lg p-8 shadow-xl overflow-y-auto max-h-[90vh]">
              <div className="flex flex-col items-center">
                <img
                  src={Portrait || 'https://placehold.co/400'}
                  alt="Jon Are"
                  className="w-40 h-40 rounded-lg object-cover mb-6 border-4 border-white shadow-lg"
                />
                <h1 className="text-4xl font-extrabold mb-4 text-white">
                  Jon Are
                </h1>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo font-medium text-xl italic mb-6">
                  Let's create something amazing together!
                </p>
                <div className="flex flex-col align-middle gap-4 font-body text-sm font-extrabold text-white">
                  <div className="flex flex-row gap-2 items-center">
                    <Mail className="text-gradientTo" />
                    <a
                      href="mailto:kontakt@brattaasutvikling.no"
                      className="underline hover:text-gradientTo"
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
            </div>
          </div>
        </ParallaxLayer>

        {projects.map((project) => (
          <ParallaxLayer
            key={project.id}
            offset={project.offset}
            speed={1.5}
            style={{
              ...alignCenter,
              justifyContent: 'flex-end',
              marginLeft: 'md:calc(20% + 2rem)',
            }}
          >
            <div className="w-11/12 md:w-3/5 max-w-xl">
              <ProjectCard
                title={project.title}
                description={project.description}
                features={project.features}
                borderColor={project.borderColor}
                imageSrc={project.imageSrc}
              />
            </div>
          </ParallaxLayer>
        ))}
        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: 'center' }}
        >
          <div className="w-5/6 max-w-3xl bg-backgroun text-white rounded-lg p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-500">
              Contact Me
            </h2>
            <ContactForm />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
