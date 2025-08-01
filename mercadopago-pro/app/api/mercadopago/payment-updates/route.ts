import { mercadopago } from "@/app/clients/mercadopago";
import { metadata } from "@/app/layout";
import { Payment } from "mercadopago";

export async function POST(request: Request) {
    const { payment_id } = await request.json();

    try {
        const payment = await new Payment(mercadopago).get({ id: payment_id });

        const metadata = {
            customer: payment.metadata.customer,
            items: payment.metadata.items,
            tax: payment.taxes,
            delivery: payment.metadata.delivery,
            total: payment.metadata.total,
            order_id: payment?.order?.id
        }

        if (payment.status === 'approved') {
            return Response.json({
                message: "Payment approved",
                metadata,
            }, { status: 200 });
        }

        // TODO: handle pending and failed cases.
    } catch (error) {
        console.error("Error fetching payment:", error);
        return Response.json({
            message: "Error fetching payment",
        }, { status: 500 });
    }
}