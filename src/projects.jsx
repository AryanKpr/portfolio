
function Projects() {
    const projects = [
      {
        id: 1,
        title: 'Weather prediction model',
        description: 'A weather app built with jupyter notebook',
        link: 'https://github.com/AryanKpr/Weather-Prediction-Model'
      },
      {
        id: 2,
        title: 'Cat vs Dog Classifer',
        description: 'A web application that tell whether the image is of a cat or a dog',
        link: 'https://github.com/AryanKpr/Cat-vs-Dog-Classifier'
      },
      {
        id: 3,
        title: 'College Soccer Injury Predcitor',
        description: 'A machine learning model that predicts whether a player will get injured or not based on habits',
        link: 'https://github.com/AryanKpr/MLSN-Team-9-Project-2025'
      },
      {
        id: 4,
        title: 'Personal Website',
        description: 'A personal website that leverages React.js, HTML and CSS',
        link: 'https://github.com/AryanKpr/portfolio'
      }
    ];
  
    return (
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;