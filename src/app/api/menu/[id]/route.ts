import { menu } from '../../../data/data';

export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
) {
    const food = menu.find(
        (item: { id: number }) => item.id.toString() === params.id
    );

    if (!food) {
        return new Response(JSON.stringify({ error: 'Item not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(food), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
