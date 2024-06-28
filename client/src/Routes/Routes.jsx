import { Route, Routes } from 'react-router-dom'
import { PageTemplate } from './Components/PageTemplate'

export const RoutesComponents = ({Components}) => {
    const {HomePage, RootLayout} = Components

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={RootLayout} Content={HomePage} />}/>
        </Routes>
    )
}