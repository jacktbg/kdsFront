import { Card } from "./components/card/Card"
import { data } from "../../data/data"
import { Order } from "../../models/data"
import { HomeContainer } from "./styles/home"
import { Navbar } from "../../components/Navbar"

export const Home = (): JSX.Element => {
  const orders: Order[] = data.orders
  return (
    <>
      <Navbar />
      <HomeContainer>
        {orders.map((order: Order) => (
          <Card order={order} key={order.id} />
        ))}
      </HomeContainer>
    </>
  )
}
