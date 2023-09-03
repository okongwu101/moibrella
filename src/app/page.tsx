import Image from 'next/image'
import { IconUmbrella } from '@tabler/icons-react';
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <div>
        <div className='text-white flex flex-row text-5xl items-baseline'>
          <span>mo</span>
          <IconUmbrella
            className='text-emerald-400 w-auto h-16'
          />
          <span>brella</span>
        </div>

        <div className='text-orange-400 font-mono text-xs py-2'>
          daily weather companion
        </div>
      </div>
      

      <Link href="/weather" className='border border-1/2 rounded-lg px-4 text-gray-900 font-mono font-semibold py-2 bg-emerald-400 mt-16'>
        Get started
      </Link>


     
    </div>
  )
}
