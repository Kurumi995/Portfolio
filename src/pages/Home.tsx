import { content } from '../content'
import { Link } from 'react-router-dom'

export function Home() {
  const name = content.profile.name
  const emailHref = content.links.email.href
  const githubHref = content.links.github.href
  const linkedinHref = content.links.linkedin.href

  return (
    <div id="top">
      <div className="hero">
        <div className="container">
          <div className="heroGrid">
            <div className="heroText">
              <h1 className="h1">Hi, I'm Wen-Ching</h1>
              <div className="ctaRow">
                <a className="btn" href={githubHref} target="_blank" rel="noreferrer">
                  <span>GitHub</span>
                </a>
                <a className="btn" href={linkedinHref} target="_blank" rel="noreferrer">
                  <span>LinkedIn</span>
                </a>
                <a className="btn" href={emailHref}>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="homeDemos">
        <div className="container">
          <div className="homeSquareGrid">
            <Link className="btn homeSquareBtn" to="/projects#web">
              <span className="homeSquareInner">
                <img className="homeDemoImgIcon" src="/app.png" alt="" aria-hidden="true" />
                <span className="homeSquareText">Mobile / Web App</span>
              </span>
            </Link>
            <Link className="btn homeSquareBtn" to="/projects#unity">
              <span className="homeSquareInner">
                <img className="homeDemoImgIcon" src="/console.png" alt="" aria-hidden="true" />
                <span className="homeSquareText">Unity 3D / XR Game</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


