import Link from "next/link"
import {FaGithub, FaTelegram, FaInstagram, FaTwitter} from "react-icons/fa"


const socials = [
  {icon: <FaGithub/>, path: 'https://github.com/tienfrdev'},
  {icon: <FaTelegram/>, path: 'https://t.me/tienfrdev'},
  {icon: <FaInstagram/>, path: 'https://www.instagram.com/2805_tien/?hl=en'},
  {icon: <FaTwitter/>, path: 'https://x.com/anotherHed'}
] 

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index) =>{
        return(
          <Link key={index} href={item.path} className={iconStyles} target="_blank" >
          {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
