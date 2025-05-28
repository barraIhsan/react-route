import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import background from "!/img/bg-home.jpg";

export default function Home() {
  return (
    <body style={{ backgroundImage: `url(${background.src})` }}>
      <Navbar />
      <Hero />
    </body>
  );
}
