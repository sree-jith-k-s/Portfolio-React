// import React from 'react';
import './style.css';
import {skills} from './updates.js';

const SkillsGrid = () => {
    return (
        <div id='Skills'>
            <div className="container">
                <h1 className="heading"><b>My Skills</b></h1>
                <div className="grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skillBox">
                            <img
                                src={`https://skillicons.dev/icons?i=${skill}`}
                                alt={`${skill} icon`}
                                className="icon"
                            />
                            <div className="skillName">{skill}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsGrid;
