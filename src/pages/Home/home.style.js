import styled from 'styled-components';
import entrance from '../../assets/images/entrance.jpg';
import food1 from '../../assets/images/food-1.jpg';

export const HomeSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  //  background: ${props => props.theme.pitchBlack};
    background: radial-gradient(#131313, #000);
`;

export const InnerSection = styled.div`
    height: 100%;
    width: 100%;
    max-width: 160rem;
    display: grid;
    grid-template-columns: 13% 80% 7%;
    grid-template-rows: 100vh;
`;

// LEFT PANE
export const LeftPane = styled.div`
    grid-column: 1;
    background: ${props => props.theme.pitchBlack};
`;

export const H4 = styled.h4`
    text-transform: uppercase;
    font-family: 'violaceous';
    font-size: 4rem;
    letter-spacing: .6rem;
    color: ${props => props.theme.offWhite};
    margin-left: 3rem;
    margin-top: 2rem;
`;

export const P = styled.p`
    padding: 0 3rem;
    margin-top: 20vh;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    line-height: 1.3;
    font-family: 'josefinXlight';
    color: ${props => props.theme.offWhite};
`;

// MIDDLE PANE
export const MidPane = styled.div`
    position: relative;
    grid-column: 2;
    background-image: url(${entrance});
    background-repeat:no-repeat;
    background-position:center center;
    -webkit-background-size: cover;
    background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ::before {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
     //   background: radial-gradient(rgba(0,0,0,.5), rgba(0,0,0,.8));
     background: rgba(0,0,0,.6);
    }
`;

export const MainHeader = styled.h1`
    text-transform: uppercase;
    font-family: 'violaceous';
    font-size: clamp(3rem, 20vw, 25rem);
    letter-spacing: 2rem;
    color: ${props => props.theme.offWhite};
    z-index: 0;
    margin: -7vh 0 -3rem;
`;

export const SubHeader = styled.h2`
    color: ${props => props.theme.primaryColor};
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    letter-spacing: clamp(.1rem, 2vw, 2rem);
    text-transform: uppercase;
    font-family: 'berlin';
    margin-bottom: 4rem;
    z-index: 0;
`;

export const IconImg = styled.img`
    height: 2rem;
    margin-left: 1rem;
`;

export const Button = styled.span`
    color: ${props => props.theme.offWhite};
    background: rgba(0,0,0,.5);
    letter-spacing: .3rem;
    font-size: 1.6rem;
    border: .1rem solid ${props => props.theme.offWhite};
    border-radius: 5rem;
    display: flex;
    align-items: center;
    padding: .6rem 2.4rem;
    transition: .25s ease-out;
    z-index: 2;
    &:hover{        
        cursor: pointer;
        background: rgba(0,0,0,.6);
        box-shadow: none;
        transform: translateY(.1rem);
        ${IconImg}{
        transform: rotate(10deg);            
        }
    }    
`;

// RIGHT PANE
export const RightPane = styled.div`
    position: relative;
    grid-column: 3;
    background-image: url(${food1});
    background-repeat:no-repeat;
    background-position:center center;
    -webkit-background-size: cover;
    background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    ::before {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: radial-gradient(rgba(0, 10, 31, 0.1), rgba(0, 1, 19, .9));
    }
`;

export const BottomNav = styled.div`
    position: absolute;
    bottom: 0;
    height: 12rem;
    width: 70rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    background: ${props => props.theme.pitchBlack};
    z-index: 2;
    li{
        font-family: 'josefinThin';
        color: ${props => props.theme.offWhite};
        letter-spacing: .1rem;
        font-size: 1.2rem;
    }
`;

