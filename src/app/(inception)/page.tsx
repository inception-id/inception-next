import HeroSectionOne from "@/components/hero-section-demo-1";
import { redirect } from "next/navigation";

const Home = async () => {
  redirect("/whatsapp");
};

export default Home;
