import CustomCard from "../../../../../Components/Card";

interface InfoGraduationProps {
    formation: string;
    description: string;
    year: string
}

const InfoGraduation = ({formation, description,year}: InfoGraduationProps) => {
    
    return (
        <div>
            <CustomCard className="rounded-xl border-2 border-grayContainer">
                <div className="pl-6 pt-6 pb-4 text-grayDcpt text-md">
                    {year}
                </div>
                <div className="text-white text-xl font-semibold pl-6 -pr-6 pb-4 ">
                    {formation}
                </div>
                <div className="pl-6 pb-6 pr-6 text-grayDcpt text-md">
                    {description}
                </div>
            </CustomCard>
        </div>
        
    )
}

const Graduation = () => {
    return (
        <div className="flex flex-wrap pt-8 pl-14 gap-11 mb-12 w-1/2">
            <InfoGraduation 
            formation={"Ciência da Computação"} 
            description={"Ciência da Computação pela UNAMA - Universidade da Amazônia"} 
            year={"2017-2023"} 
            />
        </div>
        
    )
}

export default Graduation;