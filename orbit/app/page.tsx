import Features from "@/components/frontend/features";
import Footer from "@/components/frontend/footer";
import Hero from "@/components/frontend/hero";
import Navbar from "@/components/frontend/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
