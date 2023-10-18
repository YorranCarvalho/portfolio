import CustomContainer from "../../../../Components/Container";
import imageProfile from '../../../../assets/profileImage.jpg'
import CustomSVG from "../../../../Components/SVG";
import Cargo from "./cargo";
import Information from "../about/informations";
import Name from "./name";
import Social from "./social";


const Profile = () => {
    return (
        <CustomContainer className="bg-grayCard rounded-3xl shadow-md">
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
    )
}

export default Profile;