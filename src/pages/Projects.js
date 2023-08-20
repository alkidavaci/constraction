import React from 'react';
import ProjectCard from '../components/ProjectCard'; 
 import './style.css'

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'https://static.dezeen.com/uploads/2022/05/mesh-architectures-timber-house-brooklyn_dezeen_1704_hero.jpg',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: 'https://static.dezeen.com/uploads/2022/05/mesh-architectures-timber-house-brooklyn_dezeen_1704_hero.jpg',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
      imageUrl: 'https://static.dezeen.com/uploads/2022/05/mesh-architectures-timber-house-brooklyn_dezeen_1704_hero.jpg',
    },
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'https://static.dezeen.com/uploads/2022/05/mesh-architectures-timber-house-brooklyn_dezeen_1704_hero.jpg',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: 'https://static.dezeen.com/uploads/2022/05/mesh-architectures-timber-house-brooklyn_dezeen_1704_hero.jpg',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
      imageUrl: 'https://static.dezeen.com/uploads/2022/05/mesh-architectures-timber-house-brooklyn_dezeen_1704_hero.jpg',
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
