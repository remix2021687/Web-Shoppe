import { NavLink } from 'react-router-dom'
import { LinkedinLogo, FacebookLogo, InstagramLogo, TwitchLogo } from '@phosphor-icons/react'

export const Footer = () => {
    return (
        <footer className="Footer">
            <section className="Footer_left">
                <ul>
                    <li><NavLink>CONTACT</NavLink></li>
                    <li><NavLink>TERMS OF SERVICES</NavLink></li>
                    <li><NavLink>SHIPPING AND RETURNS</NavLink></li>
                </ul>

                <p><span>© 2021 Shelly.</span> Terms of use <span>and</span> privacy policy.</p>
            </section>
            <section className="Footer_right">
                <label></label>
                <ul>
                    <li>
                        <a href='/' target='_blank'>
                            <LinkedinLogo size={30} color='#979797'/>
                        </a>
                    </li>
                    <li>
                        <a href='/' target='_blank'>
                            <FacebookLogo size={30} color='#979797'/>
                        </a>
                    </li>
                    <li>
                        <a href='/' target='_blank'>
                            <InstagramLogo size={30} color='#979797'/>
                        </a>
                    </li>
                    <li>
                        <a href='/' target='_blank'>
                            <TwitchLogo size={30} color='#979797'/>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}