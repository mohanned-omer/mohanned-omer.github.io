import React from 'react';
import Reveal from '../common/Reveal';
import { activity } from '../../data/activity';

const PersonalActivity = ({ className = '' }) => (
    <section className={className}>
        <h2 className="section-header">Personal / Activity</h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
                <h3 className="font-bold mb-6 text-neutral-900 text-sm uppercase tracking-wider">
                    Elsewhere
                </h3>
                <Reveal as="ul" stagger className="list-none p-0 m-0 border-t border-neutral-100">
                    {activity.profiles.map(({ name, detail, href }) => (
                        <li key={name} className="border-b border-neutral-100">
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-baseline justify-between gap-4 py-4 no-underline"
                            >
                                <span className="text-sm font-bold text-neutral-800 group-hover:text-neutral-900">
                                    {name}
                                </span>
                                <span className="text-xs text-neutral-400 text-right">
                                    {detail} ↗
                                </span>
                            </a>
                        </li>
                    ))}
                </Reveal>
            </div>

            <div>
                <h3 className="font-bold mb-6 text-neutral-900 text-sm uppercase tracking-wider">
                    Currently
                </h3>
                <Reveal as="ul" stagger className="space-y-4 list-none p-0 m-0">
                    {activity.currently.map((item) => (
                        <li key={item} className="flex items-start text-neutral-700">
                            <span className="mr-4 font-mono text-sm text-neutral-300 flex-shrink-0">::</span>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </Reveal>
            </div>
        </div>
    </section>
);

export default PersonalActivity;
