import React from 'react';
import './style.css'


const ProjectCard = ({ title, description, imageUrl }) => {
    return (
        <div className="project-card">
            {/* <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div> */}
            <img src="https://static.dezeen.com/uploads/2022/05/mesh-architectures-timber-house-brooklyn_dezeen_1704_hero.jpg" alt="house" className="project-image" />
            <div className="project-content">
                <h3 className="project-title">title</h3>
                <p className="project-description">description</p>
            </div>
        </div>
    );
};

export default ProjectCard;
