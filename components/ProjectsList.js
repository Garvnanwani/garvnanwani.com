import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'VoiceClub',
    description: 'A voice chat app wherein you can create your own room and discuss over topics.',
    image: '/project-voiceClub.jpg',
    tech: ['react', 'express', 'webrtc', 'socket.io']
  },
  {
    title: 'Blooms Bay',
    description: 'ecommerce app for flowers with an admin panel made with mern stack',
    image: '/project-bloomsbay.png',
    tech: ['mongodb', 'express', 'react', 'node']
  },
  {
    title: 'Chase Crypto',
    description: 'A crypto currency tracker app made with react and coinbase api',
    image: '/project-chaseCrypto.jpg',
    tech: ['react', 'coinbase api']
  },
  {
    title: 'Play Your Taste',
    description: 'Music Streaming App with shazam api',
    image: '/project-playTaste.png',
    tech: ['react', 'react-router-dom']
  }
]

const ProjectsList = () => {
  return (
    <div className="flex flex-wrap md:justify-around lg:justify-between">
      { projects.map((project) => {
        return (
          <ProjectCard
            key={ project.title }
            title={ project.title }
            description={ project.description }
            image={ project.image }
            tech={ project.tech }
          />
        )
      }) }
    </div>
  )
}

export default ProjectsList
