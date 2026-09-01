import React from 'react';
import Reveal from '../common/Reveal';
import { siteContent } from '../../data/siteContent';

const HowIWork = ({ className = '' }) => {
    const { process } = siteContent.howIWork;

    return (
        <section className={className}>
            <h2 className="section-header">How I Work</h2>

            <div>
                <div>
                    <h3 className="font-bold mb-6 text-neutral-900 text-sm uppercase tracking-wider">
                        Process
                    </h3>
                    <Reveal as="ul" stagger className="space-y-4 list-none p-0 m-0">
                        {process.map((step, index) => (
                            <li key={step} className="flex items-start text-neutral-700">
                                <span className="mr-4 text-neutral-300 font-mono text-sm w-6 flex-shrink-0">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <span className="leading-relaxed">{step}</span>
                            </li>
                        ))}
                    </Reveal>
                </div>

            </div>
        </section>
    );
};

export default HowIWork;
