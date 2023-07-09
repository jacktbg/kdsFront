import { NavbarContainer } from "../styles/navbar"
import logo from "../assets/logo.svg"

export const Navbar = () => {
  const date = new Date()
  let hours = date.getHours()
  const minutes = date.getMinutes()
  let amPM = ""

  if (hours >= 12) {
    amPM = "PM"
    hours -= 12
  } else {
    amPM = "AM"
  }
  if (hours === 0) {
    hours = 12
  }

  const timeFormat = `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${amPM}`
  return (
    <NavbarContainer>
      <img src={logo} alt="logo" />
      <div>
        <p>{timeFormat}</p>
      </div>
      <nav>
        <ul>
          <li>Crear</li>
        </ul>
      </nav>
    </NavbarContainer>
  )
}
