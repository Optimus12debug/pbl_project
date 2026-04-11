import trader1 from "@/assets/traders/trader1.jpg";
import trader2 from "@/assets/traders/trader2.jpg";
import trader3 from "@/assets/traders/trader3.jpg";
import trader4 from "@/assets/traders/trader4.jpg";
import trader5 from "@/assets/traders/trader5.jpg";
import trader6 from "@/assets/traders/trader6.jpg";

export interface MonthlyReturn {
  month: string;
  return: number;
}

export interface Trader {
  id: string;
  name: string;
  avatar: string;
  title: string;
  specialty: string;
  experience: string;
  bio: string;
  studentsEnrolled: number;
  rating: number;
  totalReviews: number;
  winRate: number;
  avgMonthlyReturn: number;
  totalReturn: number;
  courseFeeUSD: number;
  courseWeeks: number;
  courseModules: number;
  liveSessions: number;
  monthlyReturns: MonthlyReturn[];
  skills: string[];
  languages: string[];
  strategy: string;
}

export const traders: Trader[] = [
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    avatar: trader1,
    title: "Senior Equity Strategist",
    specialty: "Swing Trading & Options",
    experience: "15 years",
    bio: "Former Goldman Sachs trader with a proven track record in swing trading. Marcus specializes in identifying high-probability setups using technical analysis combined with market sentiment indicators.",
    studentsEnrolled: 1247,
    rating: 4.9,
    totalReviews: 832,
    winRate: 72,
    avgMonthlyReturn: 8.5,
    totalReturn: 342,
    courseFeeUSD: 499,
    courseWeeks: 12,
    courseModules: 48,
    liveSessions: 24,
    monthlyReturns: [
      { month: "Jul", return: 7.2 },
      { month: "Aug", return: 9.1 },
      { month: "Sep", return: 5.8 },
      { month: "Oct", return: 11.3 },
      { month: "Nov", return: 8.7 },
      { month: "Dec", return: 6.4 },
      { month: "Jan", return: 10.2 },
      { month: "Feb", return: 7.9 },
      { month: "Mar", return: 12.1 },
      { month: "Apr", return: 9.5 },
      { month: "May", return: 6.8 },
      { month: "Jun", return: 8.3 },
    ],
    skills: ["Technical Analysis", "Options Trading", "Risk Management", "Market Psychology"],
    languages: ["English", "Mandarin"],
    strategy: "Combines multi-timeframe technical analysis with options flow data to identify swing trade setups with 2:1+ risk-reward ratios. Uses moving averages, RSI divergence, and volume profile for entries.",
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    avatar: trader2,
    title: "Forex Trading Expert",
    specialty: "Forex & Scalping",
    experience: "10 years",
    bio: "Award-winning forex trader who has trained over 800 students globally. Sarah's scalping strategies focus on major currency pairs with tight risk management and consistent daily returns.",
    studentsEnrolled: 983,
    rating: 4.8,
    totalReviews: 654,
    winRate: 68,
    avgMonthlyReturn: 6.2,
    totalReturn: 218,
    courseFeeUSD: 349,
    courseWeeks: 8,
    courseModules: 32,
    liveSessions: 16,
    monthlyReturns: [
      { month: "Jul", return: 5.8 },
      { month: "Aug", return: 7.3 },
      { month: "Sep", return: 4.9 },
      { month: "Oct", return: 8.1 },
      { month: "Nov", return: 6.5 },
      { month: "Dec", return: 5.2 },
      { month: "Jan", return: 7.8 },
      { month: "Feb", return: 6.1 },
      { month: "Mar", return: 9.0 },
      { month: "Apr", return: 5.6 },
      { month: "May", return: 4.7 },
      { month: "Jun", return: 6.9 },
    ],
    skills: ["Forex Trading", "Scalping", "Price Action", "News Trading"],
    languages: ["English", "Spanish"],
  },
  {
    id: "david-park",
    name: "David Park",
    avatar: trader3,
    title: "Quantitative Analyst",
    specialty: "Algorithmic Trading",
    experience: "12 years",
    bio: "PhD in Financial Engineering from MIT. David combines quantitative modeling with practical trading strategies, teaching students how to build and backtest automated trading systems.",
    studentsEnrolled: 756,
    rating: 4.7,
    totalReviews: 489,
    winRate: 75,
    avgMonthlyReturn: 9.8,
    totalReturn: 410,
    courseFeeUSD: 699,
    courseWeeks: 16,
    courseModules: 64,
    liveSessions: 32,
    monthlyReturns: [
      { month: "Jul", return: 8.5 },
      { month: "Aug", return: 10.2 },
      { month: "Sep", return: 7.1 },
      { month: "Oct", return: 13.4 },
      { month: "Nov", return: 9.8 },
      { month: "Dec", return: 8.0 },
      { month: "Jan", return: 11.5 },
      { month: "Feb", return: 9.3 },
      { month: "Mar", return: 14.2 },
      { month: "Apr", return: 10.1 },
      { month: "May", return: 7.9 },
      { month: "Jun", return: 9.6 },
    ],
    skills: ["Python", "Algorithmic Trading", "Backtesting", "Machine Learning"],
    languages: ["English", "Korean"],
  },
  {
    id: "raj-patel",
    name: "Raj Patel",
    avatar: trader4,
    title: "Crypto & DeFi Specialist",
    specialty: "Cryptocurrency Trading",
    experience: "7 years",
    bio: "Early Bitcoin adopter and DeFi expert. Raj teaches crypto trading from basics to advanced DeFi strategies, with a focus on risk management in volatile markets.",
    studentsEnrolled: 1589,
    rating: 4.6,
    totalReviews: 1102,
    winRate: 65,
    avgMonthlyReturn: 12.4,
    totalReturn: 520,
    courseFeeUSD: 399,
    courseWeeks: 10,
    courseModules: 40,
    liveSessions: 20,
    monthlyReturns: [
      { month: "Jul", return: 10.2 },
      { month: "Aug", return: 15.1 },
      { month: "Sep", return: 8.3 },
      { month: "Oct", return: 18.5 },
      { month: "Nov", return: 12.7 },
      { month: "Dec", return: -3.2 },
      { month: "Jan", return: 14.8 },
      { month: "Feb", return: 11.0 },
      { month: "Mar", return: 20.1 },
      { month: "Apr", return: 9.5 },
      { month: "May", return: 13.6 },
      { month: "Jun", return: 11.2 },
    ],
    skills: ["Crypto Trading", "DeFi", "On-chain Analysis", "Portfolio Management"],
    languages: ["English", "Hindi"],
  },
  {
    id: "linda-okafor",
    name: "Linda Okafor",
    avatar: trader5,
    title: "Commodities Trading Coach",
    specialty: "Commodities & Futures",
    experience: "18 years",
    bio: "Veteran commodities trader with deep expertise in oil, gold, and agricultural futures. Linda's structured approach to position trading has helped hundreds of students achieve consistent returns.",
    studentsEnrolled: 642,
    rating: 4.9,
    totalReviews: 398,
    winRate: 74,
    avgMonthlyReturn: 7.1,
    totalReturn: 285,
    courseFeeUSD: 549,
    courseWeeks: 14,
    courseModules: 56,
    liveSessions: 28,
    monthlyReturns: [
      { month: "Jul", return: 6.3 },
      { month: "Aug", return: 7.8 },
      { month: "Sep", return: 5.5 },
      { month: "Oct", return: 9.2 },
      { month: "Nov", return: 7.4 },
      { month: "Dec", return: 6.1 },
      { month: "Jan", return: 8.5 },
      { month: "Feb", return: 7.0 },
      { month: "Mar", return: 10.3 },
      { month: "Apr", return: 6.8 },
      { month: "May", return: 5.9 },
      { month: "Jun", return: 7.2 },
    ],
    skills: ["Commodities", "Futures Trading", "Fundamental Analysis", "Position Trading"],
    languages: ["English", "French"],
  },
  {
    id: "hans-mueller",
    name: "Hans Mueller",
    avatar: trader6,
    title: "Portfolio Manager",
    specialty: "Value Investing & ETFs",
    experience: "22 years",
    bio: "Former Deutsche Bank portfolio manager with over two decades of experience. Hans teaches long-term wealth building through value investing, ETF strategies, and dividend income portfolios.",
    studentsEnrolled: 891,
    rating: 4.8,
    totalReviews: 567,
    winRate: 78,
    avgMonthlyReturn: 5.3,
    totalReturn: 195,
    courseFeeUSD: 299,
    courseWeeks: 8,
    courseModules: 32,
    liveSessions: 16,
    monthlyReturns: [
      { month: "Jul", return: 4.8 },
      { month: "Aug", return: 5.5 },
      { month: "Sep", return: 3.9 },
      { month: "Oct", return: 6.7 },
      { month: "Nov", return: 5.2 },
      { month: "Dec", return: 4.5 },
      { month: "Jan", return: 6.1 },
      { month: "Feb", return: 5.0 },
      { month: "Mar", return: 7.4 },
      { month: "Apr", return: 5.8 },
      { month: "May", return: 4.2 },
      { month: "Jun", return: 5.6 },
    ],
    skills: ["Value Investing", "ETFs", "Dividend Strategies", "Portfolio Construction"],
    languages: ["English", "German"],
  },
];
