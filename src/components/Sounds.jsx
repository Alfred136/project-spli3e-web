import styles from "../style"
import { sound } from "../assets"
import { Button } from "../components"

const SectionInfo = () => (
  <>
    <span className={`${styles.subHeading}`}>
      sounds
    </span>
    <p className={`${styles.heading} mt-2 mb-6 text-center`}>
      Find your<span className="text-secondary"> sound</span>
    </p>
    <p className={`${styles.paragraph} max-w-[470px] mb-10 text-center`}>
      Preview and download millions of royalty-free samples from top producers, articles, and sound designers.
      Available on desktop, web and mobile
    </p>
    <Button title="try sounds" />
  </>
)

const Sounds = () => (
  <section id="sounds" className="mt-[90px]">
    <div className={`${styles.flexCenter} flex-col sm:px-32 md:px-64`}>
      <SectionInfo />
      <img
        src={sound}
        alt="sound"
        className="w-full max-h-[600px] mt-20"
      />
    </div>
  </section>
)

export default Sounds