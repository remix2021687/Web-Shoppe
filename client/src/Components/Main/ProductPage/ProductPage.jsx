import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ProductPageViewer } from "./components/ProductPageViewer";
import { ProductPageInfo } from "./components/ProductPageInfo";
import { ProductPageDescription } from "./components/ProductPageDescription/ProductPageDescription";
import { GetProductInfo } from "../../../Axios/AxiosInit";

export const ProductPage = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    
    useEffect(() => {
        document.title = 'SHOPPE | Name'
    }, [])

    useEffect(() => {
        GetProductInfo(id)
        .then((res) => {
            const response = res.data;

            setData(response)
        })

        .catch((err) => {
            console.warn(err);
        })
    }, [])

    console.log(data)

    return (
        <section className="ProductPage">
            <section className="ProductPage_head">
                <ProductPageViewer />
                <ProductPageInfo />
            </section>

            <ProductPageDescription />
        </section>
    )
}