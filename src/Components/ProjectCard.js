import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, isImageLeft }) => {
  return (
    <div>
      <div className={`${styles.card} ${isImageLeft ? styles.rowReverse : ""}`}>
        <div className={styles.imageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
          />
        </div>
        <div className={styles.contentContainer}>
          <h3 className={styles.heading}>{project.title}</h3>
          <p className={styles.subheading}>{project.sub}</p>
          <p className={styles.content}>{project.description}</p>
          <a href={project.link} rel="noreferrer">
            <button
              type="button"
              style={{
                backgroundColor: "#565454", // Initial background color
                color: "white", // Text color
                fontWeight: "bold", // Bold text
                padding: "10px 20px", // Padding
                borderRadius: "8px", // Rounded corners
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Shadow
                transition:
                  "transform 0.3s ease-in-out, background-color 0.3s ease-in-out", // Hover transition
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.backgroundColor = "#357ABD"; // Change background color on hover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "#565454"; // Revert to initial background color
              }}
            >Detail
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sub: PropTypes.string,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    sourceCodeLink: PropTypes.string,
  }).isRequired,
  isImageLeft: PropTypes.bool,
};

export default ProjectCard;
