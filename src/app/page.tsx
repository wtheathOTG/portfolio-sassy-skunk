
import ChillaAnimator from "@/components/client/ChillaAnimator";
import Gallery from "@/components/server/gallery";
import Chilla from "@/components/server/Chilla";

export default function Home() {
  return (
   <div className="bg-zinc-950">
       <div className="flex justify-center items-center w-full h-screen">
           <h1 className="text-9xl font-extrabold">Text</h1>
       </div>
       <Gallery />
       <Chilla />
   </div>
  );
}
