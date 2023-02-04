import styles from './style'
import { Navbar, Hero, Clients, Sounds, Plugins, Studio, Testimonials, Features, Footer } from "./components"

const WidgetsContainer = ({ children }) => (
  <div className="lg:px-12">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {children}
      </div>
    </div>
  </div>
)

const App = () => (
  <div>
    <div className="w-full overflow-hidden">
      <div className={`${styles.flexStart} bg-gray`}>
        <div className={`${styles.boxWidth} bg-image`}>
          <div className={`${styles.paddingX} sm:bg-bgLayer40 md:bg-bgLayer10 xl:bg-transparent bg-bgLayer60`}>
            <Navbar />
            <Hero />
          </div>
        </div>
      </div>

      <WidgetsContainer>
        <Clients />
        <Sounds />
        <Plugins />
        <Studio />
      </WidgetsContainer>

      <div className="w-full bg-black mt-[90px]">
        <WidgetsContainer>
          <Testimonials />
          <Features />
        </WidgetsContainer>
      </div>

      <WidgetsContainer>
        <Footer />
      </WidgetsContainer>
    </div>
  </div>
)

export default App
