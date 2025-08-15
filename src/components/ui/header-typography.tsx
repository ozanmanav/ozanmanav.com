"use client";

type Props = {
  text: string;
};

export default function TitleTypography({ text }: Props) {
  return (
    <h3
      className="mb-7 text-lg font-medium px-4 py-2 rounded-lg inline-block border transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-blue-900"
      style={{
        color: "#27468F",
        borderColor: "#27468F",
      }}
    >
      <span className="dark:text-[#8AA4FF] dark:border-[#8AA4FF]">{text}</span>
    </h3>
  );
}
