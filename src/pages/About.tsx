import { Link } from "react-router";

function About() {
  return (
    <div className="about-container">
      <h1>About the Bank Simulation App</h1>
      <p>This project is created using the following technologies</p>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>Webpack</li>
        <li>git</li>
        <li>Chart.js - an external library for creating doughnut graphics</li>
        <li>useContext - for state managment</li>
        <li>localStorage - for simulate database</li>
      </ul>
      <h2>Here are all the original users:</h2>
      <ul>
        <li>
          John Doe john.doe@mail.com password123 1234 1234 1548 1111, 1234 1234
          1548 2222
        </li>
        <li>
          Jane Smith jane.smith@mail.com securepassword 1234 1234 1548 3333
        </li>
        <li>
          Alice Johnson alice.johnson@mail.com mypassword 1234 1234 1548 4444
        </li>
        <li>Bob Brown bob.brown@mail.com bobpassword 1234 1234 1548 5555</li>
        <li>Charlie Davis charlie.davis@mail.com charlie123 (no cards)</li>
      </ul>

      <Link to="/" className="about-link">
        Back to bank project
      </Link>
    </div>
  );
}

export default About;
