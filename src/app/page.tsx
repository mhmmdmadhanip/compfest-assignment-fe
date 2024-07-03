import Hero from "./section/Hero"
import AboutUs from './section/AboutUs';
import Service from "./section/Service";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutUs />
      <Service />
    </div>
  );
}
