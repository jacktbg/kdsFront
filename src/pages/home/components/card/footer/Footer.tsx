import { Order } from "../../../../../models/data"
import { CardFooter } from "../../../styles/card"

type FooterProps = {
  createdAt: Order["createdAt"]
}
export const Footer: React.FC<FooterProps> = ({
  createdAt,
}) => {
  const currentDate = new Date()
  const minutesPassed = Math.floor(
    (currentDate.getTime() - createdAt) / 60000
  )

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

  // Adjust 0 hours (midnight) to 12
  if (hours === 0) {
    hours = 12
  }

  const timeFormat = `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${amPM}`
  return (
    <CardFooter>
      <span>{timeFormat}</span>
      <span>{`${minutesPassed} minutes ago`}</span>
    </CardFooter>
  )
}
