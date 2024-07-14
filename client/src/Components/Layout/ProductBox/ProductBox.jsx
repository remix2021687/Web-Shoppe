import { NavLink } from 'react-router-dom'

export const ProductBox = ({Name, Price, Sale, URL, Stock}) => {

    return (
        <NavLink className='ProductBox'>
            <img src={URL ? URL: '/src/assets/img/img_2.png'} />
            
            {
                Stock == 0 ?
                    <span className='ProductBox_not_stock'>Sold out</span>
                    :
                    Sale == 0 ? 
                        null 
                        :
                         <span className='ProductBox_sale'>- %{Sale}</span>
            }

            <section className='ProductBox_content'>
                {
                    Stock == 0 ?
                    <>
                        <h4>$ {Price ? <del>{Price.toLocaleString()}</del>: '20,00'}</h4>
                        <h3>{Name ? <del>{Name}</del>: 'Lira Earrings'}</h3>
                    </>
                    :
                    <>
                        <h4>$ {Price ? Price.toLocaleString(): '20,00'}</h4>
                        <h3>{Name ? Name: 'Lira Earrings'}</h3>
                    </>
                }
            </section>
        </NavLink>
    )
}