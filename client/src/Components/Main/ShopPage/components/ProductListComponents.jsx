import { useState, useEffect, useContext } from "react"
import { ProductBox } from "../../../Layout/ProductBox/ProductBox"
import { GetProductList } from "../../../../Axios/AxiosInit"
import { FilterContext } from "../ShopPage"

export const ProductListComponents = () => {
    const [data, setData] = useState([])
    const [Filter, setFilter] = useState([])
    const FilterData = useContext(FilterContext)


    useEffect(() => {
        GetProductList()

        .then((res) => {
            setData(res.data)
        })

        .catch((err) => {
            console.warn(err);
            setData(undefined);
        })

        setFilter(FilterData)
    }, [FilterData])

    return (
        <section className="ProductListComponents">
            {
                Filter.SliderData ?

                data.filter((res) => res.name.toLowerCase().includes(Filter.searchData.toLowerCase()))
                .filter((res) => res.price >= Filter.SliderData[0] && res.price <= Filter.SliderData[1])
                .filter((res) => Filter.isSale == true && res.sale > 0 || !Filter.isSale)
                .map((res, index) => 
                    <ProductBox
                            key={index + 1}
                            Name={res.name}
                            Price={res.price}
                            Sale={res.sale}
                            URL={res.preview_image}
                        />
                )

                :
                null
            }
        </section>
    )
}