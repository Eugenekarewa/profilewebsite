import React from 'react';
import Navbar from './components/Navbar';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-24 md:py-32">
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
            <p className="text-xl md:text-2xl mb-8 text-blue-200">Blockchain Developer</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Eugenekarewa" 
                 className="text-blue-200 hover:text-white transition-colors transform hover:scale-110 duration-200"
                 target="_blank"
                 rel="noopener noreferrer">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/eugene-karewa-99616b1a2/" 
                 className="text-blue-200 hover:text-white transition-colors transform hover:scale-110 duration-200"
                 target="_blank"
                 rel="noopener noreferrer">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="mailto:eugenekarewa@outlook.com" 
                 className="text-blue-200 hover:text-white transition-colors transform hover:scale-110 duration-200">
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <User className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                As the owner of my tech venture and a Campus Ambassador for ICP Hub Kenya, I've leveraged my Bachelor of Applied Science in Physics from Pwani University to innovate and educate. My journey intertwines cutting-edge blockchain applications with a scientific approach to problem-solving, positioning me as a bridge between complex technologies and academic communities.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My core competencies are underpinned by technical acumen, with proficiencies in presenting, technical writing, and deploying applications. Through initiatives like inter-university hackathons and informative sessions, we've fostered a burgeoning community of learners eager to explore the potential of internet computer protocol and its vast applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900" id="skills">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <Cpu className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
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
                <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700">
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
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
      <section className="py-20 bg-gray-800" id="projects">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-12">
              <Code2 className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Art Marketplace',
                  description: 'A decentralized marketplace for artists to showcase and sell digital artwork, integrating authentication, payment, and escrow services.',
                  image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=800&h=500',
                  tech: ['ICP', 'React', 'Smart Contracts']
                },
                {
                  title: 'Coffee Supply Chain System',
                  description: 'A blockchain-based system for tracking coffee beans from farms to consumers, ensuring transparency and fair trade.',
                  image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=500',
                  tech: ['Blockchain', 'Supply Chain', 'Smart Contracts']
                },
                {
                  title: 'LogiTrust Kenya',
                  description: 'A logistics solution for SMEs in Kenya, leveraging AI and blockchain to optimize routes, prevent fraud, and enhance transparency.',
                  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=500',
                  tech: ['AI', 'Blockchain', 'Logistics']
                },
                {
                  title: 'ICP Educational Programs',
                  description: 'Comprehensive educational initiatives including Bootcamp Curriculum and 21-Day Educational Series for ICP technology.',
                  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=500',
                  tech: ['Education', 'ICP', 'Technical Writing']
                }
              ].map((project, index) => (
                <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium"
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
      <section className="py-20 bg-gray-900" id="experience">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <Briefcase className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
            </div>
            <div className="space-y-12">
              {[
                {
                  role: 'ICP Technical Ambassador',
                  company: 'Internet Computer Protocol',
                  period: 'Present',
                  description: 'Leading technical initiatives and community engagement for ICP technology adoption.'
                },
                {
                  role: 'ICP Campus Ambassador',
                  company: 'Pwani University',
                  period: 'August 2024 - December 2024',
                  description: 'Facilitated blockchain education and ICP technology adoption within the university community.'
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
                }
              ].map((job, index) => (
                <div key={index} className="border-l-4 border-blue-400 pl-6 hover:border-blue-300 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400">{job.role}</h3>
                  <div className="text-blue-400 mt-1 font-medium">{job.company}</div>
                  <div className="text-gray-400 mt-1">{job.period}</div>
                  <p className="text-gray-300 mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-800" id="education">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Education</h2>
            <div className="bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-400">Bachelor of Science in Physics</h3>
              <p className="text-gray-300 mt-2">Pwani University</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Get In Touch</h2>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href="mailto:eugenekarewa@outlook.com" 
                className="flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                eugenekarewa@outlook.com
              </a>
              <a 
                href="https://www.linkedin.com/in/eugene-karewa-99616b1a2/" 
                className="flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Eugenekarewa" 
                className="flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors group"
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
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Eugene Karewa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;