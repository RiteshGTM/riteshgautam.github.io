/* ============================================================
   RITESH GAUTAM PORTFOLIO — script.js
   
   HOW TO CUSTOMISE:
   ─ All your data lives in the CONFIG object below
   ─ Add a new skill? Edit CONFIG.skills
   ─ Add a new project? Edit CONFIG.projects
   ─ No need to touch HTML. The page renders from this data.
   ============================================================ */

const CONFIG = {
  // ── Personal Info ────────────────────────────────────────
  resumeFile: "Ritesh_Gautam_Java_Backend_Developer.pdf", // put your PDF in the same folder
  email: "ritesh@gmail.com",
  phone: "+91-XXXXXXXXXX",
  github: "https://github.com/riteshgautam", // replace with real URL
  linkedin: "https://linkedin.com/in/riteshgautam", // replace with real URL

  // ── Skills ───────────────────────────────────────────────
  // TO ADD: copy one object, edit it, save. Done.
  skills: [
    {
      icon: "☕",
      name: "Backend — Java",
      tags: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
      ],
    },
    {
      icon: "🔒",
      name: "Security",
      tags: [
        "JWT Authentication",
        "Refresh Tokens",
        "Role-based Auth",
        "Permission-based Auth",
      ],
    },
    {
      icon: "🗄️",
      name: "Databases",
      tags: [
        "PostgreSQL",
        "SQL Server",
        "JPA / Hibernate",
        "Entity Framework Core",
      ],
    },
    {
      icon: "🧪",
      name: "Testing & Logging",
      tags: ["Integration Testing", "SLF4J", "Logback", "Swagger / OpenAPI"],
    },
    {
      icon: "⚙️",
      name: "Backend — Secondary",
      tags: ["C#", "ASP.NET Core Web API", "REST API Design", "CRUD APIs"],
    },
    {
      icon: "🌐",
      name: "Basics & Tools",
      tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Postman"],
    },
  ],

  // ── Projects ─────────────────────────────────────────────
  // TO ADD: copy one object, add highlights, save. Done.
  projects: [
    {
      title: "Job Portal System",
      period: "Dec 2025 – Jan 2026",
      github: "https://github.com/RiteshGTM/job-portal-backend",
      tech: ["Spring Boot", "PostgreSQL", "JWT", "Spring Security", "Swagger"],
      description:
        "Production-style backend for a job portal built with Spring Boot REST APIs — authentication, company management, jobs, applications, and resume handling.",
      highlights: [
        "JWT-based authentication with refresh token rotation",
        "Role & permission-based authorization for Admin, Recruiter, Job Seeker",
        "Layered architecture: Controller → Service → Repository",
        "Designed relational database schema and entity relationships using JPA/Hibernate",
        "Swagger/OpenAPI docs for every endpoint",
        "SLF4J + Logback structured logging for request traceability",
        "Integration tests covering auth and authorization flows",
      ],
    },
    {
      title: "Student Management System",
      period: "Aug 2025 – Oct 2025",
      github: "https://github.com/RiteshGTM/SchoolManagementSystem",
      tech: [
        "ASP.NET Core",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "Postman",
      ],
      description:
        "Full CRUD REST API for managing student records — Built to explore the ASP.NET Core ecosystem and implement REST APIs using Entity Framework Core.",
      highlights: [
        "CRUD REST APIs following REST principles",
        "Entity Framework Core for schema design and ORM",
        "API validation and error handling",
        "Tested with Postman, versioned with Git & GitHub",
      ],
    },
    // EXAMPLE: How to add a new project in future:
    // {
    //   title: "New Project Name",
    //   period: "Month Year – Month Year",
    //   github: "https://github.com/your-repo",
    //   tech: ["Tech1", "Tech2"],
    //   description: "Short description here.",
    //   highlights: ["Feature 1", "Feature 2"]
    // }
  ],

  // ── Certifications ───────────────────────────────────────
  certifications: [
    {
      icon: "🗃️",
      name: "SQL in Engineering Workshop",
      org: "TCET, Mumbai",
      date: "Feb 2024",
    },
    {
      icon: "🔧",
      name: "Git and GitHub Workshop",
      org: "Mind Benders Club, TCET",
      date: "Nov 2024",
    },
    // TO ADD: copy one object above, edit, save.
  ],

  // ── Contact Links ─────────────────────────────────────────
  contactLinks: [
    {
      icon: "✉️",
      label: "ritesh.gtmcs@gmail.com",
      // href: "mailto:ritesh@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=ritesh.gtmcs@gmail.com",
    },
    {
      icon: "💼",
      label: "linkedin",
      href: "https://www.linkedin.com/in/ritesh-gautam-828804290/",
    },
    {
      icon: "🐙",
      label: "github.com/RiteshGTM",
      href: "https://github.com/RiteshGTM",
    },
  ],
};

/* ============================================================
   RENDER FUNCTIONS — don't need to edit below here
   ============================================================ */

// Skills
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.skills
    .map(
      (cat) => `
    <div class="glass-card skill-category reveal">
      <div class="skill-cat-header">
        <div class="skill-cat-icon">${cat.icon}</div>
        <span class="skill-cat-name">${cat.name}</span>
      </div>
      <div class="skill-tags">
        ${cat.tags.map((t) => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

// Projects
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.projects
    .map(
      (p) => `
    <div class="glass-card project-card reveal">
      <div class="project-header">
        <div>
          <div class="project-title">${p.title}</div>
          <div class="project-period">${p.period}</div>
        </div>
        <a href="${p.github}" target="_blank" rel="noopener" class="project-link" title="GitHub">↗</a>
      </div>
      <p class="project-desc">${p.description}</p>
      <ul class="project-highlights">
        ${p.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>
      <div class="project-tech">
        ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

// Certifications
function renderCerts() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.certifications
    .map(
      (c) => `
    <div class="glass-card cert-card reveal">
      <div class="cert-icon">${c.icon}</div>
      <div class="cert-info">
        <div class="cert-name">${c.name}</div>
        <div class="cert-org">${c.org}</div>
        <div class="cert-date">${c.date}</div>
      </div>
    </div>
  `,
    )
    .join("");
}

// Contact links
function renderContact() {
  const el = document.getElementById("contactLinks");
  if (!el) return;
  el.innerHTML = CONFIG.contactLinks
    .map(
      (l) => `
    <a href="${l.href}" target="_blank" rel="noopener" class="contact-link-item">
      <span class="contact-link-icon">${l.icon}</span>
      <span class="contact-link-label">${l.label}</span>
    </a>
  `,
    )
    .join("");
}

// Resume download
function setupResume() {
  const btn = document.getElementById("resumeDownload");
  if (!btn) return;
  btn.href = CONFIG.resumeFile;
  btn.setAttribute("download", CONFIG.resumeFile);
}

// Footer year
function setYear() {
  const el = document.getElementById("footerYear");
  if (el) el.textContent = new Date().getFullYear();
}

/* ── THEME TOGGLE ────────────────────────────────────────── */
function initTheme() {
  const btn = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* ── NAV SCROLL ──────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById("navbar");
  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    },
    { passive: true },
  );
}

/* ── MOBILE MENU ─────────────────────────────────────────── */
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  btn.addEventListener("click", () => menu.classList.toggle("open"));
}
function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

/* ── SCROLL REVEAL ───────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.1 },
  );
  // Observe all .reveal elements (rendered by JS, so observe after render)
  const observe = () =>
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  // Small delay to ensure DOM is populated
  setTimeout(observe, 100);
}

/* ── STAT COUNTER ────────────────────────────────────────── */
function initCounters() {
  const els = document.querySelectorAll(".stat-num[data-count]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const target = parseInt(e.target.dataset.count);
        let current = 0;
        const step = target / 30;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          e.target.textContent = Math.round(current);
          if (current >= target) clearInterval(timer);
        }, 40);
        observer.unobserve(e.target);
      });
    },
    { threshold: 0.5 },
  );
  els.forEach((el) => observer.observe(el));
}

/* ── CONTACT FORM ────────────────────────────────────────── */
async function handleFormSubmit(e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  const name = document.getElementById("formName").value.trim();
  const email = document.getElementById("formEmail").value.trim();
  const msg = document.getElementById("formMsg").value.trim();

  status.textContent = "Sending…";

  const response = await fetch("https://formspree.io/f/xqeybkbj", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message: msg }),
  });

  status.textContent = response.ok
    ? "✓ Message sent!"
    : "✗ Something went wrong.";
  setTimeout(() => (status.textContent = ""), 4000);
  if (response.ok) e.target.reset();

  // // Opens mailto — replace with EmailJS or Formspree for real email sending
  // const mailto = `mailto:${CONFIG.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + "\n\nFrom: " + name + " <" + email + ">")}`;
  // window.open(mailto);

  // status.textContent = "✓ Opening your mail client…";
  // setTimeout(() => (status.textContent = ""), 4000);
  // e.target.reset();
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCerts();
  renderContact();
  setupResume();
  setYear();
  initTheme();
  initNav();
  initMobileMenu();
  initScrollReveal();
  initCounters();
});
