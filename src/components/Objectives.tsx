import { Card } from "@/components/ui/card";
import { Target, Users2, Shield } from "lucide-react";
import communityImage from "@/assets/community-network.jpg";

const objectives = [
  {
    icon: Target,
    title: "Empower Traders",
    description: "Provide reliable expert insights and personalized coaching to build trading knowledge and confidence."
  },
  {
    icon: Users2,
    title: "Foster Community",
    description: "Create a supportive environment for collaborative learning, real-time interaction, and proven strategy sharing."
  },
  {
    icon: Shield,
    title: "Bridge Theory & Practice",
    description: "Offer a secure platform that enables disciplined trading through expert mentorship and hands-on guidance."
  }
];

const Objectives = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
              <img 
                src={communityImage} 
                alt="Trading community network" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          {/* Right: Objectives */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Mission &
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Core Objectives
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Transforming the way traders learn, grow, and succeed in the markets
              </p>
            </div>
            
            <div className="space-y-6">
              {objectives.map((objective, index) => {
                const Icon = objective.icon;
                return (
                  <Card key={index} className="p-6 border-2 hover:border-primary/30 transition-all">
                    <div className="flex gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 h-fit">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{objective.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
