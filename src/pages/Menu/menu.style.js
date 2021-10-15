import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(#131313, #000);
`;

export const InnerSection = styled.div`
    overflow: hidden;
    position: relative;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    max-width: 160rem;
    border: 2px solid red;
    display: flex;
    justify-content: flex-end;
    z-index: 0;
`;

export const MenuContainer = styled.div`
    height: 100%;
    width: 60%;
    background: #fff0be;
    z-index: 2;
`;