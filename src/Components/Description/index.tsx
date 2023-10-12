interface DescriptionProps {
    children?: string;
}

const Description = ({children}: DescriptionProps) => {
    return (
        <div className="text-base text-white flex justify-start pl-8 pt-8 pb-16 pr-8">
            {children}
        </div>
    )
}

export default Description;