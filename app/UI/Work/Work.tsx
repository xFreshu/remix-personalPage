// Work.tsx
import React from 'react'
import classes from './Work.module.scss'

interface Project {
  id: number
  image: string
  title: string
  name: string
  technologies: string[]
}

// Example data – replace it with your own or fetch from an API
const dummyProjects: Project[] = [
  {
    id: 1,
    image: '/images/project1.jpg',
    title: 'E-commerce Store',
    name: 'An online shopping platform with a cart and secure payments',
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: 2,
    image: '/images/project2.jpg',
    title: 'To-do App',
    name: 'A simple task management application',
    technologies: ['Vue', 'JavaScript', 'Firebase'],
  },
  {
    id: 3,
    image: '/images/project3.jpg',
    title: 'Portfolio Website',
    name: 'A personal website showcasing projects and a CV',
    technologies: ['Next.js', 'SCSS', 'TypeScript'],
  },
  {
    id: 4,
    image: '/images/project4.jpg',
    title: 'Blog Platform',
    name: 'A platform for writing and reading blog posts',
    technologies: ['Gatsby', 'GraphQL', 'React'],
  },
  {
    id: 5,
    image: '/images/project5.jpg',
    title: 'Chat App',
    name: 'A real-time chat application',
    technologies: ['Angular', 'RxJS', 'Firebase'],
  },
  {
    id: 6,
    image: '/images/project6.jpg',
    title: 'Data Dashboard',
    name: 'An analytics panel showcasing business data',
    technologies: ['React', 'TypeScript', 'D3.js'],
  },
]

export function Work() {
  return (
    <section className={classes.work}>
      <h2 className={classes.title}>My Projects</h2>
      {dummyProjects.map((project) => (
        <div key={project.id} className={classes.projectContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={classes.projectImage}
          />
          <div className={classes.projectDetails}>
            <h3 className={classes.projectTitle}>{project.title}</h3>
            <p className={classes.projectName}>{project.name}</p>
            <p className={classes.projectTechnologies}>
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
