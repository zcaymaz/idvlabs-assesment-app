import { Button, Card, Grid, Input } from "@mui/material";
import styled from "styled-components";

const StyledContainer = styled(Grid)`
    height: 60vh;
`

const StyledCard = styled(Card)`
    text-align: center;
    background-color: #f5f5f5 !important;
    padding-bottom: 3rem;
    border-radius: 10px !important;
`

const StyledInput = styled(Input)`
    border: 1px solid rgb(9, 5, 45);
    border-radius: 5px;
    padding-left: 5px;
    margin-bottom: 5px;
    margin-top: 5px;
    color: rgb(9, 5, 45) !important;
    width: 60%
`

const StyledButton = styled(Button)`
    border: 1px solid rgb(9, 5, 45) !important;
    margin-top: 1rem !important;
    color: rgb(9, 5, 45) !important;
    width: 41%
`

export { StyledContainer, StyledCard, StyledInput, StyledButton } 