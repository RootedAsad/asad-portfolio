// Project data for the Projects section.
// Only the selected projects below will be displayed.

export const projects = [
  {
    title: "NexaFlow",
    category: "Full Stack",
    description:
      "A full-stack project management and team collaboration platform for organizing projects, tasks, teams, users, and workspace activity.",
    features: [
      "Project and task management",
      "Team and user management",
      "Interactive admin dashboard",
      "Workspace activity tracking",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/nexaflow.png",
    github:
      "https://github.com/RootedAsad/Project-Management-Team-Collaboration-Platform",
    live: "https://project-beta-henna-46.vercel.app",

    caseStudy: {
      problem:
        "Managing projects, tasks, team members, permissions, and workspace activity can become difficult when information is spread across different tools or handled manually.",

      solution:
        "NexaFlow was built as a centralized project management and team collaboration platform where users can manage projects, assign tasks, organize teams, and monitor workspace activity from a single system.",

      features: [
        "Authentication and protected access",
        "Project and task management",
        "Team and user management",
        "Role-based permissions",
        "Interactive admin dashboard",
        "Workspace activity tracking",
      ],

      challenges: [
        "Designing a structured project and task workflow",
        "Managing authentication and protected routes",
        "Handling user roles and permissions",
        "Keeping project, team, and activity data consistent",
      ],

      result:
        "Built a complete MERN-based project management platform with practical collaboration features, centralized project workflows, and structured access control.",
    },
  },

  {
    title: "RA Collection",
    category: "Full Stack",
    description:
      "A modern full-stack MERN e-commerce platform with product collections, shopping features, and a responsive user experience.",
    features: [
      "Product browsing and collections",
      "Shopping cart functionality",
      "Modern responsive interface",
      "Full-stack MERN architecture",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/ra-collection.png",
    github:
      "https://github.com/RootedAsad/ecommerce-web-application-",
    live:
      "https://ecommerce-web-application-dusky.vercel.app/",

    caseStudy: {
      problem:
        "Online stores need a responsive interface where users can easily discover products, browse collections, and manage items they want to purchase.",

      solution:
        "RA Collection was developed as a full-stack MERN e-commerce platform focused on product discovery, organized collections, shopping functionality, and a responsive user experience.",

      features: [
        "Product browsing and collections",
        "Shopping cart functionality",
        "Responsive product interface",
        "Full-stack MERN architecture",
        "Product-focused user experience",
      ],

      challenges: [
        "Structuring product and collection data",
        "Building reusable shopping interface components",
        "Managing cart-related state and interactions",
        "Maintaining responsive layouts across screen sizes",
      ],

      result:
        "Created a responsive MERN e-commerce application with a practical shopping experience and a structured full-stack architecture.",
    },
  },

  {
    title: "StackFrame",
    category: "Full Stack",
    description:
      "A full-stack blogging platform with secure authentication, protected routes, content management, and interactive blog features.",
    features: [
      "JWT authentication and protected routes",
      "Complete CRUD operations",
      "Redux Toolkit state management",
      "Responsive blog interface",
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    image: "/images/mern-blog.png",
    github: "https://github.com/RootedAsad/mern-blog",
    live: "https://mern-blog-theta-lilac.vercel.app/",

    caseStudy: {
      problem:
        "A blogging platform needs more than a visual interface. Users need secure authentication, protected content, reliable CRUD operations, and predictable application state.",

      solution:
        "StackFrame was built as a full-stack MERN blogging platform with JWT authentication, protected routes, content management, CRUD functionality, and Redux Toolkit for client-side state management.",

      features: [
        "JWT authentication",
        "Protected routes",
        "Blog CRUD operations",
        "Redux Toolkit state management",
        "Content management",
        "Responsive blog interface",
      ],

      challenges: [
        "Implementing secure authentication flows",
        "Protecting private routes and resources",
        "Managing CRUD operations across frontend and backend",
        "Keeping application state synchronized",
      ],

      result:
        "Built a complete blogging application that combines authentication, content management, backend APIs, and modern frontend state management.",
    },
  },

  {
    title: "Shelf Life",
    category: "Full Stack",
    description:
      "A full-stack personal library and reading tracker for managing books, tracking reading progress, and organizing a personal reading collection.",
    features: [
      "Personal library management",
      "Reading progress tracking",
      "Book search and discovery",
      "Ratings and reviews",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    image: "/images/shelf-life.png",
    github: "https://github.com/RootedAsad/shelf-life",
    live: "https://shelf-life-eta.vercel.app/",

    caseStudy: {
      problem:
        "Readers often need a simple way to organize their personal book collection, keep track of reading progress, and discover books without relying on scattered notes or lists.",

      solution:
        "Shelf Life was created as a personal library and reading tracker that combines book management, reading progress, search and discovery, and review-related functionality in one application.",

      features: [
        "Personal library management",
        "Reading progress tracking",
        "Book search and discovery",
        "Ratings and reviews",
        "JWT authentication",
        "Responsive full-stack interface",
      ],

      challenges: [
        "Designing a useful personal library workflow",
        "Managing reading progress data",
        "Structuring book-related records in MongoDB",
        "Keeping authenticated user data isolated",
      ],

      result:
        "Developed a full-stack personal reading platform that provides a structured way to manage books and track reading activity.",
    },
  },

  {
    title: "GeoFind",
    category: "Full Stack",
    description:
      "A geospatial search engine built with the MERN stack for location-based search, ranking, and optimized geographic queries.",
    features: [
      "Geospatial search with MongoDB",
      "Location-based result ranking",
      "2dsphere indexing and geo queries",
      "Redis caching and query optimization",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "MapLibre",
    ],
    image: "/images/geofind.png",
    github: "https://github.com/RootedAsad/GeoFind",
    live: "https://geo-find-one.vercel.app/",

    caseStudy: {
      problem:
        "Location-based applications need to return geographically relevant results efficiently, especially when datasets grow and repeated location queries become expensive.",

      solution:
        "GeoFind was built as a geospatial search engine using MongoDB geographic queries, 2dsphere indexing, location-based ranking, Redis caching, and a map-based frontend experience.",

      features: [
        "Geospatial search with MongoDB",
        "Location-based result ranking",
        "2dsphere indexing",
        "Geographic queries",
        "Redis caching",
        "Query optimization",
        "MapLibre-based map interface",
      ],

      challenges: [
        "Working with geospatial database queries",
        "Designing efficient location-based search",
        "Using 2dsphere indexes effectively",
        "Reducing repeated query cost with caching",
        "Keeping map interactions responsive",
      ],

      result:
        "Built a MERN-based geospatial search system focused on location-aware results, geographic indexing, caching, and query performance.",
    },
  },
];

export const projectCategories = ["All"];