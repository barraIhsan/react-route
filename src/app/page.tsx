import Navbar from "@/components/Navbar";
import background from "!/img/bg.jpg";

export default function Home() {
  return (
    <body style={{ backgroundImage: `url(${background.src})` }}>
      <Navbar />
    </body>
  );
}
