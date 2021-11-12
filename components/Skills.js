const Skills = () => {
  return (
    <section className="mb-20">
      <div className="mx-auto text-center">
        <h2 className="mb-2 text-3xl font-bold">Skills</h2>
        <div className="w-24 h-1 mx-auto mb-8 bg-secondary"></div>
      </div>
      <div className="section-center skills-center">
        <article className="dark:border-white">
          <h3 className="mt-5 text-xl font-bold text-center">Languages</h3>
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
            <div>
              <img
                className="skill-icon"
                src="/typescript.svg"
                loading="lazy"
                alt="typescript"
              />
              <p className="skill-name">Typescript</p>
            </div>
          </div>
        </article>
        <article className="dark:border-white">
          <h3 className="mt-5 text-xl font-bold text-center">Technologies</h3>
          <div className="skill-box-2">
            <div>
              <img
                className="skill-icon"
                src="/reactjs.svg"
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
        <article className="dark:border-white">
          <h3 className="mt-5 text-xl font-bold text-center">Tools</h3>
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
