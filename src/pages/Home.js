import { Link } from "react-router-dom";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import profileImage from "../assets/updatedprofile.jpg";

const impact = [
  { value: "78–90 sec", label: "deployment transfer", context: "down from 2–3 hours" },
  { value: "6 GB", label: "artifact workflow", context: "regional distribution" },
  { value: "33k+", label: "record workflow", context: "performance analysis" },
  { value: "19", label: "study participants", context: "FitBuddy evaluation" },
];

const rotations = [
  {
    label: "Current rotation",
    title: "Equity Derivatives · Frontend Engineering",
    period: "Jul 2026 — Present",
    summary: "Enterprise applications for equity-derivatives workflows, with an emphasis on observability, security, and reliable release delivery.",
    bullets: [
      "Built asynchronous UI usage telemetry with Angular and Spring Boot, feeding Splunk dashboards that informed modernisation decisions.",
      "Developed business-critical workflows with React, Angular, TypeScript, Java, and REST APIs.",
      "Remediated Snyk and Black Duck findings through dependency upgrades and compatibility fixes.",
      "Supported Harness production deployments and validated release artifacts.",
    ],
    stack: ["Angular", "React", "TypeScript", "Spring Boot", "Splunk", "Harness"],
  },
  {
    label: "Previous rotation",
    title: "Equities Cash · Backend Engineering",
    period: "Jul 2025 — Jul 2026",
    summary: "Backend systems supporting equities trading, spanning performance, cryptographic migration, compliance, and legacy modernisation.",
    bullets: [
      "Redesigned distribution of ~6 GB of artifacts to Australia using regional object storage, retries, validation, and rollback safeguards—reducing transfer time from 2–3 hours to 78–90 seconds.",
      "Implemented backward-compatible decryption to support a staged migration from Triple DES to AES-256-GCM.",
      "Built real-time LEI compliance validation with low-latency in-memory reference data to reject non-compliant orders before downstream processing.",
      "Helped modernise a Java 7, Perl, and Sybase application to Java 17, Spring Boot, and Oracle; investigated a workflow handling 33,000+ records.",
      "Configured a production-like APAC QA environment across three RHEL8 virtual machines.",
    ],
    stack: ["Java 17", "Spring Boot", "Oracle", "JDBC", "Linux", "Solace"],
  },
];

const earlierExperience = [
  {
    company: "Binance",
    role: "QA Engineer Intern",
    period: "Sep 2024 — May 2025",
    detail: "Built Java/JUnit regression tests and performed functional validation for the TMS platform.",
  },
  {
    company: "Citi",
    role: "Software Engineer Intern",
    period: "Jun — Aug 2024",
    detail: "Supported a desktop-to-web migration with React, TypeScript, Spring Boot, SQLite, and a Maven-to-Gradle build transition.",
  },
  {
    company: "Shopee",
    role: "Product Management Intern",
    period: "Aug — Nov 2023",
    detail: "Validated internal data products with SQL and Presto and supported requirements across engineering and business teams.",
  },
  {
    company: "Ultra Clean Technology",
    role: "Software Engineer Intern",
    period: "Feb — Mar 2023",
    detail: "Developed interface components for an internal portal using Vue.js, TypeScript, Pinia, and Quasar.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Backend systems",
    description: "Services and data flows designed for correctness, operability, and change.",
    tools: ["Java", "Spring Boot", "NestJS", "REST APIs", "JDBC", "SQL"],
  },
  {
    number: "02",
    title: "AI applications",
    description: "LLMs treated as one component in a stateful, testable product system.",
    tools: ["OpenAI API", "Prompt design", "LLM orchestration", "Evaluation", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Delivery & operations",
    description: "The deployment, observability, and security work that keeps software useful.",
    tools: ["Linux", "Splunk", "Jenkins", "Harness", "OpenShift", "Snyk"],
  },
  {
    number: "04",
    title: "Product interfaces",
    description: "Practical frontend and mobile experiences built around real workflows.",
    tools: ["React", "Angular", "TypeScript", "Next.js", "React Native", "Vue.js"],
  },
];

function Home() {
  return (
    <div id="top">
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="hero-status"><span aria-hidden="true" /> Software engineer · Singapore</p>
          <h1>I build reliable systems for <em>complex, human</em> problems.</h1>
          <p className="hero-intro">
            I’m Yiping, a software engineer at Citi working across backend platforms,
            modern enterprise applications, and practical AI products.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <span>↓</span></a>
            <a className="button button-text" href="mailto:gaoyiping1012@gmail.com">Email me <span>↗</span></a>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img src={profileImage} alt="Gao Yiping smiling by the waterfront" />
          </div>
          <div className="portrait-note note-top">backend<br />engineering</div>
          <div className="portrait-note note-bottom">AI / LLM<br />applications</div>
          <p className="portrait-caption">Curious by nature. Systems-minded by practice.</p>
        </div>
      </section>

      <section className="impact-strip" aria-label="Selected outcomes">
        <div className="section-shell impact-grid">
          <p className="impact-heading">Selected<br />outcomes</p>
          {impact.map((item) => (
            <div className="impact-item" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <small>{item.context}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="section-intro">
          <p className="section-label">01 · About</p>
          <h2>Engineering depth, with a product point of view.</h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            I work best where software has to be both technically sound and genuinely useful—
            from trading-system infrastructure to conversational AI.
          </p>
          <div className="about-columns">
            <p>
              My professional foundation is in Java, Spring Boot, REST APIs, SQL, and distributed
              systems. At Citi, I’ve worked on application modernisation, performance, security,
              observability, and production infrastructure across financial-markets technology.
            </p>
            <p>
              I’m equally interested in AI application engineering: building the state, evaluation,
              and product safeguards around language models so they can solve practical problems—
              not simply produce impressive demos.
            </p>
          </div>
          <div className="interest-line">
            <span>Currently exploring</span>
            <p>Distributed systems · LLM applications · System design · Software architecture</p>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-shell">
          <div className="section-intro experience-intro">
            <div>
              <p className="section-label">02 · Experience</p>
              <h2>Built in real systems, under real constraints.</h2>
            </div>
            <p>Citi · Software Engineer<br />Jul 2025 — Present · Singapore</p>
          </div>

          <div className="rotation-list">
            {rotations.map((rotation, index) => (
              <details className="rotation-card" key={rotation.title} open={index === 0}>
                <summary>
                  <span className="rotation-number">0{index + 1}</span>
                  <span className="rotation-title">
                    <small>{rotation.label}</small>
                    <strong>{rotation.title}</strong>
                  </span>
                  <span className="rotation-period">{rotation.period}</span>
                  <span className="details-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="rotation-content">
                  <p className="rotation-summary">{rotation.summary}</p>
                  <ul>
                    {rotation.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <div className="project-tags">
                    {rotation.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="earlier-experience">
            <p className="section-label">Earlier chapters</p>
            <div>
              {earlierExperience.map((item) => (
                <article key={`${item.company}-${item.period}`}>
                  <h3>{item.company}</h3>
                  <p><strong>{item.role}</strong><span>{item.period}</span></p>
                  <small>{item.detail}</small>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-intro work-intro">
          <div>
            <p className="section-label">03 · Selected work</p>
            <h2>Proof through projects.</h2>
          </div>
          <Link className="inline-link" to="/projects">View all projects <span>↗</span></Link>
        </div>
        <div className="projects-stack home-projects">
          {ProjectList.map((project, index) => (
            <ProjectItem key={project.id} project={project} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="toolkit-section" id="toolkit">
        <div className="section-shell">
          <div className="section-intro toolkit-intro">
            <p className="section-label">04 · Toolkit</p>
            <h2>Capabilities grouped by the work they enable.</h2>
            <p>Tools are useful. Judgment about when and how to use them matters more.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.title}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul>
                  {capability.tools.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section section-shell" id="education">
        <div className="section-intro">
          <p className="section-label">05 · Education</p>
          <h2>Two disciplines, one way of thinking.</h2>
        </div>
        <div className="education-layout">
          <article className="education-primary">
            <div className="education-mark">NTU</div>
            <div>
              <p>Nanyang Technological University · 2020—2025</p>
              <h3>Double Degree in Business and Computer Science</h3>
              <ul>
                <li>Bachelor of Computing in Computer Science · Honours (Distinction)</li>
                <li>Bachelor of Business · Honours (Distinction)</li>
              </ul>
              <p className="education-focus">Business Analytics · Data Science & Analytics · Cyber Security</p>
            </div>
          </article>
          <aside className="education-aside">
            <p className="section-label">Beyond coursework</p>
            <h3>Leadership through sport and community.</h3>
            <p>Hall 5 Swimming Captain, orientation committees, and orientation group leadership.</p>
            <div className="education-school">
              <span>2018—2019</span>
              <strong>Hwa Chong Institution</strong>
              <p>GCE A-Level · Water Polo & Swimming</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <p className="section-label">06 · Contact</p>
        <div>
          <h2>Have an interesting engineering problem?</h2>
          <a href="mailto:gaoyiping1012@gmail.com">Tell me about it <span>↗</span></a>
        </div>
        <p>I’m always happy to connect with engineers, builders, and teams working on meaningful systems.</p>
      </section>
    </div>
  );
}

export default Home;
