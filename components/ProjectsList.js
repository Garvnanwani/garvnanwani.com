import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'VoiceClub',
    description: 'A voice chat app wherein you can create your own room and discuss over topics.',
    image: '/project-voiceClub.png',
    tech: ['react', 'express', 'webrtc', 'socket.io'],
    githublink: 'https://github.com/Garvnanwani/VoiceClub-Frontend',
    livelink: 'https://voice-club.vercel.app/'
  },
  {
    title: 'Blooms Bay',
    description: 'Ecommerce app for flowers with an admin panel made with mern stack',
    image: '/project-bloomsbay.png',
    tech: ['mongodb', 'express', 'react', 'node'],
    githublink: 'https://github.com/Garvnanwani/flower-management-frontend',
    livelink: 'https://blooms-bay.netlify.app/'
  },
  {
    title: 'Chase Crypto',
    description: 'A crypto currency tracker app made with react and coinbase api',
    image: '/project-chaseCrypto.png',
    tech: ['react', 'coinbase api'],
    githublink: 'https://github.com/Garvnanwani/ChaseCrypto',
    livelink: 'https://chase-crypto.vercel.app/'
  },
  {
    title: 'Play Your Taste',
    description: 'Music Streaming App with shazam api',
    image: '/project-playTaste.png',
    tech: ['react', 'react-router-dom'],
    githublink: 'https://github.com/Garvnanwani/muxic',
    livelink: 'https://play-your-taste.vercel.app/'
  }
]

const ProjectsList = () => {
  return (
    <div className="">
      { projects.map((project, i) => {
        return (
          <ProjectCard
            index={ i }
            key={ i }
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
