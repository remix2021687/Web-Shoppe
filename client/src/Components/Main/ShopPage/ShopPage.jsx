import { useEffect } from 'react'
import { FilterComponent } from './components/FilterComponent'
import { ProductListComponents } from './components/ProductListComponents'

export const ShopPage = () => {

    useEffect(() => {
        document.title = 'Shop'
    }, [])

    return (
        <section className="ShopPage">
            <h1>Shop The Latest</h1>
            
            <section className="ShopPage_content">
                <FilterComponent />
                <ProductListComponents />
            </section>
        </section>
    )
}