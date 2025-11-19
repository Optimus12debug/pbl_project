import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-subtle)] -z-10" />
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Expert Trading Education</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Master Trading with
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Expert Guidance
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join TradeConnect — where beginner traders connect with seasoned professionals. 
              Learn proven strategies, avoid costly mistakes, and trade with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary-glow transition-all shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)]"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Active Traders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Expert Mentors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
              <img 
                src={heroImage} 
                alt="Trading mentorship session" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
