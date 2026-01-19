// Projects Data - EDIT THIS FILE TO ADD YOUR REAL PROJECTS
const projectsData = [
  {
    title: "Community Connect Platform",
    description:
      "Full-stack web application serving the Eritrean community in Canada with event management and resource sharing.",
    tech: ["JavaScript", "React", "Node.js", "SQL"],
    category: "Full-Stack",
    demoUrl: "#", // Replace with your live demo URL
    githubUrl: "https://github.com/Mimatewe", // Replace with your repo URL
  },
  {
    title: "AI-Powered Community Assistant",
    description:
      "Intelligent chatbot helping newcomers navigate Canadian services and resources using LLM integration.",
    tech: ["JavaScript", "AI/LLM", "API Integration"],
    category: "AI-Powered",
    demoUrl: "#",
    githubUrl: "https://github.com/Mimatewe",
  },
  {
    title: "Resource Directory Web App",
    description:
      "Searchable database of community resources with multilingual support and mobile-responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "SQL"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "https://github.com/Mimatewe",
  },
  {
    title: "Event Management System",
    description:
      "Complete event planning and registration system with real-time updates and email notifications.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "Full-Stack",
    demoUrl: "#",
    githubUrl: "https://github.com/Mimatewe",
  },
];

// Function to render projects
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");

  if (!projectsGrid) return;

  projectsGrid.innerHTML = projectsData
    .map(
      (project) => `
        <div class="project-card">
            <div class="project-category">${project.category}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            
            <div class="project-tech">
                ${project.tech
                  .map(
                    (tech) => `
                    <span class="tech-tag">${tech}</span>
                `,
                  )
                  .join("")}
            </div>
            
            <div class="project-links">
                <a href="${project.demoUrl}" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                    Live Demo
                </a>
                <a href="${project.githubUrl}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                    Source Code
                </a>
            </div>
        </div>
    `,
    )
    .join("");
}

// Auto-render when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderProjects);
} else {
  renderProjects();
}
