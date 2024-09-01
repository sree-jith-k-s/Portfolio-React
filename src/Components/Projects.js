import ProjectCard from './ProjectCard';
import {projects} from './updates.js';

const Portfolio = () => {
    return (
        <div id='Project'>
            <div style={styles.container}>
                <h2 style={styles.heading}><b>Projects</b></h2>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}// Alternate image position
                    />
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.5em',
        marginTop: '50px',
        color: '#fff',
    },
};

export default Portfolio;
