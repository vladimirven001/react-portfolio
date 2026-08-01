import Head from "next/head";
import CursorSparkles from "./CursorSparkles";
import ProjectImage from "./ProjectImage";
import VisitorCounter from "./VisitorCounter";
import { profileLinks, projects, workExperience } from "../data/portfolio";
import { linkProps } from "../utils/linkProps";
import styles from "../styles/GeoPortfolio.module.css";

const [featuredProject, ...supportingProjects] = projects;

function DateRange({ value }) {
  const [start, end] = value.split(" - ");

  if (!end) {
    return <span className={styles.dateRange}>{value}</span>;
  }

  return (
    <span className={styles.dateRange}>
      <span className={styles.datePart}>{start}</span>
      <span className={styles.dateDash}>-</span>
      <span className={styles.datePart}>{end}</span>
    </span>
  );
}

function ProjectCard({ project, featured = false }) {
  const cardClassName = featured
    ? `${styles.projectCard} ${styles.featuredCard}`
    : styles.projectCard;

  return (
    <article className={cardClassName}>
      <h3>{project.title}</h3>
      <div className={styles.projectMedia}>
        <ProjectImage
          placeholderClassName={styles.placeholderThumb}
          project={project}
        />
      </div>
      <p>{project.copy}</p>
      <p className={styles.stack}>{project.stack}</p>
      <div className={styles.projectLinks}>
        <a href={project.href} {...linkProps(project.href)}>
          source
        </a>
        {project.extraHref ? (
          <a href={project.extraHref} {...linkProps(project.extraHref)}>
            {project.extraLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function GeoPortfolio() {
  return (
    <>
      <Head>
        <title>vladimir venkov - software engineer</title>
        <meta
          name="description"
          content="vladimir venkov is a mcgill software engineering student building developer tools, study tools, and search systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className={styles.page}>
        <CursorSparkles />
        <header id="home" className={styles.siteHeader}>
          <div className={styles.topStrip}>
            <span>best viewed at 1024x768</span>
            <span>last updated: 07.2026</span>
            <VisitorCounter
              className={styles.visitorCounter}
              digitsClassName={styles.visitorDigits}
            />
          </div>
          <div className={styles.logoBox}>
            <p>welcome to</p>
            <h1>{"vlad's webpage"}</h1>
            <span>software engineering @ mcgill</span>
          </div>
          <nav className={styles.headerNav} aria-label="main navigation">
            <a href="#home">home</a>
            <a href="#work">work</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
          </nav>
        </header>

        <div className={styles.shell}>
          <main className={styles.content}>
            <section className={styles.heroPanel}>
              <div className={styles.newsTicker}>
                <span>check out openswe: npm i @vladimirven/openswe</span>
              </div>
              <h2>software engineering student at mcgill</h2>
              <p>
                i am a montreal-based software engineering student at mcgill,
                interested in terminal tools, finance, and challenging problems.
              </p>
            </section>

            <section id="work" className={styles.section}>
              <div className={styles.sectionTitle}>
                <span>01</span>
                <h2>work experience</h2>
              </div>
              <div className={styles.workList}>
                {workExperience.map((job) => (
                  <article key={`${job.company}-${job.dates}`} className={styles.workCard}>
                    <div>
                      <h3>{job.title}</h3>
                      <p className={styles.workMeta}>
                        {job.company}
                        <DateRange value={job.dates} />
                      </p>
                    </div>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="projects" className={styles.section}>
              <div className={styles.sectionTitle}>
                <span>02</span>
                <h2>featured projects</h2>
              </div>

              <ProjectCard project={featuredProject} featured />

              <div className={styles.projectGrid}>
                {supportingProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </section>

            <section id="contact" className={styles.section}>
              <div className={styles.sectionTitle}>
                <span>03</span>
                <h2>contact</h2>
              </div>
              <div className={styles.contactBox}>
                <p>get in touch:</p>
                <div>
                  {profileLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      {...linkProps(link.href)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>

        <footer className={styles.footer}>
          <span>made with questionable taste</span>
          <a href="#home">back to top</a>
        </footer>
      </div>
    </>
  );
}
