import './style.css';
import { achievements } from './updates.js';

const Achievements = () => {
  return (
    <div id='Achievements'>
      <h2 style={styles.heading}><b>Connect</b></h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-img">
              <a href={achievement.img} target="_blank" rel="noreferrer">
                <img src={achievement.img} alt={`Achievement ${index + 1}`} />
              </a>
            </div>
            <div className="achievement-details">{achievement.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: '2.5em',
    marginTop: '50px',
    marginBottom: '30px',
    color: '#fff',
  },
};

export default Achievements;
