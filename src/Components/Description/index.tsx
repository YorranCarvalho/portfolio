interface DescriptionProps {
    children?: string;
}

const Description = ({children}: DescriptionProps) => {
    return (
        <div className="text-base text-grayDcpt flex justify-start pl-14 pt-8 pb-10 pr-14">
            {children}
        </div>
    )
}

export default Description;