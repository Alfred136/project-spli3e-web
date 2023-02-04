import styles from "../style"
import { logo } from "../assets"
import { Button } from "../components"
import { footerLinks, socialMedia } from "../constants"

const Banner = () => (
  <div className="relative w-full top-[-60px]">
    <div className="flex flex-col items-center rounded-[16px] w-full px-20 py-10 gradient__blue">
      <p className="text-white text-[24px] leading-[24px] font-bold text-center mb-[20px]">
        Come change the way <br /> people make music
      </p>
      <Button styles="border-[2px] border-white bg-transparent" title="jobs at Spl3e" />
    </div>
  </div>
)

const SiteMap = () => (
  <div className="flex-1 flex flex-wrap justify-between w-full">
    {footerLinks.map((footerLink, index) => (
      <div key={footerLink.title} className={`flex flex-col w-[120px] mb-12 sm:mr-10 mr-6 ${index === footerLinks.length - 1 ? "justify-self-start" : ""}`}>
        <span className="text-[18px] font-bold uppercase">
          {footerLink.title}
        </span>
        {footerLink.links.map((link) => (
          <a key={link.name} href={link.link} className="mt-6 hover:text-secondary">{link.name}</a>
        ))}
      </div>
    ))}
  </div>
)

const Logo = () => (
  <div className="flex-col mr-14">
    <img src={logo} alt="splice" className="w-[80px]" />
    <span>
      2021 Spli3e.com All Rights Reserved
    </span>
  </div>
)

const SocialMediaLinks = () => (
  <div className="flex">
    {socialMedia.map((social) => (
      <img
        key={social.id}
        src={social.icon}
        alt={social.id}
        className="w-[18px] h-[18px] mr-4 cursor-pointer"
        onClick={() => window.open(social.link)}
      />
    ))}
  </div>
)

const Footer = () => (
  <div className="flex flex-col justify-start items-center mb-10">
    <Banner />
    <SiteMap />
    <div className="flex justify-start w-full mt-10">
      <Logo />
      <SocialMediaLinks />
    </div>
  </div>
)

export default Footer