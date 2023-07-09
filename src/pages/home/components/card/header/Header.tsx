import { Order } from "../../../../../models/data"
import personSvg from "../../../../../assets/person.svg"
import { CardHeader } from "../../../styles/card"

type HeaderProps = {
  tableNumber: Order["tableNumber"]
  persons: Order["persons"]
  id: Order["id"]
  waiter: Order["waiter"]
}

export const Header: React.FC<HeaderProps> = ({
  tableNumber,
  persons,
  id,
  waiter,
}) => {
  const tableNumberFormat: string = "T" + tableNumber
  const waiterFormat: string = "Served by " + waiter

  return (
    <CardHeader>
      <div>
        <div>
          <span>{tableNumberFormat}</span>
        </div>
        <div>
          <img src={personSvg} alt="persons" />
          <span>{persons}</span>
        </div>
      </div>
      <div>
        <span>{id}</span>
        <span>{waiterFormat}</span>
      </div>
    </CardHeader>
  )
}
