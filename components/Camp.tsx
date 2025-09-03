import Image from "next/image";
import CampsiteContainer from "./CampsiteContainer";

export default function Camp() {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:px-20 lg:py-20 lg:mb-10 xl:mb-20">
      <CampsiteContainer />
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] rounded-3xl overflow-hidden w-full relative xl:rounded-5xl xl:px-16 xl:py-20">
          <h2 className="regular-24 xl:regular-32 2xl: regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            height={219}
            width={186}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
}
