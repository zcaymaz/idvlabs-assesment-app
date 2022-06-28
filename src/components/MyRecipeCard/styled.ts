import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
    height: 45rem;
    margin: 1rem 1rem 1rem 1rem;
    border-radius: 10px;
    box-shadow: 0px 4px 11px 1px rgba(0,0,0,1);
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