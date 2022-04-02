import Greeting from "./Greeting";
import Intro from "./Intro";
import Profile from "./Profile";
import Projects from "./Projects";

const Home = () => {
    return(
        <div>
            <Greeting/>
            <Intro />
            <Profile/>
            <Projects/>
        </div>
    )
}
export default Home

