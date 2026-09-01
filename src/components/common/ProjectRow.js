import React from 'react';
import ProjectLink from './ProjectLink';

const ProjectRow = ({ project }) => {
  const technologies = project.stack.split(',').map((item) => item.trim()).filter(Boolean);
  const visibleTechnologies = technologies.slice(0, 4);
  const hiddenTechnologyCount = technologies.length - visibleTechnologies.length;
  const meta = [project.date, project.type, project.linkLabel].filter(Boolean).join(' / ');

  return (
    <li className="relative border-b border-neutral-300">
      <article className="group -mx-3 h-full px-3 py-4 transition-colors duration-state hover:bg-neutral-100/70">
        <h3 className="m-0 text-sm font-bold leading-relaxed tracking-tight text-neutral-900">
          <ProjectLink
            to={`/projects/${project.slug}`}
            className="no-underline text-inherit after:absolute after:inset-0 after:content-['']"
          >
            {project.name}
            <span
              aria-hidden="true"
              className="ml-1.5 inline-block text-xs transition-transform duration-transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </ProjectLink>
        </h3>

        <p className="mb-0 mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-end">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            {meta}
          </span>

          <div className="flex flex-wrap gap-1.5" aria-label={`Technologies: ${technologies.join(', ')}`}>
            {visibleTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-neutral-300 bg-transparent px-2.5 py-1 text-[10px] leading-none text-neutral-600"
              >
                {technology}
              </span>
            ))}
            {hiddenTechnologyCount > 0 && (
              <span className="rounded-full border border-neutral-300 px-2.5 py-1 text-[10px] leading-none text-neutral-500">
                +{hiddenTechnologyCount}
              </span>
            )}
          </div>
        </div>
      </article>
    </li>
  );
};

export default ProjectRow;
