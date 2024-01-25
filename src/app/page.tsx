import { TestClientComponent } from "@/components/base/TestClientComponent/TestClientComponent"; // ! -- remove later
import { Hero } from "@/sections";

export default async function Home() {
  return (
    <>
      <Hero />

      <TestClientComponent />
    </>
  );
}
