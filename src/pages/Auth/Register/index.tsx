import { FC, useState } from 'react'
import { register, TUser } from '../../../services/userServices'
import { StyledCard, StyledContainer, StyledInput, StyledButton } from './styled'

const Register: FC = () => {
    const [user, setUser] = useState<TUser>({
        id: 0, name: '', email: '', password: ''
    })

    const onChangeInput = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const registerSubmit = async () => {
        await register(user)
        window.location.href = '/login'
    }
    return (
        <>
            <StyledContainer
                container maxWidth={'100%'} direction={'row'}
                justifyContent={'center'} alignItems={'center'}>
                <StyledCard
                    sx={{ width: { xl: '20%', lg: '25%', md: '30%', sm: '38%', xs: '70%' } }}>
                    <h2 style={{ color: 'rgb(9, 5, 45)' }}>
                        Üye Ol
                    </h2>
                    <StyledInput
                        type="text" name="name" required placeholder="İsim"
                        value={user.name} onChange={(e) => onChangeInput(e)} />
                    <StyledInput type="email" name="email" required placeholder="Email"
                        value={user.email} onChange={(e) => onChangeInput(e)} />
                    <StyledInput
                        type="password" name="password" required placeholder="Parola"
                        value={user.password} onChange={(e) => onChangeInput(e)} />
                    <StyledButton onClick={() => registerSubmit()}>
                        Üye Ol
                    </StyledButton>
                </StyledCard>
            </StyledContainer>
        </>
    )
}

export default Register