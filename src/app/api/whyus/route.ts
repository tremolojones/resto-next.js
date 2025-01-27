import { whyUs } from "@/app/data/data";
 

export async function GET() {
    return new Response(JSON.stringify(whyUs), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}