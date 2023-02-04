import styles from "../style"
import { clients } from "../constants"

const Clients = () => (
  <div className={`${styles.flexCenter} flex-col mt-[50px] sm:px-20 md:px-32`}>
    <span className="text-[13px] text-dark font-semibold uppercase">
      featured in
    </span>
    <div className="w-full flex sm:flex-row flex-col justify-between items-center flex-wrap">
      {clients.map((client) => (
        <img
          key={client.id}
          src={client.icon}
          className="max-w-[100px] sm:mt-6 mt-10"
        />
      ))}
    </div>
  </div>
)

export default Clients