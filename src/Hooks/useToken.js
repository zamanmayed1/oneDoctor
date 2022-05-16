import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.email
        const currentUser = { email: email }
        if (email) {
            fetch(`https://stark-bastion-02508.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)

            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data?.token
                    setToken(accessToken)
                    localStorage.setItem('accessToken', accessToken)
                })


        }

    }, [user])
    return [token]
}
export default useToken 