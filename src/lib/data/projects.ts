export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: "mex",
    title: "MEX - Travel Platform",
    description:
      "A comprehensive travel planner and booking web application.",
    overview:
      "Marrakech Explorer is a full-stack travel platform that connects travelers, partners, and administrators within a single system. As a frontend developer, I built the traveler-facing experience, including place discovery, trip planning, and the social feed, along with responsive UI across the platform.",
    features: [
      "Place discovery with multi-field search and filtering",
      "AI-assisted trip planning alongside manual trip building",
      "Social feed with posts, comments, and likes",
      "Role-based dashboards for travelers, partners, and admins",
      "Secure, containerized deployment",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "MongoDB",
      "Firebase Auth",
    ],
    image: "/projects/mex.png",
  },
  {
    id: "webserv",
    title: "Webserv - HTTP Server",
    description:
      "A custom HTTP server built from scratch in C++98 with event-driven I/O.",
    overview:
      "Webserv is a lightweight HTTP/1.1 server developed from scratch in C++98, designed to handle multiple client connections efficiently using non-blocking I/O and epoll. I worked on HTTP request parsing, server configuration, response generation, CGI execution, and routing through configurable server and location blocks.",
    features: [
      "HTTP/1.1 request parsing and response generation",
      "Non-blocking I/O and epoll-based event handling",
      "Multiple server blocks with host and port-based routing",
      "Configurable locations, error pages, and client body size limits",
      "CGI support for dynamic content execution",
    ],
    technologies: [
      "C++98",
      "Sockets",
      "epoll",
      "HTTP/1.1",
      "CGI",
      "Unix/Linux",
    ],
    image: "/projects/mex.png",
  },
  {
    id: "movies",
    title: "Movies App",
    description:
      "A web application for discovering and exploring movies.",
    overview:
      "Movies App is a responsive web application focused on providing a smooth movie discovery experience. The application allows users to browse movies, explore detailed information, and interact with a clean and responsive interface designed for an engaging content discovery experience.",
    features: [
      "Movie browsing and discovery",
      "Movie search and filtering",
      "Detailed movie information and metadata",
      "Responsive interface across different screen sizes",
      "Reusable components for movie content and UI elements",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "CSS",
      "REST API",
    ],
    image: "/projects/movie.png",
  }
];
