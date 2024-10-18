import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductBox } from '../../../Layout/ProductBox/ProductBox'
import { GetProductListPagination } from '../../../../Axios/AxiosInit';

export const Step_2 = () => {
    const [data, setData] = useState([]);
    const [productCount, setProductCount] = useState(0);
    
    useEffect(() => {
        GetProductListPagination()
        .then((res) => {
            const response = res.data.results;
            
            setData(response)
        })
        .catch((err) => {
            console.warn(err);
        })
    }, [])

    useEffect(() => {
        const countProducts = data.filter((res) => res.stock > 0);
        
        setProductCount(countProducts.length);
    }, [productCount]);


    return (
        <section className="Step_2">
            <header className="Step_2_header">
                <h1>Shop The Latest</h1>
                <NavLink to={'/shop'}>View All</NavLink>
            </header>
            
            <section className="Step_2_content" style={{
                justifyContent: productCount < 4 ? 'center': 'space-between'
            }}>
                {
                    data ?
                    data.map((data, index) => 
                        <ProductBox
                            key={index + 1}
                            ProductId={data.id}
                            Name={data.name}
                            Price={data.price}
                            Price_Sale={data.price_sale}
                            Sale={data.sale}
                            Stock={data.stock}
                            URL={data.preview_img.url}
                        />
                    )
                    :
                    null  
                }
            </section>
        </section>
    )
}