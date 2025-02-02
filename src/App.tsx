import React from 'react';
import Navbar from './components/Navbar';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/90 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://placehold.co/400x400/667fff/ffffff?text=EK" 
                  alt="Eugene Karewa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg">Eugene Karewa</h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">Blockchain Developer</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Eugenekarewa" 
                 className="hover:text-indigo-200 transition-colors transform hover:scale-110 duration-200"
                 target="_blank"
                 rel="noopener noreferrer">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/eugene-karewa-99616b1a2/" 
                 className="hover:text-indigo-200 transition-colors transform hover:scale-110 duration-200"
                 target="_blank"
                 rel="noopener noreferrer">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="mailto:eugenekarewa@outlook.com" 
                 className="hover:text-indigo-200 transition-colors transform hover:scale-110 duration-200">
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50"></div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <User className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Passionate blockchain developer with extensive experience in decentralized applications (dApps), 
              smart contracts, and Web3 integrations. Skilled in TypeScript, Motoko, Solidity, and Rust. 
              Experienced in building blockchain-based marketplaces, decentralized governance models, and 
              self-sovereign applications. Adept at leveraging Internet Computer Protocol (ICP) and other 
              blockchain frameworks to develop scalable and secure solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white" id="skills">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <Cpu className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: 'Blockchain Development', skills: ['ICP', 'Ethereum', 'Solidity', 'Motoko', 'Rust', 'Azle'] },
                { name: 'Smart Contracts', skills: ['TypeScript', 'WebAssembly', 'Wasm', 'Candid'] },
                { name: 'dApp Development', skills: ['Next.js', 'React', 'Material-UI'] },
                { name: 'Cryptography', skills: ['Zero-Knowledge Proofs', 'Self-Sovereign Identity'] },
                { name: 'Web3 Integrations', skills: ['Keplr Wallet', 'ICP SDK', 'JavaScript SDK'] },
                { name: 'Security & Governance', skills: ['DAO Structures', 'Reputation Systems', 'Transparent Voting'] }
              ].map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                  <h3 className="text-lg font-semibold text-indigo-700 mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-12">
              <Code2 className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Skillshare DAO',
                  description: 'A decentralized platform connecting professionals and learners with blockchain-based reputation scoring and DAO governance.',
                  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=500',
                  tech: ['TypeScript', 'Azle', 'React', 'ICP']
                },
                {
                  title: 'KnowChain',
                  description: 'AI-powered blockchain marketplace for verified knowledge sharing with smart contracts for content verification.',
                  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500',
                  tech: ['TypeScript', 'ICP', 'Smart Contracts']
                },
                {
                  title: 'Zero-Knowledge E-Voting',
                  description: 'Privacy-preserving e-voting platform using zero-knowledge proofs with self-sovereign identity features.',
                  image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800&h=500',
                  tech: ['ZKPs', 'SSI', 'Blockchain']
                },
                {
                  title: 'Charity Donation Platform',
                  description: 'Smart contract-based charity platform with on-chain donation tracking and Keplr wallet integration.',
                  image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800&h=500',
                  tech: ['Next.js', 'Smart Contracts', 'Keplr']
                }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white" id="experience">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <Briefcase className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Experience</h2>
            </div>
            <div className="space-y-12">
              {[
                {
                  role: 'Shortlisted Developer',
                  company: 'Dfinity',
                  period: '2025',
                  description: 'Selected as a potential developer for blockchain development projects.'
                },
                {
                  role: 'Google Developers Student Club Lead',
                  company: 'Google',
                  period: '2022 - 2023',
                  description: 'Led student developer community and organized technical workshops.'
                },
                {
                  role: 'Cybersecurity Consultant',
                  company: 'Merime Solutions',
                  period: '2022 - 2023',
                  description: 'Provided cybersecurity consulting services and implemented security solutions.'
                },
                {
                  role: 'Industrial Attachment',
                  company: 'Tech Firm',
                  period: 'May - August 2024',
                  description: 'Gained hands-on experience in software development and blockchain technologies.'
                }
              ].map((job, index) => (
                <div key={index} className="border-l-4 border-indigo-600 pl-6 hover:border-indigo-400 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600">{job.role}</h3>
                  <div className="text-indigo-600 mt-1 font-medium">{job.company}</div>
                  <div className="text-sm text-gray-500 mt-1">{job.period}</div>
                  <p className="text-gray-600 mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20" id="education">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Education</h2>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600">Bachelor of Science in Physics</h3>
              <p className="text-gray-600 mt-2">Pwani University</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href="mailto:eugenekarewa@outlook.com" 
                className="flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                eugenekarewa@outlook.com
              </a>
              <a 
                href="https://www.linkedin.com/in/eugene-karewa-99616b1a2/" 
                className="flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Eugenekarewa" 
                className="flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Eugene Karewa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;