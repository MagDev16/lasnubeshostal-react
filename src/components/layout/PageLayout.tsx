import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 0 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
