import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export const Page404 = () => {
    useEffect(() => {
            document.title = 'SHOPPE | Page not Found'
        }, [])
    
    return (
        <section className="Page404">
            <section className='Page404_header'>
                <h2>404 ERROR</h2>
                <p>This page not found <br /> back to home and start again</p>
            </section>
            <NavLink to={'/'}>HomePage</NavLink>
        </section>
    )
}