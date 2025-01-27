import {  gallery } from "@/app/data/data";
 

export async function GET() {
    return new Response(JSON.stringify(gallery), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}