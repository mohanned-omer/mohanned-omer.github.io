import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';

/**
 * Deliberately unanimated. Text that is simply present on first paint reads as
 * faster and more credible than text that arrives, and the first screen is
 * where that matters most.
 */
const Header = () => {
    const { name, role, definition } = siteContent.header;

    return (
        <header className="pb-10 pt-8 md:pt-20">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 text-neutral-900">
                {name}
            </h1>
            <p className="mb-10 font-medium text-neutral-600">
                <span className="font-mono text-xs font-bold uppercase tracking-widest">{role}</span>
            </p>
            <p className="max-w-2xl border-l-2 border-neutral-900 py-2 pl-5 text-lg leading-relaxed text-neutral-800 md:text-xl">
                {definition}
            </p>

            {/* The way in, above the fold. The counts are the point: they show
                the site has depth before anyone has clicked anything. */}
            <nav className="mt-10 flex flex-wrap items-baseline gap-x-7 gap-y-3">
                {siteContent.navigation.map(({ key, label, to, href, external, count }) => {
                    const classes = 'group no-underline inline-flex items-baseline gap-1.5 text-xs font-bold uppercase tracking-widest text-neutral-700 hover:text-neutral-950 transition-colors';
                    const content = (
                        <>
                            <span className="pb-0.5 border-b border-transparent group-hover:border-neutral-900 transition-colors">
                                {label}{external ? ' ↗' : ''}
                            </span>
                            {Number.isFinite(count) && (
                                <span className="font-mono text-[10px] text-neutral-300 group-hover:text-neutral-500 transition-colors">
                                    {count}
                                </span>
                            )}
                        </>
                    );

                    return external ? (
                        <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                            {content}
                        </a>
                    ) : (
                        <Link key={key} to={to} className={classes}>
                            {content}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
};

export default Header;
