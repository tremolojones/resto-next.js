import { bookings } from '../../data/data';

export async function GET() {
    return new Response(JSON.stringify(bookings), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function POST(request: Request) {
    const booking = await request.json();
    delete booking.validate;
    const newBooking = {
        id: bookings.length + 1,
        details: booking,
    };
    bookings.push(newBooking);
    return new Response(JSON.stringify(newBooking), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201,
    });
}
