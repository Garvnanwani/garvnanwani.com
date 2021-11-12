import Image from 'next/image'
import Link from 'next/link'
import Atropos from 'atropos/react'
import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="justify-between w-full mx-auto mt-8 text-gray-800 min-h-1/2 md:mt-24 md:mb-20 md:max-w-5xl md:flex">
      <div>
        <div className="w-24 h-1 mb-5 bg-secondary"></div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Hii, I'm Garv
        </h1>
        <h4 className="text-2xl mb-14 lg:mb-20 md:mt-6 md:mb-10 text-secondary">
          Full Stack Web Developer And Designer
        </h4>
        <Link href="/contact">
          <a className="p-3 my-5 text-white bg-gray-600 rounded md:my-14 w-50 h-50 focus:outline-none dark:bg-gray-800 ">
            Contact me
          </a>
        </Link>
        <ul className="grid justify-center grid-cols-5 mt-16 w-80">
          <li>
            <a
              href="https://twitter.com/garvnanwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-500 ease-in-out cursor-pointer dark:text-white hover:text-secondary dark:hover:text-secondary"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/garvnanwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white dark:hover:text-secondary"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Garvnanwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white dark:hover:text-secondary"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://dev.to/garvnanwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white dark:hover:text-secondary"
            >
              <FaDev />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/garv_nanwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white dark:hover:text-secondary"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-9">
        <Atropos className="my-atropos">
          <Image
            src="/mypic.jpg"
            alt="garv nanwani"
            width={400}
            height={400}
            objectFit="cover"
            className="z-10 mx-auto"
          />
        </Atropos>
      </div>
    </div>
  )
}

export default Header
