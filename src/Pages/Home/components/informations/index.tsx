import CustomCard from "../../../../Components/Card"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CustomContainer from "../../../../Components/Container";

interface InformationStructureProps {
    title: string;
    information: string;
    icon: 'PHONE' | 'LOCATION' | 'MAIL' | 'BIRTH';
}

const InformationStructure = ({title, information, icon}: InformationStructureProps) => {
    const handleIcon = (icone: string) => {
        switch (icone) {
            case 'PHONE': 
                return <PhoneAndroidIcon/>
            case 'LOCATION':
                return <LocationOnIcon/>
            case 'MAIL':
                return <MailIcon/>
            case 'BIRTH':
                return <DateRangeIcon/>
        }
    }
    return (
            <div className="flex items-center gap-2 p-2 border-b-2 border-grayContainer">
                <CustomCard className="bg-black rounded-lg hover:bg-royalBlue-100 ease-in-out transition 300">
                    <div className="flex justify-center items-center p-2" style={{color: 'white', fontSize: '30px'}}>
                        {handleIcon(icon) }
                    </div>  
                </CustomCard>
                <div className="flex flex-col pr-28">
                    <div className="text-xs text-white">
                        {title}
                    </div>
                    <div className="text-white">
                        {information}
                    </div>
                </div>
            </div>
    )
}


const Information = () => {
    return (
        <div className="p-5">
            <CustomContainer className="bg-grayCard rounded-2xl p-5">
                <InformationStructure title={"Telefone"} information={"+55 091 980970977"} icon={'PHONE'}/>
                <InformationStructure title={"Localização"} information={"Belém - PA, BRASIL"} icon={'LOCATION'}/>
                <InformationStructure title={"E-Mail"} information={"yorrancarvalho18@gmail.com"} icon={'MAIL'}/>
                <InformationStructure title={"Nascimento"} information={"18 de Março de 1998"} icon={'BIRTH'}/>
            </CustomContainer>
        </div>
    )    
}

export default Information;