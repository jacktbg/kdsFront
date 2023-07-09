import { Data } from "../models/data"

export const data: Data = {
  orders: [
    {
      id: "#ORD123123",
      tableNumber: 5,
      persons: 2,
      waiter: "joseph",
      createdAt: Date.now(),
      items: [
        {
          name: "Burger",
          quantity: 2,
          extra: ["extra mayonnaise", "no lettuce"],
          status: "pending",
        },
        {
          name: "Fries",
          quantity: 1,
          extra: [],
          status: "process",
        },
      ],
    },
    {
      id: "ORD124124",
      tableNumber: 8,
      persons: 5,
      waiter: "jhonny",
      createdAt: Date.now(),
      items: [
        {
          name: "Pizza",
          quantity: 1,
          extra: ["extra cheese"],
          status: "completed",
        },
        {
          name: "Salad",
          quantity: 1,
          extra: ["no onions"],
          status: "process",
        },
      ],
    },
    {
      id: "ORD125125",
      tableNumber: 3,
      persons: 3,
      waiter: "jonathan",
      createdAt: Date.now(),
      items: [
        {
          name: "Steak",
          quantity: 1,
          extra: ["medium-rare"],
          status: "pending",
        },
        {
          name: "Mashed Potatoes",
          quantity: 2,
          extra: [],
          status: "process",
        },
      ],
    },
    {
      id: "#ORD126126",
      tableNumber: 5,
      persons: 2,
      waiter: "joseph",
      createdAt: Date.now(),
      items: [
        {
          name: "Burger",
          quantity: 2,
          extra: ["extra mayonnaise", "no lettuce"],
          status: "pending",
        },
        {
          name: "Fries",
          quantity: 1,
          extra: [],
          status: "process",
        },
      ],
    },
    {
      id: "#ORD123123",
      tableNumber: 5,
      persons: 2,
      waiter: "joseph",
      createdAt: Date.now(),
      items: [
        {
          name: "Burger",
          quantity: 2,
          extra: ["extra mayonnaise", "no lettuce"],
          status: "pending",
        },
        {
          name: "Fries",
          quantity: 1,
          extra: [],
          status: "process",
        },
      ],
    },
    {
      id: "ORD124124",
      tableNumber: 8,
      persons: 5,
      waiter: "jhonny",
      createdAt: Date.now(),
      items: [
        {
          name: "Pizza",
          quantity: 1,
          extra: ["extra cheese"],
          status: "completed",
        },
        {
          name: "Salad",
          quantity: 1,
          extra: ["no onions"],
          status: "process",
        },
      ],
    },
    {
      id: "ORD125125",
      tableNumber: 3,
      persons: 3,
      waiter: "jonathan",
      createdAt: Date.now(),
      items: [
        {
          name: "Steak",
          quantity: 1,
          extra: ["medium-rare"],
          status: "pending",
        },
        {
          name: "Mashed Potatoes",
          quantity: 2,
          extra: [],
          status: "process",
        },
      ],
    },
    {
      id: "#ORD126126",
      tableNumber: 5,
      persons: 2,
      waiter: "joseph",
      createdAt: Date.now(),
      items: [
        {
          name: "Burger",
          quantity: 2,
          extra: ["extra mayonnaise", "no lettuce"],
          status: "pending",
        },
        {
          name: "Fries",
          quantity: 1,
          extra: [],
          status: "process",
        },
      ],
    },
  ],
}
