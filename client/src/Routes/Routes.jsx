import { Route, Routes, Navigate } from 'react-router-dom'
import { PageTemplate } from './Components/PageTemplate'

export const RoutesComponents = ({Components}) => {
    const {Page404, HomePage, ShopPage, ProductPage, AuthPage, RootLayout} = Components

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={RootLayout} Content={HomePage} />}/>
            <Route path='/shop' element={<PageTemplate Layout={RootLayout} Content={ShopPage} />}/>
            <Route path='/shop/:id' element={<PageTemplate Layout={RootLayout} Content={ProductPage} />} />
            <Route path='/auth' element={<PageTemplate Layout={RootLayout} Content={AuthPage}/>}/>
            <Route path='*' element={<Navigate to='/404'/>} />
            <Route path='/404' element={<Page404 />}/>
        </Routes>
    )
}