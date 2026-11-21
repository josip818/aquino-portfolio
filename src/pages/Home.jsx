
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          BUILT FOR THE
          <br />
          <span>AFTER DARK.</span>
        </h1>

        <p className="home-description">
          Welcome to my digital garage. Explore my background,
          skills, and projects as an Information Technology student.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="btn-primary">
            VIEW PROJECTS
          </Link>

          <Link to="/about" className="btn-secondary">
            ABOUT ME
          </Link>
        </div>
      </div>

      <div className="home-number">
        <span>01</span>
        <p>PERSONAL PORTFOLIO</p>
      </div>
    </section>
  );
}

export default Home;
