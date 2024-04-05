'use server';

import { revalidateTag } from 'next/cache';

export default async function action() {
 revalidateTag('metting-lists');
 console.log('revalidateTag');
}