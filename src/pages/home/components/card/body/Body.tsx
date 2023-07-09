import { OrderItem } from "../../../../../models/data"
import { CardBody } from "../../../styles/card"

type BodyProps = {
  items: OrderItem[]
}
export const Body: React.FC<BodyProps> = ({ items }) => {
  return (
    <CardBody>
      {items.map((item) => (
        <div key={item.name}>
          <div>
            <div>
              <span>{item.quantity}</span>
            </div>
            <div>
              <span>{item.name}</span>
            </div>
            <div>
              {item.status === "process" ? (
                <span
                  style={{
                    color: "var(--in-process-color)",
                  }}
                >
                  {item.status}
                </span>
              ) : item.status === "completed" ? (
                <span
                  style={{
                    color: "var(--completed-color)",
                  }}
                >
                  {item.status}
                </span>
              ) : (
                <span
                  style={{
                    color: "var(--pending-color)",
                  }}
                >
                  {item.status}
                </span>
              )}
            </div>
          </div>
          <span>{item.extra.join(", ")}</span>
        </div>
      ))}
    </CardBody>
  )
}
