import { FC, useState } from 'react'
import { StyledCard, StyledContainer, StyledInput, StyledButton } from './styled'
import axios from 'axios'

const Login: FC = () => {
  const [user, setUser] = useState({
    name: '', email: '', password: ''
  })

  const onChangeInput = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const loginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const userData = await axios.post('https://localhost:7163/api/Users/api/Users/login', { ...user })

      localStorage.setItem('userName', userData.data.name)
      localStorage.setItem('userId', userData.data.id)

      window.location.href = "/";
    } catch (err: any) {
      alert('Girmiş olduğunuz Mail adresi veya Şifre hatalı lütfen tekrar deneyiniz.')
    }
  }
  return (
    <>
      <StyledContainer container maxWidth={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
        <StyledCard sx={{ width: { xl: '20%', lg: '25%', md: '30%', sm: '38%', xs: '70%' } }}>
          <h2 style={{ color: 'rgb(9, 5, 45)' }}>Giriş Yap</h2>
          <StyledInput type="email" name="email" required placeholder="Email" value={user.email} onChange={onChangeInput} />
          <StyledInput type="password" name="password" required placeholder="Parola" value={user.password} onChange={onChangeInput} />
          <StyledButton onClick={(e) => loginSubmit(e)}>Giriş Yap</StyledButton>
        </StyledCard>
      </StyledContainer>
    </>
  )
}

export default Login