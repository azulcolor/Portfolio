import { Presentation } from "@/components/presentation";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";

export default function Home() {

  return (
    <div className="snap-container">
      <Presentation />
      <Stack />
      <Projects />
    </div>
  );
}
