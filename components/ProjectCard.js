import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, tech, githublink, livelink }) => {
  return (
    <div className="mb-20 md:mr-16 sm:mx-auto md:mx-0">
      <div className="lg:flex items-center justify-center w-[90%] mx-auto">
        <div>
          <Image
            width={ 600 }
            height={ 350 }
            src={ image }
            alt="project cover image"
            className="rounded-lg"
          />
        </div>

        <div className="relative lg:right-4 lg:w-[50%]">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold leading-tight uppercase truncate">
              { title }
            </h4>

            <div className="my-2">{ description }</div>
            <div className="my-2">Tech Stack</div>
            <div>
              { tech.map((item) => {
                return (
                  <span key={ item } className="mr-2">
                    { item }
                  </span>
                )
              }) }
            </div>
            <div className="flex mt-6">
              <a href={ githublink }>
                <span className="font-semibold text-teal-600 mr-14 text-md">
                  <FaGithub />
                </span>
              </a>
              <a href={ livelink }>
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
