import { Route, Routes } from 'react-router-dom'
import { PageTemplate } from './Components/PageTemplate'

export const RoutesComponents = ({Components}) => {
    const {HomePage, ShopPage, ProductPage, RootLayout} = Components

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={RootLayout} Content={HomePage} />}/>
            <Route path='/shop' element={<PageTemplate Layout={RootLayout} Content={ShopPage} />}/>
            <Route path='/shop/:id' element={<PageTemplate Layout={RootLayout} Content={ProductPage} />} />
        </Routes>
    )
}