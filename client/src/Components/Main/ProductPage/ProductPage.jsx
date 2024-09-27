import { useEffect } from "react"
import { ProductPageViewer } from "./components/ProductPageViewer";
import { ProductPageInfo } from "./components/ProductPageInfo";

export const ProductPage = () => {
    
    useEffect(() => {
        document.title = 'SHOPPE | Name'
    }, [])


    return (
        <section className="ProductPage">
            <section className="ProductPage_head">
                <ProductPageViewer />
                <ProductPageInfo />
            </section>
            <section className="ProductPage_description">
                
            </section>
        </section>
    )
}