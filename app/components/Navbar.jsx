import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav>
          <header class>
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl text-slate-950">Nextjs!</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/" class="mr-5 hover:text-white" >Home</Link>
        <Link href="/tickets" class="mr-5 hover:text-white">Second</Link>
        <Link href="/third" class="mr-5 hover:text-white">Third</Link>
        <Link href="/fourth" class="mr-5 hover:text-white">Fourth</Link>                 
        <Link href="/sixth" class="mr-5 hover:text-white">Fifth</Link> 
        <Link href="/tickets/create" class="mr-5 hover:text-white">Sixth</Link>
        
        
        
      </nav>
      {/* <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button> */}
    </div>
  </header>
    </nav>
  )
}
