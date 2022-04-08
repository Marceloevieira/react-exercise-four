import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { NavLink } from "../components/NavLink";
import { Main } from "../components/Main";
import { Nav } from "../components/Nav";
import { NavItem } from "../components/NavItem";

export const Layout = () => (

    <div>
        <Header>
            <h1>Welcome to the app!</h1>
            <nav>
                <Nav>
                    <NavItem>
                        <NavLink to="home" color='black'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="movie" color='black'>Movie</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="playlist" color='black'>Favorites</NavLink>
                    </NavItem>
                </Nav>
            </nav>
        </Header>
        <Main>
            <Outlet />
        </Main>
    </div>
);