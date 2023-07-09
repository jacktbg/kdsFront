import { Order, OrderItem } from "../../../../models/data"
import { CardContainer } from "../../styles/card"

import { Body } from "./body/Body"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"
type CardProps = {
  order: Order
}

export const Card: React.FC<CardProps> = ({ order }) => {
  const id: string = order.id
  const persons: number = order.persons
  const tableNumber: number = order.tableNumber
  const items: OrderItem[] = order.items
  const waiter: string = order.waiter
  const createdAt: number = order.createdAt

  return (
    <CardContainer>
      <Header
        tableNumber={tableNumber}
        id={id}
        persons={persons}
        waiter={waiter}
      />
      <Body items={items} />
      <Footer createdAt={createdAt} />
    </CardContainer>
  )
}
