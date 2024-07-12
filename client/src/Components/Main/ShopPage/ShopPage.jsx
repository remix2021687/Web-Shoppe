import { useEffect, useState, createContext } from 'react'
import { FilterComponent } from './components/FilterComponent'
import { ProductListComponents } from './components/ProductListComponents'

export const FilterContext = createContext(null)

export const ShopPage = () => {
    const [FilterData, setFilterData] = useState({})

    useEffect(() => {
        document.title = 'Shop'
    }, [])

    const HandleFilterData = (event) => {
        setFilterData(event);
    }


    return (
        <section className="ShopPage">
            <h1>Shop The Latest</h1>
            
            <section className="ShopPage_content">
                <FilterComponent setParentToChild={HandleFilterData} />
                <FilterContext.Provider value={FilterData}>
                    <ProductListComponents />
                </FilterContext.Provider>
            </section>
        </section>
    )
}