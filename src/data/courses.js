export const COURSES = [
  {
    id: 'thunder-web',
    slug: 'thunder-web',
    title: 'Thunder: 100 Days of Code',
    subtitle: 'Web Development + System Design + Security + DevOps',
    description: 'The ultimate 100-day journey from coding foundations to architecting scalable cloud systems, production-ready fullstack applications, and enterprise security.',
    duration: '100 Days',
    price: 5499,
    originalPrice: 7999,
    validity: '2 Years',
    hours: '100+ Hours',
    modules: '72 Modules',
    level: 'Beginner to Advanced',
    badge: 'LIVE',
    isPopular: false,
    accent: '#ffe14d',
    cardBg: '#fffdf5',
    highlights: [
      'JavaScript Mastery',
      'Backend Mastery',
      'System Thinking and Backend Scaling Basics',
      'Advanced System Design (Internals + HLD)',
      'Frontend Development (React, TypeScript, Tailwind)',
      'Capstone Projects',
      'DevOps'
    ],
    syllabus: [
      {
        phaseNumber: '01',
        title: 'JavaScript Mastery',
        moduleCount: '14 Modules',
        modules: [
          'JS Engine Internals: Call Stack, Memory Heap & Event Loop',
          'Promises, Async/Await & Microtask Queue Mechanics',
          'Prototypes, Inheritance & Closures Deep Dive',
          'ES6+ Features, Iterators & Generators',
          'Functional Programming Principles & Pure Functions',
          'DOM Manipulation Performance & Virtual DOM Concepts',
          'Browser Storage: LocalStorage, IndexedDB & Cookies',
          'Web APIs: Fetch, WebSockets, Web Workers',
          'Memory Leaks, Garbage Collection & Profiling',
          'TypeScript Fundamentals & Type Safety',
          'Advanced TS Types, Generics & Utilities',
          'Testing JS with Jest and Vitest',
          'Clean Code & Refactoring Patterns',
          'JavaScript Phase Capstone Build'
        ]
      },
      {
        phaseNumber: '02',
        title: 'Backend Mastery',
        moduleCount: '10 Modules',
        modules: [
          'Node.js Runtime & Event-Driven Architecture',
          'Express.js API Design & Custom Middleware Creation',
          'RESTful API Best Practices & OpenAPI Specs',
          'Relational DBs: PostgreSQL & Schema Migrations',
          'NoSQL DBs: MongoDB & Indexing Strategies',
          'ORM/ODMs: Prisma, TypeORM & Mongoose',
          'Authentication: JWT, OAuth 2.0 & Session Management',
          'Caching Strategies with Redis',
          'Asynchronous Job Queues with BullMQ',
          'Backend Phase Project: Scalable E-commerce Engine'
        ]
      },
      {
        phaseNumber: '03',
        title: 'Frontend Development',
        moduleCount: '12 Modules',
        modules: [
          'React 18 Architecture: Concurrent Mode & Fiber Engine',
          'State Management: Zustand, Redux Toolkit & React Query',
          'Modern Styling: Tailwind CSS & Design System Tokens',
          'Next.js 14 App Router & Server Components (RSC)',
          'Form Handling & Schema Validation (Zod, React Hook Form)',
          'Component Optimization & Memoization (useMemo, useCallback)',
          'Accessible Component Architecture (Radix UI, ARIA)',
          'Framer Motion Animations & Interactive UIs',
          'Micro-frontends & Module Federation Concepts',
          'Frontend Testing with React Testing Library',
          'Performance Auditing: Core Web Vitals & Lighthouse',
          'Frontend Capstone: Production SaaS Dashboard'
        ]
      },
      {
        phaseNumber: '04',
        title: 'System Design',
        moduleCount: '10 Modules',
        modules: [
          'High Level Design (HLD) vs Low Level Design (LLD)',
          'Load Balancers: Round-Robin, Least Connections & NGINX',
          'Database Sharding, Replication & CAP Theorem',
          'Distributed Caching & Invalidation Patterns',
          'Message Brokers: Kafka vs RabbitMQ',
          'API Gateways, Rate Limiting & Circuit Breakers',
          'Consistent Hashing & CDN Edge Caching',
          'Microservices Architecture & Event Sourcing',
          'Realtime Systems: WebSockets & Server-Sent Events',
          'HLD Interview Mock Cases: URL Shortener & Uber Backend'
        ]
      },
      {
        phaseNumber: '05',
        title: 'Security',
        moduleCount: '6 Modules',
        modules: [
          'Web Security Top 10: OWASP Vulnerabilities',
          'XSS, CSRF & SQL Injection Mitigation',
          'CORS, Security Headers & Content Security Policy',
          'Data Encryption: AES-256, RSA & Hashing (bcrypt)',
          'Rate Limiting & DDoS Defense Tactics',
          'Security Audit & Penetration Testing Basics'
        ]
      },
      {
        phaseNumber: '06',
        title: 'Capstone Projects',
        moduleCount: '8 Modules',
        modules: [
          'Project 1: Real-time Collaborative Code Editor',
          'Project 2: Distributed Video Streaming Platform',
          'Project 3: AI-Powered Analytics & Report Generator',
          'Architectural Review & Code Walkthroughs',
          'CI/CD Pipeline Setup for Capstones',
          'Load Testing with k6 & Performance Benchmarking',
          'Production Monitoring with Grafana & Prometheus',
          'Final Project Presentation & Code Polish'
        ]
      },
      {
        phaseNumber: '07',
        title: 'DevOps',
        moduleCount: '12 Modules',
        modules: [
          'Linux Systems & Command Line Mastery',
          'Docker Containerization & Multi-stage Builds',
          'Docker Compose for Multi-container Environments',
          'Kubernetes Core: Pods, Services & Deployments',
          'Helm Package Management & Cluster Config',
          'Infrastructure as Code with Terraform',
          'CI/CD Pipelines with GitHub Actions',
          'AWS Services: EC2, S3, RDS & ECS',
          'Cloud Networking: VPCs, Subnets & Gateways',
          'Log Aggregation with ELK Stack & Datadog',
          'Zero-Downtime Deployment Strategies (Blue-Green/Canary)',
          'DevOps Graduation Project & Cloud Deployment'
        ]
      }
    ]
  },
  {
    id: 'devops-full',
    slug: 'devops-full',
    title: 'DevOps Full Course',
    subtitle: 'Linux + CI/CD + Docker + Kubernetes + Terraform + Cloud',
    description: 'Master modern cloud infrastructure automation, container orchestration, and seamless release engineering with enterprise tools.',
    duration: '8 Weeks',
    price: 4999,
    originalPrice: 7499,
    validity: '2 Years',
    hours: '80+ Hours',
    modules: '45 Modules',
    level: 'Intermediate',
    badge: 'LIVE',
    isPopular: false,
    accent: '#56b4ff',
    cardBg: '#f0f8ff',
    highlights: [
      'Linux Fundamentals & Shell Scripting',
      'Docker Containerization & Multi-stage Builds',
      'Kubernetes Orchestration & Helm Charts',
      'CI/CD with GitHub Actions & GitLab',
      'Terraform Infrastructure as Code (IaC)',
      'AWS & Cloud Security Best Practices'
    ],
    syllabus: [
      {
        phaseNumber: '01',
        title: 'Linux Admin & Bash Scripting',
        moduleCount: '8 Modules',
        modules: [
          'Linux Kernel & File System Structure',
          'User Management & File Permissions',
          'Process Monitoring & Systemctl Services',
          'Automating Workflows with Bash Scripts',
          'Networking: SSH, IPTables, DNS & Curl'
        ]
      },
      {
        phaseNumber: '02',
        title: 'Docker & Microservices',
        moduleCount: '10 Modules',
        modules: [
          'Containerization vs Virtual Machines',
          'Writing Optimized Dockerfiles',
          'Docker Networks & Persistent Volumes',
          'Multi-Container Apps with Docker Compose'
        ]
      },
      {
        phaseNumber: '03',
        title: 'Kubernetes Production Orchestration',
        moduleCount: '12 Modules',
        modules: [
          'K8s Architecture: Control Plane & Worker Nodes',
          'Deployments, StatefulSets & DaemonSets',
          'ConfigMaps, Secrets & Ingress Controllers',
          'Production Cluster Setup with EKS/GKE'
        ]
      },
      {
        phaseNumber: '04',
        title: 'Terraform & Infrastructure Automation',
        moduleCount: '8 Modules',
        modules: [
          'Infrastructure as Code (IaC) Concepts',
          'Terraform State Management & Modules',
          'Provisioning Cloud Resources on AWS'
        ]
      },
      {
        phaseNumber: '05',
        title: 'CI/CD & Cloud Observability',
        moduleCount: '7 Modules',
        modules: [
          'Automated Pipelines with GitHub Actions',
          'Prometheus Metrics & Grafana Dashboards',
          'Incident Response & On-Call Playbooks'
        ]
      }
    ]
  },
  {
    id: 'dsa-genai-combo',
    slug: 'dsa-genai-combo',
    title: 'DSA + GenAI Combo',
    subtitle: 'Complete tech stack with DSA and AI',
    description: 'Solve complex algorithmic challenges while building next-generation AI agents, vector databases, and custom LLM applications.',
    duration: '4 Months',
    price: 6999,
    originalPrice: 11999,
    validity: '2 Years',
    hours: '120+ Hours',
    modules: '80 Modules',
    level: 'All Levels',
    badge: 'POPULAR',
    isPopular: true,
    accent: '#c8a2f8',
    cardBg: '#f9f3ff',
    highlights: [
      'Core & Advanced Data Structures',
      'Algorithm Paradigms (DP, Graphs, Trees)',
      'Generative AI Foundations & OpenAI APIs',
      'Vector Databases (Pinecone, ChromaDB)',
      'RAG Architecture & LangChain Pipelines',
      'Autonomous AI Agents & Autonomous Workflows'
    ],
    syllabus: [
      {
        phaseNumber: '01',
        title: 'Data Structures Foundation',
        moduleCount: '15 Modules',
        modules: [
          'Arrays, Strings & Space-Time Complexity Analysis',
          'Two Pointers & Sliding Window Patterns',
          'Linked Lists, Stacks & Queue Systems',
          'Binary Search & Recursion Fundamentals'
        ]
      },
      {
        phaseNumber: '02',
        title: 'Advanced Algorithms & Problem Solving',
        moduleCount: '15 Modules',
        modules: [
          'Binary Trees, BSTs & Heaps/Priority Queues',
          'Graph Traversals: BFS, DFS & Shortest Path',
          'Dynamic Programming & Backtracking Patterns'
        ]
      },
      {
        phaseNumber: '03',
        title: 'Generative AI & LLM Foundations',
        moduleCount: '12 Modules',
        modules: [
          'Transformer Models & Self-Attention Mechanics',
          'Prompt Engineering & Structured Outputs',
          'OpenAI, Anthropic & Hugging Face APIs'
        ]
      },
      {
        phaseNumber: '04',
        title: 'RAG & Vector Search Engines',
        moduleCount: '14 Modules',
        modules: [
          'Vector Embeddings & Cosine Similarity',
          'Pinecone, Qdrant & Chroma Vector DBs',
          'Building Production RAG Pipelines'
        ]
      },
      {
        phaseNumber: '05',
        title: 'AI Agents & Multi-Agent Teams',
        moduleCount: '12 Modules',
        modules: [
          'LangGraph & CrewAI Frameworks',
          'Tool Calling, Function Execution & Memory',
          'Building Autonomous Code & Research Agents'
        ]
      },
      {
        phaseNumber: '06',
        title: 'Fullstack AI Capstone Deployment',
        moduleCount: '12 Modules',
        modules: [
          'Integrating GenAI Backends with React Frontends',
          'Streaming Responses with Server-Sent Events',
          'Deploying AI SaaS Applications on Vercel & Cloud'
        ]
      }
    ]
  },
  {
    id: 'dsa-mastery',
    slug: 'dsa-mastery',
    title: 'Data Structure & Algorithms',
    subtitle: 'Master Problem Solving from Scratch to FAANG Level',
    description: 'Crack top tech interviews with 350+ solved problems, pattern identification, and step-by-step logic building techniques.',
    duration: '3 Months',
    price: 3999,
    originalPrice: 5999,
    validity: '1.5 Years',
    hours: '90+ Hours',
    modules: '60 Modules',
    level: 'Beginner to Advanced',
    badge: 'LIVE',
    isPopular: false,
    accent: '#6ee7a0',
    cardBg: '#f2fcf6',
    highlights: [
      'Arrays, Strings & Two Pointers',
      'Trees, Graphs & Dynamic Programming',
      'Systematic LeetCode Medium/Hard Patterns',
      'Mock Interview Drills & Code Reviews'
    ],
    syllabus: [
      {
        phaseNumber: '01',
        title: 'Foundations & Complexity',
        moduleCount: '10 Modules',
        modules: [
          'Big-O Notation: Time & Space Complexity',
          'Array Manipulations & Matrix Mathematics',
          'String Matching & Hashing Algorithms'
        ]
      },
      {
        phaseNumber: '02',
        title: 'Linear Data Structures',
        moduleCount: '10 Modules',
        modules: [
          'Linked List Inversion & Cycle Detection',
          'Stacks & Queues: Monotonic Stack Pattern',
          'Hash Tables & Collision Resolution'
        ]
      },
      {
        phaseNumber: '03',
        title: 'Non-Linear Data Structures',
        moduleCount: '12 Modules',
        modules: [
          'Binary Tree Traversals & Lowest Common Ancestor',
          'Binary Search Tree Operations',
          'Heaps & Top-K Frequent Elements'
        ]
      },
      {
        phaseNumber: '04',
        title: 'Graph Theory & Algorithms',
        moduleCount: '10 Modules',
        modules: [
          'Graph Representations & Cycle Detection',
          'Dijkstra, Bellman-Ford & Topological Sort',
          'Disjoint Set Union (DSU) & Minimum Spanning Trees'
        ]
      },
      {
        phaseNumber: '05',
        title: 'Dynamic Programming Mastery',
        moduleCount: '10 Modules',
        modules: [
          'Memoization vs Tabulation Techniques',
          '1D DP: Climbing Stairs & House Robber',
          '2D DP: Knapsack & Longest Common Subsequence'
        ]
      },
      {
        phaseNumber: '06',
        title: 'Interview Bootcamp & Live Drills',
        moduleCount: '8 Modules',
        modules: [
          'FAANG Pattern Identification Cheat Sheet',
          'Live Mock Technical Interviews',
          'Behavioral & Resume Strategy Sessions'
        ]
      }
    ]
  },
  {
    id: 'generative-ai',
    slug: 'generative-ai',
    title: 'Generative AI Engineering',
    subtitle: 'LLMs, RAG, AI Agents, Fine-Tuning & LangChain',
    description: 'Build real-world GenAI products. Deploy private LLMs, build multi-agent software systems, and fine-tune open models.',
    duration: '10 Weeks',
    price: 5999,
    originalPrice: 8999,
    validity: '2 Years',
    hours: '75+ Hours',
    modules: '36 Modules',
    level: 'Advanced',
    badge: 'NEW',
    isPopular: false,
    accent: '#ff6fae',
    cardBg: '#fff5f9',
    highlights: [
      'LLM Architecture & Prompt Engineering',
      'Embeddings & Semantic Search Systems',
      'Production RAG with HyDE & Re-Ranking',
      'Agentic Frameworks (CrewAI, LangGraph)'
    ],
    syllabus: [
      {
        phaseNumber: '01',
        title: 'LLMs & Prompt Engineering',
        moduleCount: '6 Modules',
        modules: [
          'Tokenization, Context Windows & Temperature',
          'System Prompts & Few-Shot Learning',
          'Structured Output Parsing with Pydantic'
        ]
      },
      {
        phaseNumber: '02',
        title: 'Advanced RAG Architectures',
        moduleCount: '8 Modules',
        modules: [
          'Document Chunking & Hybrid Search',
          'HyDE (Hypothetical Document Embeddings)',
          'Re-Ranking Models (Cohere Rerank)'
        ]
      },
      {
        phaseNumber: '03',
        title: 'Autonomous AI Agents',
        moduleCount: '8 Modules',
        modules: [
          'ReAct Framework & Tool Execution',
          'Stateful Workflows with LangGraph',
          'Multi-Agent Collaboration Networks'
        ]
      },
      {
        phaseNumber: '04',
        title: 'Fine-Tuning Open Source LLMs',
        moduleCount: '8 Modules',
        modules: [
          'LoRA, QLoRA & Parameter-Efficient Fine-Tuning',
          'Dataset Preparation & Synthetic Data Generation',
          'Fine-Tuning Llama 3 on Custom Domain Data'
        ]
      },
      {
        phaseNumber: '05',
        title: 'LLM Deployment & Observability',
        moduleCount: '6 Modules',
        modules: [
          'Serving LLMs with vLLM and Ollama',
          'LLM Observability with LangSmith & Traceloop',
          'Evaluation Frameworks (Ragas, TruLens)'
        ]
      }
    ]
  }
];

export function getCourseBySlug(slug) {
  return COURSES.find((c) => c.slug === slug) || COURSES[0];
}

export function getCourseById(id) {
  return COURSES.find((c) => c.id === id) || COURSES[0];
}
