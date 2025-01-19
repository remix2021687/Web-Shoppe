import { useState, createContext } from "react"
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom"
import { assets } from "../../../../assets/assets"
import { List, X, ShoppingCart, User, Heart, MagnifyingGlass} from '@phosphor-icons/react'
import { Dropmenu } from "./components/Dropmenu"
import { HeaderUnderDrop } from './components/HeaderUnderDrop'

export const DropmenuContext = createContext(null);

export const Header = () => {
    const [isOpne, setIsOpen] = useState(false);
    const DropmenuIconSize = 40;
    const NavigationIconSize = 21;
    const durationAnimation = 0.6

    const OpenButton = {
        hidden: {
            y: -32,

            transition: {
                type: 'spring',
                duration: durationAnimation
            }
        },

        visible: {
            y: 0,

            transition: {
                type: 'spring',
                duration: durationAnimation
            }
        }
    }

    const CloseButton = {
        hidden: {
            y: 36,

            transition: {
                type: 'spring',
                duration: durationAnimation
            }
        },

        visible: {
            y: 0,

            transition: {
                type: 'spring',
                duration: durationAnimation
            }
        }
    }

    const onClickEvent = (event) => {
        if (event) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <>
            <nav className="Header"
                style={
                    isOpne ? 
                        {
                            position: 'sticky',
                            width: '100%',
                        } 
                        : 
                        {
                            position: 'static',
                            width: '89.8%',
                        }
                }    
            >
                <NavLink to={'/'}>
                    <img src={assets.Layout.RootLayout.Header.Logo} alt="logo"/>
                </NavLink>

                <section className="Header_navigation">
                    <section className="Header_navigation_left">
                        <NavLink to={'/shop'}>Shop</NavLink>
                        <NavLink>Blog</NavLink>
                        <NavLink>Our Story</NavLink>
                    </section>

                    <hr />

                    <section className="Header_navigation_right">
                            <MagnifyingGlass size={NavigationIconSize} />
                            
                            <Heart size={NavigationIconSize} className="Heart" />
                            
                            <ShoppingCart size={NavigationIconSize} />

                        <NavLink to={'/auth'}>
                            <User size={NavigationIconSize} color="black" />
                        </NavLink>
                    </section>
                </section>

                <section className="Dropmenu_control">
                    <motion.div 
                        className="Dropmenu_Open"
                        variants={OpenButton}
                        initial='visible'
                        animate={isOpne ? 'hidden': 'visible'}
                        onClick={() => {setIsOpen(true)}}
                    >
                        <List size={DropmenuIconSize}/>
                    </motion.div>

                    <motion.div 
                        className="Dropmenu_Close"
                        variants={CloseButton}
                        initial='hidden'
                        animate={isOpne ? 'visible': 'hidden'}
                        onClick={() => {setIsOpen(false)}}
                    >
                        <X size={DropmenuIconSize}/>
                    </motion.div>
                </section>
                    {/* <HeaderUnderDrop /> */}
            </nav>

            <DropmenuContext.Provider value={isOpne}>
                <Dropmenu setDropmenuClickState={onClickEvent} />
            </DropmenuContext.Provider>
        </>
    )
}