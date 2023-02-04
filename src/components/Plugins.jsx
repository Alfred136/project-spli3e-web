import styles, { layout } from "../style"
import { studio } from "../assets"
import { Button } from "../components"

const SectionInfo = () => (
  <div className="flex justify-center md:mb-0 mb-20 md:ml-10">
    <div className={`${layout.sectionInfo}`}>
      <div className={`${layout.sectionInfoText}`}>
        <span className={`${styles.subHeading}`}>
          plugins
        </span>
        <p className={`${styles.heading} mt-2 mb-6`}>
          Build your <br />
          <span className="text-secondary">digital studio</span>
        </p>
        <p className={`${styles.paragraph} max-w-[600px]`}>
          Try industry-leading music software for free, pay it off over time and own it forever.
        </p>
      </div>
      <Button title="try gear" />
    </div>
  </div>
)

const Plugins = () => (
  <section id="plugins" className={`${layout.section} flex-col-reverse`}>
    <img
      src={studio}
      alt="studio"
      className="max-h-[600px]"
    />
    <SectionInfo />
  </section>
)

export default Plugins