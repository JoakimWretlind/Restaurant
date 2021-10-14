import React from 'react'
import {
    HomeSection,
    InnerSection,
    LeftPane,
    H4,
    P,
    BottomNav,
    MidPane,
    MainHeader,
    SubHeader,
    IconImg,
    Button,
    RightPane
} from './home.style';
import Navbar from '../../components/Navbar/Navbar';
import phoneIcon from '../../assets/images/phoneIcon.png';

const Home = () => {

    /** Connect to phone **/
    function myCall() { window.location.href = 'tel:050-1234567' }

    return (
        <HomeSection>
            <InnerSection>
                <LeftPane>
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
                    <BottomNav>
                        <li>RestaurantStreet 15</li>
                        <li>Phone: 555-123 45 67</li>
                        <li>panik@mail.com</li>
                    </BottomNav>
                </LeftPane>
                <MidPane>
                    <Navbar />
                    <MainHeader>
                        pa:nik
                    </MainHeader>
                    <SubHeader>
                        restaurant & bar
                    </SubHeader>
                    <Button onClick={myCall}>Make a Reservation<IconImg src={phoneIcon} /></Button>
                </MidPane>
                <RightPane></RightPane>
            </InnerSection>
        </HomeSection>
    )
}

export default Home
