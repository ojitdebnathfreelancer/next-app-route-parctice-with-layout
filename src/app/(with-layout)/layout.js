import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <NavBar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
