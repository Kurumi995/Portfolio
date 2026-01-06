import { content } from '../content'
import { Badge } from '../components/Badge'
import { Container } from '../components/Container'
import { Section } from '../components/Section'

export function About() {
  return (
    <>
      <Section id="education" title="Education">
        <Container>
          <div className="grid2">
            {content.education.map((e) => (
              <div key={`${e.school}-${e.program}`} className="card">
                <div className="cardHeader">
                  <span className="kicker">{e.school}</span>
                  <span className="muted">{e.dates}</span>
                </div>
                <div className="divider" role="separator" />
                <div className="cardBody">
                  <div className="timelineRole">{e.program}</div>
                  {e.details?.length ? (
                    <ul className="list compact">
                      {e.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="experience" title="Work experience">
        <Container>
          <div className="timeline">
            {content.experience.map((e) => (
              <div key={`${e.company}-${e.role}`} className="timelineItem">
                <div className="timelineMark" aria-hidden="true" />
                <div className="timelineCard card">
                  <div className="timelineTop">
                    <div>
                      <div className="timelineRole">{e.role}</div>
                      <div className="timelineMeta">
                        <span>{e.company}</span>
                        <span className="sep" aria-hidden="true">
                          ·
                        </span>
                        <span className="muted">{e.location}</span>
                      </div>
                    </div>
                    <div className="timelineDates muted">{e.dates}</div>
                  </div>
                  <div className="divider" role="separator" />
                  <ul className="list">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {e.tech?.length ? (
                    <div className="badgeRow" aria-label="Technologies">
                      {e.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="skills" title="Skills">
        <Container>
          <div className="grid2">
            {content.skills.map((group) => (
              <div key={group.name} className="card">
                <div className="cardHeader">
                  <span className="kicker">{group.name}</span>
                </div>
                <div className="divider" role="separator" />
                <div className="cardBody">
                  <div className="badgeRow">
                    {group.items.map((x) => (
                      <Badge key={x}>{x}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}


