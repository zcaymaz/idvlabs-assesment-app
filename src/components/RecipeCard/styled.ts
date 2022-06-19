import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Box)`
    max-width: 21.875rem !important;
    border-radius: 5px !important;
    background: #ffffff;
    box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
`

const StyledText = styled(Typography) <{
    marginTop?: string
    fontSize?: string
    minHeight?: string
}>`
    font-weight: bold !important;
    font-size:${({ fontSize }) => fontSize || '18px'} !important;
    line-height: 20px !important;
    color: #5c5f64 !important;
    font-family: Mulish !important;
    margin-top:${({ marginTop }) => marginTop || null} !important;
    min-height:${({ minHeight }) => minHeight || null};
`

export { StyledCard, StyledText }