import { NavLink } from 'react-router-dom'

export const Orders = () => {
    return (
        <section className="Orders">
            <section className="OrdersNoOne">
                <h4>No order has been made yet.</h4>
                <NavLink to={'/shop'}>BROWSE PRODUCT</NavLink>
            </section>
        </section>
    )
}