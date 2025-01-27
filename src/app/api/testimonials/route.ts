import { testimonials } from "../../data/data";

export async function GET() {
    return new Response(JSON.stringify(testimonials), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
