import { Card } from '@/types/Card';
import { expect, test } from 'vitest';

test('Card interface has title property', () => {
    const card: Card = {
        id: 1,
        title: 'title',
        img: 'img',
        description: 'description',
        flex: 1,
    };
    expect(card.title).toBeDefined();
})
