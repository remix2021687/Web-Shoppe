import { useContext } from "react"
import { DropmenuContext } from "../Header"
import { motion } from 'framer-motion'
import { MagnifyingGlass, UserPlus, SignIn } from '@phosphor-icons/react'
import { NavLink } from "react-router-dom"

export const Dropmenu = ({ setDropmenuClickState }) => {
    const isOpne = useContext(DropmenuContext);
    const durationAnimation = 0.6
    const IconSize = 25;

    const DropmenuAnimation = {
        hidden: {
            display: 'none',
            height: '0vh',

            transition: {
                duration: durationAnimation
            }
        },

        visible: {
            display: 'flex',
            height: '100vh',

            transition: {
                duration: durationAnimation
            }
        }
    }

    const ClickEvent = (event) => {
        setDropmenuClickState(event);
    } 

    return (
        <motion.section 
            className="Dropmenu"
            variants={DropmenuAnimation}
            initial='hidden'
            animate={isOpne ? 'visible': 'hidden'}
        >

        <label className="SearchInput" htmlFor="SearchInputID">
            <MagnifyingGlass className="SearchIcon" size={24} color="#707070"/>
            <input type="text" placeholder='Search' id="SearchInputID" />
        </label>

        <section className="Dropmenu_navigation">
            <NavLink to={'/'} onClick={ClickEvent}>Home</NavLink>
            <NavLink to={'/shop'} onClick={ClickEvent}>Shop</NavLink>
            <NavLink onClick={ClickEvent}>About</NavLink>
            <NavLink onClick={ClickEvent}>Blog</NavLink>
            <NavLink onClick={ClickEvent}>Help</NavLink>
            <NavLink onClick={ClickEvent}>Contact</NavLink>
        </section>

        <hr />

        <section className="Dropmenu_account">
            <NavLink>
                <UserPlus size={IconSize} color="black"/>
                Sing up
            </NavLink>

            <NavLink>
                <SignIn size={IconSize} color="black"/>
                Sing in
            </NavLink>
        </section>
        </motion.section>
    )
}