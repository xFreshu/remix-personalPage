import { useEffect, useState } from 'react'
import classes from './Hero.module.scss'
import moment from 'moment-timezone'

const warsawTime = moment.tz('Europe/Warsaw')
const formattedTime = warsawTime.format('hh:mm A')

export function Hero() {
  const [Marquee, setMarquee] = useState<
    null | typeof import('react-fast-marquee').default
  >(null)

  useEffect(() => {
    import('react-fast-marquee').then((mod) => setMarquee(() => mod.default))
  }, [])

  return (
    <div className={classes.hero}>
      <div className={classes.navigationSection}>
        <div>
          Poland, Warsaw <br />- {formattedTime}
        </div>
        <nav>
          <li>About</li>
          <li>Work</li>
          <li>Resume</li>
        </nav>
        <div>lets talks</div>
      </div>
      {Marquee && (
        <Marquee gradient={false} speed={150}>
          <h1 className={classes.bigText}>
            Łukasz<span className={classes.separator}>_</span>Przybysz
          </h1>
        </Marquee>
      )}
      <div className={classes.content}>
        <div className={classes.subtext}>
          <p>
            PROGRAMMER IN <br />
            JSW IT SYSTEMS
          </p>
          <p>
            SPECIALIZING IN <br />
            FULLSTACK APPS/DEVOPS
          </p>
          <p className={classes.scroll}>[SCROLL]</p>
        </div>
      </div>
    </div>
  )
}
