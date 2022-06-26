import { useEffect, useState } from 'react'
import { StyledCard, StyledContainer, StyledInput, StyledButton } from './styled'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        id: 0, name: '', email: '', password: ''
    })

    const onChangeInput = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const registerSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
            await axios.post('https://localhost:7163/api/Users', { ...user })

            localStorage.setItem('firstLogin', "true")

            window.location.href = "/";
        } catch (err: any) {
            console.log(err);
        }
    }
    return (
        <>
            <StyledContainer container maxWidth={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <StyledCard sx={{ width: { xl: '20%', lg: '25%', md: '30%', sm: '38%', xs: '70%' } }}>
                    <form onSubmit={registerSubmit}>
                        <h2 style={{ color: 'rgb(9, 5, 45)' }}>Üye Ol</h2>
                        <StyledInput type="text" name="name" required placeholder="İsim" value={user.name} onChange={onChangeInput} />
                        <StyledInput type="email" name="email" required placeholder="Email" value={user.email} onChange={onChangeInput} />
                        <StyledInput type="password" name="password" required placeholder="Parola" value={user.password} onChange={onChangeInput} />
                        <StyledButton type='submit'>Üye Ol</StyledButton>
                    </form>
                </StyledCard>
            </StyledContainer>
        </>
    )
}

export default Register