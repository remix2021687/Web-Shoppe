import { ProductBox } from "../ProductBox/ProductBox"

export const ProductBoxRander = ({data}) => {
    return (
        <>
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
        </>
    )
}