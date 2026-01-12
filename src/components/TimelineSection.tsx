
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCapIcon, BrainIcon, CodeIcon, RocketIcon } from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    year: "2022",
    title: "Started Computer Science Journey",
    description: "Began my Computer Science studies with a focus on programming fundamentals and web development.",
    icon: GraduationCapIcon,
    color: "text-blue-500"
  },
  {
    id: 2,
    year: "2023",
    title: "Discovered AI & Machine Learning",
    description: "Dove deep into artificial intelligence and machine learning, exploring TensorFlow and Python for data science.",
    icon: BrainIcon,
    color: "text-purple-500"
  },
  {
    id: 3,
    year: "2023",
    title: "Built Lyra Voice Assistant",
    description: "Developed my flagship project - a custom voice assistant showcasing natural language processing capabilities.",
    icon: CodeIcon,
    color: "text-green-500"
  },
  {
    id: 4,
    year: "2024",
    title: "Expanding Tech Stack",
    description: "Currently working on various projects while exploring new technologies and contributing to open source.",
    icon: RocketIcon,
    color: "text-orange-500"
  }
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A timeline of my growth and achievements in technology
        </p>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent hidden md:block"></div>
        
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-8 gap-4`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                <Card className="glass-card hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                      <div className={`p-2 rounded-lg bg-primary/10 dark:bg-primary/20`}>
                        <event.icon className={`h-6 w-6 ${event.color}`} />
                      </div>
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Timeline dot */}
              <div className="relative z-10 hidden md:block">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
