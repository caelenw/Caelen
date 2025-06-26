// src/pages/Projects.js
import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Capstone - Sprocket (Team Project)",
    description:
      "Sprocket is a website designed to connect newly and future grads to businesses so they can see what they have to offer. Businesses can post small projects that need to be done and users can bid on these posts until the business decides who gets the job.",
    images: [
      "https://sccapstone.github.io/Capstone-Cavaliers/Images/MainPage.PNG",
      "https://sccapstone.github.io/Capstone-Cavaliers/Images/Bids.PNG",
      "https://sccapstone.github.io/Capstone-Cavaliers/Images/Settings.PNG",
    ],
    link: "https://sccapstone.github.io/Capstone-Cavaliers/",
  },
  {
    id: 2,
    title: "PokéBros (Team Project)",
    description:
      "This project combines a Java backend and a JavaFX frontend to create an online virtual card collection and pack opening database.",
    videoUrl: "https://www.youtube.com/embed/EerzUHZcZaE",
    link: "https://github.com/your-repo-link-or-more-info",
  }
];

const ProjectCard = ({ title, description, images, videoUrl, link }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseEnter = () => {
    if (!images || images.length <= 1 || intervalId) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    setIntervalId(id);
  };

  const handleMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setCurrentIndex(0);
  };

  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {videoUrl ? (
          <div className="video-wrapper">
            <iframe
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="project-video"
            ></iframe>
          </div>
        ) : (
          <img
            src={images[currentIndex]}
            alt={title}
            className="project-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </a>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
