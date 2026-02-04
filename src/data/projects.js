export const projectDetails = [
  {
    id: 1,
    slug: 'person-re-identification',
    title: 'Person Re-Identification System',
    heroLabel: 'RE-ID',
    date: '2025–2026',
    techStack: 'Python, PyTorch, YOLOv8, DeepSORT, CLIP-ReID, Hungarian matching',
    abstract:
      'A real-time person re-identification system designed to maintain consistent identities across video frames using detection, tracking, face/body embeddings, and improved detection-to-track assignment.',
    links: [],
    content: `
      <h2>Project record</h2>

      <h3>What the system does</h3>
      <p>The system maintains identities across video frames, including through occlusion and re-entry. I built and stress-tested the real-time pipeline using YOLOv8 for detection, DeepSORT for tracking, and CLIP-ReID alongside face embeddings for identity information.</p>

      <h3>Detection-to-track assignment</h3>
      <p>I implemented Hungarian matching to replace local assignment decisions with a globally optimal one-to-one assignment between detections and tracks.</p>

      <h3>Media</h3>
      <div class="media-placeholder-grid">
        <div class="media-placeholder" role="img" aria-label="Placeholder for person tracking screenshots"><span>Media slot 01</span><strong>Tracking screenshots</strong><p>Reserved for identity and re-entry examples.</p></div>
        <div class="media-placeholder" role="img" aria-label="Placeholder for person re-identification demo video"><span>Media slot 02</span><strong>Demo video</strong><p>Reserved for the real-time pipeline.</p></div>
        <div class="media-placeholder" role="img" aria-label="Placeholder for person re-identification architecture diagram"><span>Media slot 03</span><strong>Architecture diagram</strong><p>Reserved for the detection, tracking, and embedding flow.</p></div>
        <div class="media-placeholder" role="img" aria-label="Placeholder for person re-identification visual examples"><span>Media slot 04</span><strong>Visual examples</strong><p>Reserved for comparison frames.</p></div>
      </div>

      <h3>Documentation state</h3>
      <p>The system is complete. Detailed write-up in progress.</p>
    `,
  },
  {
    id: 2,
    slug: 'supervisor-connect',
    title: 'Supervisor Connect',
    heroLabel: 'SC',
    date: '',
    techStack: 'Java, Spring Boot, TypeScript, Next.js, PostgreSQL, pgvector, OpenAI embeddings',
    abstract:
      'A full-stack research-discovery platform indexing 480+ university research listings and combining semantic search with clustering-based categorisation.',
    links: [
      { label: 'Open live application', href: 'https://supervisor-connect.supervisor-connect.workers.dev' },
    ],
    content: `
      <h2>Project record</h2>

      <h3>Product</h3>
      <p>Supervisor Connect pairs a Spring Boot REST API with a Next.js frontend. It indexes more than 480 university research listings and supports semantic discovery using OpenAI embeddings stored with pgvector.</p>

      <h3>Categorisation</h3>
      <p>I replaced rule-based categorisation with Ward-linkage hierarchical clustering. I am currently improving both the search experience and the clustering-based categorisation.</p>

      <h3>Filtering path</h3>
      <p>I moved join, filter, sort, pagination, and count behaviour into a single PostgreSQL RPC. This reduced filtering time from approximately 3.3 seconds to 1.5 seconds.</p>

      <h3>Media</h3>
      <div class="media-placeholder-grid">
        <div class="media-placeholder media-placeholder-wide" role="img" aria-label="Placeholder for Supervisor Connect application screenshots"><span>Media slot 01</span><strong>Application screenshots</strong><p>Reserved for search, filtering, and research-listing views.</p></div>
      </div>
    `,
  },
  {
    id: 3,
    slug: 'minitorch-3d-unet',
    title: 'Mini PyTorch Framework & 3D U-Net',
    heroLabel: 'MT / 3D',
    date: '',
    techStack: 'Python, NumPy, Numba, CUDA',
    abstract:
      'A lightweight PyTorch-like deep-learning framework built from scratch, then used and extended for volumetric deep learning.',
    links: [],
    content: `
      <h2>Project record</h2>

      <h3>Framework</h3>
      <p>I built neural-network modules, automatic differentiation, tensor operations, and CPU and GPU tensor backends. The implementation uses Numba and CUDA and includes parallel map/reduce, matrix multiplication, convolution, and pooling.</p>

      <h3>Volumetric application</h3>
      <p>I built and trained a 3D U-Net for brain tumour segmentation. Patch-based training and sliding-window inference made it possible to process full MRI volumes within memory limits.</p>

      <h3>Media and source</h3>
      <div class="media-placeholder-grid">
        <div class="media-placeholder" role="img" aria-label="Placeholder for MRI volume visualisation"><span>Media slot 01</span><strong>MRI volume</strong><p>Reserved for volumetric input visualisation.</p></div>
        <div class="media-placeholder" role="img" aria-label="Placeholder for tumour segmentation output"><span>Media slot 02</span><strong>Segmentation output</strong><p>Reserved for predicted tumour masks.</p></div>
        <div class="media-placeholder" role="img" aria-label="Placeholder for Mini PyTorch and 3D U-Net architecture diagrams"><span>Media slot 03</span><strong>Architecture diagrams</strong><p>Reserved for the framework and 3D U-Net.</p></div>
        <div class="media-placeholder" role="img" aria-label="Placeholder for future Mini PyTorch GitHub repository link"><span>Source slot</span><strong>GitHub repository</strong><p>To be linked after the project cleanup is published.</p></div>
      </div>

      <h3>Documentation state</h3>
      <p>The work is complete and is being cleaned up. Detailed write-up in progress.</p>
    `,
  },
  {
    id: 4,
    slug: 'medtrack-pro',
    title: 'MedTrack Pro',
    heroLabel: 'MEDTRACK',
    date: '2025',
    techStack: 'Kotlin, Jetpack Compose, Room, MVVM, Retrofit, Coroutines, StateFlow, LiveData, Gemini, OpenFDA, AlarmManager',
    abstract:
      'A multi-user Android medication-management application with persistent patient workflows, drug information, personalised tips, reminders, and a clinician dashboard.',
    links: [],
    content: `
      <h2>Project record</h2>

      <h3>Architecture and persistence</h3>
      <p>The application follows Composable → ViewModel → Repository → DAO → Room, with Room as the structured-data source of truth. It supports account claiming, Patient ID and password access, registration, and persistent sessions.</p>

      <h3>Patient workflows</h3>
      <p>Patients can manage medications, record taken state, and keep a symptom history. Medication state persists across restarts, while taken state resets appropriately on a new day. Reminder scheduling is implemented with AlarmManager.</p>

      <h3>Drug information and tips</h3>
      <p>OpenFDA Drug Label API integration supports medication search and drug-information views with graceful missing-data and network handling. Gemini generates medication and adherence tips from patient-specific context, and the tip history is stored in the database.</p>

      <h3>Clinician workflow</h3>
      <p>The clinician dashboard brings together aggregated patient statistics and a GenAI-driven pattern analysis.</p>

      <h3>Browser demo</h3>
      <div class="media-placeholder-grid">
        <div class="media-placeholder" role="img" aria-label="Placeholder for MedTrack Android screenshots"><span>Media slot 01</span><strong>Android screenshots</strong><p>Reserved for the patient and clinician application views.</p></div>
        <div class="media-placeholder" role="img" aria-label="Placeholder for the future MedTrack interactive browser demo"><span>Demo slot</span><strong>Interactive browser demo</strong><p>Planned with fake patient data only and safe fallbacks when API credentials are absent.</p></div>
      </div>
      <p>The browser recreation is planned as a separate phase so the portfolio can ship without presenting simulated responses as live API results.</p>
    `,
  },
];
