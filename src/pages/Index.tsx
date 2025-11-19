import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Objectives from "@/components/Objectives";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <ProblemSolution />
        <Features />
        <Objectives />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
