import React from 'react';
import Reveal from '../common/Reveal';
import { activity } from '../../data/activity';

const PlatformMark = ({ kind }) => (
    <span className="activity-card__mark" aria-hidden="true">
        {kind === 'leetcode' ? '>_' : '♞'}
    </span>
);

const LeetCodeVisual = ({ snapshot }) => {
    const levels = [
        { label: 'Easy', value: snapshot.easy, color: '#2cb8a0' },
        { label: 'Medium', value: snapshot.medium, color: '#e9a33b' },
        { label: 'Hard', value: snapshot.hard, color: '#dd645b' },
    ];
    const easyEnd = (snapshot.easy / snapshot.solved) * 100;
    const mediumEnd = ((snapshot.easy + snapshot.medium) / snapshot.solved) * 100;
    const ringBackground = `conic-gradient(
        from 0deg,
        ${levels[0].color} 0% ${easyEnd}%,
        ${levels[1].color} ${easyEnd}% ${mediumEnd}%,
        ${levels[2].color} ${mediumEnd}% 100%
    )`;

    return (
        <div
            className="leetcode-visual"
            aria-label={`${snapshot.solved} LeetCode problems solved: ${snapshot.easy} easy, ${snapshot.medium} medium, and ${snapshot.hard} hard`}
        >
            <div className="leetcode-ring">
                <span
                    className="leetcode-ring__chart"
                    style={{ background: ringBackground }}
                    aria-hidden="true"
                />
                <span className="leetcode-ring__value">
                    <strong>{snapshot.solved}</strong>
                    <small>solved</small>
                </span>
            </div>

            <div className="leetcode-levels">
                {levels.map(({ label, value, color }) => (
                    <div key={label} className="leetcode-level">
                        <span className="leetcode-level__dot" style={{ backgroundColor: color }} />
                        <span className="leetcode-level__label">{label}</span>
                        <strong>{value}</strong>
                    </div>
                ))}
                <p>Algorithms, data structures, and the occasional stubborn edge case.</p>
            </div>
        </div>
    );
};

const chessPosition = {
    0: '♜', 3: '♛', 6: '♚', 7: '♜',
    8: '♟', 9: '♟', 11: '♟', 13: '♟', 14: '♟', 15: '♟',
    18: '♞', 28: '♟', 35: '♙', 36: '♙',
    42: '♘', 45: '♘',
    48: '♙', 49: '♙', 53: '♙', 54: '♙', 55: '♙',
    56: '♖', 59: '♕', 62: '♔', 63: '♖',
};

const ChessVisual = ({ snapshot }) => {
    const ratingProgress = Math.min((snapshot.blitz / snapshot.best) * 100, 100);

    return (
        <div
            className="chess-visual"
            aria-label={`Chess.com blitz rating ${snapshot.blitz}, personal best ${snapshot.best}, across ${snapshot.games} rated blitz games`}
        >
            <div className="chess-board" aria-hidden="true">
                {Array.from({ length: 64 }, (_, index) => {
                    const row = Math.floor(index / 8);
                    const column = index % 8;
                    const isDark = (row + column) % 2 === 1;

                    return (
                        <span
                            key={index}
                            className={isDark ? 'chess-board__square is-dark' : 'chess-board__square'}
                        >
                            {chessPosition[index] || ''}
                        </span>
                    );
                })}
            </div>

            <div className="chess-rating">
                <span className="chess-rating__label">Blitz rating</span>
                <strong>{snapshot.blitz}</strong>
                <div className="chess-rating__track" aria-hidden="true">
                    <span style={{ width: `${ratingProgress}%` }} />
                </div>
                <div className="chess-rating__meta">
                    <span>{snapshot.games.toLocaleString()} games</span>
                    <span>Best {snapshot.best}</span>
                </div>
                <p>Fast positions, imperfect plans, one more game.</p>
            </div>
        </div>
    );
};

const ProfileCard = ({ profile }) => (
    <a
        href={profile.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`activity-card activity-card--${profile.kind}`}
        aria-label={`Open ${profile.name} profile for ${profile.handle}`}
    >
        <div className="activity-card__header">
            <div className="activity-card__identity">
                <PlatformMark kind={profile.kind} />
                <div>
                    <span className="activity-card__name">{profile.name}</span>
                    <span className="activity-card__handle">@{profile.handle}</span>
                </div>
            </div>

            <span className="activity-card__link">
                <span className="activity-card__link-label">View profile</span>
                <span aria-hidden="true">↗</span>
            </span>
        </div>

        {profile.kind === 'leetcode' ? (
            <LeetCodeVisual snapshot={profile.snapshot} />
        ) : (
            <ChessVisual snapshot={profile.snapshot} />
        )}

        <div className="activity-card__footer">
            <span>Profile snapshot</span>
            <span>Sep 2026</span>
        </div>
    </a>
);

const PersonalActivity = ({ className = '' }) => (
    <section className={className}>
        <div className="mb-7 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h2 className="section-header mb-0">Stats</h2>
            <p className="m-0 max-w-sm text-xs leading-relaxed text-neutral-400 sm:text-right">
                Keeping track of my stats
            </p>
        </div>

        <Reveal stagger className="grid gap-5 md:grid-cols-2">
            {activity.profiles.map((profile) => (
                <ProfileCard key={profile.name} profile={profile} />
            ))}
        </Reveal>
    </section>
);

export default PersonalActivity;
