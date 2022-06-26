import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
    height: 45rem;
    width: 80%;
    background-color: #e9e9e9; 
    margin-top: 1.5rem;
    border-radius: 10px;
`

const StyledText = styled(Typography)<{
    fontSize?: string
    minHeight?: string
}>`
    font-weight: bold !important;
    font-size:${({ fontSize }) => fontSize || '32px'} !important;
    line-height: 20px !important;
    text-align: center;
    color: #5c5f64 !important;
    font-family: Mulish !important;
    min-height:${({ minHeight }) => minHeight || '100px'};
`

export { StyledBox, StyledText }