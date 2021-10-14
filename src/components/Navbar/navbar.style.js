import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    height: 8rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 36%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 7rem;
`;

export const NavLI = styled(Link)`
    font-family: 'josefinReg';
    font-size: 1.4rem;
    letter-spacing: .3rem;
    color: ${props => props.theme.offWhite};
`;