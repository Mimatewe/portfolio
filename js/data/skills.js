// Skills Data
const skillsData = [
  {
    category: "Frontend",
    icon: "fa-code",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend",
    icon: "fa-server",
    items: ["Node.js", "SQL", "Java", "C/C++"],
  },
  {
    category: "AI & Modern",
    icon: "fa-brain",
    items: ["AI-Powered Web Dev", "Prompt Engineering", "LLMs", "Web Design"],
  },
  {
    category: "Tools",
    icon: "fa-tools",
    items: ["Git/GitHub", "VS Code", "Full-Stack Dev", "REST APIs"],
  },
];

// Function to render skills
function renderSkills() {
  const skillsGrid = document.getElementById("skillsGrid");

  if (!skillsGrid) return;

  skillsGrid.innerHTML = skillsData
    .map(
      (skillGroup) => `
        <div class="skill-card">
            <h3>
                <i class="fas ${skillGroup.icon}"></i>
                ${skillGroup.category}
            </h3>
            <ul>
                ${skillGroup.items
                  .map(
                    (skill) => `
                    <li>
                        <i class="fas fa-chevron-right"></i>
                        ${skill}
                    </li>
                `,
                  )
                  .join("")}
            </ul>
        </div>
    `,
    )
    .join("");
}

// Auto-render when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderSkills);
} else {
  renderSkills();
}
