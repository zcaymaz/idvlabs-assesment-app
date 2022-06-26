import { useEffect, useState } from 'react'
import { StyledCard, StyledContainer, StyledInput, StyledButton } from './styled'
import axios from 'axios'

function Login() {
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
      await axios.post('https://localhost:7163/api/Users/', { ...user })

      localStorage.setItem('firstLogin', "true")

      window.location.href = "/";
    } catch (err: any) {
      alert(err.response.data.msg)
    }
  }
  return (
    <>
      <StyledContainer container maxWidth={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
        <StyledCard sx={{ width: { xl: '20%', lg: '25%', md: '30%', sm: '38%', xs: '70%' } }}>
          <form onSubmit={loginSubmit}>
            <h2 style={{ color: 'rgb(9, 5, 45)' }}>Giriş Yap</h2>
            <StyledInput type="email" name="email" required placeholder="Email" value={user.email} onChange={onChangeInput} />
            <StyledInput type="password" name="password" required placeholder="Parola" value={user.password} onChange={onChangeInput} />
            <StyledButton type='submit'>Giriş Yap</StyledButton>
          </form>
        </StyledCard>
      </StyledContainer>
    </>
  )
}

export default Login