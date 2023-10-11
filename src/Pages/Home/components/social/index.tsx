import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CustomCard from '../../../../Components/Card';
import './style.css'

interface SocialStructureProps {
    href: string;
    children?: React.ReactNode;
}

const SocialStructure = ({href, children}: SocialStructureProps) => {
    return (
        <div>
            <a href={href}>
                <CustomCard
                className='cardColor rounded-md bg-grayCard flex justify-center items-center p-1'
                >
                    {children}
                </CustomCard>
            </a>
        </div>
    )
}

const Social = () => {
    return (
        <div className='flex justify-center items-center gap-2 p-3'>
            <SocialStructure 
            href='https://github.com/YorranCarvalho'
            >
                <GitHubIcon
                className='gitColor'
                style={{fontSize: '30px'}}
                />

            </SocialStructure>
            <SocialStructure 
            href='https://www.facebook.com/yorran.galleon/'
            >
                <FacebookIcon
                className='facebookColor'
                style={{fontSize: '30px'}}
                />

            </SocialStructure>
            <SocialStructure 
            href='https://twitter.com/Shino_byl'
            >
                <TwitterIcon
                className='TwitterColor'
                style={{fontSize: '30px'}}
                />

            </SocialStructure>
            <SocialStructure 
            href='https://www.linkedin.com/in/yorran-carvalho-6806a311a/'
            >
                <LinkedInIcon
                className='LinkedinColor'
                style={{fontSize: '30px'}}
                />

            </SocialStructure>
        </div>
    )
}

export default Social