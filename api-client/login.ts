import axios from "axios";

interface UserLogin{
    email: string,
    password: string,
}

export const handleLogin = async (request: UserLogin): Promise<UserLogin> => {
    console.log('request', request)
    return await axios.post('http://localhost:3001/login', request)
}