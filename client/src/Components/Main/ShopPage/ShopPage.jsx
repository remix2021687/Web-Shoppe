import { useEffect, useState, createContext } from 'react'
import { FilterComponent } from './components/FilterComponent/FilterComponent'
import { ProductListComponents } from './components/ProductListComponents'
import { FilterComponentMobile } from './components/FilterComponent/components/FilterComponentMobile'

export const FilterContext = createContext(null)

export const ShopPage = () => {
    const [FilterData, setFilterData] = useState({})
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        document.title = 'Shop'
    }, [])

    const HandleFilterData = (event) => {
        setFilterData(event);
    }

    useEffect(() => {
        const handleWidth = () => {setScreenWidth(window.innerWidth)}

        window.addEventListener('resize', handleWidth);

        return () => window.removeEventListener('resize', handleWidth)
    }, [])


    return (
        <section className="ShopPage">
            <h1>Shop The Latest</h1>
            
            <section className="ShopPage_content">
                {
                    screenWidth <= 768 ?
                    <FilterComponentMobile Context={HandleFilterData}/>
                    :
                    <FilterComponent setParentToChild={HandleFilterData} />

                }

                <FilterContext.Provider value={FilterData}>
                    <ProductListComponents />
                </FilterContext.Provider>
            </section>
        </section>
    )
}