import { traders } from "@/data/traders";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, TrendingUp, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Learning = () => {
  const navigate = useNavigate();

  return (
    <section id="learning" className="py-20 bg-[image:var(--gradient-subtle)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5">
            Learn from the Best
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Traders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our verified professional traders, view their performance
            dashboards, and enroll in their courses to accelerate your trading
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {traders.map((trader) => (
            <Card
              key={trader.id}
              className="group cursor-pointer hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              onClick={() => navigate(`/trader/${trader.id}`)}
            >
              <CardContent className="p-0">
                {/* Header with avatar & info */}
                <div className="p-6 pb-4 flex items-center gap-4">
                  <img
                    src={trader.avatar}
                    alt={trader.name}
                    loading="lazy"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-lg truncate">
                      {trader.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {trader.title}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-semibold text-foreground">
                        {trader.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({trader.totalReviews})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="px-6 grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 rounded-lg bg-secondary/50">
                    <TrendingUp className="w-4 h-4 mx-auto mb-1 text-accent" />
                    <p className="text-xs text-muted-foreground">Win Rate</p>
                    <p className="font-bold text-foreground text-sm">
                      {trader.winRate}%
                    </p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-secondary/50">
                    <Award className="w-4 h-4 mx-auto mb-1 text-primary" />
                    <p className="text-xs text-muted-foreground">Avg Return</p>
                    <p className="font-bold text-foreground text-sm">
                      {trader.avgMonthlyReturn}%
                    </p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-secondary/50">
                    <Users className="w-4 h-4 mx-auto mb-1 text-primary" />
                    <p className="text-xs text-muted-foreground">Students</p>
                    <p className="font-bold text-foreground text-sm">
                      {trader.studentsEnrolled.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Mini returns chart */}
                <div className="px-6 pb-2">
                  <p className="text-xs text-muted-foreground mb-2">
                    Monthly Returns (%)
                  </p>
                  <div className="h-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={trader.monthlyReturns}>
                        <XAxis
                          dataKey="month"
                          tick={{ fontSize: 9 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis hide />
                        <Tooltip
                          contentStyle={{
                            fontSize: 12,
                            borderRadius: 8,
                            border: "none",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          }}
                          formatter={(value: number) => [`${value}%`, "Return"]}
                        />
                        <Bar
                          dataKey="return"
                          fill="hsl(195 85% 42%)"
                          radius={[2, 2, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-border flex items-center justify-between">
                  <div>
                    <Badge variant="outline" className="text-xs">
                      {trader.specialty}
                    </Badge>
                  </div>
                  <span className="text-sm font-semibold text-primary group-hover:underline">
                    View Profile →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;
