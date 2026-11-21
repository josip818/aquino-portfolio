
const projects = [
  {
    number: "01",
    title: "ACADEMIC QUEUE SYSTEM",
    description:
      "A proposed digital queue management system designed to improve the student transaction process at the Registrar's Office. It aims to notify students when their turn is approaching or when they are already being served. This helps reduce confusion, unnecessary waiting, and overcrowding while making the registration process more organized and convenient for both students and registrar personnel.",
    technology: "TECHNOLOGIES TO BE ADDED",
  },
  {
    number: "02",
    title: "STUDENT MANAGEMENT SYSTEM",
    description:
      "A proposed system designed to organize and manage student information.",
    technology: "WEB DEVELOPMENT • DATABASE",
  },
  {
    number: "03",
    title: "PROGRAMMING ACTIVITIES",
    description:
      "A collection of programming exercises and activities completed during my studies.",
    technology: "JAVA • PYTHON • JAVASCRIPT",
  },
];

function Projects() {
  return (
    <section className="page-section">
      <p className="eyebrow">MY WORK & EXPERIENCE</p>

      <h1>
        SELECTED <span>PROJECTS.</span>
      </h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <span className="project-number">
              {project.number}
            </span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <span className="project-tech">
              {project.technology}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
