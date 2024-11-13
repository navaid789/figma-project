import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className='bg-[#A29875] w-auto h-24'>
      <h1 className='text-white text-2xl md:text-4xl h-16 font-bold py-3 px-9'>MANZZARI</h1>
      
      <Hero/>
    </div>
  
  );
}
