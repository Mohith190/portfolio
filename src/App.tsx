import './App.css';


function App() {
  return (
    <div className="App">

      {/* Hero Section */}
      <section>
        <h1>Mohith R Gowda</h1>
        <h2>Software Engineer | AI/ML Engineer</h2>
        <p>
          Building scalable software and AI-powered applications using
          Python, Java, React, and modern web technologies.
        </p>
        <a
        href="/Mohith_R_Gowda_final_resume_latest.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
>
        <button>Download Resume</button></a>
        <button>Contact Me</button>
      </section>

      <hr />

      {/* About */}
      <section>
        <h2>About Me</h2>
        <p>
          I'm a Computer Science graduate passionate about software
          engineering, AI, and full-stack development. I enjoy solving
          real-world problems and building scalable applications.
        </p>
      </section>

      <hr />

      {/* Skills */}
      <section>
        <h2>Skills</h2>

        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>React</li>
          <li>FastAPI</li>
          <li>SQL</li>
          <li>TensorFlow</li>
          <li>PyTorch</li>
          <li>Git</li>
        </ul>
      </section>

      <hr />

      {/* Projects */}
      <section>
        <h2>Projects</h2>

        <h3>AI Meal Prep Application</h3>
        <p>
          AI-powered meal recommendation platform using FastAPI,
          PostgreSQL, and LLM APIs.
        </p>

        <h3>Image Classification using ResNet-50</h3>
        <p>
          Deep learning model trained on the Caltech-256 dataset using
          transfer learning.
        </p>

        <h3>Revenue Prediction</h3>
        <p>
          Machine learning model for predicting revenue using KNN and
          feature engineering.
        </p>
      </section>

      <hr />

      {/* Contact */}
      <section>
        <h2>Contact</h2>

        <p>Email: mohith4488@email.com</p>
        <p>GitHub: github.com/Mohith190</p>
        <p>LinkedIn: linkedin.com/in/mohith-gowda-041a77425</p>
      </section>
    </div>
  );
}

export default App;