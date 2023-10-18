import { CSSProperties } from "react";

interface CustomContainerProps {
    className?: string;
    children?: React.ReactNode | string;
    style?: CSSProperties;
}

const CustomContainer = ({className, children, style}: CustomContainerProps) => {
    return (
        <div
        className={className} 
        style={style}
        >
            {children}
        </div>
    )
    
}

export default CustomContainer;