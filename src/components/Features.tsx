import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Video, 
  TrendingUp, 
  FileText, 
  Target,
  Brain,
  Network,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning",
    description: "Step-by-step guidance from basics to advanced strategies, eliminating information overload.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Verified Coaches",
    description: "Connect with experienced mentors who provide reliable guidance and personalized support.",
    color: "text-accent"
  },
  {
    icon: Video,
    title: "Live Interaction",
    description: "Join strategy sessions, Q&A forums, and discussion groups for real-time collaborative learning.",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Practice Tools",
    description: "Interactive simulations, backtesting features, and demo environments for safe strategy refinement.",
    color: "text-accent"
  },
  {
    icon: FileText,
    title: "Trading Plans",
    description: "Risk management modules, systematic plans, and journaling tools to prevent impulsive decisions.",
    color: "text-primary"
  },
  {
    icon: Target,
    title: "Focused Strategies",
    description: "Personalized trading approaches tailored to your style, reducing strategy-hopping.",
    color: "text-accent"
  },
  {
    icon: Brain,
    title: "Emotional Discipline",
    description: "Trading psychology modules to help you avoid common pitfalls like overtrading and panic selling.",
    color: "text-primary"
  },
  {
    icon: Network,
    title: "Peer Networking",
    description: "Safe, private messaging and networking with verified mentors and community members.",
    color: "text-accent"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track your results with comprehensive dashboards to monitor progress and improve consistently.",
    color: "text-primary"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to 
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Succeed in Trading
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive tools and resources designed to accelerate your trading journey
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-[var(--shadow-medium)] transition-all duration-300 border-2 hover:border-primary/30 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
