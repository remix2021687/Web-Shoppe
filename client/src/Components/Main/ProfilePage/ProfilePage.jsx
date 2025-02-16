import { useState, useEffect} from "react"
import { Dashboard } from "./components/Dashboard"
import { Orders } from "./components/Orders"
import { Downloads } from "./components/Downloads"
import { Addresses } from "./components/Addresses/Addresses"

export const ProfilePage = () => {
    useEffect(() => {
        document.title = 'SHOPPE | NameUser'
    }, [])

    const [selectCategory, setSelectCategory] = useState('Dashboard')

    const NavigationBtnInfo = [
        {
            name: 'Dashboard',
        },
        {
            name: 'Orders',
        },
        {
            name: 'Downloads',
        },
        {
            name: 'Addresses',
        },
        {
            name: 'Account details',
        },
    ]

    const SelectHandler = (category) => {
        setSelectCategory(category)
    }

    return (
        <section className="ProfilePage">
            <h1>My Account</h1>
            <section className="ProfilePage_header">
                {
                    NavigationBtnInfo.map((info) => 
                        <button onClick={() => {SelectHandler(info.name)}} className={selectCategory == info.name ? 'active': ""}>{info.name}</button>
                    )
                }
                <button className="logout">Logout</button>
            </section>
            {(() => {
                switch (selectCategory) {
                    case 'Dashboard':
                        return <Dashboard />
                    
                    case "Orders":
                        return <Orders />

                    case "Downloads":
                        return <Downloads />

                    case "Addresses":
                        return <Addresses />

                    default: 
                        return <Dashboard />
                }
            })()}
        </section>
    )
}