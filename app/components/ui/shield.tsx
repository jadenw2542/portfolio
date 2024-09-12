import Image from "next/image";

interface Props {
  svg: string; 
  text: string;
  textColor: string,
  bgColor: string;
}

export default function Shield({ svg, text, textColor, bgColor }: Props) {
  return (
    <span className="flex items-center px-2.5 py-1 w-fit" 
    style={{ backgroundColor: bgColor }}>

      <Image 
      src={svg}     
      alt={text}  
      className="w-3 h-3 lg-pc:w-6 lg-pc:h-6"/>
      <span className="pl-1 font-bold tracking-wider font-opensans text-xs
            lg-pc:text-2xl"
            style={{ color: textColor }}>{text}</span>
    </span>
  );
}
