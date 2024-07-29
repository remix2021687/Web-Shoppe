import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductBox } from '../../../Layout/ProductBox/ProductBox'
import { GetProductList } from '../../../../Axios/AxiosInit';

export const Step_2 = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        GetProductList()
        .then((res) => {
            const response = res.data;

            setData(response)
        })
        .catch((err) => {
            console.warn(err);
        })
    }, [data])


    return (
        <section className="Step_2">
            <header className="Step_2_header">
                <h1>Shop The Latest</h1>
                <NavLink to={'/shop'}>View All</NavLink>
            </header>
            
            <section className="Step_2_content">
                {
                    data ?
                    data.map((data) => 
                        <ProductBox
                            Name={data.name}
                            Price={data.price}
                            Sale={data.sale}
                            Stock={data.stock}
                        />
                    )
                    :
                    null  
                }
            </section>
        </section>
    )
}