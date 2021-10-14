import { Nav, NavUL, NavLI } from "./navbar.style";
import { navbarData } from "./navbarData";

const Navbar = () => {
    return (
        <Nav>
            <NavUL>
                {navbarData.map((item, index) => {
                    return (
                        <NavLI
                            key={index}
                            to={item.path}>
                            {item.title}
                        </NavLI>
                    )
                })}
            </NavUL>
        </Nav>
    )
}

export default Navbar
