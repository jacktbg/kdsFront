export type OrderItem = {
  name: string
  quantity: number
  extra: string[]
  status: "pending" | "process" | "completed"
}

export type Order = {
  id: string
  tableNumber: number
  persons: number
  waiter: string
  createdAt: number
  items: OrderItem[]
}

export type Data = {
  orders: Order[]
}
