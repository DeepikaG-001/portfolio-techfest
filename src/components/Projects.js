import React from "react";

const Projects = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Projects</h2>
      <ul className="projects-list">
        <li className="project-item">
          <a
            href="https://github.com/DeepikaG-001/E-Commerce-app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title-link"
          >
            <span className="project-title">E-Commerce App</span>
          </a>
          <p className="project-description">
            This E-Commerce app enables the user to add the products to cart,
            place order and get an invoice and also authorized users can add
            their products. This is built using NodeJS, JS, MongoDB.
          </p>
        </li>

        <li className="project-item">
          <a
            href="https://github.com/DeepikaG-001/Paytm-application"
            target="_blank"
            rel="noopener noreferrer"
            className="project-title-link"
          >
            <span className="project-title">Paytm-application</span>
          </a>
          <p className="project-description">
            This is a paytm like project with net banking and peer to peer
            transactions feature. It is built using Prisma, typescript, node.js
            , tailwind, postgreSQL and turborepo .
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
