import { Button, Grid, Link, Typography } from "@mui/material";
import styled from "styled-components";

const NavbarContainer = styled(Grid)`
    height: 7vh;
    background: linear-gradient(60deg, rgba(34,193,195,1) 12%, rgba(231,161,12,1) 83%);
`

const NavbarButton = styled(Button)`
    font-size: 15px;
    font-weight: 700;
    font-family: Mulish !important;
    color: white;
    text-decoration: none;
`

const NavbarLink = styled(Typography) <{
    color?: string
    textTransform?: string
}>`
    font-size: 15px;
    font-weight: 700;
    font-family: Mulish !important;
    color:${({ color }) => color || 'white'};
    text-decoration: none;
    text-transform:${({ textTransform }) => textTransform || null};
`

const MenuItemLink = styled(Link)`
    text-decoration: none !important;
    color: #67696f !important;
`

export { NavbarContainer, NavbarButton, NavbarLink, MenuItemLink }