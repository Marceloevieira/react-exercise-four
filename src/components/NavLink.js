import styledComponents from "styled-components";
import { Link } from "react-router-dom";
export const NavLink = styledComponents(Link)`
   
text-decoration: none;
color: ${props => props.color};
padding: 1rem;
&:hover {
    background-color: black;
    color: white;
   }
`;


