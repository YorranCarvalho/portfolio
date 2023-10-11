interface CustomSVGProps {
    svg: string;
    width?: number;
    height?: number;
    className?: string;
  }
  
  const CustomSVG = ({ svg, width, height, className }: CustomSVGProps) => {
    return (
        <img
        src={svg}
        className={className} 
        alt="SVG" 
        width={width} 
        height={height} 
        />
    )
  };
  
  export default CustomSVG;