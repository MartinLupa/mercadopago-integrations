export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
}

export const products: Product[] = [
    {
        id: "margherita",
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, basil, and olive oil",
        price: 18.99,
        image: "margherita.jpeg",
    },
    {
        id: "pepperoni",
        name: "Pepperoni Pizza",
        description: "Classic pepperoni with mozzarella cheese and tomato sauce",
        price: 21.99,
        image: "pepperoni.jpeg",
    },
]
