import { logo, menu, close } from "../assets"
import { navLinks } from "../constants"
import { useState } from "react"

const Menu = () => (
  <ul className="sm:flex hidden ml-[60px]">
    {navLinks.map((nav) => (
      <li
        key={nav.id}
        className="mr-[30px] font-semibold hover:text-secondary"
      >
        <a href={`#${nav.id}`}>
          {nav.title}
        </a>
      </li>
    ))}
  </ul>
)

const MobileMenu = ({ show, setShow }) => (
  <div className="sm:hidden flex flex-1 justify-end">
    <img
      src={show ? close : menu}
      alt="menu"
      className="w-[24px] h-[24px]"
      onClick={() => setShow(prev => !prev)}
    />

    {show
      ? <div className="absolute top-20 right-0 bg-bgLayer90 min-w-[200px] mx-4 p-6 rounded-[10px] sidebar">
        <ul className="flex flex-col">
          {navLinks.map((navLink) => (
            <li
              key={`mobile_${navLink.id}`}
              className="my-2 text-dark text-[16px] font-semibold"
            >
              <a href={`#${navLink.id}`}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      : <></>
    }
  </div>
)

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="w-full flex py-6 items-center text-dark uppercase">
      <img
        src={logo}
        alt="splice"
        className="h-[32x]"
      />
      <Menu />
      <MobileMenu
        show={showMenu}
        setShow={setShowMenu}
      />
    </div>
  )
}

export default Navbar