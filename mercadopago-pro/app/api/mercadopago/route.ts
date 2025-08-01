import { mercadopago } from "@/app/clients/mercadopago";
import { Preference } from "mercadopago";

export async function POST(request: Request) {
    const { customer, items, delivery, tax, total } = await request.json();

    try {
        // Create preference
        const preference = await new Preference(mercadopago).create({
            body: {
                items: items.map(item => ({
                    title: item.name,
                    unit_price: item.price,
                    quantity: item.quantity,
                })),
                back_urls: {
                    success: `${process.env.FORWARDED_HOST}/payments/success`,
                    failure: `${process.env.FORWARDED_HOST}/payments/failure`,
                    pending: `${process.env.FORWARDED_HOST}/payments/pending`,
                },
                auto_return: 'approved',
                metadata: {
                    customer,
                    items,
                    delivery,
                    tax,
                    total
                }
            },
        })

        return Response.json(preference.init_point);
    } catch (error) {
        console.error("Error creating Mercado Pago preference:", error);
        return Response.json({ error: "Failed to initiate payment. Please try again." }, { status: 500 });
    }
}