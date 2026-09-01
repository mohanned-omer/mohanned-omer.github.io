import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/common/Reveal';
import ProjectLink from '../components/common/ProjectLink';
import { experiences } from '../data/experience';

const ExperienceTerminal = ({ experience }) => (
    <div className="mt-5 overflow-hidden rounded-md border border-neutral-300 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.025)]">
        <div className="flex h-8 items-center justify-between gap-4 border-b border-neutral-300 bg-neutral-100 px-3">
            <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex gap-1" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                </span>
                <span className="truncate text-[10px] text-neutral-500">
                    ~/experience/{experience.id}
                </span>
            </div>

            {experience.relatedTo ? (
                <ProjectLink to={experience.relatedTo} className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest no-underline text-neutral-600 hover:text-neutral-900">
                    {experience.relatedLabel} ↗
                </ProjectLink>
            ) : (
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">zsh</span>
            )}
        </div>

        <div className="px-4 py-3 text-xs leading-relaxed">
            <p className="m-0 flex items-center gap-2" aria-hidden="true">
                <span className="font-bold text-neutral-900">$</span>
                <span className="text-neutral-500">echo</span>
                <span className="text-neutral-900">$STACK</span>
            </p>
            <p className="m-0 mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 pl-4" aria-label={`Skills: ${experience.stack.join(', ')}`}>
                {experience.stack.map((item, index) => (
                    <React.Fragment key={item}>
                        {index > 0 && (
                            <span className="text-neutral-300" aria-hidden="true">/</span>
                        )}
                        <span className="text-neutral-800">{item}</span>
                    </React.Fragment>
                ))}
                <span className="ml-0.5 inline-block h-3 w-1.5 bg-neutral-300" aria-hidden="true" />
            </p>
        </div>
    </div>
);

const ExperiencePage = () => (
    <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <header className="mb-16">
            <Link to="/" className="back-link mb-8 inline-flex">← Back</Link>
            <h1 className="page-title">Experience</h1>
            <p className="page-subtitle">Selected professional, research, and teaching work.</p>
        </header>

        <Reveal as="ol" stagger className="m-0 max-w-4xl list-none border-t border-neutral-900 p-0">
            {experiences.map((experience) => (
                <li key={experience.id} className="border-b border-neutral-300 py-8">
                    <div className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-10">
                        <div className="text-[10px] font-bold uppercase leading-relaxed tracking-widest text-neutral-500">
                            <div>{experience.dates}</div>
                            <div className="mt-1 font-normal normal-case tracking-normal text-neutral-400">{experience.location}</div>
                        </div>

                        <article>
                            <p className="m-0 text-xs font-bold uppercase tracking-widest text-neutral-600">
                                {experience.organisation}
                            </p>
                            <h2 className="mt-1 mb-4 text-lg font-bold tracking-tight text-neutral-900">
                                {experience.role}
                            </h2>

                            <ul className="m-0 list-none space-y-2 p-0 text-sm leading-relaxed text-neutral-600">
                                {experience.points.map((point) => (
                                    <li key={point} className="flex items-start gap-3">
                                        <span className="mt-[0.7em] h-1 w-1 flex-shrink-0 rounded-full bg-neutral-900" aria-hidden="true" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <ExperienceTerminal experience={experience} />
                        </article>
                    </div>
                </li>
            ))}
        </Reveal>
    </main>
);

export default ExperiencePage;
