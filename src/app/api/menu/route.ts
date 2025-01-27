import {  menu } from "@/app/data/data";
 

export async function GET() {
    return new Response(JSON.stringify(menu), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}