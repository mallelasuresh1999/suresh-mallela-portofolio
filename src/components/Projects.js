const projects = [
    { id: 1, title: "KPN_NL", description: "Automating AWS workflows with Terraform." },
    { id: 2, title: "CI/CD Pipeline", description: "Deploying applications with GitHub Actions and AWS CodePipeline." },
  ];
  
  const Projects = () => {
    return (
      <div className="projects">
        <h2>My Projects</h2>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;
  