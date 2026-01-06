import { content } from '../content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="muted">
          © {year} {content.profile.name}
        </div>
        <div className="footerLinks">
          <a className="subtleLink" href={content.links.github.href} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="subtleLink" href={content.links.linkedin.href} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="subtleLink" href={content.links.email.href}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}


