import { Box, Button, Card, Input, Modal, Typography } from "@mui/material";
import styled from "styled-components";

const StyledModal = styled(Modal)`
    padding-top: 2%;
    padding-bottom: 2%;
    overflow-x: hidden;
`

const StyledBox = styled(Box)`
    min-width: 250px;
    min-height: 383px;
    background-color: white;
    border-radius: 20px;
    border: 2px solid #000;
    box-shadow: 24;
    p: 4;
`

const StyledTypography = styled(Typography)`
    text-align: center;
    font-size: 20px !important;
    font-family: Mulish !important;
`

const StyledCard = styled(Card)`
    max-width: 360px;
    min-height: 200px;
    padding: 10px;
    box-shadow: 0 0 15px #ddd;
    margin: 10px 10px;
    position: relative;
    place-items: center !important;
    text-align: center !important;
`

const StyledInput = styled(Input)`
    border: 1px #40b072 solid;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    padding-left: 5px !important;
`

const StyledButton = styled(Button)<{
    border?: string;
    styleColor?: string;
    marginLeft?: string;
}>`
    margin-top: 5px !important;
    margin-left: ${({ marginLeft }) => marginLeft || '0'}px !important;
    border: ${({ border }) => border || '#40b072 2px solid'} !important;
    width: 120px;
    color: ${({ styleColor }) => styleColor || '#40b072'} !important;
    font-family: Mulish !important;
`

export { StyledModal, StyledBox, StyledTypography, StyledCard, StyledInput, StyledButton }