import React from "react";

const experiences = [
  {
    employer: "Citi",
    title: "Software Engineer",
    period: "July 2025 – Present",
    location: "Singapore",
    roles: [
      {
        label: "Equities Cash — Backend Engineering Rotation",
        period: "July 2025 – July 2026",
        description:
          "Developed and maintained enterprise backend applications supporting equities trading systems, with a focus on performance, security, modernisation, and infrastructure.",
        bullets: [
          "Redesigned deployment distribution for ~6 GB of artifacts to Australia, cutting transfer time from 2–3 hours to 78–90 seconds using regional object storage with retries, validation, and rollback safeguards.",
          "Implemented backward-compatible decryption to enable migration from Triple DES to AES-256-GCM without requiring simultaneous changes across existing configurations.",
          "Developed a real-time LEI compliance validation mechanism using Java and low-latency in-memory reference data to reject non-compliant orders before downstream processing.",
          "Contributed to a legacy Java 7 / Perl / Sybase migration to Java 17, Spring Boot, and Oracle, reworking database interactions using JDBC and investigating performance bottlenecks in a 33,000-record workflow.",
          "Configured a production-like APAC QA environment across three RHEL8 VMs and tuned JVM settings for pre-production reliability.",
        ],
        stack: ["Java 17", "Spring Boot", "Oracle", "SQL", "JDBC", "Linux", "REST APIs", "Solace", "Chronicle Queue", "Jenkins", "OpenShift"],
      },
      {
        label: "Equity Derivatives — Frontend Engineering Rotation",
        period: "July 2026 – Present",
        description:
          "Working on enterprise applications supporting equity derivatives trading workflows, with emphasis on frontend engineering, observability, security, and deployment.",
        bullets: [
          "Developed asynchronous UI telemetry using Angular and Spring Boot to capture application usage patterns and support migration decisions.",
          "Built and enhanced business-critical applications using React, Angular, and TypeScript across daily trading workflows.",
          "Remediated Snyk and Black Duck vulnerabilities through dependency upgrades and compatibility fixes, improving security posture.",
          "Supported production deployments with Harness and validated artifacts to ensure the correct versions were released.",
        ],
        stack: ["React", "Angular", "TypeScript", "Java", "Spring Boot", "REST APIs", "Splunk", "Snyk", "Black Duck", "Harness"],
      },
    ],
  },
  {
    employer: "Binance",
    title: "QA Engineer Intern",
    period: "September 2024 – May 2025",
    location: "Singapore · Remote",
    roles: [
      {
        label: "TMS Platform Quality Assurance",
        period: "September 2024 – May 2025",
        description: "Worked on software quality assurance and automated testing for the TMS platform.",
        bullets: [
          "Developed automated regression tests using Java and JUnit.",
          "Performed functional and regression testing to validate application behaviour and identify defects.",
          "Documented and tracked issues through Jira to support engineering collaboration.",
        ],
        stack: ["Java", "JUnit", "Test Automation", "Jira"],
      },
    ],
  },
  {
    employer: "Citi",
    title: "Software Engineer Intern",
    period: "June 2024 – August 2024",
    location: "Singapore",
    roles: [
      {
        label: "Markets Technology — Equities",
        period: "June 2024 – August 2024",
        description: "Contributed to enterprise application modernisation initiatives focused on web development and backend build automation.",
        bullets: [
          "Supported migration of a legacy desktop application into a modern web-based platform using React, TypeScript, Spring Boot, and SQLite.",
          "Contributed to migrating frontend code from JavaScript to TypeScript.",
          "Migrated backend build automation from Maven to Gradle using Groovy.",
        ],
        stack: ["React", "TypeScript", "Java", "Spring Boot", "SQLite", "Gradle", "Maven", "Swagger UI"],
      },
    ],
  },
  {
    employer: "Shopee",
    title: "Product Management Intern",
    period: "August 2023 – November 2023",
    location: "Singapore",
    roles: [
      {
        label: "Internal Data Products",
        period: "August 2023 – November 2023",
        description: "Supported the development and improvement of internal data products through testing, requirements analysis, and cross-functional collaboration.",
        bullets: [
          "Conducted UAT for internal data products and validated data using SQL and Presto.",
          "Supported requirement documentation and improvements to internal data portals.",
          "Collaborated with engineering and business stakeholders to support product initiatives.",
        ],
        stack: ["SQL", "Presto", "UAT", "Product Requirements", "Data Analytics"],
      },
    ],
  },
  {
    employer: "Ultra Clean Technology",
    title: "Software Engineer Intern",
    period: "February 2023 – March 2023",
    location: "Singapore",
    roles: [
      {
        label: "Internal Portal Frontend",
        period: "February 2023 – March 2023",
        description: "Contributed to frontend development and UI improvements for an internal web portal.",
        bullets: [
          "Developed and improved web interfaces using Vue.js and TypeScript.",
          "Implemented UI components and refined existing application designs.",
          "Worked with Pinia and Quasar to support frontend application development.",
        ],
        stack: ["Vue.js", "TypeScript", "Pinia", "Quasar", "CSS"],
      },
    ],
  },
];

function Experience() {
  return (
    <div className="experience-page">
      <div className="page-header">
        <span className="eyebrow">Experience</span>
        <h1 className="section-heading">Professional experience</h1>
      </div>

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-item" key={`${experience.employer}-${experience.period}`}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <p className="company-name">{experience.employer}</p>
                  <h3>{experience.title}</h3>
                </div>
                <span className="timeline-period">{experience.period}</span>
              </div>

              <p className="timeline-location">{experience.location}</p>

              {experience.roles.map((role) => (
                <div className="role-block" key={`${experience.employer}-${role.label}`}>
                  <h4>{role.label}</h4>
                  <p className="role-period">{role.period}</p>
                  <p>{role.description}</p>

                  <ul>
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="tech-pills">
                    {role.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Experience;