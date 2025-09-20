import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Code, Rocket, ArrowRight } from "lucide-react";
const Portfolio = () => {
  const upcomingProjects = [{
    title: "Personal Finance Tracker",
    description: "A web application to help users manage their expenses and track financial goals",
    technologies: ["React", "Node.js", "MongoDB"],
    status: "Planning Phase",
    progress: 15
  }, {
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates and team features",
    technologies: ["JavaScript", "Express", "Socket.io"],
    status: "In Development",
    progress: 35
  }, {
    title: "E-learning Platform",
    description: "Interactive learning platform with course management and progress tracking",
    technologies: ["React", "Python", "PostgreSQL"],
    status: "Research Phase",
    progress: 10
  }];
  return <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="bg-clip-text gradient-primary text-gray-950">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey of continuous learning and project development
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-full border border-primary/20">
            <Rocket className="h-6 w-6 text-primary animate-bounce-gentle" />
            <span className="text-lg font-semibold text-primary">Projects Coming Soon!</span>
          </div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I'm currently working on several exciting projects. Here's a preview of what's in development:
          </p>
        </div>

        {/* Work in Progress Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingProjects.map((project, index) => <Card key={project.title} className="shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-slide-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6">
                
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-3 w-3 text-accent" />
                        <span className="text-xs text-accent font-medium">{project.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                      {tech}
                    </span>)}
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Progress</span>
                    <span className="text-xs font-medium text-primary">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out" style={{
                  width: `${project.progress}%`
                }} />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-glow" />
                    Work in Progress
                  </span>
                </div>

              </CardContent>
            </Card>)}
        </div>

        {/* Learning Timeline */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              My Learning Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
              
              {/* Timeline Items */}
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-glow">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Foundation Building</h4>
                    <p className="text-muted-foreground text-sm">Learning core programming languages and web technologies</p>
                    <span className="text-xs text-primary">Completed</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold shadow-accent">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Practical Application</h4>
                    <p className="text-muted-foreground text-sm">Building real-world projects and gaining hands-on experience</p>
                    <span className="text-xs text-accent">In Progress</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Advanced Concepts</h4>
                    <p className="text-muted-foreground text-sm">Exploring advanced frameworks and development patterns</p>
                    <span className="text-xs text-muted-foreground">Upcoming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to collaborate on a project or see my progress?
          </p>
          <Button variant="hero" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth"
        })} className="group">
            Let's Connect
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

      </div>
    </section>;
};
export default Portfolio;