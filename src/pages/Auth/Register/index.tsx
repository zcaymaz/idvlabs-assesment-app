import React from 'react'
import { StyledCard, StyledContainer, StyledInput, StyledButton } from './styled'

const Register = () => {
    return (
        <>
            <StyledContainer container maxWidth={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <StyledCard sx={{ width: { xl: '20%', lg: '25%', md: '30%', sm: '38%', xs: '70%' } }}>
                    <form>
                        <h2 style={{ color: 'rgb(9, 5, 45)' }}>Üye Ol</h2>
                        <StyledInput type="email" name="email" required placeholder="Email" />
                        <StyledInput type="password" name="password" required placeholder="Parola" />
                        <StyledInput type="password" name="password" required placeholder="Tekrar Parola" />
                        <StyledButton type='submit'>Üye Ol</StyledButton>
                    </form>
                </StyledCard>
            </StyledContainer>
        </>
    )
}

export default Register