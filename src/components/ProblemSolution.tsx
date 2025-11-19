import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problem */}
          <Card className="p-8 border-2 border-destructive/20 bg-card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-destructive/10">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beginner traders struggle with unreliable information, overwhelming complexity, 
                  and lack of access to authentic expert insights. This leads to costly mistakes 
                  and discouragement early in their trading journey.
                </p>
              </div>
            </div>
          </Card>
          
          {/* Solution */}
          <Card className="p-8 border-2 border-accent/30 bg-card shadow-[var(--shadow-soft)]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  TradeConnect bridges this gap by connecting you directly with verified trading 
                  experts and proven strategies. Get structured learning, live mentorship, and 
                  community support—all in one trusted platform.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
