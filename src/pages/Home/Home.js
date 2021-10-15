import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { motion, AnimatePresence } from "framer-motion"
import {
    HomeSection,
    InnerSection,
    LeftPane,
    H4,
    P,
    BottomNav,
    MidPane,
    HeaderContainer,
    MainHeader,
    SubHeader,
    IconImg,
    Button,
    RightPane
} from './home.style';
import Navbar from '../../components/Navbar/Navbar';
import phoneIcon from '../../assets/images/phoneIcon.png';

const Home = () => {
    const [loading, setLoading] = useState(false);

    /** Framer-motion header **/
    const headerVariant = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                delay: 1.3,
                when: "beforeChildren", // will finish, and then the children will be animated
                staggerChildren: .15
            }
        },
        loaded: {
            y: 0,
            scale: 1,
            opacity: 1,
        }
    }

    const listVariant = {
        hidden: {
            y: -100,
            scale: 2.5,
            opacity: 0
        },
        visible: {
            y: 0,
            scale: 1,
            opacity: 1
        }
    }

    /** Loading page with gsap **/
    window.onload = function () {
        gsap.fromTo('#midPane', 1.7, { y: '100vh', opacity: 0 }, { y: '0vh', opacity: 1, ease: 'Expo.easeInOut' }, .2)
        gsap.fromTo('#leftPane', 1.3, { y: '100vh' }, { y: '0vh', ease: 'Expo.easeInOut' }, .6)
        gsap.fromTo('#rightPane', 1.3, { y: '100vh' }, { y: '0vh', ease: 'Expo.easeInOut' }, .8)
        gsap.fromTo('#bottomNav', 3, { x: '-45vw' }, { x: '0', ease: 'Expo.easeInOut' }, .5)

        setLoading(true)
    }

    /** Connect to phone **/
    function myCall() { window.location.href = 'tel:050-1234567' }



    return (
        <HomeSection >
            <InnerSection id="innerSection">
                <LeftPane id="leftPane" >
                    <H4>pa:nik</H4>
                    <P>
                        Established in
                        Stockholm 1972
                        and still the place you
                        go to when you want
                        some extraordinary
                        food, drinks and an awesome
                        atmosphere.
                    </P>
                </LeftPane>

                <MidPane id="midPane">
                    <Navbar />
                    <AnimatePresence initial={true}>
                        <HeaderContainer as={motion.div}
                            loading={loading}
                            variants={headerVariant}
                            animate="visible"
                            initial="hidden"
                            exit="loaded"
                        >
                            {
                                ["P", "A", ":", "N", "I", "K"].map((box, index) => (
                                    <MainHeader as={motion.li}
                                        key={index}
                                        variants={listVariant}
                                    >
                                        {box}
                                    </MainHeader >
                                ))
                            }
                        </HeaderContainer>
                    </AnimatePresence>
                    <SubHeader>
                        restaurant & bar
                    </SubHeader>
                    <Button onClick={myCall}>Make a Reservation<IconImg src={phoneIcon} /></Button>
                </MidPane>

                <RightPane id="rightPane"></RightPane>

                <BottomNav id="bottomNav">
                    <li>RestaurantStreet 15</li>
                    <li>Phone: 555-123 45 67</li>
                    <li>panik@mail.com</li>
                </BottomNav>
            </InnerSection>
        </HomeSection>
    )
}

export default Home
