const Skills = () => {
  return (
    <section>
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="mx-auto w-24 h-1 mb-5 bg-secondary"></div>
      </div>
      <div className="section-center skills-center">
        <article>
          <h3 className="text-center">Languages</h3>
          <div className="skill-box-1">
            <div>
              <img
                className="skill-icon"
                src="/python.svg"
                loading="lazy"
                alt="python"
              />
              <p className="skill-name">Python</p>
            </div>
            <div>
              <img
                className="skill-icon"
                src="/javascript.svg"
                loading="lazy"
                alt="javascript"
              />
              <p className="skill-name">Javascript</p>
            </div>
          </div>
        </article>
        <article>
          <h3 className="text-center">Technologies</h3>
          <div className="skill-box-2">
            <div>
              <img
                className="skill-icon"
                src="/react.svg"
                loading="lazy"
                alt="react"
              />
              <p className="skill-name">React</p>
            </div>

            <div>
              <img
                className="skill-icon"
                src="/django.svg"
                loading="lazy"
                alt="django"
              />
              <p className="skill-name">Django</p>
            </div>

            <div>
              <img
                className="skill-icon"
                src="/node-js.svg"
                loading="lazy"
                alt="nodejs"
              />
              <p className="skill-name">Node js</p>
            </div>
          </div>
        </article>
        <article>
          <h3 className="text-center">Tools</h3>
          <div className="skill-box-3">
            <div>
              <img
                className="skill-icon"
                src="/vscode.svg"
                loading="lazy"
                alt="vscode"
              />
              <p className="skill-name">Vs code</p>
            </div>
            <div>
              <img
                className="skill-icon"
                src="/git.svg"
                loading="lazy"
                alt="git"
              />
              <p className="skill-name">Git</p>
            </div>
            <div>
              <img
                className="skill-icon"
                src="/figma.svg"
                loading="lazy"
                alt="figma"
              />
              <p className="skill-name">Figma</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills
