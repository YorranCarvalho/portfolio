import imageProfile from '../../assets/profileImage.jpg'
import CustomContainer from "../../Components/Container";
import Description from '../../Components/Description';
import CustomSVG from "../../Components/SVG";
import Title from '../../Components/Titles';
import Cargo from './components/cargo';
import Do from './components/do';
import Information from './components/informations';
import Name from "./components/name";
import Social from './components/social';
import './style.css'

const Home =() => {
    return (
        <div className="flex flex-wrap justify-center w-full gap-16 mt-56">
            <CustomContainer className="bg-grayContainer rounded-lg shadow-md">
                <div className='flex justify-center items-start -mt-36'>
                    <CustomSVG
                    className='rounded-xl'
                    svg={imageProfile}
                    width={250}
                    />
                </div>
                <div className="text-white pt-5 flex justify-center items-center">
                    <Name/>
                </div>
                <div className='flex justify-center items-center '>
                    <Cargo/>
                </div>
                <div className='flex justify-center items-center'>
                    <Social/>
                </div>
                <div className='flex justify-center items-center'>
                    <Information/>
                </div>
            </CustomContainer>
            <CustomContainer className='bg-grayContainer rounded-lg w-2/5 shadow-md'>
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

                </div>
            </CustomContainer>
        </div>
    )
}

export default Home;