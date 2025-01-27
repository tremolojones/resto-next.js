import { NextRequest, NextResponse } from 'next/server';
import { menu } from '../../../data/data';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params; // Déstructuration de params pour obtenir directement id
    const food = menu.find((item: { id: number }) => item.id.toString() === id);

    if (!food) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(food);
}