import Image from "next/image";

type CampsiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
};

function Campsite({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampsiteProps) {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}`}></div>
  );
}

export default function Camp() {
  return (
    <section className="xl:max-container relative flex flex-col py-10 lg:py-20 lg:mb-10 xl:mb-20 ">
      <div className="flex h-[340px] lg:h-[400px] xl:h-[640px] w-full items-start justify-start gap-8 overflow-x-auto">
        <Campsite
          backgroundImage="bg-bg-img-1"
          title="Monkey Forest Camp"
          subtitle="Ubud, Gianyar"
          peopleJoined="50+ Joined"
        />

        <Campsite
          backgroundImage="bg-bg-img-1"
          title="Monkey Forest Camp"
          subtitle="Ubud, Gianyar"
          peopleJoined="50+ Joined"
        />

        <Campsite
          backgroundImage="bg-bg-img-1"
          title="Monkey Forest Camp"
          subtitle="Ubud, Gianyar"
          peopleJoined="50+ Joined"
        />
      </div>
    </section>
  );
}
