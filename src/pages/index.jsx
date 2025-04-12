import Image from "next/image";
import { useState } from "react";
import { Geist } from "next/font/google";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  User,
  Code2,
  Briefcase,
  BadgeCheck,
  FileText,
  Mail,
} from "lucide-react";
import "keen-slider/keen-slider.min.css";

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-geist-sans",
});
const projects = [
  {
    title: "CI/CD Pipeline with Jenkins",
    description: "Automated build and deployment pipeline using Jenkins, GitHub, Docker, Nginx server and Docker Compose",
    image: "/projects/jenkins-pipeline.jpg",
    sourceCodeUrl:"https://github.com/Tinanivishal/Jenkins-Pipelines.git"
  },
  {
    title: "Node.js App Deployment",
    description: "Deployed a scalable Node.js application on AWS EC2 using Docker and NGINX as reverse proxy.",
    image: "/projects/nodjsproject.jpg"
  },
  {
    title: "Website of scrap Collection",
    description: "Created web site using reactjs as Frontend , nodejs as backend Mongodb as database",
    image: "/projects/image.png",
    sourceCodeUrl:"https://github.com/Tinanivishal/Scrapters.git"
  },
  {
    title: "Kubernetes Guestbook App",
    description: "Deployed a PHP guestbook app with Redis on Kubernetes using YAML manifests and containerd runtime.",
    image: "/projects/guestbook-k8s.png"
  }
];

const certifications = [
  {
    name: "CCNA",
    image: "/certificates/ccna.png",
    description: "Cisco Certified Network Associate - Networking fundamentals and routing/switching knowledge."
  },
  {
    name: "DevOps Certified",
    image: "/certificates/devops.jpg",
    description: "Certified in core DevOps practices including CI/CD, containerization, infrastructure automation."
  },
  {
    name: "Java Full Stack",
    image: "/certificates/java.png",
    description: "Completed Full Stack Java Developer training with backend and frontend experience."
  },
  {
    name: "IANT Course",
    image: "/certificates/iant.jpg",
    description: "Completed professional IT training from IANT in networking and system administration."
  }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", icon: <User size={18} /> },
    { label: "Skills", icon: <Code2 size={18} /> },
    { label: "Projects", icon: <Briefcase size={18} /> },
    { label: "Certifications", icon: <BadgeCheck size={18} /> },
    { label: "Resume", icon: <FileText size={18} /> },
    { label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <div className={`${geistSans.variable} font-sans bg-[#0A192F] text-[#EAEAEA]`}>
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0A192F] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-[#64FFDA]">
              Vishal <span className="text-white">Tinani</span>
            </div>

            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.label.toLowerCase()}`}
                  className="flex items-center gap-2 hover:text-[#64FFDA] transition duration-200"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#0A192F] px-4 pb-4 space-y-2 text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                className="block flex items-center justify-center gap-2 text-[#EAEAEA] hover:text-[#64FFDA] transition duration-200"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 px-6 md:px-16 lg:px-32 min-h-screen flex flex-col md:flex-row items-center justify-between">
        <div className="text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#64FFDA]">
            Hi, I'm <span className="text-white">Vishal Tinani</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#D1D5DB] max-w-xl">
            I’m a passionate <span className="text-[#64FFDA]">DevOps</span> and <span className="text-[#64FFDA]">Backend Developer</span> who loves building scalable infrastructure and automation pipelines.
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 mt-4 text-lg font-semibold bg-[#64FFDA] text-[#0A192F] rounded-xl hover:bg-[#52e0c4] transition duration-300"
          >
            View My Work
          </a>
        </div>

        <div className="mt-10 md:mt-0">
          <Image
            src="/me.jpg"
            alt="Vishal Tinani"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#112240] text-center py-20 px-6 md:px-16 lg:px-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#64FFDA] mb-10"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-left text-[#CBD5E1] text-base md:text-lg leading-relaxed space-y-4"
        >
          <p>
            I'm Vishal Tinani, a driven and detail-oriented DevOps Engineer and Backend Developer with a strong foundation in automation, continuous integration, cloud infrastructure, and software development. My journey started with networking and Linux, earning me certifications like CCNA and RHCE. Over time, I expanded into cloud services, container orchestration, and backend frameworks.
          </p>
          <p>
            I have hands-on experience with AWS, Docker, Kubernetes, Jenkins, Ansible, and Terraform, and I’ve worked on projects that involved setting up CI/CD pipelines, containerizing applications, and managing scalable infrastructure. On the backend side, I’m skilled in Java (Spring Boot), Node.js, and Python.
          </p>
          <p>
            I'm a quick learner, a team player, and someone who genuinely enjoys solving complex problems through automation and efficient systems. I'm continuously exploring new tools and trends in DevOps and backend development to stay ahead in the industry.
          </p>
          <p>
            Whether it's scripting, deploying, or debugging, I love diving into the details and delivering robust, secure, and maintainable solutions. My goal is to work in an environment where I can both contribute and grow, pushing the boundaries of what’s possible in software infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Certification Section */}
      <section id="certifications" className="py-20 bg-[#112240] px-6 md:px-16 lg:px-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#64FFDA] text-center mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-[#0A192F] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Image
                src={cert.image}
                alt={cert.name}
                width={300}
                height={200}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-[#64FFDA] mb-2">{cert.name}</h3>
              <p className="text-[#CBD5E1] text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Skills Section */}
<section id="skills" className="py-20 bg-[#0A192F] px-6 md:px-16 lg:px-32">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-[#64FFDA] text-center mb-12"
  >
    Skills
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Skill Group */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">DevOps Tools</h3>
      {[
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Jenkins", level: 80 },
        { name: "Terraform", level: 75 },
        { name: "Ansible", level: 70 },
      ].map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-5"
        >
          <div className="flex justify-between mb-1 text-sm text-[#EAEAEA]">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-[#112240] rounded-full h-2.5">
            <div
              className="bg-[#64FFDA] h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Backend & Programming */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Programming & Backend</h3>
      {[
        { name: "Java (Spring Boot)", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "SQL / MySQL", level: 80 },
        { name: "MongoDB", level: 70 },
      ].map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-5"
        >
          <div className="flex justify-between mb-1 text-sm text-[#EAEAEA]">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-[#112240] rounded-full h-2.5">
            <div
              className="bg-[#64FFDA] h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* Projects Section */}
<section id="projects" className="py-20 bg-[#0A192F] px-6 md:px-16 lg:px-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#64FFDA] text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#0A192F] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-[#64FFDA] mb-2">{project.title}</h3>
              <p className="text-[#CBD5E1] text-sm mb-4">{project.description}</p>
              <a
                href={project.sourceCodeUrl}
                className="inline-block px-6 py-2 mt-4 text-sm font-semibold bg-[#64FFDA] text-[#0A192F] rounded-xl hover:bg-[#52e0c4] transition duration-300"
              >
                View Source Code
              </a>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="contact" className="py-20 px-6 md:px-16 lg:px-32 bg-[#112240]">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-[#64FFDA] text-center mb-12"
  >
    Contact Me
  </motion.h2>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Contact Form */}
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A192F] p-8 rounded-2xl shadow-xl space-y-6"
    >
      <div>
        <label className="block text-sm text-[#EAEAEA] mb-1">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg bg-[#1C2B3A] text-white focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label className="block text-sm text-[#EAEAEA] mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 rounded-lg bg-[#1C2B3A] text-white focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label className="block text-sm text-[#EAEAEA] mb-1">Message</label>
        <textarea
          className="w-full px-4 py-2 rounded-lg bg-[#1C2B3A] text-white focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
          rows="5"
          placeholder="Type your message"
          required
        ></textarea>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="bg-[#64FFDA] text-[#0A192F] font-semibold py-2 px-6 rounded-xl hover:bg-[#52e0c4] transition duration-300"
      >
        Send Message
      </motion.button>
    </motion.form>

    {/* Contact Details */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-[#CBD5E1] space-y-6"
    >
      <h3 className="text-2xl font-semibold text-[#64FFDA]">Let's Connect</h3>
      <p>If you'd like to collaborate, discuss a project, or just want to say hi, feel free to reach out!</p>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="text-[#64FFDA]" />
          <span>vishaldeveops@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <User className="text-[#64FFDA]" />
          <span>Vishal Tinani</span>
        </div>
        <div className="flex items-center gap-3">
          <Briefcase className="text-[#64FFDA]" />
          <span>DevOps Engineer & Backend Developer</span>
        </div>
      </div>
      {/* Social Icons */}
    <div className="flex space-x-6 text-[#64FFDA]">
      <a href="https://github.com/Tinanivishal" target="_blank" rel="noopener noreferrer">
        <Code2 size={32} />
      </a>
      <a href="https://www.linkedin.com/in/vishal-tinani/" target="_blank" rel="noopener noreferrer">
        <Briefcase size={32} />
      </a>
    </div>

    {/* Contact Number */}
    <div className="text-lg text-[#EAEAEA] mt-4">
      <p>📞 <a href="tel:+91 7990953013" className="hover:text-[#64FFDA]">+91 7990953013</a></p>
    </div>
    </motion.div>
  </div>
</section>


    </div>
  );
}