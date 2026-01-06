import { content } from '../content'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'

export function Research() {
  return (
    <Section id="research" title="Research">
      <Container>
        <div className="grid3">
          {content.research.map((r) => (
            <ProjectCard key={r.title} project={r} />
          ))}
        </div>
      </Container>
    </Section>
  )
}


