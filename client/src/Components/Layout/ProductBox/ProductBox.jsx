import { NavLink } from 'react-router-dom'

export const ProductBox = ({Name, Price, URL}) => {

    return (
        <NavLink className='ProductBox'>
            <img src={URL ? URL: '/src/assets/img/img_2.png'} />

            <section className='ProductBox_content'>
                <h3>{Name ? Name: 'Lira Earrings'}</h3>
                <h4>$ {Price ? Price: '20,00'}</h4>
            </section>
        </NavLink>
    )
}