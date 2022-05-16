import { useEffect, useState } from "react";

function useAdmin(user) {
    const [admin, setAdmin] = useState(true)
    useEffect(() => {
        const email = user?.email
        fetch(`https://stark-bastion-02508.herokuapp.com/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')} `
            }

        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data?.admin)
            })



    }, [user])
    return [admin]
}

export default useAdmin