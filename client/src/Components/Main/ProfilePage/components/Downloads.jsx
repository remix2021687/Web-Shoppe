import { NavLink } from 'react-router-dom'

export const Downloads = () => {
    return (
        <section className='Downloads'>
            <section className="OrdersNoOne">
                <h4>No downloads available yet.</h4>
                <NavLink to={'/shop'}>BROWSE PRODUCT</NavLink>
            </section>
        </section>
    )
}