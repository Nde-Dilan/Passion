import React from 'react'
import NavBar from './_components/NavBar';

const MarketingLayout = ({children}: {
    children: React.ReactNode;
}) => {
  return (
    <div className='h-flull dark:bg-[#1F1F1F]'>
        <main className="w-full h-full pt-40">
            <NavBar/>
            {children}
        </main>
    </div>
  )
}

export default MarketingLayout