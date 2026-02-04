import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/common/Reveal';
import { experiences } from '../data/experience';

const ExperiencePage = () => (
    <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <header className="mb-16">
            <Link to="/" className="back-link mb-8 inline-flex">← Back</Link>
            <h1 className="page-title">Experience</h1>
            <p className="page-subtitle">Selected professional, research, and teaching work.</p>
        </header>

        <Reveal as="ol" stagger className="list-none p-0 m-0 max-w-4xl border-t border-neutral-100">
            {experiences.map((experience) => (
                <li key={experience.id} className="py-8 border-b border-neutral-100">
                    <div className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-10">
                        <div className="font-mono text-[11px] leading-relaxed text-neutral-400">
                            <div>{experience.dates}</div>
                            <div className="text-neutral-300">{experience.location}</div>
                        </div>

                        <article>
                            <p className="m-0 text-xs font-bold uppercase tracking-widest text-neutral-400">
                                {experience.organisation}
                            </p>
                            <h2 className="mt-1 mb-4 text-lg font-bold tracking-tight text-neutral-900">
                                {experience.role}
                            </h2>

                            <ul className="m-0 pl-5 space-y-2 text-sm leading-relaxed text-neutral-600">
                                {experience.points.map((point) => <li key={point}>{point}</li>)}
                            </ul>

                            <div className="mt-5 flex flex-wrap items-center gap-2">
                                {experience.stack.map((item) => (
                                    <span key={item} className="text-[10px] font-mono px-1.5 py-0.5 bg-neutral-50 border border-neutral-100 text-neutral-500 tracking-wide">
                                        {item}
                                    </span>
                                ))}
                                {experience.relatedTo && (
                                    <Link to={experience.relatedTo} className="ml-1 text-[10px] font-bold uppercase tracking-widest no-underline text-neutral-400 hover:text-neutral-900">
                                        {experience.relatedLabel} →
                                    </Link>
                                )}
                            </div>
                        </article>
                    </div>
                </li>
            ))}
        </Reveal>
    </main>
);

export default ExperiencePage;
