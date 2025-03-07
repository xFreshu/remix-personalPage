import classes from './About.module.scss'

export function About() {
  return (
    <section className={classes.aboutMe}>
      <h2 className={classes.title}>About Me</h2>
      <p className={classes.description}>
        I am a passionate <strong>software developer</strong> specializing in
        designing and implementing business processes based on the IBM Business
        Automation Workflow (BAW) and IBM Robotic Process Automation (RPA)
        platforms. My role covers the entire software development lifecycle,
        from gathering requirements and creating UML and BPMN diagrams to
        project execution, UAT testing, production deployment, and environment
        administration.
      </p>
      <p className={classes.description}>
        In my daily work, I focus on optimizing and automating business
        processes to improve operational efficiency. I collaborate with
        stakeholders to analyze requirements and deliver robust solutions that
        streamline workflows. I am also responsible for maintaining and managing
        the production environment to ensure seamless operation.
      </p>
      <p className={classes.description}>
        In my free time, I am continuously expanding my knowledge in{' '}
        <strong>
          cloud computing, DevOps, and fullstack application development
        </strong>
        . I enjoy experimenting with modern technologies, deploying scalable
        applications, and exploring automation techniques to enhance software
        development processes.
      </p>
    </section>
  )
}
