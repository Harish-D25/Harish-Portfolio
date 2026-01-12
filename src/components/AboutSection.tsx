
import { Card, CardContent } from "@/components/ui/card";
import { CodeIcon, BrainIcon, MessagesSquareIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-lg">
            I'm a Computer Science student with a passion for artificial intelligence, machine learning, and creating
            solutions that make a positive impact. My journey in tech began with coding simple websites, but quickly
            evolved into diving deep into the world of AI and voice technology.
          </p>
          
          <p className="text-lg">
            With hands-on experience in Python, TensorFlow, and various web technologies, I enjoy building
            applications that are not only functional but also user-friendly. One of my proudest achievements is 
            Lyra, my custom-built voice assistant that demonstrates my ability to combine
            theoretical knowledge with practical implementation.
          </p>
          
          <p className="text-lg">
            I thrive on continuous learning, problem-solving, and collaborating with like-minded individuals to 
            create innovative tech solutions. When I'm not coding, you can find me exploring new AI research papers,
            participating in hackathons, or mentoring junior developers.
          </p>
        </div>
        
        <div className="grid gap-6">
          <Card className="glass-card hover:shadow-xl transition-all duration-300">
            <CardContent className="flex items-start space-x-4 p-6">
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                <BrainIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
                <p>Passionate about creating intelligent systems that learn and adapt, with a focus on practical applications of AI.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover:shadow-xl transition-all duration-300">
            <CardContent className="flex items-start space-x-4 p-6">
              <div className="bg-accent/10 dark:bg-accent/20 p-3 rounded-lg">
                <MessagesSquareIcon className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Voice Technology</h3>
                <p>Developed Lyra, a custom voice assistant showcasing my expertise in natural language processing and speech recognition.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover:shadow-xl transition-all duration-300">
            <CardContent className="flex items-start space-x-4 p-6">
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                <CodeIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                <p>Skilled in crafting clean, efficient code for web applications and software solutions with a focus on user experience.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
