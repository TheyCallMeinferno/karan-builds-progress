import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Brain } from "lucide-react";
const Skills = () => {
  const skillCategories = [{
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "HTML", "CSS", "C", "C++", "Python"],
    color: "gradient-primary"
  }, {
    title: "Development & Design",
    icon: Palette,
    skills: ["Web Development", "Web Design", "UI/UX (Basic)", "Responsive Design"],
    color: "gradient-accent"
  }, {
    title: "Technical Skills",
    icon: Zap,
    skills: ["Software Development", "Problem Solving", "Data Entry", "Version Control"],
    color: "bg-gradient-to-br from-primary to-purple-600"
  }, {
    title: "Soft Skills",
    icon: Brain,
    skills: ["Leadership", "Event Management", "Adaptability", "Team Collaboration"],
    color: "bg-gradient-to-br from-accent to-orange-500"
  }];
  return <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="bg-clip-text gradient-primary text-slate-950">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern software development and problem-solving
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => <Card key={category.title} className="shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-slide-up group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-8">
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default transform hover:scale-105" style={{
                animationDelay: `${index * 0.1 + skillIndex * 0.05}s`
              }}>
                      {skill}
                    </Badge>)}
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-medium">
                      {category.title.includes('Programming') ? 'Intermediate' : category.title.includes('Development') ? 'Growing' : category.title.includes('Technical') ? 'Proficient' : 'Advanced'}
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className={`h-full ${category.color} rounded-full transition-all duration-1000 ease-out`} style={{
                  width: category.title.includes('Programming') ? '70%' : category.title.includes('Development') ? '65%' : category.title.includes('Technical') ? '75%' : '85%',
                  animationDelay: `${index * 0.2}s`
                }} />
                  </div>
                </div>

              </CardContent>
            </Card>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">
            Always learning and exploring new technologies
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow" />
            <span className="text-primary font-medium">Currently expanding my React & Node.js skills</span>
          </div>
        </div>

      </div>
    </section>;
};
export default Skills;