import { NavLink } from 'react-router-dom'

export const ProductBox = ({Name, Price, Sale, URL}) => {

    return (
        <NavLink className='ProductBox'>
            <img src={URL ? URL: '/src/assets/img/img_2.png'} />
            
            {
                Sale == 0 ?
                null
                :
                <span>- %{Sale}</span>
            }

            <section className='ProductBox_content'>
                <h3>{Name ? Name: 'Lira Earrings'}</h3>
                <h4>$ {Price ? Price.toLocaleString(): '20,00'}</h4>
            </section>
        </NavLink>
    )
}