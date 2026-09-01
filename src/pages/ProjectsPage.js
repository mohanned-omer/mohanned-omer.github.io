import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/common/Reveal';
import ProjectRow from '../components/common/ProjectRow';
import { projectSummaries } from '../data/projectSummaries';

const ProjectsPage = () => (
  <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
    <header className="mb-16">
      <Link to="/" className="back-link mb-8 inline-flex">← Back</Link>
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">Selected research, systems, and applications.</p>
    </header>

    <Reveal
      as="ul"
      stagger
      className="m-0 grid list-none border-t border-neutral-900 p-0 md:grid-cols-2 md:gap-x-12"
    >
      {projectSummaries.map((project) => (
        <ProjectRow key={project.slug} project={project} />
      ))}
    </Reveal>
  </main>
);

export default ProjectsPage;
