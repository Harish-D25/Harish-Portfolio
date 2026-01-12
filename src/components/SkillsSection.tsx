
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Python", level: 90 },
  { name: "TensorFlow", level: 85 },
  { name: "Natural Language Processing", level: 80 },
  { name: "Machine Learning", level: 85 },
  { name: "SQL", level: 75 },
  { name: "Git & Version Control", level: 80 },
  { name: "VS Code & Development Tools", level: 85 },
  { name: "Frontend Basics (HTML, CSS, JS)", level: 75 },
];

const otherSkills = [
  "Neural Networks", "Voice Recognition", "Data Analysis", 
  "Scikit-learn", "PyTorch", "Problem Solving", "REST APIs", 
  "Team Collaboration", "Project Management", "Flask", "OpenAI", "AWS"
];

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => {
          setWidth(level);
        }, 200);
      }
    }, { threshold: 0.5 });
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);
  
  return (
    <div className="mb-6" ref={barRef}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-medium text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div 
          className="skill-bar"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my technical skills and areas of expertise
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        <Card className="p-6 hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-6">Core Technical Skills</h3>
          {skills.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              level={skill.level} 
            />
          ))}
        </Card>
        
        <div>
          <Card className="p-6 mb-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-6">Additional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-4">Experience Highlights</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li>1.5 years team management experience in tech projects</li>
              <li>Led multiple AI research projects at university</li>
              <li>Developed voice technology solutions for accessibility</li>
              <li>Contributed to open-source machine learning libraries</li>
              <li>Mentored junior developers in programming fundamentals</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
