import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-white">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate engineering student with a keen interest in technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Bio */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a second-year engineering student with a keen interest in technology, 
                  software development, and problem solving. My journey in tech began with 
                  curiosity and has evolved into a passion for creating innovative solutions.
                </p>
                <p>
                  Currently pursuing engineering at <strong className="text-primary">Rajiv Gandhi Institute of Technology, Mumbai</strong>, 
                  I'm constantly learning and exploring new technologies to expand my skill set 
                  and prepare for a career in software development.
                </p>
                <p>
                  Beyond academics, I have practical experience in event management and leadership, 
                  having headed multiple offline and online events across cities like Hyderabad, 
                  Mumbai, and Pune for a professional organization.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6 animate-fade-in">
            
            {/* Education Card */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Education</h4>
                    <p className="text-muted-foreground">
                      Currently pursuing Engineering at Rajiv Gandhi Institute of Technology, Mumbai
                    </p>
                    <p className="text-sm text-primary mt-2 font-medium">Second Year Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Card */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center shadow-accent">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Experience</h4>
                    <p className="text-muted-foreground">
                      Event Management & Leadership - Organized multiple events across Hyderabad, Mumbai, and Pune
                    </p>
                    <p className="text-sm text-accent mt-2 font-medium">Professional Organization</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expertise Card */}
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Core Strengths</h4>
                    <p className="text-muted-foreground">
                      Problem-solving, adaptability, and strong leadership skills with experience in data entry
                    </p>
                    <p className="text-sm text-primary mt-2 font-medium">Continuous Learner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>;
};
export default About;