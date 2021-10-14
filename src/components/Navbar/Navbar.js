import { Nav, NavUL, NavLI } from "./navbar.style";
import { navbarData } from "./navbarData";

const Navbar = () => {
    return (
        <Nav>
            <NavUL>
                {navbarData.map((item, index) => {
                    return (
                        <div key={index}>
                            <NavLI>{item.title}</NavLI>
                        </div>
                    )
                })}
            </NavUL>
        </Nav>
    )
}

export default Navbar
