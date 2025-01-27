import { events } from '../../data/data';

export async function GET() {
    return new Response(JSON.stringify(events), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}