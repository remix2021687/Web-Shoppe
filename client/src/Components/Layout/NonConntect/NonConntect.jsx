import { useEffect } from "react"
import { CheckStatusServer } from "../../../Axios/AxiosInit"
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'

import { GlobeSimpleX } from '@phosphor-icons/react'
import { assets } from "../../../assets/assets"

export const NonConntect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'SHOPPE | No connect server'
    })
    
    useEffect(() => {
        CheckStatusServer()
        .then(() => {
            navigate('/')
        })
    }, [])

    return (
        <section className="NonConntect">
            <motion.section 
                className="NonConntect_icons"
                drag
                dragConstraints={{left: 0, right: 300}}
            >
                <GlobeSimpleX size={90} color="#A18A68"/>
                <img src={assets.Layout.RootLayout.Header.Logo} alt="logo"/>
            </motion.section>
            <section className="NonConntect_header">
                <h1>Technical <span>Problems</span></h1>
                <p>So sorry we have a <span>problem</span> on <span>service</span> <br /> wait and return <span>latter</span></p>
            </section>
        </section>
    )
}