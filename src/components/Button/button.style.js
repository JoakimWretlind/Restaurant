import styled from 'styled-components';

export const MainButton = styled.span`
    font-family: 'josefinReg';
    text-transform: capitalize;
    font-size: 1.4rem;
    letter-spacing: .3rem;
    padding: .6rem 1.8rem;
    color: ${props => props.theme.offWhite};
    border: .1rem solid ${props => props.theme.offWhite};
    border-radius: 2rem;
    background: rgba(0,0,0,.5);
    z-index: 1;
`;