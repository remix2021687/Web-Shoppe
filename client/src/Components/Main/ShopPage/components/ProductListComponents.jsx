import { useState, useEffect, useContext, Suspense } from "react"
import { ProductBox } from "../../../Layout/ProductBox/ProductBox"
import { GetProductList, GetShopList } from "../../../../Axios/AxiosInit"
import { FilterContext } from "../ShopPage"
import { Spin, ConfigProvider } from 'antd'

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
            <Suspense fallback={
                <ConfigProvider theme={{
                    components: {
                        Spin: {
                            colorPrimary: 'black',
                            dotSize: 35
                        }
                    }
                }}>
                    <Spin />
                </ConfigProvider>
            }>

            {
                data ? 
                    Filter.SliderData ?

                    data
                    .filter((res) => res.name.toLowerCase().includes(Filter.searchData.toLowerCase()))
                    .filter((res) => res.price >= Filter.SliderData[0] && res.price <= Filter.SliderData[1])
                    .filter((res) => Filter.isSale == true && res.sale > 0 && res.stock > 0 || !Filter.isSale)
                    .filter((res) => Filter.isStock == true && res.stock > 0 || !Filter.isStock)
                    // .filter((res) => res.shop.map((data) => data.name) == Filter.ShopBy || !Filter.ShopBy)
                    .filter((res) => res.shop.name == Filter.ShopBy || !Filter.ShopBy)
                    .map((res, index) => 
                            <ProductBox
                                key={index + 1}
                                Name={res.name}
                                Price={res.price}
                                Sale={res.sale}
                                URL={res.preview_image}
                                Stock={res.stock}
                            />
                    )
                    :
                    null

                :
                <h1>Data not loading</h1>
            }
            </Suspense>
        </section>
    )
}