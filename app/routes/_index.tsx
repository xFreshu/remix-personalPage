import type { MetaFunction } from '@remix-run/node'
import { Hero } from '~/UI/Hero/Hero'
import { About } from '~/UI/About/About'
import { Work } from '~/UI/Work/Work'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Work />
    </>
  )
}
