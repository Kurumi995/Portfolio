import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { content } from '../content'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'

export function Projects() {
  const web = content.projects.filter((p) => (p.category ?? 'web') === 'web')
  const unity = content.projects.filter((p) => p.category === 'unity')
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const section = params.get('section')
    if (!section) return
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ block: 'start' })
  }, [location.search])

  return (
    <Section id="projects" title="Projects">
      <Container>
        <div className="projectGroups">
          <div className="projectGroup" id="web">
            <div className="projectGroupTop">
              <h3 className="h3 projectGroupTitle">Web / Mobile App</h3>
              <div className="projectGroupRule" aria-hidden="true" />
            </div>
            <div className="projectGrid2">
              {web.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>

          <div className="projectGroup" id="unity">
            <div className="projectGroupTop">
              <h3 className="h3 projectGroupTitle">Unity 3D / XR Game</h3>
              <div className="projectGroupRule" aria-hidden="true" />
            </div>
            {unity.length ? (
              <div className="projectGrid2">
                {unity.map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
            ) : (
              <p className="p">No Unity XR projects yet.</p>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}


