import Image from 'next/image';

const Hero = () => {
  return (
    
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#FFFFFF] p-8 md:p-16">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold text-[#000000] ">
          IMPECCABLE<br/> CRAFTSMANSHIP AND<br/> FINESSE
        </h1>
        <p className="text-[#787054]
">
          An example of intricate workmanship and detail, elegant<br/> necklaces and
          long and short chains form a part of our<br/> desirable collection.
        </p>
        <button className="px-6 py-3 bg-[#A29875] text-white font-medium rounded-lg">
          Explore Now
        </button>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/images/image.Svg.png" 
            alt="/blank"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;


