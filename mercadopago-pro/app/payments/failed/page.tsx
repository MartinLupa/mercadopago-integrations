"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { XCircle, RefreshCw, ArrowLeft, HelpCircle } from "lucide-react"

export default function PaymentFailedPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-2xl mx-auto px-4">
                {/* Failed Header */}
                <div className="mb-8 text-center">
                    <div className="flex justify-center mb-4">
                        <XCircle className="h-16 w-16 text-red-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Payment Failed</h1>
                    <p className="text-gray-600 mt-2">We couldn't process your payment. Please try again.</p>
                </div>

                <div className="space-y-6">
                    {/* Error Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-red-700">Payment Could Not Be Processed</CardTitle>
                            <CardDescription>
                                Your payment was declined. This could be due to insufficient funds, an expired card, or other issues
                                with your payment method.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <XCircle className="h-4 w-4 text-red-600" />
                                    <span className="font-semibold text-red-800">Transaction Declined</span>
                                </div>
                                <p className="text-sm text-red-600">
                                    Your order has not been placed. No charges have been made to your account.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-semibold text-gray-900">Common reasons for payment failure:</h3>
                                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                    <li>• Insufficient funds in your account</li>
                                    <li>• Expired or invalid card details</li>
                                    <li>• Card blocked by your bank</li>
                                    <li>• Incorrect billing information</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <Card>
                        <CardHeader>
                            <CardTitle>What would you like to do?</CardTitle>
                            <CardDescription>Choose an option below to continue</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Link href="/payments" className="block">
                                <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                                    <RefreshCw className="h-4 w-4 mr-2" />
                                    Retry Payment
                                </Button>
                            </Link>

                            <Button variant="outline" className="w-full bg-transparent" size="lg">
                                <HelpCircle className="h-4 w-4 mr-2" />
                                Contact Support
                            </Button>

                            <Link href="/" className="block">
                                <Button variant="ghost" className="w-full" size="lg">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back to Menu
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Help Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm">Need Help?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600">
                                If you continue to experience issues, please contact your bank or try a different payment method. Our
                                support team is also available 24/7 to assist you.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
