
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Lyra Voice Assistant (currently in Private)",
    description: "A custom-built voice assistant using Python and natural language processing that can perform tasks like weather updates, reminders, and music playback.",
    image: "/placeholder.svg",
    tags: ["Python", "NLP", "TensorFlow", "Voice Recognition"],
    liveLink: "#",
    codeLink: "https://github.com/Harish-D25/Lyra",
  },
  {
    id: 2,
    title: "Blood Pressure Monitoring System",
    description: "This project is built with cutting-edge web technologies to provide a seamless and modern development experience.",
    image: "/placeholder.svg",
    tags: ["Python", "Data Visualization", "Machine Learning"],
    liveLink: "#",
    codeLink: "https://github.com/Harish-D25/Blood-Pressure-Monitoring-System",
  },
  {
    id: 3,
    title: "Crypto Dashboard",
    description: "This project is built with cutting-edge web technologies to provide a seamless and modern development experience.",
    image: "/placeholder.svg",
    tags: ["React", "API Integration", "Real Time Crypto Price", "Crypto Price Tracker"],
    liveLink: "#",
    codeLink: "https://github.com/Harish-D25/Crypto_Dashbord",
  },
  {
    id: 4,
    title: "Food Calorie Tracker (Updating)",
    description: "A mobile-friendly application helping users track daily calorie intake, nutritional information, and set personalized health goals.",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "Nutrition API", "Health Metrics"],
    liveLink: "#",
    codeLink: "#",
  }
];

const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
      <div className="h-48 bg-muted">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Live Demo
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-secondary/30 dark:bg-secondary/10">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on that showcase my skills and interests
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button asChild variant="outline" className="text-lg px-8 py-6">
          <a 
            href="https://github.com/Harish-D25?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GithubIcon className="h-5 w-5" />
            View More Projects on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
