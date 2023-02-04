import styles, { layout } from "../style"
import { software } from "../assets"
import { Button } from "../components"

const SectionInfo = () => (
  <div className={`${layout.sectionInfo} md:mb-0 mb-20`}>
    <div className={`${layout.sectionInfoText}`}>
      <span className={`${styles.subHeading}`}>
        studio
      </span>
      <p className={`${styles.heading} mt-2 mb-6`}>
        Stay in {' '}
        <span className="text-secondary">sync</span>
      </p>
      <p className={`${styles.paragraph} max-w-[600px]`}>
        Try industry-leading music software for free, pay it off over time and own it forever.
      </p>
    </div>
    <Button title="try gear" />
  </div>
)

const Studio = () => (
  <section id="studio" className={`${layout.section}`}>
    <SectionInfo />
    <img
      src={software}
      alt="software"
      className="max-h-[600px] md:ml-0 ml-10"
    />
  </section>
)

export default Studio