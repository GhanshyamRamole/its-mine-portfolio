import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Cloud, 
  Shield, 
  GitBranch, 
  Container, 
  Activity, 
  Code, 
  Database,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Monitor,
  Settings,
  Zap
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'AWS', level: 95, icon: Cloud },
    { name: 'Docker', level: 92, icon: Container },
    { name: 'Kubernetes', level: 88, icon: Server },
    { name: 'Terraform', level: 90, icon: Code },
    { name: 'Jenkins', level: 85, icon: GitBranch },
    { name: 'Monitoring', level: 93, icon: Activity },
    { name: 'Security', level: 87, icon: Shield },
    { name: 'Databases', level: 82, icon: Database }
  ];

  // const experiences = [
  //   {
  //     year: '2023 - Present',
  //     role: 'Senior DevOps Engineer',
  //     company: 'TechCorp Solutions',
  //     description: 'Led cloud migration initiatives, reduced deployment time by 75% through CI/CD optimization, and managed multi-cloud infrastructure serving 10M+ users.',
  //     achievements: [
  //       'Architected scalable Kubernetes clusters across 3 AWS regions',
  //       'Implemented zero-downtime deployment strategies',
  //       'Reduced infrastructure costs by 40% through optimization'
  //     ]
  //   },
  //   {
  //     year: '2021 - 2023',
  //     role: 'DevOps Engineer',
  //     company: 'CloudScale Inc.',
  //     description: 'Designed and maintained cloud infrastructure, implemented monitoring solutions, and automated deployment pipelines for microservices architecture.',
  //     achievements: [
  //       'Built comprehensive monitoring stack with Prometheus & Grafana',
  //       'Automated 95% of manual deployment processes',
  //       'Improved system reliability to 99.9% uptime'
  //     ]
  //   },
  //   {
  //     year: '2019 - 2021',
  //     role: 'Site Reliability Engineer',
  //     company: 'DataFlow Systems',
  //     description: 'Focused on system reliability, performance optimization, and incident response. Developed automation tools for infrastructure management.',
  //     achievements: [
  //       'Reduced mean time to recovery (MTTR) by 60%',
  //       'Implemented comprehensive logging and alerting systems',
  //       'Led disaster recovery planning and testing'
  //     ]
  //   }
  // ];

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions on AWS, Azure, and GCP with focus on cost optimization and performance.'
    },
    {
      icon: Container,
      title: 'Containerization',
      description: 'Docker and Kubernetes expertise for microservices deployment, orchestration, and management at scale.'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Build robust continuous integration and deployment pipelines using Jenkins, GitLab CI, and GitHub Actions.'
    },
    {
      icon: Activity,
      title: 'Monitoring & Logging',
      description: 'Implement comprehensive monitoring solutions with Prometheus, Grafana, ELK stack, and custom alerting systems.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure infrastructure security, implement compliance frameworks, and maintain security best practices.'
    },
    {
      icon: Settings,
      title: 'Infrastructure as Code',
      description: 'Terraform and CloudFormation expertise for version-controlled, reproducible infrastructure deployments.'
    }
  ];

  const projects = [
    {
      title: 'Multi-Cloud Kubernetes Platform',
      description: 'Designed and implemented a unified Kubernetes platform spanning AWS, Azure, and GCP with automated failover and load balancing.',
      technologies: ['Kubernetes', 'Terraform', 'Helm', 'Istio', 'Prometheus'],
      impact: '99.99% uptime, 50% cost reduction'
    },
    {
      title: 'Zero-Downtime Deployment System',
      description: 'Built a sophisticated CI/CD pipeline with blue-green deployments, automated testing, and rollback capabilities.',
      technologies: ['Jenkins', 'Docker', 'AWS ECS', 'CodeDeploy', 'CloudWatch'],
      impact: '10x faster deployments, 90% fewer errors'
    },
    {
      title: 'Infrastructure Monitoring Suite',
      description: 'Comprehensive monitoring solution with predictive analytics, automated scaling, and intelligent alerting.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Python', 'Machine Learning'],
      impact: '75% reduction in incidents, proactive scaling'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Dark Cloud
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'services', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-teal-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center overflow-hidden">
              <img 
                src="/profile-image.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to Server icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <img className="w-30 h-30 text-white" style={{ display: 'none' }} src="https://lh3.googleusercontent.com/a/ACg8ocKycxHkqbXJS4vNMN9p4bFCY3Ceo8x7_TnWoSRvCvKVSNvmDRKL=s360-c-no" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                DevOps Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforming infrastructure through automation, scalability, and innovation. 
              Building reliable, secure, and efficient cloud solutions that power modern applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
             <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent text-6xl">
              Ghanshyam Ramole,
            </div>
              <h3 className="text-2xl font-semibold mb-6"> Passionate About Infrastructure Excellence </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With years of experience in DevOps and Site Reliability Engineering, I specialize in 
                designing and implementing scalable, secure, and efficient infrastructure solutions. My expertise 
                spans across cloud platforms, containerization, automation, and monitoring.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm passionate about creating robust CI/CD pipelines, optimizing system performance, and 
                ensuring high availability. My approach combines technical excellence with business value, 
                always focusing on solutions that drive growth and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-teal-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>+ Projects Delivered</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <Zap className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="font-semibold mb-2">Performance</h4>
                <p className="text-gray-400 text-sm">Optimized systems for maximum efficiency and speed</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-teal-500 transition-colors">
                <Shield className="w-8 h-8 text-teal-400 mb-4" />
                <h4 className="font-semibold mb-2">Security</h4>
                <p className="text-gray-400 text-sm">Implementing robust security practices and compliance</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <Monitor className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="font-semibold mb-2">Monitoring</h4>
                <p className="text-gray-400 text-sm">Comprehensive observability and proactive alerts</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-teal-500 transition-colors">
                <Settings className="w-8 h-8 text-teal-400 mb-4" />
                <h4 className="font-semibold mb-2">Automation</h4>
                <p className="text-gray-400 text-sm">Reducing manual work through intelligent automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right mt-2 text-sm text-gray-400">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section id="experience" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <div className="text-blue-400 font-semibold">{exp.year}</div>
                </div>
                <div className="flex-1 bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  <h4 className="text-teal-400 font-semibold mb-4">{exp.company}</h4>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-teal-400 font-semibold">{project.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Discuss Your Project</h3>
              <p className="text-gray-300 mb-8">
                Ready to transform your infrastructure? I'm here to help you build scalable, 
                reliable, and efficient solutions that drive your business forward.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>ghanshyamramole999@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-teal-400" />
                  <span>+91 738515201</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>Nashik, Maharashtra</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/GhanshyamRamole" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/ghanshyamramole/" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                    <option>AWS Cloud</option>
                    <option>CI/CD Implementation</option>
                    <option>Infrastructure Optimization</option>
                    <option>Monitoring & Alerting</option>
                    <option>Security & Compliance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Tell me about your project requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Ghanshyam Ramole. Building the future of infrastructure, one deployment at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;