import styles, { layout } from "../style"
import { feedbacks } from "../constants"
import { Button } from "../components"

const FeedbackCard = ({ name, title, content, avatar }) => (
  <div className="flex flex-col feedback-card">
    <p className="text-white text-[18px] font-medium line-clamp-4 leading-[20px] mb-10">
      {content}
    </p>
    <div className="flex items-center">
      <img src={avatar} alt={name} className="w-[56px] h-[56px] mr-6" />
      <p className="text-white text-[14px]">
        {name} <br />
        <span className="text-[12px]">{title}</span>
      </p>
    </div>
  </div>
)

const SectionInfo = () => (
  <div className={`${layout.sectionInfo} md:mb-0 mb-20 lg:mr-20`}>
    <div className={`${layout.sectionInfoText}`}>
      <p className={`${styles.heading} text-white mt-2 mb-6`}>
        What
        <span className="text-secondary"> creators </span>
        are saying about us
      </p>
      <p className={`${styles.paragraph} pr-8`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.
      </p>
    </div>
    <Button title="try it now" />
  </div>
)

const Testimonials = () => (
  <section id="blog" className={`${layout.section} bg-black md:items-center items-start py-5 pb-[150px]`}>
    <SectionInfo />
    <div className={`${styles.flexCenter} flex-wrap`}>
      {feedbacks.map((feedback) => (
        <FeedbackCard
          key={feedback.id}
          name={feedback.name}
          title={feedback.title}
          content={feedback.content}
          avatar={feedback.avatar}
        />
      ))}
    </div>
  </section>
)

export default Testimonials