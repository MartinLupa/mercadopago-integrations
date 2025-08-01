"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Mail, ArrowLeft, RefreshCw } from "lucide-react"

export default function PaymentPendingPage() {
    const orderNumber = "PZ-2024-001235"

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-2xl mx-auto px-4">
                {/* Pending Header */}
                <div className="mb-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            <Clock className="h-16 w-16 text-amber-500" />
                            <div className="absolute -top-1 -right-1 h-4 w-4 bg-amber-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Payment Pending</h1>
                    <p className="text-gray-600 mt-2">Your payment is being processed. Please wait for confirmation.</p>
                </div>

                <div className="space-y-6">
                    {/* Pending Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-amber-700">Payment Processing</CardTitle>
                            <CardDescription>
                                Your payment is currently being verified. This usually takes a few minutes.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <Clock className="h-4 w-4 text-amber-600" />
                                    <span className="font-semibold text-amber-800">Processing Payment</span>
                                </div>
                                <p className="text-sm text-amber-600 mb-3">Order #{orderNumber} is waiting for payment confirmation.</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                                        <div
                                            className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                                            style={{ animationDelay: "0.1s" }}
                                        ></div>
                                        <div
                                            className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                                            style={{ animationDelay: "0.2s" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-amber-600">Processing...</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 border rounded-lg">
                                <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                                <div>
                                    <p className="font-semibold">Email Notification</p>
                                    <p className="text-sm text-gray-600">
                                        You will receive an email confirmation once your payment is successfully processed. This typically
                                        takes 2-5 minutes.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* What Happens Next */}
                    <Card>
                        <CardHeader>
                            <CardTitle>What happens next?</CardTitle>
                            <CardDescription>Here's what you can expect</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-semibold text-amber-700">1</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">Payment Verification</p>
                                        <p className="text-sm text-gray-600">We're confirming your payment with your bank</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-semibold text-blue-700">2</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">Email Confirmation</p>
                                        <p className="text-sm text-gray-600">You'll receive a confirmation email</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-semibold text-green-700">3</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">Order Preparation</p>
                                        <p className="text-sm text-gray-600">Your delicious pizzas will start being prepared</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <Card>
                        <CardContent className="pt-6 space-y-3">
                            <Button variant="outline" className="w-full bg-transparent" size="lg">
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Check Payment Status
                            </Button>

                            <Button variant="ghost" className="w-full" size="lg">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Menu
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Help Note */}
                    <Card>
                        <CardContent className="pt-6">
                            <p className="text-sm text-gray-600 text-center">
                                <strong>Note:</strong> If you don't receive a confirmation email within 10 minutes, please check your
                                spam folder or contact our support team.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
