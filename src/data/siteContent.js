/**
 * Central site copy. Presentation components should stay identity-agnostic.
 */
export const siteContent = {
    header: {
        name: 'Mohanned Omer',
        role: 'ML Engineer',
        definition: 'ML engineer building and learning across computer vision, deep learning, autonomous agents, pathfinding, and algorithms.',
    },

    navigation: [
        { key: 'home', label: 'Home', to: '/' },
        { key: 'projects', label: 'Projects', to: '/projects', count: 4 },
        { key: 'experience', label: 'Experience', to: '/experience', count: 4 },
        { key: 'books', label: 'Books', to: '/books', count: 5 },
        { key: 'resume', label: 'Resume', href: '/resume.pdf', external: true },
    ],

    whatThisIs: `This is where I document what I'm building and what I'm learning. Computer science is vast, and I want a place to keep track of the systems, concepts, and problems I spend time understanding.`,

    howIWork: {
        process: [
            'Question the system until I understand it',
            'Use AI to explore approaches and unfamiliar concepts',
            'Build from first principles when it improves understanding',
            'Measure, simplify, and make the system more efficient',
        ],
        constraints: [
            'Understanding before abstraction',
            'AI as an exploration tool',
            'First principles where they matter',
            'Efficiency without unnecessary complexity',
        ],
    },

    domains: [
        'Computer Vision',
        'Deep Learning',
        'Autonomous Agents & Pathfinding',
        'Algorithms',
    ],

    outputs: [
        {
            name: 'Person Re-Identification System',
            type: 'Research / Computer Vision',
            description: 'Real-time identity tracking across video frames using detection, tracking, and face/body embeddings.',
            stack: 'PyTorch, YOLOv8, DeepSORT, CLIP-ReID',
            slug: 'person-re-identification',
        },
        {
            name: 'Supervisor Connect',
            type: 'Application / ML Product',
            description: 'Research discovery across 480+ listings with semantic search and clustering-based categorisation.',
            stack: 'Spring Boot, Next.js, PostgreSQL, pgvector',
            slug: 'supervisor-connect',
            link: 'https://supervisor-connect.supervisor-connect.workers.dev',
            linkLabel: 'Live app',
        },
        {
            name: 'Mini PyTorch Framework & 3D U-Net',
            type: 'System / Deep Learning',
            description: 'A PyTorch-like framework built from scratch, extended for volumetric brain tumour segmentation.',
            stack: 'Python, NumPy, Numba, CUDA',
            slug: 'minitorch-3d-unet',
        },
        {
            name: 'MedTrack Pro',
            type: 'Application',
            description: 'A multi-user Android medication-management application for patients and clinicians.',
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

    collaboration: `I'm open to development opportunities across software and machine learning, particularly where there's room to learn deeply and take on challenging technical problems.`,

    footer: {
        name: 'Mohanned Omer',
        role: 'ML Engineer',
        email: 'mohanned_omer@yahoo.com',
        github: 'https://github.com/mohanned-omer',
        linkedin: 'https://www.linkedin.com/in/mohanned-omer/',
        resume: '/resume.pdf',
    },
};
