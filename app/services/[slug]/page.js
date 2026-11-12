import { notFound } from "next/navigation";
import "../services.css";
import Image from "next/image";
import Icon from "@/components/Icon";
import { services, site, steps } from "@/lib/data";
import { serviceDetails } from "@/lib/service-details";
import { serviceVisuals } from "@/lib/service-visuals";
export const dynamicParams = false;
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }) {
  const service = services.find(s => s.slug === params.slug);
  return service ? { title: service.t + " | " + site.name, description: service.d } : {};
}
export default function ServicePage({ params }) {
  const service = services.find(s => s.slug === params.slug);
  const detail = serviceDetails[params.slug];
  const visual = serviceVisuals[params.slug];
  if (!service || !detail || !visual) notFound();
  const number = String(services.indexOf(service) + 1).padStart(2, "0");
  return <>
    <header className="nav"><a href="/" className="logo"><span className="mark">N</span>{site.name}</a><nav><a href="/#services">All services</a><a href="/#story">Our story</a><a href="/#contact" className="btn sm">Start a project</a></nav></header>
    <main className="solution-page" style={{ "--accent": visual.accent }}>
      <section className="solution-hero"><div className="wrap">
        <div className="solution-breadcrumb"><a href="/#services">← All solutions</a><span>{number} / {service.t}</span></div>
        <div className="solution-title"><div><span className="section-label">{service.t}</span><h1>{visual.title}</h1></div><div className="solution-lead"><p>{detail.intro}</p><a href="/#contact" className="btn">Discuss your project <span aria-hidden="true">↗</span></a></div></div>
        <figure className="solution-photo"><Image src={visual.photo.src} alt={visual.photo.alt} fill priority sizes="(max-width: 1240px) 100vw, 1192px" /><div className="solution-photo-shade" /><figcaption><span className="solution-photo-number">{number}</span><div><small>ENGINEERING FOR EVERYDAY BUSINESS</small><p>{visual.caption}</p></div><span className="solution-photo-icon"><Icon n={service.i} /></span></figcaption></figure>
        <div className="solution-image-meta"><span>Illustrative photography</span><a href={visual.photo.url} target="_blank" rel="noreferrer">{visual.photo.credit} / Pexels ↗</a></div>
      </div></section>
      <nav className="solution-anchor" aria-label="On this page"><div className="wrap"><span>{service.t}</span><div><a href="#overview">Overview</a><a href="#approach">Our approach</a><a href="#questions">Questions</a><a href="/#contact">Let’s talk ↗</a></div></div></nav>
      <section id="overview" className="solution-overview wrap"><div className="solution-overview-intro"><span className="section-label">01 / THE BIGGER PICTURE</span><h2>{visual.focus}</h2><p>{service.d}</p><div className="solution-tags">{visual.tags.map(tag => <span key={tag}>{tag}</span>)}</div><aside><small>BUILT FOR</small><p>{detail.audience}</p></aside></div><div className="solution-capabilities">{detail.features.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>
      <section id="approach" className="solution-approach"><div className="wrap"><div className="solution-section-heading"><div><span className="section-label">02 / FROM PLAN TO PRACTICE</span><h2>Thought through.<br /><span>Followed through.</span></h2></div><p>Software, hardware and on-site setup from one team. A clear process from the first conversation to everyday use.</p></div><ol className="solution-steps">{steps.map((step, i) => <li key={step.t}><span>0{i + 1}</span><h3>{step.t}</h3><p>{step.d}</p></li>)}</ol><div className="solution-proof"><strong>6+ <span>years of hands-on engineering</span></strong><span>Founded in 2019 · Kandy, Sri Lanka</span></div></div></section>
      <section id="questions" className="solution-faq wrap"><div><span className="section-label">03 / GOOD QUESTIONS</span><h2>A little clarity.<br />Before we begin.</h2></div><div><details open><summary>What should I share to get started?<span aria-hidden="true">+</span></summary><p>{detail.brief}</p></details><details><summary>How are cost and timing agreed?<span aria-hidden="true">+</span></summary><p>We first understand your requirements, existing systems and site conditions. A clear project scope, price and timeline are agreed before work starts.</p></details><details><summary>What happens after installation?<span aria-hidden="true">+</span></summary><p>We discuss ongoing updates, servicing and support as part of your project. The exact arrangements depend on the system and your operational needs.</p></details></div></section>
      <section className="solution-cta"><div className="wrap"><span className="section-label">YOUR NEXT CHAPTER</span><div><h2>Let’s make<br />work flow better.</h2><div><p>{detail.brief}</p><a href="/#contact" className="btn">Start the conversation <span aria-hidden="true">↗</span></a></div></div></div></section>
      <section className="solution-explore wrap"><div className="solution-explore-heading"><h2>More ways to move forward.</h2><a href="/#services">All solutions ↗</a></div><div className="solution-related-grid">{services.filter(s => s.slug !== service.slug).slice(0, 3).map(s => <a href={"/services/" + s.slug} key={s.slug}><div className="solution-related-image"><Image src={serviceVisuals[s.slug].photo.src} alt={serviceVisuals[s.slug].photo.alt} fill sizes="(max-width: 650px) 100vw, 33vw" /></div><span>{s.t}<span aria-hidden="true">↗</span></span></a>)}</div></section>
    </main>
    <footer className="foot"><div className="wrap"><span>© {new Date().getFullYear()} {site.name}. Built in {site.city}.</span><a href="/">Back to home</a></div></footer>
  </>;
}
