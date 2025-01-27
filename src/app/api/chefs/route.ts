import {  chefs } from "@/app/data/data";
 

export async function GET() {
    return new Response(JSON.stringify(chefs), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}