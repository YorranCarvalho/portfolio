import Title from '../../../../Components/Titles';
import Description from '../../../../Components/Description';
import CustomContainer from "../../../../Components/Container";
import Do from "./do";
import Graduation from './graduation';

const About = () => {
    return (
        <CustomContainer className='bg-grayCard rounded-3xl w-2/5 shadow-md'>
            <div className=''>
                <Title>
                    Sobre Mim
                </Title>

                <Description>
                    Oi, me chamo Yorran Carvalho e sou desenvolvedor Front-End de Belém. Me formei em Ciência da Computação e atuo na área desde 2022.
                    Tenho experiência com Clean Code e Atomic Design. Tenho foco em UI/UX.
                </Description>

                <Title>
                    O Que Eu Faço
                </Title>

                <Do/>
                <div className='flex'>
                    <Title>
                        Formações
                    </Title>
                </div>
                

                <Graduation/>
            </div>
        </CustomContainer>
    )
}

export default About;