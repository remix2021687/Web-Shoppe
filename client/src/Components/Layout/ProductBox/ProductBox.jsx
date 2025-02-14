import { NavLink } from 'react-router-dom'

export const ProductBox = ({ProductId, Name, Price, Price_Sale, Sale, URL, Stock}) => {
    
    return (
        <NavLink className='ProductBox' to={`/shop/${ProductId}`}>
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
                        {
                            Sale > 0 ?
                            <h4>$ {Price_Sale ? Price_Sale.toLocaleString(): '25,00'} <span>$ <del>{Price.toLocaleString()}</del></span></h4>
                            :
                            <h4>$ {Price ? Price.toLocaleString(): '25,00'}</h4>
                        }
                        <h3>{Name ? Name: 'Lira Earrings'}</h3>
                    </>
                }
            </section>
        </NavLink>
    )
}