import { useEffect } from "react"
import { CheckStatusServer } from "./Axios/AxiosInit"
import { useNavigate } from "react-router-dom"

export const App = ({Route, Components}) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        CheckStatusServer()
        
        .catch(() => {
            navigate('/nonconnect')
        })

    }, [])

    return (
        <Route Components={Components} />
    )
}