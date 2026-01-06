import type { Project } from '../content'
import { Badge } from './Badge'
import { Icon } from './Icon'

export function ProjectCard({ project }: { project: Project }) {
  const imageHref = project.image?.href ?? project.links.demo?.href

  return (
    <article className="card projectCard">
      <div className="projectTop">
        <h3 className="h3">{project.title}</h3>
        <div className="projectLinks">
          {project.links.demo ? (
            <a className="iconLink" href={project.links.demo.href} target="_blank" rel="noreferrer">
              <Icon name="arrowUpRight" />
              <span className="srOnly">{project.links.demo.label}</span>
            </a>
          ) : null}
          {project.links.video ? (
            <a className="iconLink" href={project.links.video.href} target="_blank" rel="noreferrer">
              <Icon name="arrowUpRight" />
              <span className="srOnly">{project.links.video.label}</span>
            </a>
          ) : null}
          {project.links.code ? (
            <a className="iconLink" href={project.links.code.href} target="_blank" rel="noreferrer">
              <Icon name="github" />
              <span className="srOnly">{project.links.code.label}</span>
            </a>
          ) : null}
        </div>
      </div>
      <p className="p">{project.description}</p>
      {project.video ? (
        <video className="projectVideo" controls playsInline preload="metadata" poster={project.video.poster}>
          <source src={project.video.src} />
        </video>
      ) : null}
      {project.image ? (
        imageHref ? (
          <a className="projectImageLink" href={imageHref} target="_blank" rel="noreferrer">
            <img className="projectImage" src={project.image.src} alt={project.image.alt} loading="lazy" />
          </a>
        ) : (
          <img className="projectImage" src={project.image.src} alt={project.image.alt} loading="lazy" />
        )
      ) : null}
      <ul className="list compact">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="badgeRow" aria-label="Technologies">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </article>
  )
}


