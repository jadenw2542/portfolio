import Image from 'next/image';

interface Props {
  svg: string;
  text: string;
  textColor: string;
  bgColor: string;
}

export default function Shield({ svg, text, textColor, bgColor }: Props) {
  return (
    <span
      className="flex w-fit items-center px-2.5 py-1"
      style={{ backgroundColor: bgColor }}
    >
      <Image src={svg} alt={text} className="h-3 w-3 lg-pc:h-6 lg-pc:w-6" />
      <span
        className="pl-1 font-opensans text-xs font-bold tracking-wider lg-pc:text-2xl"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </span>
  );
}
