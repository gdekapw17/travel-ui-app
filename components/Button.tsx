import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  variant: string;
  icon?: string;
  title: string;
};

export default function Button({ type, variant, icon, title }: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label>{title}</label>
    </button>
  );
}
