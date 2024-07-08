import { Route, Routes } from 'react-router-dom'
import { PageTemplate } from './Components/PageTemplate'

export const RoutesComponents = ({Components}) => {
    const {HomePage, ShopPage, RootLayout} = Components

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={RootLayout} Content={HomePage} />}/>
            <Route path='/shop' element={<PageTemplate Layout={RootLayout} Content={ShopPage} />}/>
        </Routes>
    )
}