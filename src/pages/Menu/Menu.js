import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import {
    Section,
    InnerSection,
    MenuContainer
} from './menu.style'

const Menu = () => {
    return (
        <Section>
            <InnerSection>
                <Navbar />
                <MenuContainer></MenuContainer>
            </InnerSection>
        </Section>
    )
}

export default Menu
