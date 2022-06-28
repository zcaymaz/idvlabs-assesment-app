import { Button, Card, Input, Typography } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Card)`
    box-shadow: 0px 4px 11px 1px rgba(0,0,0,1);
    min-height: 38rem;
    margin-top: 1rem;
    padding-bottom: 1rem;
`

const StyledText = styled(Typography) <{
    fontSize?: string
    Bgcolor?: string
    Border?: string
    BorderRadius?: string
    Height?: string
}>`
    text-align: center;
    font-size: ${({ fontSize }) => fontSize || '28px'} !important;
    font-family: Mulish;
    width: 100%;
    background-color: ${({ Bgcolor }) => Bgcolor || null} !important;
    border: ${({ Border }) => Border || null};
    border-radius: ${({ BorderRadius }) => BorderRadius || null};
    height: ${({ Height }) => Height || null};
`

const StyledInput = styled(Input)`
    width: 100%;
    border: 2px lightskyblue solid;
    padding-left: 5px !important;
    margin-top: 5px;
`
const StyledButton = styled(Button)`
    border: 2px lightskyblue solid !important;
    margin-top: 4px !important;
    border-radius: 3px !important;
    color: lightskyblue !important;
`
export { StyledCard, StyledText, StyledInput, StyledButton }