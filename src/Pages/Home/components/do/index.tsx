import CustomCard from "../../../../Components/Card";
import LanguageIcon from '@mui/icons-material/Language';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindows';

interface DoInformationsProps{
    title: string;
    description: string;
    icon: "WEB" | "DESKTOP"
}

const DoInformations = ({title, description, icon}: DoInformationsProps) => {
    const handleIcon = (icone: string) => {
        switch (icone) {
            case 'WEB': 
                return <LanguageIcon style={{color: '#fff', fontSize: '35px'}}/>
            case 'DESKTOP':
                return <DesktopWindowsOutlinedIcon style={{color: '#fff', fontSize: '35px'}}/>
        }
    }
    return (
        <CustomCard className="bg-grayContainer rounded-xl border-2 border-white w-2/5">
            <div className="flex p-2">
                <div>
                    {handleIcon(icon)}
                </div>
                <div className="text-white text-xl font-semibold pl-1 ">
                    {title}
                </div>
            </div>
            <div className="pl-6 pb-6 pr-6 text-grayDcpt text-md">
                {description}
            </div>
        </CustomCard>
    )
}

const Do = () => {
    return (
        <div className="flex flex-wrap justify-center pt-8 gap-11">
            <DoInformations 
            title={"Desenvolvimento Web"} 
            description={"Trabalho com desenvolvimento web, tais como landing pages, Portfólios, Sites Informativos, etc."} 
            icon={"WEB"}/>
            <DoInformations 
            title={"Softwares para Desktop"} 
            description={"Trabalho com desenvolvimento web, tais como landing pages, Portfólios, Sites Informativos, etc."} 
            icon={"DESKTOP"}/>
        </div>
    )
}

export default Do;