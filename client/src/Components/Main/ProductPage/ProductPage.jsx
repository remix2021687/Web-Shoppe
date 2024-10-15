import { useEffect, useState, createContext } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { ProductPageViewer } from "./components/ProductPageViewer";
import { ProductPageInfo } from "./components/ProductPageInfo";
import { ProductPageDescription } from "./components/ProductPageDescription/ProductPageDescription";
import { GetProductInfo } from "../../../Axios/AxiosInit";

export const ProductPageViewerContext = createContext(null);
export const ProductPageInfoContext = createContext(null);
export const ProductPageDescriptionContext = createContext(null)

export const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    
    useEffect(() => {
        document.title = `SHOPPE | ${data.name}`
    }, [data.name])

    useEffect(() => {
        GetProductInfo(id)
        .then((res) => {
            const response = res.data;

            setData(response)
        })

        .catch((err) => {
            navigate('/404')
            console.warn(err);
        })
    }, [])

    return (
        <section className="ProductPage">
            <section className="ProductPage_head">
                <ProductPageViewerContext.Provider value={data.img_list}>
                    <ProductPageViewer />
                </ProductPageViewerContext.Provider>

                <ProductPageInfoContext.Provider 
                    value={
                        [
                            {
                                name: data.name,
                                price: data.price,
                                product_rate : data.product_rate,
                                description_product: data.description_product,
                                sale: data.sale,
                                stock: data.stock,
                                shop: data.shop,
                                material_info: data.product_info,
                                category: data.category,
                                reviews: data.reviews
                            }
                        ]
                    }>
                    <ProductPageInfo />
                </ProductPageInfoContext.Provider>
            </section>

            <ProductPageDescriptionContext.Provider
                value={{
                    company_description: data.shop ? data.shop.company_description: null,
                    product_info: data.product_info ? data.product_info: null,
                    reviews: data.reviews ? data.reviews: null 
                }}
            >
                <ProductPageDescription />
            </ProductPageDescriptionContext.Provider>

            <section className="ProductPage_recommendation">

            </section>

        </section>
    )
}