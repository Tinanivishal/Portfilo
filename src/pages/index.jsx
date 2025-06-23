import Image from "next/image";
import { useState, useRef } from "react";
import { Geist } from "next/font/google";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from "framer-motion";
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
    image: "/certificates/java.jpg",
    description: "Completed Full Stack Java Developer training with backend and frontend experience."
  },
  {
    name: "IANT Course",
    image: "/certificates/iant.jpg",
    description: "Completed professional IT training from IANT in networking and system administration."
  }
];

function FloatingShape({ index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 100 });
  const springY = useSpring(y, { damping: 30, stiffness: 100 });
  
  const size = Math.random() * 100 + 50;
  const colors = ["#64FFDA", "#112240", "#0A192F"];
  const shapes = ["circle", "square", "triangle"];
  
  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - size / 2);
    y.set(e.clientY - rect.top - size / 2);
  };

  return (
    <motion.div
      ref={ref}
      className="absolute opacity-10 hover:opacity-30 transition-opacity"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        x: springX,
        y: springY,
        background: colors[index % colors.length],
        borderRadius: shapes[index % shapes.length] === "circle" ? "50%" : "10%",
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 80}%`,
        rotate: Math.random() * 360
      }}
      onMouseMove={handleMouseMove}
      animate={{
        y: [0, Math.random() * 100 - 50],
        x: [0, Math.random() * 100 - 50],
        rotate: [0, Math.random() * 360]
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

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
                <motion.a
                  key={item.label}
                  href={`#${item.label.toLowerCase()}`}
                  className="flex items-center gap-2 hover:text-[#64FFDA] transition duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  {item.label}
                </motion.a>
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
          <motion.div 
            className="md:hidden bg-[#0A192F] px-4 pb-4 space-y-2 text-center"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                className="block flex items-center justify-center gap-2 text-[#EAEAEA] hover:text-[#64FFDA] transition duration-200 py-2"
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-1 bg-[#64FFDA] origin-left z-40"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="pt-24 px-6 md:px-16 lg:px-32 min-h-screen flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Floating background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <FloatingShape key={i} index={i} />
          ))}
        </div>

        <div className="text-left space-y-6 z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight text-[#64FFDA]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="text-white">Vishal Tinani</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#D1D5DB] max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate <span className="text-[#64FFDA]">DevOps</span> and <span className="text-[#64FFDA]">Backend Developer</span> who loves building scalable infrastructure and automation pipelines.
          </motion.p>
          
          <motion.a
            href="#projects"
            className="inline-block px-6 py-3 mt-4 text-lg font-semibold bg-[#64FFDA] text-[#0A192F] rounded-xl hover:bg-[#52e0c4] transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </div>

        <motion.div 
          className="mt-10 md:mt-0 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Image
              src="/me.jpg"
              alt="Vishal Tinani"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#112240] text-center py-20 px-6 md:px-16 lg:px-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            } 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-[#64FFDA] text-center mb-12 relative inline-block"
        >
          <span className="relative z-10 px-4">
            About Me
          </span>
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          />
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
            I have hands-on experience with AWS, Docker, Kubernetes, Jenkins, Ansible, and Terraform, and I've worked on projects that involved setting up CI/CD pipelines, containerizing applications, and managing scalable infrastructure. On the backend side, I'm skilled in Java (Spring Boot), Node.js, and Python.
          </p>
          <p>
            I'm a quick learner, a team player, and someone who genuinely enjoys solving complex problems through automation and efficient systems. I'm continuously exploring new tools and trends in DevOps and backend development to stay ahead in the industry.
          </p>
          <p>
            Whether it's scripting, deploying, or debugging, I love diving into the details and delivering robust, secure, and maintainable solutions. My goal is to work in an environment where I can both contribute and grow, pushing the boundaries of what's possible in software infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Certification Section */}
      <section id="certifications" className="py-20 bg-[#112240] px-6 md:px-16 lg:px-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            } 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-[#64FFDA] text-center mb-12 relative inline-block"
        >
          <span className="relative z-10 px-4">
            Certifications
          </span>
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-[#0A192F] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-[#64FFDA] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <Image
                src={cert.image}
                alt={cert.name}
                width={300}
                height={200}
                className="rounded-lg mb-4 mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold text-[#64FFDA] mb-2 group-hover:text-white transition-colors duration-300">{cert.name}</h3>
              <p className="text-[#CBD5E1] text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0A192F] px-6 md:px-16 lg:px-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            } 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-[#64FFDA] text-center mb-12 relative inline-block"
        >
          <span className="relative z-10 px-4">
            Skills
          </span>
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          />
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
                  <motion.div
                    className="bg-[#64FFDA] h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
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
                  <motion.div
                    className="bg-[#64FFDA] h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
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
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            } 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-[#64FFDA] text-center mb-12 relative inline-block"
        >
          <span className="relative z-10 px-4">
            Projects
          </span>
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#0A192F] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-[#64FFDA] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-lg mb-4 mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold text-[#64FFDA] mb-2 group-hover:text-white transition-colors duration-300">{project.title}</h3>
              <p className="text-[#CBD5E1] text-sm mb-4">{project.description}</p>
              <motion.a
                href={project.sourceCodeUrl}
                className="inline-block px-6 py-2 mt-4 text-sm font-semibold bg-[#64FFDA] text-[#0A192F] rounded-xl hover:bg-[#52e0c4] transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Source Code
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-16 lg:px-32 bg-[#112240]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            } 
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-[#64FFDA] text-center mb-12 relative inline-block"
        >
          <span className="relative z-10 px-4">
            Contact Me
          </span>
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-[#64FFDA]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0A192F] p-8 rounded-2xl shadow-xl space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm text-[#EAEAEA] mb-1">Name</label>
              <motion.input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#1C2B3A] text-white focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
                placeholder="Enter your name"
                required
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 0 2px #64FFDA"
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm text-[#EAEAEA] mb-1">Email</label>
              <motion.input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-[#1C2B3A] text-white focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
                placeholder="Enter your email"
                required
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 0 2px #64FFDA"
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm text-[#EAEAEA] mb-1">Message</label>
              <motion.textarea
                className="w-full px-4 py-2 rounded-lg bg-[#1C2B3A] text-white focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
                rows="5"
                placeholder="Type your message"
                required
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 0 2px #64FFDA"
                }}
              ></motion.textarea>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#64FFDA] text-[#0A192F] font-semibold py-2 px-6 rounded-xl hover:bg-[#52e0c4] transition duration-300 w-full"
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
              <motion.a 
                href="https://github.com/Tinanivishal" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <Code2 size={32} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/vishal-tinani/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <Briefcase size={32} />
              </motion.a>
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