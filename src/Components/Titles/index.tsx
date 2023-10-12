interface TitleProps {
    children?: string;
}

const Title = ({children}: TitleProps) => {
    return (
        <div className="text-4xl text-white font-bold pl-8 pt-14">
            {children}
        </div>
    )
}

export default Title;