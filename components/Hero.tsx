import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-400">
      <div className="hero-map"></div>

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={30}
          className="absolute -left-[5px] -top-[30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Monkey Forest Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Experience the reward of discovering nature's pure, untouched beauty
          on all your travels. Let us be your guide to global adventures, all
          through one application.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  width={24}
                  height={24}
                  alt="star"
                  key={index}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            271k{" "}
            <span className="regular-16 lg:regular-20">Excelent Review</span>
          </p>
        </div>
      </div>
    </section>
  );
}
