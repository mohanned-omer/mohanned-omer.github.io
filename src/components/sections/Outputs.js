import React from 'react';
import Reveal from '../common/Reveal';
import ProjectRow from '../common/ProjectRow';
import { siteContent } from '../../data/siteContent';

// The homepage and full project index share the same compact editorial rows.
const Outputs = ({ className = '' }) => (
    <section className={className}>
        <h2 className="section-header">Projects</h2>

        <Reveal
            as="ul"
            stagger
            className="m-0 grid list-none border-t border-neutral-900 p-0 sm:grid-cols-2 sm:gap-x-12"
        >
            {siteContent.outputs.map((output) => (
                <ProjectRow key={output.slug || output.name} project={output} />
            ))}
        </Reveal>
    </section>
);

export default Outputs;
