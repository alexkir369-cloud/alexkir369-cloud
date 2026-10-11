import { motion, useReducedMotion } from 'framer-motion'
import { DublinHeroScene } from './components/DublinHeroScene'
import './App.css'

const areas = [
  { name: 'City Centre', note: 'Temple Bar to O’Connell Street' },
  { name: 'Docklands', note: 'Silicon Docks & Grand Canal' },
  { name: 'Ballsbridge', note: 'Hotels, embassies, RDS' },
  { name: 'Dublin Airport', note: 'Arrivals to the city in one tap' },
  { name: 'Rathmines & Portobello', note: 'Evening rides home' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

function App() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <header className="site-header">
        <div className="container">
          <a className="brand" href="#top" aria-label="Aera home">
            Aera
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#how">How it works</a>
            <a href="#coverage">Coverage</a>
            <a href="#safety">Safety</a>
            <a className="nav-cta" href="#download">
              Get the app
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Aera hero">
          <DublinHeroScene />
          <div className="hero-veil" />
          <div className="container hero-content">
            <motion.p
              className="display hero-brand"
              initial={reduceMotion ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Aera
            </motion.p>
            <motion.h1
              className="display hero-title"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              Self-driving rides across Dublin
            </motion.h1>
            <motion.p
              className="hero-copy"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              Book an autonomous taxi in minutes — from the airport to the Liffey, without a driver
              behind the wheel.
            </motion.p>
            <motion.div
              className="cta-row"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <a className="btn btn-primary" href="#download">
                Book a ride
              </a>
              <a className="btn btn-secondary" href="#how">
                See how it works
              </a>
            </motion.div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <motion.div
              initial={reduceMotion ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label">How it works</p>
              <h2 className="display section-title">Three steps from kerb to cabin</h2>
              <p className="section-copy">
                Aera matches you with the nearest certified autonomous vehicle and keeps you updated
                until you arrive.
              </p>
            </motion.div>

            <motion.ol
              className="steps"
              initial={reduceMotion ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
                },
              }}
            >
              {[
                {
                  title: 'Set your pin',
                  copy: 'Drop pickup and drop-off anywhere in our Dublin coverage zone.',
                },
                {
                  title: 'Meet your Aera',
                  copy: 'The car finds you, unlocks with the app, and confirms your destination.',
                },
                {
                  title: 'Ride and arrive',
                  copy: 'Live routing, quiet cabins, and contactless pay when you step out.',
                },
              ].map((step) => (
                <motion.li
                  key={step.title}
                  className="step"
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        <section className="section coverage" id="coverage">
          <div className="container coverage-layout">
            <motion.div
              initial={reduceMotion ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label">Dublin coverage</p>
              <h2 className="display section-title">Built for the city’s rhythm</h2>
              <p className="section-copy">
                From early airport runs to late Docklands finishes, Aera is live where Dublin moves.
              </p>
            </motion.div>

            <motion.ul
              className="area-list"
              initial={reduceMotion ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
                },
              }}
            >
              {areas.map((area) => (
                <motion.li
                  key={area.name}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span>{area.name}</span>
                  <span>{area.note}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section className="section safety" id="safety">
          <div className="container">
            <motion.div
              initial={reduceMotion ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label">Safety</p>
              <h2 className="display section-title">Designed for Irish roads</h2>
              <p className="section-copy">
                Rain, narrow streets, and busy junctions — Aera vehicles train on Dublin conditions
                with remote support always on call.
              </p>
            </motion.div>

            <div className="safety-points">
              <div>
                <h3>Lidar & camera stack</h3>
                <p>360° sensing that reads cyclists, buses, and shared spaces.</p>
              </div>
              <div>
                <h3>Human oversight</h3>
                <p>Dublin operations can take over remotely if a route needs help.</p>
              </div>
              <div>
                <h3>Trip transparency</h3>
                <p>Share live location with friends and review every fare in the app.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta" id="download">
          <div className="container">
            <motion.div
              initial={reduceMotion ? false : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label">Get started</p>
              <h2 className="display section-title">Your next Dublin ride is driverless</h2>
              <p className="section-copy">
                Download Aera for iOS or Android and take your first autonomous trip this week.
              </p>
              <div className="cta-row">
                <a className="btn btn-dark" href="#top">
                  Download for iOS
                </a>
                <a className="btn btn-primary" href="#top">
                  Download for Android
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            <strong>Aera</strong> · Autonomous taxi · Dublin, Ireland
          </p>
          <p>Concept product by Aleksandr Kireev</p>
        </div>
      </footer>
    </>
  )
}

export default App
