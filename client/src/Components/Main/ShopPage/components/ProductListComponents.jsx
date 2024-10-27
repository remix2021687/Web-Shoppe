import { useState, useEffect, useContext, Suspense } from "react"
import { ProductBox } from "../../../Layout/ProductBox/ProductBox"
import { GetProductList } from "../../../../Axios/AxiosInit"
import { FilterContext } from "../ShopPage"
import { Spin, ConfigProvider } from 'antd'

export const ProductListComponents = () => {
    const [data, setData] = useState([])
    const [Filter, setFilter] = useState([])
    const [CategoryFilter, setCategoryFilter] = useState([]) 
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


    useEffect(() => {
        if (Filter.Category) {
            Filter.Category.map((data) => {
                setCategoryFilter(data)
            })
        }
    }, [data, Filter.Category])

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
                    .filter((res) => (res.sale ? res.price_sale: res.price) >= Filter.SliderData[0] && (res.sale ? res.price_sale: res.price) <= Filter.SliderData[1])
                    .filter((res) => Filter.isSale == true && res.sale > 0 && res.stock > 0 || !Filter.isSale)
                    .filter((res) => Filter.isStock == true && res.stock > 0 || !Filter.isStock)
                    .filter((res) => res.shop.name == Filter.ShopBy || !Filter.ShopBy)
                    .filter((res) => res.category.map((data) => data.name).includes(CategoryFilter) || Filter.Category.length == 0)
                    .map((res, index) => 
                            <ProductBox
                                key={index + 1}
                                ProductId={res.id}
                                Name={res.name}
                                Price={res.price}
                                Price_Sale={res.price_sale}
                                Sale={res.sale}
                                URL={res.preview_img.url}
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