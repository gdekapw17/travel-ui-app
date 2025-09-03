import CampsiteContainer from "./CampsiteContainer";

export default function Camp() {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:px-20 lg:py-20 lg:mb-10 xl:mb-20">
      <CampsiteContainer />
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] rounded-3xl overflow-hidden w-full relative xl:rounded-5xl xl:px-16 xl:py-20">
          <h2>
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
        </div>
      </div>
    </section>
  );
}
