import { Header } from './components/Header';
import { Arrow } from './components/Arrow';
import { BrandIcon } from './components/BrandIcon';
import { ProjectStudy } from './components/ProjectStudy';
import { TechStack } from './components/TechStack';
import { WorkDeck } from './components/WorkDeck';
import { profile,projects } from './content';
import { useReveal } from './useReveal';
import { useScrollExperience } from './useScrollExperience';

export default function App(){
  useReveal();useScrollExperience();
  return <>
    <a className="skip-link" href="#main">Skip to content</a><Header/>
    <main id="main" tabIndex={-1}>
      <section className="hero container" id="top" aria-labelledby="hero-title">
        <div className="hero-composition">
          <h1 id="hero-title"><span>Frontend</span><span>developer<span className="hero-mark" aria-hidden="true">↗</span></span></h1>
          <div className="hero-intro"><p>I’m Lucas. I build websites with character and make complex interfaces easier to use.</p><a href="#experience">Currently at PulsifyAI <Arrow diagonal/></a></div>
          <a className="hero-work-link" href="#work"><span>Explore my work</span><span className="circle-arrow"><Arrow/></span></a>
        </div>
        <WorkDeck/>
        <div className="hero-bottom"><span>Based in the Algarve, Portugal</span><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal/><span className="sr-only"> (opens in a new tab)</span></a><span className="scroll-hint">Scroll to look around <span aria-hidden="true">↓</span></span></div>
      </section>
      <TechStack/>
      <section className="work container section" id="work" aria-labelledby="work-title">
        <div className="section-heading reveal"><h2 id="work-title">Selected<br/><span>work</span></h2><p>Production interfaces, complete websites, and an independent project I made my own.</p></div>
        <nav className="work-index" aria-label="Selected project shortcuts">{projects.map(project=><a key={project.id} href={`#${project.id}`}><BrandIcon name={project.id}/><span>{project.name}</span></a>)}</nav>
        {projects.map((project,index)=><ProjectStudy key={project.id} project={project} index={index}/>)}
        <article className="secondary-project reveal"><h3><BrandIcon name="smartflow"/>SmartFlow <span>Academic / Team project</span></h3><div><p>A second-year prototype exploring traffic priority for emergency vehicles. In a two-person team, I contributed frontend pages and backend functionality.</p><a href="https://github.com/Tomas4030/smartflow" className="text-link" target="_blank" rel="noreferrer">View repository <Arrow diagonal/><span className="sr-only"> (opens in a new tab)</span></a></div></article>
      </section>
      <section className="experience-section container section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading reveal"><h2 id="experience-title">Experience</h2><p>Frontend ownership within a team.<br/>Earlier experience on the backend.</p></div>
        <div className="experience-list">
          <article className="experience-entry reveal"><div className="experience-summary"><p className="experience-date">29 June 2026 — Present</p><h3><BrandIcon name="pulsifyai"/>PulsifyAI</h3><p className="role">Frontend development intern</p></div><div className="experience-body"><p>Sole frontend developer across the PulsifyAI projects I work on, collaborating with the wider team on production applications and public websites.</p><ul><li>Built the PulsifyAI website and PulsifyLabs public landing page from scratch.</li><li>Redesigned ImoCoach’s application interfaces and public landing page.</li><li>Redesigned a confidential internal application while preserving familiar workflows and improving navigation, forms, tables and copy actions.</li><li>Adapted interfaces for desktop, tablet and mobile, with manual testing.</li></ul></div></article>
          <article className="experience-entry reveal"><div className="experience-summary"><p className="experience-date">April — July 2022</p><h3><BrandIcon name="kapta"/>Kapta</h3><p className="role">Backend developer intern</p></div><div className="experience-body"><p>Assisted in API development and database management, gaining practical experience with server-side logic and development workflows.</p></div></article>
        </div>
      </section>
      <section className="about container section" id="about" aria-labelledby="about-title"><div className="about-layout"><h2 id="about-title">A bit<br/><span>about me</span></h2><div className="about-copy reveal"><p className="large-copy">I like taking an interface that feels difficult or unfinished and making it clear, consistent and pleasant to use.</p><p>I’m Lucas, based in the Algarve. I completed a two-year Web Development programme at ETIC Algarve in July 2026. At PulsifyAI, I work as the sole frontend developer on my projects, collaborating with the team on public websites and production applications.</p><p>Stone Saints is a personal favourite: an individual school project where I built a clothing and jewellery storefront from end to end.</p><p className="languages">Portuguese <span>Fluent</span><span aria-hidden="true">/</span> English <span>Fluent</span></p></div></div></section>
    </main>
    <footer id="contact" className="contact container"><div className="contact-title"><h2>Say hello</h2><a href={`mailto:${profile.email}`} className="contact-orbit" aria-label={`Email ${profile.email}`}><Arrow diagonal/></a></div><div className="contact-grid"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<Arrow diagonal/></a><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal/><span className="sr-only"> (opens in a new tab)</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal/><span className="sr-only"> (opens in a new tab)</span></a><a href={`${import.meta.env.BASE_URL}lucas-cleminson-cv.pdf`} target="_blank" rel="noreferrer">CV <Arrow diagonal/><span className="sr-only"> (PDF, opens in a new tab)</span></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Lucas Cleminson</span><span>Algarve, Portugal</span><a href="#top">Back to top ↑</a></div></footer>
  </>;
}
