import Image from "next/image";
import { FEATURES } from "@/constants";

type FeatureItemType = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};

function FeatureItem({ title, icon, variant, description }: FeatureItemType) {
  return (
    <li className="w-full flex flex-1 flex-col items-start gap-5">
      <div className={`rounded-full p-4 lg:p-7 bg-${variant}-50`}>
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
    </li>
  );
}

export default function Features() {
  return (
    <section className="bg-feature-bg bg-center flexCenter py-24 bg-no-repeat flex-col">
      <div className="max-container padding-container relative justify-end w-full">
        <div className="lg:min-h-[900px] flex flex-1">
          <Image
            src="/phone.png"
            width={440}
            height={1000}
            alt="phone"
            className="feature-phone"
          />
        </div>

        <div className="flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute -top-[28px] -left-[5px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Feature</h2>
          </div>
          <ul>
            {FEATURES.map((feature) => (
              <FeatureItem
                title={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description}
                key={`${feature.title}-key`}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
