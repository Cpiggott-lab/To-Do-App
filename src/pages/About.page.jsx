import "./About.styles.css";

export function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About</h1>
        <div>
          <p>
            1. Welcome to the To-Do App — a simple and efficient task management
            tool built with React and deployed via GitHub Pages.
          </p>
          <p>
            2. This project was created to practice real-world React development
            techniques, including component-based architecture, state
            management, client-side routing with React Router, and local storage
            persistence.
          </p>
          <p>
            3. You can add, edit, complete, and delete tasks with ease. All your
            tasks are saved locally in your browser, even if you refresh or
            close the app.
          </p>
          <p className="thank-you-about">
            Thank you for visiting and trying out the app!
          </p>
        </div>
      </div>
    </div>
  );
}
