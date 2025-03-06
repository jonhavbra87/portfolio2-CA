import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Portrait from '../../assets/jon_are.webp';
import * as React from 'react';
import AboutMe from '../AboutMe';
import ProjectCard from '../ProjectCard';
import ContactForm from '../ContactForm';

export default function LandingPage() {
  const projects = [
    {
      id: 1,
      title: 'Prosjekt 1',
      description:
        'Dette er en beskrivelse av mitt første prosjekt. Her kan jeg fortelle om teknologier jeg brukte og utfordringer jeg løste.',
      borderColor: 'border-purple-500',
      offset: 1.5,
      imageSrc:
        'https://camo.githubusercontent.com/756c66db51d4e5e837abec339b7a57970950b11a5f72cdd93905f08e9947401f/68747470733a2f2f692e706f7374696d672e63632f7978387762544c382f5045322d636f7665722e6a7067', // Bytt med faktisk prosjektbilde
    },
    {
      id: 2,
      title: 'Prosjekt 2',
      description:
        'Her er mitt andre prosjekt. Dette var et spennende prosjekt med flere interessante tekniske utfordringer.',
      borderColor: 'border-blue-500',
      offset: 2.5,
      imageSrc: '/api/placeholder/600/400', // Bytt med faktisk prosjektbilde
    },
    {
      id: 3,
      title: 'Prosjekt 3',
      description:
        'Mitt tredje prosjekt involverte arbeid med flere avanserte funksjoner og fokus på brukeropplevelse.',
      borderColor: 'border-green-500',
      offset: 3.2,
      imageSrc: '/api/placeholder/600/400', // Bytt med faktisk prosjektbilde
    },
  ];

  const alignCenter = { display: 'flex', alignItems: 'center' };

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-gray-200 -z-10" />
      <Parallax pages={5}>
        {/* Første seksjon - Hero med AboutMe */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: 'center' }}
        >
          <div className="flex flex-col items-center justify-center text-center h-screen w-4/5 max-w-7xl">
            <AboutMe />
            <p className="text-lg text-gray-600 font-medium mt-8 animate-bounce">
              Scroll down
            </p>
          </div>
        </ParallaxLayer>

        {/* Sticky informasjon (Profilbilde og navn) - venstre side */}
        <ParallaxLayer
          sticky={{ start: 1, end: 3.5 }}
          style={{ ...alignCenter, justifyContent: 'flex-start' }}
        >
          <div className="w-5/6 md:w-2/5 max-w-xl md:ml-12 bg-indigo-900 rounded-lg p-8 shadow-xl overflow-y-auto max-h-[90vh]">
            <div className="flex flex-col items-center">
              <img
                src={Portrait || "https://placehold.co/400"}
                alt="Jon Are"
                className="w-40 h-40 rounded-lg object-cover mb-6 border-4 border-white shadow-lg"
              />
              <h1 className="text-4xl font-extrabold mb-4 text-white">
                Jon Are
              </h1>
              <p className="text-teal-400 font-medium text-xl italic mb-6">
                Let's create something amazing together!
              </p>
              <div className="text-white text-sm">
                <p className="mb-2">Email: kontakt@brattaasutvikling.no</p>
                <p className="mb-2">GitHub: github.com/jonhavbra87</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Prosjekt-kort med ParallaxLayer */}
        {projects.map((project) => (
          <ParallaxLayer
            key={project.id}
            offset={project.offset}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: 'flex-end' }}
          >
            <div className="w-5/6 md:w-1/2 max-w-xl md:mr-12">
              <ProjectCard
                title={project.title}
                description={project.description}
                borderColor={project.borderColor}
                imageSrc={project.imageSrc}
              />
            </div>
          </ParallaxLayer>
        ))}

        {/* Kontakt seksjon i bunnen */}
        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: 'center' }}
        >
          <div className="w-5/6 max-w-3xl bg-white rounded-lg p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-900">
              Kontakt Meg
            </h2>
            <ContactForm />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

// src/App.jsx
// import * as React from 'react'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import AboutMe from './components/AboutMe'
// import ContactForm from './components/ContactForm'
// import Portrait from "../assets/jon_are.webp";

// export default function App() {
//   const alignCenter = { display: 'flex', alignItems: 'center' }

//   return (
//     <div>
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-gray-200 -z-10" />
//       <Parallax pages={5}>
//         {/* Første seksjon - Hero */}
//         <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
//           <div className="flex flex-col items-center justify-center text-center h-screen w-4/5 max-w-7xl">
//             <img
//               src={Portrait}
//               alt="Jon Are"
//               className="w-48 h-48 md:w-52 md:h-52 rounded-lg object-cover mb-8 border-4 border-white shadow-lg"
//             />
//             <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-900 to-indigo-700 bg-clip-text text-transparent">
//               Jon Are
//             </h1>
//             <p className="text-lg text-gray-600 font-medium mt-8 animate-bounce">
//               Scroll ned
//             </p>
//           </div>
//         </ParallaxLayer>

//         {/* Sticky informasjon (About Me) - venstre side */}
//         <ParallaxLayer sticky={{ start: 1, end: 3.5 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
//           <div className="w-5/6 md:w-2/5 max-w-xl md:ml-12 bg-indigo-900 rounded-lg p-8 shadow-xl overflow-y-auto max-h-[90vh]">
//             <AboutMe />
//           </div>
//         </ParallaxLayer>

//         {/* Prosjekt 1 */}
//         <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
//           <div className="w-5/6 md:w-1/2 max-w-xl md:mr-12 bg-white rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 border-t-4 border-purple-500">
//             <h3 className="text-2xl font-bold mb-4 text-indigo-900">Prosjekt 1</h3>
//             <p className="mb-6 text-gray-600">Dette er en beskrivelse av mitt første prosjekt. Her kan jeg fortelle om teknologier jeg brukte og utfordringer jeg løste.</p>
//             <button className="px-5 py-2 bg-indigo-900 text-white font-semibold rounded hover:bg-indigo-800 transition-colors">
//               Se mer
//             </button>
//           </div>
//         </ParallaxLayer>

//         {/* Prosjekt 2 */}
//         <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
//           <div className="w-5/6 md:w-1/2 max-w-xl md:mr-12 bg-white rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
//             <h3 className="text-2xl font-bold mb-4 text-indigo-900">Prosjekt 2</h3>
//             <p className="mb-6 text-gray-600">Her er mitt andre prosjekt. Dette var et spennende prosjekt med flere interessante tekniske utfordringer.</p>
//             <button className="px-5 py-2 bg-indigo-900 text-white font-semibold rounded hover:bg-indigo-800 transition-colors">
//               Se mer
//             </button>
//           </div>
//         </ParallaxLayer>

//         {/* Prosjekt 3 */}
//         <ParallaxLayer offset={3.2} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
//           <div className="w-5/6 md:w-1/2 max-w-xl md:mr-12 bg-white rounded-lg p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 border-t-4 border-green-500">
//             <h3 className="text-2xl font-bold mb-4 text-indigo-900">Prosjekt 3</h3>
//             <p className="mb-6 text-gray-600">Mitt tredje prosjekt involverte arbeid med flere avanserte funksjoner og fokus på brukeropplevelse.</p>
//             <button className="px-5 py-2 bg-indigo-900 text-white font-semibold rounded hover:bg-indigo-800 transition-colors">
//               Se mer
//             </button>
//           </div>
//         </ParallaxLayer>

//         {/* Kontakt seksjon i bunnen */}
//         <ParallaxLayer offset={4} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
//           <div className="w-5/6 max-w-3xl bg-white rounded-lg p-8 md:p-12 shadow-xl text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-900">Kontakt Meg</h2>
//             <ContactForm />
//           </div>
//         </ParallaxLayer>
//       </Parallax>
//     </div>
//   )
// }
