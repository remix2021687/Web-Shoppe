import { NavLink } from 'react-router-dom'

export const ProductBox = () => {

    return (
        <NavLink className='ProductBox'>
            <img src='/src/assets/img/img_2.png' />

            <section className='ProductBox_content'>
                <h3>Lira Earrings</h3>
                <h4>$ 20,00</h4>
            </section>
        </NavLink>
    )
}