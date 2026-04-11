import { useParams, useNavigate } from "react-router-dom";
import { traders } from "@/data/traders";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Users,
  TrendingUp,
  Award,
  Clock,
  BookOpen,
  Video,
  Globe,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const TraderProfile = () => {
  const { traderId } = useParams();
  const navigate = useNavigate();
  const trader = traders.find((t) => t.id === traderId);

  if (!trader) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Trader Not Found
          </h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const cumulativeReturns = trader.monthlyReturns.reduce<
    { month: string; cumulative: number }[]
  >((acc, item, i) => {
    const prev = i > 0 ? acc[i - 1].cumulative : 0;
    acc.push({ month: item.month, cumulative: +(prev + item.return).toFixed(1) });
    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <span className="text-sm text-muted-foreground">
            / Professional Traders / {trader.name}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <img
            src={trader.avatar}
            alt={trader.name}
            width={160}
            height={160}
            className="w-40 h-40 rounded-2xl object-cover ring-4 ring-primary/20 shadow-lg"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-foreground">
                {trader.name}
              </h1>
              <Badge className="bg-accent text-accent-foreground">
                <CheckCircle className="w-3 h-3 mr-1" /> Verified
              </Badge>
            </div>
            <p className="text-lg text-primary font-medium mb-1">
              {trader.title}
            </p>
            <p className="text-muted-foreground mb-4">{trader.bio}</p>
            <div className="flex flex-wrap gap-2">
              {trader.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            {
              icon: TrendingUp,
              label: "Win Rate",
              value: `${trader.winRate}%`,
              color: "text-accent",
            },
            {
              icon: Award,
              label: "Avg Monthly Return",
              value: `${trader.avgMonthlyReturn}%`,
              color: "text-primary",
            },
            {
              icon: Star,
              label: "Rating",
              value: `${trader.rating} / 5`,
              color: "text-accent",
            },
            {
              icon: Users,
              label: "Students Enrolled",
              value: trader.studentsEnrolled.toLocaleString(),
              color: "text-primary",
            },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Charts Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Monthly Returns Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Monthly Returns (Last 12 Months)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trader.monthlyReturns}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(195 20% 88%)"
                      />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                      <YAxis
                        tick={{ fontSize: 12 }}
                        tickFormatter={(v) => `${v}%`}
                      />
                      <Tooltip
                        formatter={(value: number) => [`${value}%`, "Return"]}
                        contentStyle={{
                          borderRadius: 8,
                          border: "none",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Bar
                        dataKey="return"
                        fill="hsl(195 85% 42%)"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Cumulative Returns Line Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Cumulative Returns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={cumulativeReturns}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(195 20% 88%)"
                      />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                      <YAxis
                        tick={{ fontSize: 12 }}
                        tickFormatter={(v) => `${v}%`}
                      />
                      <Tooltip
                        formatter={(value: number) => [
                          `${value}%`,
                          "Cumulative",
                        ]}
                        contentStyle={{
                          borderRadius: 8,
                          border: "none",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="cumulative"
                        stroke="hsl(142 76% 45%)"
                        strokeWidth={2.5}
                        dot={{ fill: "hsl(142 76% 45%)", r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Details Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">
                  Course Fee
                </p>
                <p className="text-4xl font-bold text-foreground mb-1">
                  ${trader.courseFeeUSD}
                  <span className="text-base font-normal text-muted-foreground">
                    {" "}
                    USD
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mb-6">
                  One-time payment · Lifetime access
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 mb-3" size="lg">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Contact Trader
                </Button>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: Clock,
                    label: "Duration",
                    value: `${trader.courseWeeks} Weeks`,
                  },
                  {
                    icon: BookOpen,
                    label: "Modules",
                    value: `${trader.courseModules} Modules`,
                  },
                  {
                    icon: Video,
                    label: "Live Sessions",
                    value: `${trader.liveSessions} Sessions`,
                  },
                  {
                    icon: Users,
                    label: "Students",
                    value: trader.studentsEnrolled.toLocaleString(),
                  },
                  {
                    icon: Globe,
                    label: "Languages",
                    value: trader.languages.join(", "),
                  },
                  {
                    icon: Award,
                    label: "Experience",
                    value: trader.experience,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 py-2 border-b border-border last:border-0"
                  >
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground flex-1">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Total Return */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <p className="text-sm opacity-80 mb-1">Total Return (All Time)</p>
                <p className="text-5xl font-bold">+{trader.totalReturn}%</p>
                <p className="text-sm opacity-80 mt-2">
                  {trader.totalReviews} verified reviews
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderProfile;
