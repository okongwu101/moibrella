

import { IconUmbrella } from '@tabler/icons-react';
import Link from 'next/link';
import { IconCloud, IconAdjustmentsHorizontal } from '@tabler/icons-react';



export default function NavBar() {
    return (
        <div className="text-white bg-zinc-600 h-16 flex justify-between flex-row items-center lg:py-10 px-6 py-6">
            <Link href="/">
                <IconUmbrella className='text-emerald-400 w-auto h-8 lg:h-16' />
            </Link>
            <div className="flex flex-row gap-8 font-sans text-xl invisible lg:visible">

                <Link href="/weather" className='hover:text-green-400'>
                    weather
                </Link>
                <Link href="/settings" className='hover:text-green-400'>
                    settings
                </Link>

            </div>

            <div className='lg:hidden flex flex-row gap-8 font-sans text-xl'>
                <Link href="/weather" className='hover:text-green-400'>
                    <IconCloud />
                </Link>
                <Link href="/settings" className='hover:text-green-400'>
                    <IconAdjustmentsHorizontal />
                </Link>
            </div>

        </div>
    )
}
