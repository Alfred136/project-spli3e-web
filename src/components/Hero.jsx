import { heading } from "../assets"
import { Button } from "../components"
import styles from "../style"

const Hero = () => (
  <div className={`${styles.flexStart} flex-col max-w-[550px] pt-[80px] py-[160px]`}>
    <img
      src={heading}
      alt="header"
      className="w-full h-full object-contain"
    />

    <div className="mt-10 mb-12">
      <p className="text-[18px] font-medium sm:text-dark md:text-darkGray text-dark">
        Royalty-free sounds. Industry-leading software. <br className="sm:block hidden" />
        Endless inspiration. Start creating with Spl3e.
      </p>
    </div>

    <Button title="sign up" />
  </div>
)

export default Hero