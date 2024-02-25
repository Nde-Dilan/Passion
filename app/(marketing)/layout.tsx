import React from 'react'
import NavBar from './_components/NavBar';

const MarketingLayout = ({children}: {
    children: React.ReactNode;
}) => {
  return (
    <div className='h-flull'>
        <main className="h-full pt-40">
            <NavBar/>
            {children}
        </main>
    </div>
  )
}

export default MarketingLayout