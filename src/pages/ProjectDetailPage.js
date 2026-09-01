import React from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { projectDetails } from '../data/projects';
import { getProjectOrigin } from '../utils/projectNavigation';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const history = useHistory();
  const location = useLocation();
  const project = projectDetails.find((item) => item.slug === slug);
  const origin = getProjectOrigin(location);

  if (!project) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <header className="mb-10">
          <Link to="/projects" className="back-link mb-8 inline-flex">
            ← Back to Projects
          </Link>
          <h1 className="page-title">Not Found</h1>
        </header>
        <p className="mb-10 text-neutral-600">
          That project does not exist—it may have been renamed.
        </p>
        <Link to="/projects" className="back-link">
          ← See all projects
        </Link>
      </main>
    );
  }

  return (
    <main className="relative isolate grid min-h-screen place-items-center overflow-hidden bg-neutral-50 px-6 py-20 text-neutral-900 sm:px-12">
      <div className="pointer-events-none absolute inset-3 border border-neutral-200 sm:inset-4" aria-hidden="true" />
      <div
        className="pointer-events-none absolute right-[-8rem] top-[-10rem] -z-10 h-96 w-96 rounded-full bg-neutral-200/40 blur-3xl"
        aria-hidden="true"
      />

      <section className="w-full max-w-3xl" aria-labelledby="project-wip-title">
        {origin ? (
          <button
            type="button"
            onClick={() => history.goBack()}
            className="back-link mb-14 cursor-pointer border-0 bg-transparent p-0 font-inherit"
          >
            ← Back to {origin.label}
          </button>
        ) : (
          <Link to="/projects" className="back-link mb-14 inline-flex">
            ← Back to Projects
          </Link>
        )}

        <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
          Project / {project.title}
        </p>
        <div className="my-6 h-px w-10 bg-neutral-400" aria-hidden="true" />

        <h1
          id="project-wip-title"
          className="m-0 max-w-[10ch] text-[clamp(3.25rem,10vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-neutral-900"
        >
          Work in progress.
        </h1>

        <p className="mb-0 mt-9 max-w-xl text-sm leading-7 text-neutral-500">
          I&rsquo;m still documenting the implementation, results, and lessons from this project.
          The full project record will be available here soon.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" aria-hidden="true" />
            Documentation in progress
          </span>
          <span className="text-neutral-300" aria-hidden="true">/</span>
          <span className="text-[10px] text-neutral-400">
            {project.techStack.split(',').slice(0, 4).map((item) => item.trim()).join(' · ')}
          </span>
        </div>
      </section>

      <p className="absolute bottom-7 right-8 m-0 text-[9px] tracking-[0.08em] text-neutral-300 sm:bottom-8 sm:right-10">
        /projects/{project.slug}
      </p>
    </main>
  );
};

export default ProjectDetailPage;
