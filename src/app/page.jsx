import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    // Replaced light background fallback with an absolute rich dark canvas 
    // to match the deep tone of the globe component artwork
    <main className="min-h-screen bg-[#050505] font-sans text-white antialiased">
      <StatsSection />
    </main>
  );
}