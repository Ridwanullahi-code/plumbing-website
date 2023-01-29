import Project from "../components/Project";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="my-8">
                <Project />
            </div>
            <Footer />
        </>
    )
}

export default Projects;