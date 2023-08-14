'use client';

import { Path } from '@/constans/enum';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RouterAdmin() {
    const router = useRouter();
    useEffect(() => {
        router.push(Path.Posts);
    }, []);

    return <></>;
}
