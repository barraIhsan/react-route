import Navbar from "@/components/Navbar";
import background from "!/img/bg.jpg";
import Hero from "./Hero";

export default function Home() {
  return (
    <body style={{ backgroundImage: `url(${background.src})` }}>
      <Navbar />
      <Hero />
    </body>
  );
}
