"use client";

import { useRef } from "react";
import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

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
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl`}
    >
      <div className="flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full p-4 bg-green-50">
            <Image
              src="folded-map.svg"
              alt="folded-map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4">
            {PEOPLE_URL.map((url, index) => (
              <Image
                src={url}
                alt="people"
                width={52}
                height={52}
                key={index}
              />
            ))}
          </span>
          <p className="bold-16 lg:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
}

export default function CampsiteContainer() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={scrollRef}
      className="
            overflow-x-auto hide-scrollbar
            cursor-grab active:cursor-grabbing scroll-smooth
            flex h-[340px] w-full gap-8 lg:h-[400px] xl:h-[600px]
          "
      onMouseDown={handleMouseDown}
    >
      <Campsite
        backgroundImage="bg-bg-img-1"
        title="Monkey Forest Camp"
        subtitle="Ubud, Gianyar"
        peopleJoined="50+ Joined"
      />

      <Campsite
        backgroundImage="bg-bg-img-2"
        title="Mountain View Camp"
        subtitle="Somewhere in the wilderness"
        peopleJoined="70+ Joined"
      />
    </div>
  );
}
