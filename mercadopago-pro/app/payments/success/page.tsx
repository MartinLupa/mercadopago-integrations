import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Package, Clock, MapPin, Receipt, ArrowLeft, Home } from "lucide-react"

interface OrderItem {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    image: string
}

const orderItems: OrderItem[] = [
    {
        id: "margherita",
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, basil, and olive oil",
        price: 18.99,
        quantity: 2,
        image: "../margherita.jpeg",
    },
    {
        id: "pepperoni",
        name: "Pepperoni Pizza",
        description: "Classic pepperoni with mozzarella cheese and tomato sauce",
        price: 21.99,
        quantity: 1,
        image: "../pepperoni.jpeg",
    },
]

export default async function PaymentSuccessPage({ searchParams }) {
    const { payment_id } = await searchParams

    const response = await fetch('http://localhost:3000/api/mercadopago/pagos', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payment_id }),
    })

    const data = await response.json()
    console.log("Payment data:", data)
    // console.log("Response from Success Page API:", response)

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Success Header */}
                <div className="mb-8 text-center">
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Payment Successful!</h1>
                    <p className="text-gray-600 mt-2">Thank you for your order. Your delicious pizzas are being prepared!</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Order Details */}
                    <div className="space-y-6">
                        {/* Order Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Receipt className="h-5 w-5" />
                                    Order Details
                                </CardTitle>
                                <CardDescription>Your order has been confirmed and is being processed</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div>
                                        <p className="font-semibold text-green-800">Order Number</p>
                                        <p className="text-green-600">{data.metadata.order_id}</p>
                                    </div>
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                                        Confirmed
                                    </Badge>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 p-4 border rounded-lg">
                                        <Clock className="h-5 w-5 text-blue-500" />
                                        <div>
                                            <p className="font-semibold">Estimated Delivery</p>
                                            <p className="text-sm text-gray-600">25 - 35 minutes</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-4 border rounded-lg">
                                        <Package className="h-5 w-5 text-orange-500" />
                                        <div>
                                            <p className="font-semibold">Status</p>
                                            <p className="text-sm text-gray-600">Preparing</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 border rounded-lg">
                                    <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">Delivery Address</p>
                                        <p className="text-sm text-gray-600">{data.metadata.customer.address}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Action Buttons */}
                        <Card>
                            <CardHeader>
                                <CardTitle>What's Next?</CardTitle>
                                <CardDescription>Track your order or continue shopping</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button className="w-full" size="lg">
                                    <Package className="h-4 w-4 mr-2" />
                                    Track Your Order
                                </Button>
                                <Button variant="outline" className="w-full bg-transparent" size="lg">
                                    <Home className="h-4 w-4 mr-2" />
                                    Continue Shopping
                                </Button>
                                <Button variant="ghost" className="w-full" size="lg">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back to Menu
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="space-y-6">
                        {/* Order Items */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Your Order</CardTitle>
                                <CardDescription>Items in your order</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {data.metadata.items.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                                        <img
                                            src={`../${item.image}` || "/placeholder.svg"}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-lg object-cover"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                            <p className="font-semibold text-green-600">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">Qty: {item.quantity}</p>
                                            <p className="text-sm text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Payment Summary */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Payment Summary</CardTitle>
                                <CardDescription>Your payment has been processed successfully</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${data.metadata.items.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>${data.metadata.items.reduce((sum, item) => sum + item.tax * item.quantity, 0)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery</span>
                                    <span>${data.metadata.delivery}</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Total Paid</span>
                                    <span className="text-green-600">${data.metadata.total.toFixed(2)}</span>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span className="font-semibold text-green-800">Payment Confirmed</span>
                                    </div>
                                    <p className="text-sm text-green-600">
                                        Your payment has been successfully processed. You will receive an email confirmation shortly.
                                    </p>
                                </div>

                                <Badge variant="secondary" className="w-full justify-center py-2">
                                    Estimated delivery: 25 - 35 minutes
                                </Badge>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
