import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'VoiceClub',
    description: 'A voice chat app wherein you can create your own room and discuss over topics.',
    image: '/project-voiceClub.png',
    tech: ['react', 'express', 'webrtc', 'socket.io'],
    githublink: '',
    livelink: ''
  },
  {
    title: 'Blooms Bay',
    description: 'ecommerce app for flowers with an admin panel made with mern stack',
    image: '/project-bloomsbay.png',
    tech: ['mongodb', 'express', 'react', 'node'],
    githublink: '',
    livelink: ''
  },
  {
    title: 'Chase Crypto',
    description: 'A crypto currency tracker app made with react and coinbase api',
    image: '/project-chaseCrypto.png',
    tech: ['react', 'coinbase api'],
    githublink: '',
    livelink: ''
  },
  {
    title: 'Play Your Taste',
    description: 'Music Streaming App with shazam api',
    image: '/project-playTaste.png',
    tech: ['react', 'react-router-dom'],
    githublink: '',
    livelink: ''
  }
]

const ProjectsList = () => {
  return (
    <div className="">
      { projects.map((project) => {
        return (
          <ProjectCard
            key={ project.title }
            title={ project.title }
            description={ project.description }
            image={ project.image }
            tech={ project.tech }
            githublink={ project.githublink }
            livelink={ project.livelink }
          />
        )
      }) }
    </div>
  )
}

export default ProjectsList
