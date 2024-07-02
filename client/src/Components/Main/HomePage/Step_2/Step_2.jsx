import { NavLink } from 'react-router-dom'
import { ProductBox } from '../../../Layout/ProductBox/ProductBox'

export const Step_2 = () => {
    return (
        <section className="Step_2">
            <header className="Step_2_header">
                <h1>Shop The Latest</h1>
                <NavLink>View All</NavLink>
            </header>
            
            <section className="Step_2_content">
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
            </section>
        </section>
    )
}