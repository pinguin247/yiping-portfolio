import React from "react";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Backend Engineering",
    skills: ["Spring Boot", "NestJS", "REST APIs", "JDBC", "Microservices", "Event-Driven Architecture"],
  },
  {
    title: "Messaging & Distributed Systems",
    skills: ["Solace", "Chronicle Queue", "FIX Protocol"],
  },
  {
    title: "AI & LLM Applications",
    skills: ["OpenAI API", "LLM Orchestration", "Prompt Engineering", "Stateful Conversations", "LLM Evaluation"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "SQLite", "Supabase"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Angular", "Next.js", "React Native", "Vue.js", "Redux Toolkit", "Tailwind CSS", "Storybook", "Vite"],
  },
  {
    title: "Testing & Security",
    skills: ["JUnit", "Mockito", "Playwright", "Cypress", "Snyk", "Black Duck", "SonarQube"],
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Git", "GitHub", "Bitbucket", "Jenkins", "Harness", "OpenShift", "UrbanCode Deploy", "AutoSys", "Linux", "Bash"],
  },
  {
    title: "Monitoring & Observability",
    skills: ["Splunk", "Application Logging", "Performance Troubleshooting"],
  },
  {
    title: "AI-Assisted Development Tools",
    skills: ["GitHub Copilot", "Devin"],
  },
];

function Skills() {
  return (
    <div className="skills-page">
      <div className="page-header">
        <span className="eyebrow">Skills</span>
        <h1 className="section-heading">Technical capabilities</h1>
      </div>

      <div className="grid-2">
        {skillGroups.map((group) => (
          <div className="info-panel" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chip-list">
              {group.skills.map((skill) => (
                <span className="chip" key={`${group.title}-${skill}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
