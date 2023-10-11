import imageProfile from '../../assets/profileImage.jpg'
import CustomContainer from "../../Components/Container";
import CustomSVG from "../../Components/SVG";
import Cargo from './components/cargo';
import Name from "./components/name";
import Social from './components/social';
import './style.css'

const Home =() => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <CustomContainer className="bg-grayContainer rounded-lg shadow-sm shadow-royalBlue-200">
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
                <div className='pl-4 pr-4 pb-2'>
                    <Cargo/>
                </div>
                <div className='flex justify-center items-center'>
                    <Social/>
                </div>
            </CustomContainer>
        </div>
    )
}

export default Home;