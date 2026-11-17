"use client";

import { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Bot, Box, Code2, Github,
  Gamepad2, Layers3, Menu, MousePointer2, Palette, Sparkles,
  Workflow, X, Zap
} from "lucide-react";

type Project = {
  name: string;
  category: string;
  kind: string;
  description: string;
  stack: string;
  mark: string;
  tone: string;
  status: string;
};

const projects: Project[] = [
  { name: "AICAPTION", category: "AI & SaaS", kind: "AI video editor · SaaS", description: "An AI-powered video editing product with captions, subtitles, creator tools, subscriptions and a minute-based wallet.", stack: "Next.js · Node.js · MongoDB · Razorpay", mark: "AI", tone: "violet", status: "Product" },
  { name: "Preta", category: "Web & SaaS", kind: "Website personalization", description: "A no-code personalization platform for changing live website experiences through targeting, extensions and user context.", stack: "React · TypeScript · Node.js", mark: "P", tone: "blue", status: "Platform" },
  { name: "Printoll", category: "Commerce", kind: "Custom apparel commerce", description: "A printed T-shirt storefront with product and order management, media uploads and payment flows.", stack: "MERN · Cloudinary · Razorpay", mark: "PT", tone: "peach", status: "Store" },
  { name: "Auramarts", category: "Commerce", kind: "E-commerce experience", description: "A commerce project focused on storefront experience, product discovery and online purchasing.", stack: "Web · Commerce · Product UX", mark: "A", tone: "mint", status: "Project" },
  { name: "Chess Game", category: "Games", kind: "Interactive game", description: "A chess game project exploring board interactions, rules, game state and player experience.", stack: "Game logic · UI · Interaction", mark: "♞", tone: "rose", status: "Game" },
  { name: "IO Game", category: "Games", kind: "Multiplayer arena · In progress", description: "An arena game concept with multiplayer matches, TDM, progression, skins and an in-game economy.", stack: "Unity · C# · Multiplayer systems", mark: "IO", tone: "lime", status: "In progress" },
  { name: "Handmade Keychains", category: "Creative", kind: "Handmade product project", description: "A handmade keychain project bringing together physical creativity, product presentation and commerce.", stack: "Creative direction · Product · Commerce", mark: "♡", tone: "peach", status: "Creative" },
  { name: "V.N. ODEDRA Vision", category: "Web & SaaS", kind: "Website experience", description: "A responsive website experience with modern visual direction and interactive frontend implementation.", stack: "Framer · UI engineering", mark: "VN", tone: "blue", status: "Website" }
];

const disciplines = [
  { icon: Code2, number: "01", title: "Software & Product Engineering", body: "Full-stack web apps, SaaS platforms, APIs, dashboards and production-minded product experiences.", color: "lavender" },
  { icon: Bot, number: "02", title: "AI & Intelligent Tools", body: "AI-powered products, LLM integrations, assistants and useful AI workflows.", color: "sky" },
  { icon: Workflow, number: "03", title: "Automation Systems", body: "Connected workflows, integrations and tools that eliminate repetitive work.", color: "peach" },
  { icon: Gamepad2, number: "04", title: "Games & Interactive Worlds", body: "Game mechanics, multiplayer concepts, progression systems and playful experiences.", color: "pink" },
  { icon: Box, number: "05", title: "3D Design & Blender", body: "3D assets, modeling, animation and procedural creative experiments.", color: "mint" },
  { icon: Layers3, number: "06", title: "End-to-end Product Thinking", body: "From the first idea and architecture to interface, implementation and launch.", color: "butter" }
];

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express",
  "MongoDB", "Prisma", "Socket.io", "Python", "Three.js", "Blender",
  "Unity", "GSAP", "Framer Motion", "Tailwind CSS", "Nx"
];

function FloatingWorld() {
  return (
    <div className="world" aria-label="Illustrated floating creative universe">
      <div className="world-glow" />
      <div className="world-orbit orbit-a" />
      <div className="world-orbit orbit-b" />
      <div className="world-portal"><div className="portal-core">YP<span>✦</span></div></div>
      <div className="world-island island-main"><i /><b /><span /></div>
      <div className="world-island island-left"><i /><b /></div>
      <div className="world-island island-right"><i /><b /></div>
      <div className="world-cloud cloud-a" /><div className="world-cloud cloud-b" />
      <div className="world-planet planet-a" /><div className="world-planet planet-b" />
      <div className="world-spark spark-a">✦</div><div className="world-spark spark-b">✧</div><div className="world-spark spark-c">✳</div>
      <div className="world-panel panel-code"><small>✳ &nbsp; BUILD / CREATE</small><strong>const idea = "possible";</strong><span>design → develop → launch</span></div>
      <div className="world-panel panel-ai"><Bot size={18}/><small>AI SYSTEMS</small><strong>Thinking beyond.</strong></div>
      <div className="creator"><div className="creator-hair"/><div className="creator-face"><i/><i/></div><div className="creator-shirt">YP</div><div className="creator-leg leg-left"/><div className="creator-leg leg-right"/></div>
      <div className="world-bot"><div className="bot-face"><i/><i/></div><div className="bot-body">✦</div></div>
      <div className="world-tag tag-one">〈/〉 &nbsp; SOFTWARE</div>
      <div className="world-tag tag-two">✧ &nbsp; AI + AUTOMATION</div>
      <div className="world-tag tag-three">◈ &nbsp; GAME WORLDS</div>
      <div className="world-tag tag-four">⬡ &nbsp; 3D STUDIO</div>
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const categories = ["All", "Web & SaaS", "AI & SaaS", "Commerce", "Games", "Creative"];
  const visibleProjects = useMemo(
    () => filter === "All" ? projects : projects.filter((project) => project.category === filter),
    [filter]
  );
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const links = ["About", "Work", "Capabilities", "Toolkit", "Lab", "Contact"];

  return (
    <main>
      <motion.div className="reading-progress" style={{ width: progressWidth }} />
      <header className="site-header">
        <a className="identity" href="#home"><span className="identity-mark">YP</span><span>Yash Parmar<small>DIGITAL CREATOR</small></span></a>
        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let's build <ArrowUpRight size={15}/></a>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="hello-pill"><span>✦</span> HELLO, I'M YASH <i /></div>
          <h1>I build digital<br/>things <em>beyond<br/>limits.</em></h1>
          <p className="hero-description">I turn ambitious ideas into real digital experiences — software products, AI tools, automated systems, games and 3D worlds.</p>
          <div className="hero-buttons"><a className="button button-primary" href="#work">Explore my work <ArrowRight size={17}/></a><a className="button button-soft" href="#contact">Let's collaborate <Sparkles size={16}/></a></div>
          <div className="hero-facts"><div><strong>01.9+</strong><span>Years building</span></div><i/><div><strong>Many</strong><span>Ideas explored</span></div><i/><div><strong>5</strong><span>Creative domains</span></div></div>
          <a className="scroll-cue" href="#about"><MousePointer2 size={15}/> SCROLL TO EXPLORE <ArrowDown size={15}/></a>
        </div>
        <FloatingWorld />
        <div className="hero-footer"><span><i/> OPEN TO INTERESTING BUILDS</span><span>VADODARA · INDIA</span></div>
      </section>

      <section className="about section-pad" id="about">
        <div className="eyebrow">01 / THE PERSON BEHIND THE BUILDS</div>
        <div className="about-layout"><h2>More than a developer.<br/><em>A digital creator.</em></h2><div><p>I enjoy building across disciplines. One day it might be a full-stack product, the next an AI workflow, a multiplayer game mechanic or a 3D scene in Blender. I like understanding the whole problem and making the idea work end to end.</p><a className="inline-link" href="#contact">Have an idea? Let's talk <ArrowUpRight size={16}/></a></div></div>
        <div className="principles"><span>01 / THINK BIG</span><span>02 / BUILD REAL</span><span>03 / AUTOMATE SMART</span><span>04 / KEEP EXPLORING</span></div>
      </section>

      <section className="work section-pad" id="work">
        <div className="work-heading"><div><div className="eyebrow">02 / SELECTED BUILDS & EXPERIMENTS</div><h2>A universe of<br/><em>things I've built.</em></h2><p>Products, platforms, games and creative experiments. More worlds are being added.</p></div><div className="work-index"><strong>∞</strong><span>PROJECTS IN PROGRESS</span></div></div>
        <div className="filters" role="group" aria-label="Filter projects">{categories.map((category) => <button key={category} className={filter === category ? "filter-chip selected" : "filter-chip"} onClick={() => setFilter(category)}>{category}</button>)}</div>
        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <motion.button key={project.name} layout className={`project-tile tone-${project.tone}`} onClick={() => setSelected(project)} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .45, delay: index * .04 }}>
              <div className="project-art"><div className="art-ring"/><div className="art-symbol">{project.mark}</div><span className="art-kind">{project.kind}</span><span className="art-launch"><ArrowUpRight size={18}/></span><div className="art-horizon"/></div>
              <div className="tile-meta"><span>{project.status}</span><span>EXPLORE ↗</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tile-stack">{project.stack}</div>
            </motion.button>
          ))}
        </div>
        <div className="archive-note"><span>✳</span> This is the beginning of the archive. More projects, experiments and case studies will be added as their details and visuals are collected.</div>
      </section>

      <section className="capabilities section-pad" id="capabilities">
        <div className="eyebrow">03 / WHAT I CAN CREATE</div><div className="capability-heading"><h2>Different disciplines.<br/><em>One curious mind.</em></h2><p>I don't want to stop at one technology. I want to solve the complete problem and create things that are useful, expressive and memorable.</p></div>
        <div className="discipline-grid">{disciplines.map((item, index) => { const Icon = item.icon; return <motion.article className={`discipline discipline-${item.color}`} key={item.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}><div className="discipline-top"><span>{item.number} / 06</span><Icon size={26}/></div><h3>{item.title}</h3><p>{item.body}</p><ArrowUpRight className="discipline-arrow" size={18}/></motion.article>; })}</div>
      </section>

      <section className="toolkit section-pad" id="toolkit">
        <div className="eyebrow">04 / THE TOOLKIT</div><div className="toolkit-layout"><div><h2>Tools are just<br/><em>the beginning.</em></h2><p>Technologies and creative tools I work with. The right tool always depends on the problem we're solving.</p></div><div className="technology-cloud">{technologies.map((technology, index) => <motion.span key={technology} whileHover={{ y: -5, rotate: index % 2 ? 2 : -2 }}>{technology}</motion.span>)}</div></div>
      </section>

      <section className="lab section-pad" id="lab">
        <div className="lab-art"><div className="lab-orbit"/><div className="lab-center"><Bot size={58}/><span>Y / LAB</span></div><span className="lab-chip chip-ai">AI EXPERIMENTS</span><span className="lab-chip chip-3d">BLENDER / 3D</span><span className="lab-chip chip-auto">AUTOMATION</span></div>
        <div className="lab-copy"><div className="eyebrow">05 / THE EXPERIMENT ZONE</div><h2>Curiosity lives<br/>in the <em>lab.</em></h2><p>Not every idea begins as a product. This is where prototypes, AI workflows, 3D experiments, game mechanics and unusual concepts get explored.</p><a className="button button-primary" href="#contact">Build an experiment <ArrowUpRight size={17}/></a></div>
      </section>

      <section className="contact" id="contact"><div className="contact-sun">YP<span>✦</span></div><div className="eyebrow">06 / YOUR IDEA, NEXT</div><h2>Let's build something<br/><em>that matters.</em></h2><p>Have a product idea, an ambitious problem or a creative experiment? Let's turn it into something real.</p><a className="button button-light" href="mailto:hello@yashparmar.dev">Start a conversation <ArrowUpRight size={17}/></a><div className="contact-footer"><span>YASH PARMAR © 2026</span><span>BUILT WITH CURIOSITY & CODE</span><a href="https://github.com/YashParmar00" target="_blank" rel="noreferrer"><Github size={15}/> GITHUB</a></div></section>
      <footer className="site-footer"><a className="identity" href="#home"><span className="identity-mark">YP</span><span>Yash Parmar<small>DIGITAL CREATOR</small></span></a><span>Made to explore. Built to perform.</span><a href="#home">BACK TO TOP ↑</a></footer>

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><motion.div className="project-dialog" role="dialog" aria-modal="true" aria-label={selected.name} onClick={(event) => event.stopPropagation()} initial={{ opacity: 0, scale: .96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }}><button className="dialog-close" aria-label="Close project details" onClick={() => setSelected(null)}><X/></button><div className={`dialog-art tone-${selected.tone}`}><span>{selected.mark}</span></div><div className="eyebrow">PROJECT / {selected.status.toUpperCase()}</div><h2>{selected.name}</h2><p>{selected.description}</p><div className="dialog-stack"><small>TECHNOLOGY / DISCIPLINES</small><span>{selected.stack}</span></div><small className="dialog-note">Detailed case study, verified screenshots, demo and source links will be added as project materials are connected.</small></motion.div></div>}
    </main>
  );
}