# Payment Integration with MercadoPago Checkout Pro
MercadoPago PRO is the simplest way of integration MercadoPago payment gateway into your app. It redirects outside of your website, processes the payment completely under MercadoPago's platform, and redirects to a `/success`, `/pending`, or `/failed` back URL.

## Table of Contents

1. [Understanding the Application Flow](#understanding-the-application-flow)
2. [Creating Payment Preferences](#creating-payment-preferences)
3. [Handling Payment Notifications](#handling-payment-notifications)
4. [Verifying Payment Authenticity](#verifying-payment-authenticity)


## Understanding the Application Flow

The payment integration follows this basic flow:

1. **User Interaction**: User initiates a payment action (purchase, subscription, etc.)
2. **Preference Creation**: Application creates a payment preference with item details
3. **Redirect to Checkout**: User is redirected to the payment provider's secure checkout
4. **Payment Processing**: User completes payment on the provider's platform
5. **Webhook Notification**: Payment provider sends notification about payment status
6. **Order Fulfillment**: Application processes the successful payment and fulfills the order

## Creating Payment Preferences

A payment preference is essentially a purchase order that contains:

- **Item Information**: Product details, prices, quantities
- **Payment Configuration**: Accepted payment methods, installment options
- **Redirect URLs**: Where to send users after successful/failed payments
- **Metadata**: Custom data needed for your application logic that is available when fetching payment information by payment ID.


## Handling Payment Notifications

Payment notifications (webhooks) are crucial for maintaining data consistency. This way we enable MercadoPago to make a POST request to our app to react to payment updates.

### Webhook Endpoint Setup
- Create a dedicated API route to receive notifications
- Ensure the endpoint is publicly accessible (Forwarded ports for local development)
- Implement proper error handling and logging

### Important Considerations
- Always return HTTP 200 status to confirm notification receipt
- Only return non-200 status codes when you want MercadoPago to retry

## Verifying Payment Authenticity (CLAVE SECRETA)

Notifications from MercadoPago webhooks will always include a secret key that we can decrypt and compare to confirm its authenticity and prevent from malicious use of our API.

## Running the project