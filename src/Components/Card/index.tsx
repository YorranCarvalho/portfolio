import { CSSProperties } from "react";

interface CustomCardProps {
    className?: string;
    children?: React.ReactNode | string;
    style?: CSSProperties;
}

const CustomCard = ({className, children, style}: CustomCardProps) => {
    return (
        <div 
        className={className} 
        style={style}
        >
            {children}
        </div>
    )
    
}

export default CustomCard;