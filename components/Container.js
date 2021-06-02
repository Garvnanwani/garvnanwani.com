const { useTheme } = require('next-themes')
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from './Footer'

const Container = ({ children, ...customMeta }) => {
  const [mounted, setMounted] = useState(false)

  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const router = useRouter()
  const meta = {
    title: 'Garv Nanwani',
    description: `Second Year Coputer Science Student.`,
    image: 'https://garvnanwani.com/og.jpg',
    type: 'website',
    ...customMeta
  }

  return (
    <div className="min-h-screen bg-red-200 dark:bg-primary">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://garvnanwani.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://garvnanwani.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Garv nanwani" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garvnanwani" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="flex items-center justify-between w-full p-4 mx-auto text-gray-900 bg-red-200 md:max-w-6xl sticky-nav dark:bg-primary bg-opacity-60 dark:text-gray-100">
        <div>
          <Link href="/">
            <a className="relative mr-2 top-2">
              <Image
                src="/mypic.jpg"
                alt="garv nanwani"
                width={40}
                height={40}
                className="rounded-full"
              />
            </a>
          </Link>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="relative w-12 h-12 p-4 focus:outline-none bottom-1"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
        <div>
          <Link href="/">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">Home</a>
          </Link>
          <Link href="/about">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">About</a>
          </Link>
          <Link href="/blog">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">Blog</a>
          </Link>
          <Link href="/projects">
            <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
              Projects
            </a>
          </Link>
        </div>
      </nav>
      <main className="flex flex-col px-8 text-gray-800 min-h-3/4 dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Container
