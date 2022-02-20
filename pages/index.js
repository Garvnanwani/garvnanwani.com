import Container from '@/components/Container'
import Header from '@/components/Header'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'

export default function Home() {
  return (
    <>
      <Container
        title="Garv nanwani - Developer and Student"
        description="Personal Portfolio of Garv nanwani"
      >
        <div className="w-full mx-auto md:max-w-5xl ">
          <Header />
          <Skills />
          <Timeline />
        </div>
      </Container>
    </>
  )
}
