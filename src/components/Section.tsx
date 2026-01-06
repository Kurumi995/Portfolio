import type { ReactNode } from 'react'

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="section">
      <div className="sectionTop">
        <div className="sectionTitleRow">
          <h2 className="h2">{title}</h2>
          <div className="sectionRule" aria-hidden="true" />
        </div>
        {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}


