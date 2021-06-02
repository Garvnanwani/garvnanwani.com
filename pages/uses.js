import Container from '@/components/Container'

const uses = () => {
  return (
    <Container
      title="Uses - Garv nanwani"
      description="All the tools and equipments I use on a daily basis, whether its development related or in general"
    >
      <div className="flex flex-col items-start justify-center w-full mx-auto mt-5 text-gray-800 md:mt-15 md:mb-20 md:max-w-5xl dark:text-white">
        <div className="w-10 h-1 mb-5 bg-secondary"></div>
        <h1 className="mb-10 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Uses
        </h1>
        <p>
          All the things that I use on a daily basis for development, work and
          personal space.
        </p>
      </div>
    </Container>
  )
}

export default uses
