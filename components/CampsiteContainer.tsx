"use client";

import { useRef } from "react";

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
    <div className="relative">
      <div
        ref={scrollRef}
        className="
            overflow-x-auto overflow-y-hidden hide-scrollbar
            cursor-grab active:cursor-grabbing scroll-smooth
          "
        onMouseDown={handleMouseDown}
      >
        <div className="flex h-[340px] w-full items-start justify-start gap-8 lg:h-[400px] xl:h-[600px]">
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
      </div>
    </div>
  );
}
