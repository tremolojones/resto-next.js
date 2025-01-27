import { NextRequest, NextResponse } from 'next/server';
import { menu } from '../../../data/data';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const food = menu.find(
        (item: { id: number }) => item.id.toString() === params.id
    );

    if (!food) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(food);
}