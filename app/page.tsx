import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Purpose from "../components/Purpose";
import QuickPaths from "../components/QuickPaths";
import CareerTree from "../components/CareerTree";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Purpose />
      <QuickPaths />
      <CareerTree />
    </main>
  );
}