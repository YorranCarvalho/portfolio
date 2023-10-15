import About from "./components/about";
import Profile from "./components/profile";
import './style.css'

const Home =() => {
    return (
        <div className="flex gap-28 items-start justify-center mt-56">
            <Profile/>
            <About/>
        </div>
            
    )
}

export default Home;