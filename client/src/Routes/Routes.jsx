import { Route, Routes, Navigate } from 'react-router-dom'
import { PageTemplate } from './Components/PageTemplate'

export const RoutesComponents = ({Components}) => {
    const {Page404, NonConntect, HomePage, ShopPage, ProductPage, ProfilePage, AuthPage, RootLayout} = Components

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={RootLayout} Content={HomePage} />}/>
            <Route path='/shop' element={<PageTemplate Layout={RootLayout} Content={ShopPage} />}/>
            <Route path='/shop/:id' element={<PageTemplate Layout={RootLayout} Content={ProductPage} />} />
            <Route path='/profile/:id' element={<PageTemplate Layout={RootLayout} Content={ProfilePage}/>} />
            <Route path='/auth' element={<PageTemplate Layout={RootLayout} Content={AuthPage}/>}/>
            <Route path='/nonconnect' element={<NonConntect />}/>
            <Route path='*' element={<Navigate to='/404'/>} />
            <Route path='/404' element={<Page404 />}/>
        </Routes>
    )
}