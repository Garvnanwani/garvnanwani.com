import Container from '@/components/Container'
import ProjectsList from '@/components/ProjectsList'

export default function Projects() {
  return (
    <>
      <Container
        title="Projects - Garv nanwani"
        description="Projects build by Garv nanwani ranking between various technologies."
      >
        <div className="w-full mx-auto mt-5 text-gray-800 md:mt-15 md:max-w-5xl">
          <div className="w-16 h-1 mb-5 bg-secondary"></div>
          <h1 className="mb-10 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Projects
          </h1>
          <ProjectsList />
        </div>
      </Container>
    </>
  )
}
