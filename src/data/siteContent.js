/**
 * Central site copy. Presentation components should stay identity-agnostic.
 */
export const siteContent = {
    header: {
        name: 'Mohanned Omer',
        role: 'Computer Science Student',
        definition: 'Computer Science student building and learning in computer vision, autonomous agents and software development.',
    },

    navigation: [
        { key: 'home', label: 'Home', to: '/' },
        { key: 'projects', label: 'Projects', to: '/projects', count: 4 },
        { key: 'experience', label: 'Experience', to: '/experience', count: 3 },
        { key: 'books', label: 'Books', to: '/books', count: 5 },
        { key: 'resume', label: 'Resume', href: '/resume.pdf', external: true },
    ],

    whatThisIs: `This is where I document what I'm building and what I'm learning. As a student, what you get to work on is vast, and I want a place to keep track of the concepts, and problems I spend time understanding. I want to as well document it well.`,

    howIWork: {
        process: [
            'Question the system until I understand it',
            'Use AI to explore approaches and unfamiliar concepts',
            'Build from first principles when it improves understanding',
            'Measure, simplify, and make the system more efficient',
        ],
    },

    domains: [
        'Computer Vision',
        'Deep Learning',
        'Autonomous Agents & Pathfinding',
        'Competitive Programming',
    ],

    outputs: [
        {
            name: 'Person Re-Identification System',
            type: 'Computer Vision',
            description: 'Real-time identity tracking across video frames using detection, tracking, and face/body embeddings.',
            stack: 'PyTorch, YOLOv8, DeepSORT, CLIP-ReID',
            slug: 'person-re-identification',
        },
        {
            name: 'Supervisor Connect',
            type: 'Full-Stack ML Application',
            description: 'Research Monash Supervsiors and Projects with semantic search and clustering-based categorisation.',
            stack: 'Spring Boot, Next.js, PostgreSQL, pgvector',
            slug: 'supervisor-connect',
            link: '/projects/supervisor-connect',
            linkLabel: 'Work in progress',
        },
        {
            name: 'Mini PyTorch Framework & 3D U-Net',
            type: 'From Scratch/ Deep Learning',
            description: 'A lightweight PyTorch-like framework built from scratch with CPU/GPU tensor backends, used to train a 3D U-Net for volumetric brain tumour segmentation.',
            stack: 'Python, NumPy, Numba, CUDA',
            slug: 'minitorch-3d-unet',
        },
        {
            name: 'MedTrack Pro',
            type: 'Mobile Application',
            description: 'A multi-user Android medication-tracking application for patients.',
            stack: 'Kotlin, Jetpack Compose, Room, Gemini',
            slug: 'medtrack-pro',
        },
    ],

    currentSetup: [
        'Studying and preparing for Honours',
        'Looking for development opportunities',
        'Improving Supervisor Connect',
    ],

    labLog: [
        { date: 'Aug 2026', entry: 'Improving semantic search and clustering-based categorisation in Supervisor Connect.' },
        { date: 'Aug 2026', entry: 'Preparing for Honours and looking for a research supervisor.' },
    ],

    footer: {
        name: 'Mohanned Omer',
        role: 'Computer Science Student',
        email: 'mohanned_omer@yahoo.com',
        github: 'https://github.com/mohanned-omer',
        linkedin: 'https://www.linkedin.com/in/mohanned-omer/',
        resume: '/resume.pdf',
    },
};
