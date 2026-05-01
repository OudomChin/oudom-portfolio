import React from 'react'

export const Nav = () => {
    return (
        <section className='container mx-auto'>
            <nav className='flex justify-between p-5'>
                <a href='/' className='flex items-center space-x-2 font-bold text-2xl'>
                    <img src="../public/logo.png" alt="logo" width={30} height={30} />
                    <p>OUDOM</p>
                </a>
            </nav>
        </section>
    )
}
