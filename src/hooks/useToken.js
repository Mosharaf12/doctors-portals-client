import { useState, useEffect } from "react";
const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.access_Token) {
                    localStorage.setItem('accessToken', data.access_Token)
                    setToken(data.access_Token);
                }
            })
        }
    }, [email])
    return [token];


}

export default useToken;