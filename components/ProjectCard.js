import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ index: i, title, description, image, tech, githublink, livelink }) => {
  return (
    <div className="mb-20 mx-auto">
      <div className={ ` ${i % 2 != 0 ? 'flex-row-reverse' : 'flex-row'} lg:flex items-center justify-center mx-auto"` }>
        <div>
          <Image
            width={ 800 }
            height={ 550 }
            src={ image }
            alt="project cover image"
            className="rounded-lg"
          />
        </div>

        <div className={ `relative lg:w-[70%] ${i % 2 != 0 ? 'lg:left-4' : 'lg:right-4'}` }>
          <div className="p-6 lg:p-12 bg-white rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold leading-tight uppercase truncate">
              { title }
            </h4>

            <div className="my-2">{ description }</div>
            <div className="my-2 font-semibold">Tech Stack</div>
            <div>
              { tech.map((item) => {
                return (
                  <span key={ item } className="mr-2">
                    { item }
                  </span>
                )
              }) }
            </div>
            <div className="flex mt-4 lg:mt-10">
              <a href={ githublink } target="_blank" rel="noopener noreferrer">
                <span className="font-semibold text-teal-600 mr-14 text-md">
                  <FaGithub />
                </span>
              </a>
              <a href={ livelink } target="_blank" rel="noopener noreferrer">
                <span className="text-sm text-gray-600">
                  <FaExternalLinkAlt />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
