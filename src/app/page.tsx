import { currentUser } from "@clerk/nextjs/server";
import Hero from "@/components/UnauthHero";

async function Home() {
    const authUser = await currentUser();
    if (!authUser) return <Hero />;
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <div>
      <main className="flex flex-col gap-[32px] items-center justify-center">
        <h1>
          Farm Management
        </h1>
      </main>
    </div>
  );
}
export default Home;