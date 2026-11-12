import Reveal from "@/components/Reveal";
import Image from "next/image";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { site, stats, services, story, cases, industries, team, steps } from "@/lib/data";

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo"><span className="mark">N</span>{site.name}</a>
        <nav><a href="#services">Services</a><a href="#story">Our story</a><a href="#projects">Projects</a><a href="#contact" className="btn sm">Get a quote</a></nav>
      </header>

      <main id="top">
        <section className="hero hero-engineered">
          <div className="wrap hero-layout">
            <div className="hero-copy">
              <span className="eyebrow"><span className="hero-dash" /> ENGINEERED IN KANDY. SINCE {site.since}.</span>
              <h1>Everything<br />connected.<br /><em>Business,<br className="hero-break" /> simplified.</em></h1>
              <p className="lead">Thoughtful software. Intelligent hardware. One team bringing it all together for the way you work.</p>
              <div className="cta"><a className="btn" href="#contact">Let’s build something <span aria-hidden="true">↗</span></a><a className="text-link" href="#services">Explore solutions <span aria-hidden="true">↓</span></a></div>
              <div className="hero-experience"><strong>6+</strong><span>Years of hands-on engineering.<br />Built around real business.</span></div>
            </div>
            <div className="system-showcase" role="img" aria-label="Concept illustration connecting software, devices and people through NexaCore engineering">
              <div className="showcase-top"><span>THE NEXACORE APPROACH</span><span>01 — 03</span></div>
              <div className="system-panel">
                <div className="system-panel-head"><span className="system-monogram">N</span><div><strong>NexaCore</strong><small>Connected by design.</small></div><span className="system-detail">SYSTEM CONCEPT</span></div>
                <div className="system-heading"><small>ONE CONNECTED ECOSYSTEM</small><h2>Built to work.<br /><span>Together.</span></h2></div>
                <div className="system-flow">
                  <div><Icon n="code" /><span>Software</span><small>Make it intuitive.</small></div>
                  <span className="flow-join" aria-hidden="true">+</span>
                  <div><Icon n="chip" /><span>Hardware</span><small>Make it intelligent.</small></div>
                  <span className="flow-join" aria-hidden="true">+</span>
                  <div><Icon n="users" /><span>People</span><small>Make it effortless.</small></div>
                </div>
                <div className="system-footer"><span>DESIGN</span><i /><span>BUILD</span><i /><span>CONNECT</span><i /><span>SUPPORT</span></div>
              </div>
              <div className="showcase-note"><span className="note-icon"><Icon n="chip" /></span><div><strong>From the screen to the real world.</strong><span>Software, IoT & electronic engineering.</span></div><span aria-hidden="true">↗</span></div>
              <div className="showcase-bottom"><span>PRECISE THINKING. PRACTICAL SYSTEMS.</span><span>EST. 2019</span></div>
            </div>
          </div>
          <div className="wrap hero-baseline"><span>LOCAL UNDERSTANDING. CONNECTED POSSIBILITIES.</span><a href="#services">Discover NexaCore <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="trust">
          <div className="wrap">
            <div className="stats">{stats.map((s) => (<div key={s.l}><b>{s.n}</b><span>{s.l}</span></div>))}</div>
          </div>
        </section>

        <section className="brands" aria-labelledby="brands-title">
          <div className="wrap brands-layout">
            <div className="brands-intro"><span className="section-label">THE COMPANIES WE WORK WITH</span><h2 id="brands-title">Great partnerships.<br /><span>Lasting possibilities.</span></h2><p>Trusted by organisations that keep our communities moving. Built on shared ambition, thoughtful engineering and ongoing care.</p></div>
            <div className="brand-grid">
              <div className="brand-card"><img src="/Asiri%20logo.png" alt="Asiri Hospital Kandy" /><span>HEALTHCARE</span></div>
              <div className="brand-card"><img src="/chanel%20center%20logo.webp" alt="Channelled Consultation Centre Kandy" /><span>HEALTHCARE</span></div>
              <div className="brand-card"><img src="/efi_logo.jpg" alt="EFI" /><span>ENGINEERING</span></div>
              <div className="brand-card"><img src="/CDB%20Logo.jpg" alt="CDB" /><span>FINANCIAL SERVICES</span></div>
            </div>
            <div className="brands-bottom"><p>Technology brings us together. Trust keeps us connected.</p><a href="#projects">Explore our work <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section id="services" className="sec soft">
          <div className="wrap">
            <Reveal className="head"><span className="section-label">WHAT WE DO / 01</span><h2>Complexity, made simple.</h2><p>From the first entry to the final report, we make the systems behind your business work better together.</p></Reveal>
            <div className="grid3">{services.map((s) => (<a key={s.slug} className="svc service-link" href={`/services/${s.slug}`}><span className="ico"><Icon n={s.i} /></span><h3>{s.t}</h3><p>{s.d}</p><span className="service-more">Explore solution <span aria-hidden="true">↗</span></span></a>))}</div>
          </div>
        </section>

        <section id="story" className="sec dark">
          <div className="wrap">
            <Reveal className="story-intro"><span className="section-label">OUR STORY / 02</span><h2>Built on curiosity.<br /><span>Driven by purpose.</span></h2><div className="story-copy"><p>In 2019, NexaCore began in Kandy with a simple belief: technology should make work easier, not more complicated.</p><p>What started with software has grown into a multidisciplinary team bringing together software, IoT, electronics and mechanical engineering. Over 6+ years, we’ve learned that the best solutions start by listening closely, understanding the details and building for the people who use them every day.</p><p>That belief still guides us. From the first conversation to installation and ongoing support, we’re here to build lasting systems and lasting relationships.</p></div></Reveal>
            <ol className="tl">{story.map((s) => (<li key={s.y}><Reveal><span className="yr">{s.y}</span><h3>{s.t}</h3><p>{s.d}</p></Reveal></li>))}</ol>
          </div>
        </section>

        <section id="projects" className="sec">
          <div className="wrap">
            <Reveal className="head"><h2>Places that depend on our systems every day.</h2><p>A few of the organisations we build for and look after.</p></Reveal>
            {cases.map((c) => (
              <Reveal key={c.t} className="case">
                {c.image ? <figure className="vis project-photo"><Image src={c.image} alt={c.imageAlt} width={1536} height={1024} sizes="(max-width: 900px) 100vw, 550px" /><figcaption>{c.client}</figcaption></figure> : <div className="vis" style={{ background: c.bg }}><Icon n={c.i} /><span>{c.client}</span></div>}
                <div><span className="tag">{c.tag}</span><h3>{c.t}</h3><p>{c.d}</p><ul>{c.pts.map((p) => <li key={p}>{p}</li>)}</ul></div>
              </Reveal>
            ))}
            <Reveal className="inds"><b>Also built for</b>{industries.map((x) => <span key={x}>{x}</span>)}</Reveal>
          </div>
        </section>

        <section className="sec soft">
          <div className="wrap">
            <Reveal className="head"><h2>One team for every side of the system.</h2><p>Most vendors do only software or only hardware. We do both, so nothing falls between the gaps.</p></Reveal>
            <div className="grid3">{team.map((s) => (<Reveal key={s.t} className="svc"><span className="ico"><Icon n={s.i} /></span><h3>{s.t}</h3><p>{s.d}</p></Reveal>))}</div>
            <ol className="steps">{steps.map((s, i) => (<li key={s.t}><i>{i + 1}</i><b>{s.t}</b><span>{s.d}</span></li>))}</ol>
          </div>
        </section>

        <section id="contact" className="sec dark cta-sec">
          <div className="wrap two">
            <Reveal>
              <h2>Let’s build the system your business needs.</h2>
              <p className="sub">Tell us what you want to fix, count or connect. We reply the same working day.</p>
              <p className="contact"><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><span>{site.city}</span></p>
            </Reveal>
            <Reveal><ContactForm /></Reveal>
          </div>
        </section>
      </main>
      <footer className="foot"><div className="wrap"><span>© {new Date().getFullYear()} {site.name}. Built in {site.city}.</span><a href="#top">Back to top</a></div></footer>
    </>
  );
}
