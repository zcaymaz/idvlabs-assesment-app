import axios from "axios";

export type TUser = {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const register = async (user:TUser) => {
    try {
        await axios.post('https://localhost:7163/api/Users', { ...user })
    } catch (err: any) {
        console.log(err);
    }
}

export const login = async (user:TUser) => {
    try {
      const userData = await axios.post('https://localhost:7163/api/Users/api/Users/login', { ...user })
      localStorage.setItem('userName', userData.data.name)
      localStorage.setItem('userId', userData.data.id)
      window.location.href = "/";
    } catch (err: any) {
      alert('Girmiş olduğunuz Mail adresi veya Şifre hatalı lütfen tekrar deneyiniz.')
    }
  }